import express from "express";
import RegisterValidation from "../validation/register";
import { generateOTP } from "../helpers/otp";
import { sendOTPEmail } from "../config/email";
import { hashPassword } from "../helpers/password_hash";
import User from "../db/models/User";

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