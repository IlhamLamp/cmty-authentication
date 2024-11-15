import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.APP_PORT ?? 3001;
export const APP_NAME = process.env.APP_NAME ?? "Communtity Authentication";
export const APP_CLIENT = process.env.APP_CLIENT ?? "http://localhost:3000";

//
export const AuthGoogleCallbackURL =
  "http://localhost:3001/api/v1/auth/google/callback";
