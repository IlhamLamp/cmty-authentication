import { createClient } from 'redis';
import dotenv from "dotenv";

dotenv.config();

const redisClient = createClient({
    // password: process.env.REDIS_PASSWORD,
    // socket: {
    //     host: process.env.REDIS_SOCKET_HOST,
    //     port: process.env.REDIS_SOCKET_PORT ? parseInt(process.env.REDIS_SOCKET_PORT) : undefined,
    // }
    url: process.env.REDIS_URL,
});

redisClient.on('error', (err) => console.log('Redis Client Error', err));

(async () => {
    await redisClient.connect();
})();

export default redisClient;
