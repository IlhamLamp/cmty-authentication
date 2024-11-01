import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { EmailBody } from "../helpers/email_body";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

export const sendOTPEmail = async (to: string, otp: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: to,
    subject: "OTP Code Registration",
    html: EmailBody(otp),
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log("OTP sent to:", to);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
