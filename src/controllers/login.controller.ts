import express from 'express';
import User from '../db/models/User';
import { comparePassword } from '../helpers/password_hash';
import { accessToken, refreshToken } from '../config/token';
import redisClient from '../config/redis_client';

export const Login = async (req: express.Request, res: express.Response) => {
    try {
        const { email, password } = req.body;
    
        const user = await User.findOne({ where: { email } });
        if (!user) {
            res.status(400).json({ message: "Invalid email or password", status: 400 });
            return;
        }
        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) {
            res.status(400).json({ message: "Invalid email or password", status: 400 });
            return;
        }

        const token = accessToken(user.id, user.email);
        const refresh_token = refreshToken(user.id, user.email);
        const uid = user.id.toString();

        await redisClient.set(uid, refresh_token, { EX: 3 * 24 * 60 * 60 });

        res.status(200).json({ message: "Login successfully", data: { id: user.id, email: user.email, token, refresh_token }, status: 200});
        return;
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error, status: 500 });
        return;
    }
}