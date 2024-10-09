import express from 'express';
import redisClient from '../config/redis_client';
import jwt from 'jsonwebtoken';

export const Logout = async(req: express.Request, res: express.Response) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        res.status(401).json({ message: 'Missing authorization headr', status: 401 })
        return;
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        res.status(401).json({ message: 'Invalid token', status: 401 });
        return;
    }
    try {
        const accessToken = process.env.JWT_ACCESS_SECRET;
        if (!accessToken) {
            throw new Error('JWT_ACCESS_SECRET is not defined');
        }
        const decodedToken: any = jwt.verify(token, accessToken);
        const uid = String(decodedToken.id);

        const userExists = await redisClient.exists(uid);
        if (!userExists) {
            res.status(404).json({ message: 'User not found in Redis.', status: 404 });
            return;
        }
        await redisClient.del(uid);
        res.status(200).json({ message: 'Logged out successfully', status: 200});
        return;
    } catch (error) {
        res.status(401).json({ message: 'Invalid token', status: 401 });
        return;
    }
}