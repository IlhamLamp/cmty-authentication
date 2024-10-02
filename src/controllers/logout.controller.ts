import express from 'express';
import redisClient from '../config/redis_client';

export const Logout = async(req: express.Request, res: express.Response) => {
    const { id } = req.body;
    if (!id) {
        res.status(400).json({ message: 'Invalid ID.', status: 400})
        return;
    }
    const uid = id.toString();

    const userExists = await redisClient.exists(uid);
    if (!userExists) {
        res.status(404).json({ message: 'User not found in Redis.', status: 404 });
        return;
    }
    await redisClient.del(uid);
    res.status(200).json({ message: 'Logged out successfully', status: 200})
}