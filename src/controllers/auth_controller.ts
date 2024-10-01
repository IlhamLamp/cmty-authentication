import express from "express";
import { comparePassword, hashPassword } from "../helpers/password_hash";
import User from "../db/models/User";
import { generateOTP } from "../helpers/otp";
import { sendOTPEmail } from "../config/email";
import RegisterValidation from "../validation/register";

export const RegisterAccount = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const { first_name, last_name, email, password, confirmation_password } = req.body;
        // validate
        const validation = await RegisterValidation(req.body);
        if (validation) {
            res.status(400).json({ message: "validation errors", error: validation, status: 400 });
            return;
        }
        // otp 15 minutes
        const otp = generateOTP();
        const otp_expiration = new Date(Date.now() + 15 * 60 * 1000);
        await sendOTPEmail(email, otp, first_name, last_name);
        // hash
        const hashedPassword = await hashPassword(password);
        const newUser = await User.create({ 
            first_name, last_name, email, password: hashedPassword, otp_code: otp, otp_expiration
        });
        // send
        res.status(201).json({ message: "User registered successfully. Please verify OTP sent to your email. ", user: newUser, status: 201 });
        return;
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error, status: 500 });
        return;
    }

};

export const VerifyOTP = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const { email, otp } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user) {
            res.status(400).json({ message: "User not found", status: 400 });
            return;
        }

        if (user.otp_code !== otp) {
            res.status(400).json({ message: "Invalid OTP", status: 400 });
        }

        user.otp_code = '';
        user.otp_expiration = '';
        user.is_verified = true;
        await user.save();
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error, status: 500 });
        return;
    }
}

export const login = async (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;

  // Cek apakah user ada
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  // Cek password
  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  // Simpan session atau JWT (opsional)
  return res.status(200).json({ message: "Login successful", user });
};
