export const EmailBody = (otp: string) => {
  const body = `<div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <h2 style="text-align: center; color: #424874;">COMMUNTITY</h2>
                <p style="font-size: 16px;">Hello there,</p>
                <p style="font-size: 16px;">To complete your registration, please enter the following One-Time Password (OTP) code:</p>
                <div style="text-align: center; margin: 30px 0;">
                    <span style="font-size: 24px; font-weight: bold; color: #333; background-color: #f9f9f9; padding: 15px 30px; border-radius: 8px; display: inline-block;">${otp}</span>
                </div>
                <div>
                    <p style="font-size: 16px;">This OTP is valid for 15 minutes. Please do not share this code with anyone.</p>
                    <p style="font-size: 16px;">If you did not request this, you can safely ignore this email.</p>
                    <p style="font-size: 16px;">Thank you,<br/>Communtity Team</p>
                </div>
            </div>
            <div style="text-align: center; font-size: 12px; color: #999; padding-top: 20px;">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>
        </div>`;
  return body;
};
