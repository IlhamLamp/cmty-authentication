import express from "express";
import { ensureConnected } from "../config/redis_client";

const ensureRedisConnection = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    await ensureConnected();
    next();
  } catch (error) {
    console.error("Failed to connect to Redis:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default ensureRedisConnection;
