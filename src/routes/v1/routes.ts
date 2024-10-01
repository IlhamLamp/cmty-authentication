import express from 'express';
import { RegisterAccount } from '../../controllers/auth_controller';

const router = express.Router();

// register
router.post("/register", RegisterAccount)

export default router;