import express from 'express';
import { RegisterAccount } from '../../controllers/register.controller';
import { ResendOTP, VerifyOTP } from '../../controllers/otp.controller';
import { Login } from '../../controllers/login.controller';
import { RefreshAccessToken } from '../../controllers/token.controller';

const router = express.Router();

// register
router.post("/register", RegisterAccount)
router.post("/verify", VerifyOTP);
router.post("/resend-otp", ResendOTP)

// login
router.post("/login", Login)

// token
router.post("/refresh-token", RefreshAccessToken)

export default router;