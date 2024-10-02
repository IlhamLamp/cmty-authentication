import express from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import redisClient from '../config/redis_client';
import { accessToken } from '../config/token';

const verifyToken = (token: string, secret: string): Promise<JwtPayload | null> => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, decoded) => {
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
        res.status(403).json({ message: "Refresh token required" });
        return; 
    }

    const refresh_secret = process.env.JWT_REFRESH_SECRET;
    if (!refresh_secret) {
        throw new Error('JWT_ACCESS_SECRET is not defined');
    }

    try {
        const user = await verifyToken(refresh_token, refresh_secret);
        console.log("Decoded user from token:", user);

        if (!user) {
            res.status(403).json({ message: "Invalid refresh token" });
            return; 
        }

        const storedRefreshToken = await redisClient.get(user.id.toString());
        console.log("Stored Refresh Token in Redis:", storedRefreshToken);
        if (storedRefreshToken !== refresh_token) {
            console.log("Mismatched refresh token");
            res.status(403).json({ message: "Invalid refresh token" });
            return; 
        }

        const token = accessToken(user.id, user.email);

        res.status(200).json({ token });
        return; 
    } catch (error) {
        res.status(403).json({ message: "Invalid refresh token" });
        return; 
    }
};
