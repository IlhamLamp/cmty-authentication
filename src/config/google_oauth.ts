import dotenv from "dotenv";
import { OAuth2Client } from "google-auth-library";
import { AuthGoogleCallbackURL } from "../utils/constant";

dotenv.config();

const gClientId = process.env.GOOGLE_CLIENT_ID as string;
const gClientSecret = process.env.GOOGLE_CLIENT_SECRET as string;

const client = new OAuth2Client(
  gClientId,
  gClientSecret,
  AuthGoogleCallbackURL
);
export default client;
