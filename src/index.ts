import express, { Express } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import router from "./routes/v1/routes";
import connection from "./config/db_connect";
import cors from "cors";
import { APP_CLIENT, APP_NAME, PORT } from "./utils/constant";

dotenv.config();

const app: Express = express();

app.use(
  cors({
    origin: APP_CLIENT,
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    credentials: true,
  })
);
app.options("*", cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", router);

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).send({
    response: "Express TypeScript",
  });
  return;
});

connection
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🤝 ${APP_NAME} running on port ${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.error("Unable to connect database ", error);
  });

export default app;
