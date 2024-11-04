import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

const redisClient = createClient({
  url: process.env.REDIS_URL,
});

redisClient.on("error", (err) => console.error("Redis Client Error", err));

const IDLE_TIMEOUT = 300000;

let idleTimer: string | number | NodeJS.Timeout | undefined;

const resetIdleTimer = () => {
  if (idleTimer) clearTimeout(idleTimer);
  idleTimer = setTimeout(async () => {
    try {
      await redisClient.disconnect();
      console.log("Redis connection closed due to inactivity");
    } catch (err) {
      console.error("Error closing Redis connection", err);
    }
  }, IDLE_TIMEOUT);
};

(async () => {
  await redisClient.connect();
  console.log("Connected to Redis");

  redisClient.on("ready", resetIdleTimer);
  redisClient.on("connect", resetIdleTimer);
  redisClient.on("connecting", resetIdleTimer);
  redisClient.on("end", () => clearTimeout(idleTimer));

  resetIdleTimer();
})();

const redisSafeShutdown = async () => {
  try {
    await redisClient.quit();
    console.log("Redis connection closed gracefully");
    process.exit(0);
  } catch (err) {
    console.error("Error during Redis shutdown", err);
    process.exit(1);
  }
};

process.on("SIGINT", redisSafeShutdown);
process.on("SIGTERM", redisSafeShutdown);

export default redisClient;
