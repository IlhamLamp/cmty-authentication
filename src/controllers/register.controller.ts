import express from "express";
import RegisterValidation from "../validation/register";
import { generateOTP } from "../helpers/otp";
import { sendOTPEmail } from "../config/email";
import { hashPassword } from "../helpers/password_hash";
import User from "../db/models/User";
import { decodeEmail } from "../helpers/encrypt";
import { redisClient } from "../config/redis_client";
import { TOAuthCallbackResponse } from "../types/user";

export const RegisterAccount = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const { email, password, confirmation_password } = req.body;

    const validation = await RegisterValidation(req.body);
    if (validation) {
      res
        .status(400)
        .json({ message: validation, error: "validation errors", status: 400 });
      return;
    }

    const otp = await generateOTP();
    const otp_expiration = new Date(Date.now() + 15 * 60 * 1000);
    await sendOTPEmail(email, otp);

    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({
      email,
      password: hashedPassword,
      otp_code: otp,
      otp_expiration,
    });
    const user = newUser.toJSON();

    res.status(201).json({
      message:
        "User registered successfully. Please verify OTP sent to your email. ",
      user: { ...user, otp_code: "" },
      status: 201,
    });
    return;
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error, status: 500 });
    return;
  }
};

export const RedirectSetAccountPassword = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  const { callback } = req.query;
  const { password, confirmation_password } = req.body;
  if (!callback) {
    res
      .status(400)
      .json({ status: 400, message: "Callback parameter is missing!" });
    return;
  }
  if (password !== confirmation_password) {
    res.status(400).json({
      status: 400,
      message: "Password and confirmation password must be same",
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
    const hashedPassword = await hashPassword(password);

    await User.upsert(
      {
        id: data.id,
        email: data.email,
        password: hashedPassword,
        is_verified: true,
      },
      {
        returning: true,
        conflictFields: ["email"],
      }
    );

    res.status(201).json({
      status: 201,
      message: "Successfully update user password",
      data,
    });
    return;
  } catch (error) {
    console.error("Error during decoding:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to update user password",
    });
    return;
  }
};
