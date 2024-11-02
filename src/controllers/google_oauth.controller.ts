import dotenv from "dotenv";
import express from "express";
import client from "../config/google_oauth";
import User from "../db/models/User";
import { accessToken, refreshToken } from "../config/token";
import redisClient from "../config/redis_client";

dotenv.config();

export const GoogleLogin = (req: express.Request, res: express.Response) => {
  const authURL = client.generateAuthUrl({
    access_type: "offline",
    scope: ["profile", "email"],
  });
  res.redirect(authURL);
};

export const GoogleCallback = async (
  req: express.Request,
  res: express.Response
) => {
  const code = req.query.code as string;

  if (!code) {
    res
      .status(400)
      .json({ status: 400, message: "Authentication code not found" });
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

    if (created) {
      console.log(`New user created: ${user.email}`);
    } else {
      console.log(`User found: ${user.email}`);
    }

    // Generate access and refresh tokens
    const token = accessToken(user.id, user.email);
    const refresh_token = refreshToken(user.id, user.email);
    const uid = user.id.toString();

    // Save refresh token to Redis
    await redisClient.set(uid, refresh_token, { EX: 3 * 24 * 60 * 60 });

    res.status(200).json({
      status: 200,
      message: "User authenticated successfully",
      data: {
        id: user.id,
        email: user.email,
        token,
        refresh_token,
      },
    });
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
