import User from "../db/models/User";

interface IResponseOTPValidation {
    user: User | null; 
    error: string | null
}

export const OTPValidation = async (data: { email: string; otp_code: string;}): Promise<IResponseOTPValidation> => {
    const { email, otp_code } = data;

    const user = await User.findOne({ where: { email } });
    if (!user) {
        return { user: null, error: "User not found."};
    }

    if (user.is_verified) {
        return { user: null, error: "Email already verified."};
    }


    if (user.otp_code !== otp_code) {
        return { user: null, error: "Invalid OTP."};
    }

    if (new Date() > new Date(user.otp_expiration)) {
        return { user: null, error: "OTP is expired."};
    }

    return { user, error: null};
}

export const OTPResendValidation = async (email: string): Promise<IResponseOTPValidation> => {
    
    const user = await User.findOne({ where: { email } });
    if (!user) {
        return { user: null, error: "User not found."};
    }

    if (user.is_verified) {
        return { user: null, error: "Email already verified."};
    }
    return { user, error: null};
}