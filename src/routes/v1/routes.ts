import express from 'express';
import { RegisterAccount } from '../../controllers/register.controller';
import { ResendOTP, VerifyOTP } from '../../controllers/otp.controller';
import { Login } from '../../controllers/login.controller';
import { CheckValidityToken, RefreshAccessToken } from '../../controllers/token.controller';
import { Logout } from '../../controllers/logout.controller';
import { PreventAuthenticatedAccess } from '../../middleware/protected_route';

const router = express.Router();

// register
router.post("/register", PreventAuthenticatedAccess, RegisterAccount)
router.post("/verify", PreventAuthenticatedAccess, VerifyOTP);
router.post("/resend-otp", PreventAuthenticatedAccess, ResendOTP)

// user-action
router.post("/login", Login);
router.post("/logout", Logout);

// token
router.post("/refresh-token", RefreshAccessToken);
router.post("/verify-token", CheckValidityToken);

export default router;