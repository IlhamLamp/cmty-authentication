import express from "express";
import { OTPResendValidation, OTPValidation } from "../validation/otp";
import { generateOTP } from "../helpers/otp";
import { sendOTPEmail } from "../config/email";

export const VerifyOTP = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const { email, otp_code } = req.body;
        // validate
        const validation = await OTPValidation(req.body);
        if (validation.error !== null) {
            res.status(400).json({ message: "Validation errors", error: validation.error, status: 400 });
            return;
        }
        // update user
        const user = validation.user!;
        user.otp_code = '';
        user.is_verified = true;
        await user.save();
        // send
        res.status(201).json({ message: "User verify OTP successfully.", user: validation.user, status: 201 });
        return;
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error, status: 500 });
        return;
    }
}

export const ResendOTP = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const { email } = req.body;
        // validation
        const validation = await OTPResendValidation(email);
        if (validation.error !== null) {
            res.status(400).json({ message: "Validation errors", error: validation.error, status: 400 });
            return;
        }
        // otp 15 minutes
        const otp = generateOTP();
        const otp_exp = new Date(Date.now() + 15 * 60 * 1000);
        // update user
        const user = validation.user!;
        user.otp_code = otp;
        user.otp_expiration = otp_exp;
        await user.save();
        // resend otp
        await sendOTPEmail(email, otp);
        res.status(200).json({ message: "OTP resent successfully. Please check your email.", user, status: 200 });
        return;  
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error, status: 500 });
        return;
    }
}