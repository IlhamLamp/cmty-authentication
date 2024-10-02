import express from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import redisClient from '../config/redis_client';
import { accessToken } from '../config/token';

const verifyToken = (refresh_token: string, refresh_secret: string): Promise<JwtPayload | null> => {
    return new Promise((resolve, reject) => {
        jwt.verify(refresh_token, refresh_secret, (err, decoded) => {
            if (err) {
                return reject(err);
            }
            resolve(decoded as JwtPayload);
        });
    });
};

export const RefreshAccessToken = async (req: express.Request, res: express.Response) => {
    const { refresh_token } = req.body;

    if (!refresh_token) {
        res.status(403).json({ message: "Refresh token required", status: 403 });
        return; 
    }

    const refresh_secret = process.env.JWT_REFRESH_SECRET;
    if (!refresh_secret) {
        throw new Error('JWT_ACCESS_SECRET is not defined');
    }

    try {
        const user = await verifyToken(refresh_token, refresh_secret);

        if (!user) {
            res.status(403).json({ message: "Invalid refresh token", status: 403 });
            return; 
        }
        const uid = user.id.toString();
        const storedRefreshToken = await redisClient.get(uid);
        
        if (storedRefreshToken !== refresh_token) {
            res.status(403).json({ message: "Invalid refresh token", status: 403 });
            return; 
        }

        const token = accessToken(user.id, user.email);

        res.status(200).json({ message: "Refresh token successfully", token, status: 200});
        return; 
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error, status: 500 });
        return;
    }
};
