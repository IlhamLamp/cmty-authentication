import express, { Express } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import router from "./routes/v1/routes";
import connection from "./config/db_connect";
import cors from "cors";

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", router);

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).send({
    response: "Express TypeScript",
  });
  return;
});

const PORT = process.env.APP_PORT ?? 3000;
const APP_NAME = process.env.APP_NAME ?? "MyApp";

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
