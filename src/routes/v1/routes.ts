import express from "express";
import { RegisterAccount } from "../../controllers/register.controller";
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

const router = express.Router();

// register
router.post("/register", PreventAuthenticatedAccess, RegisterAccount);
router.post("/verify", PreventAuthenticatedAccess, VerifyOTP);
router.post("/resend-otp", PreventAuthenticatedAccess, ResendOTP);

// user-action-auth
router.post("/login", Login);
router.post("/logout", Logout);
router.get("/google", GoogleLogin);
router.get("/google/callback", GoogleCallback);
// router.get("/login/redirect");
router.get("/login/success", GetOauthLoginSuccessData);

// token
router.post("/refresh-token", RefreshAccessToken);
router.post("/verify-token", CheckValidityToken);

export default router;
