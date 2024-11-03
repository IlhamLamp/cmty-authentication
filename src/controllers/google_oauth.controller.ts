import dotenv from "dotenv";
import express from "express";
import client from "../config/google_oauth";
import User from "../db/models/User";
import { accessToken, refreshToken } from "../config/token";
import redisClient from "../config/redis_client";
import { decodeEmail, encodeEmail } from "../helpers/encrypt";
import { TOAuthCallbackResponse } from "../types/user";

dotenv.config();

export const GoogleLogin = (req: express.Request, res: express.Response) => {
  const authURL = client.generateAuthUrl({
    access_type: "offline",
    scope: [
      "profile",
      "email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ],
  });
  res.redirect(authURL);
};

export const GoogleCallback = async (
  req: express.Request,
  res: express.Response
) => {
  const code = req.query.code as string;

  if (!code) {
    res.redirect("http://localhost:3000/login");
    return;
  }

  try {
    const { tokens } = await client.getToken(code);
    client.setCredentials(tokens);

    const ticket = await client.verifyIdToken({
      idToken: tokens.id_token!,
      audience: process.env.GOOGLE_CLIENT_ID as string,
    });
    const payload = ticket.getPayload();

    if (!payload) {
      res
        .status(400)
        .json({ status: 400, message: "Failed to retrieve user data" });
      return;
    }

    const [user, created] = await User.findOrCreate({
      where: {
        email: payload?.email,
      },
      defaults: {
        email: payload?.email,
        google_id: payload?.sub,
        is_verified: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    const token = accessToken(user.id, user.email);
    const refresh_token = refreshToken(user.id, user.email);

    const data = {
      id: user.id,
      email: user.email,
      first_name: payload.given_name,
      last_name: payload.family_name,
      full_name: payload.name,
      profile_picture: payload.picture,
      token,
      refresh_token,
      created,
    };

    const encodedEmail = encodeEmail(user.email);
    const redisEmailCallback: string = payload.email?.toString() ?? user.email;

    await redisClient.set(redisEmailCallback, JSON.stringify(data), {
      EX: 1 * 24 * 60 * 60,
    });

    res.redirect(
      `http://localhost:3000/auth/login/success?callback=${encodedEmail}`
    );
    return;
  } catch (error) {
    console.error("Error during Google authentication:", error);
    res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
    return;
  }
};

export const GetOauthLoginSuccessData = async (
  req: express.Request,
  res: express.Response
) => {
  const { callback } = req.query;
  if (!callback) {
    res.status(400).json({
      status: 400,
      message: "Callback parameter is missing",
    });
    return;
  }

  const decodedCallback = decodeEmail(callback as string);

  try {
    const userOauthLoginData = await redisClient.get(decodedCallback);

    if (!userOauthLoginData) {
      res.status(404).json({
        status: 404,
        message: "No user data found for the given callback",
      });
      return;
    }

    const data: TOAuthCallbackResponse = JSON.parse(userOauthLoginData);
    await redisClient.set(data.id.toString(), data.refresh_token, {
      EX: 3 * 24 * 60 * 60,
    });

    res.status(200).json({
      status: 200,
      message: "User data retrieved successfully",
      data,
    });
    return;
  } catch (error) {
    console.error("Error during decoding:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to retrieve user data",
    });
    return;
  } finally {
    await redisClient.del(decodedCallback);
  }
};
