import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

export const accessToken = (user_id: number, user_email: string) => {
    const secret = process.env.JWT_ACCESS_SECRET;
    if (!secret) {
        throw new Error('JWT_ACCESS_SECRET is not defined');
    }

    const token = jwt.sign(
        { id: user_id, email: user_email },
        secret,
        { expiresIn: '15m'}
    )
    return token;
}

export const refreshToken = (user_id: number, user_email: string) => {
    const secret = process.env.JWT_REFRESH_SECRET;
    if (!secret) {
        throw new Error('JWT_REFRESH_SECRET is not defined');
    }

    const token = jwt.sign(
        { id: user_id, email: user_email },
        secret,
        { expiresIn: '3d'}
    )
    return token;
}