import express from "express";
import {
  RedirectSetAccountPassword,
  RegisterAccount,
} from "../../controllers/register.controller";
import { ResendOTP, VerifyOTP } from "../../controllers/otp.controller";
import { Login } from "../../controllers/login.controller";
import {
  CheckValidityToken,
  RefreshAccessToken,
} from "../../controllers/token.controller";
import { Logout } from "../../controllers/logout.controller";
import { PreventAuthenticatedAccess } from "../../middleware/protected_route";
import {
  GetOauthLoginSuccessData,
  GoogleCallback,
  GoogleLogin,
} from "../../controllers/google_oauth.controller";
import ensureRedisConnection from "../../middleware/check_conn_redis";

const router = express.Router();

// register
router.post("/register", PreventAuthenticatedAccess, RegisterAccount);
router.post("/verify", PreventAuthenticatedAccess, VerifyOTP);
router.post("/resend-otp", PreventAuthenticatedAccess, ResendOTP);

// user-action-auth
router.post("/login", ensureRedisConnection, Login);
router.post("/logout", ensureRedisConnection, Logout);
router.get("/google", ensureRedisConnection, GoogleLogin);
router.get("/google/callback", ensureRedisConnection, GoogleCallback);
router.get(
  "/login/redirect",
  ensureRedisConnection,
  RedirectSetAccountPassword
);
router.get("/login/success", ensureRedisConnection, GetOauthLoginSuccessData);

// token
router.post("/refresh-token", ensureRedisConnection, RefreshAccessToken);
router.post("/verify-token", ensureRedisConnection, CheckValidityToken);

export default router;
