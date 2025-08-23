import express from 'express'
import {LoginUser,RegisterUser, GoogleLogin, SendOTPForRegister,SendOTPForLogin} from '../controllers/userController.js'
import { Protect } from '../middlewares/authMiddlewares.js';

const router = express.Router();

router.post("/register", RegisterUser);
router.post("/login", LoginUser);
router.post("/googleLogin",GoogleLogin)
router.post("/sendOtpRegister",SendOTPForRegister)
router.post("/sendOtpLogin",SendOTPForLogin)

export default router;
