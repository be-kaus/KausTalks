import express from 'express'
import {LoginUser,RegisterUser} from '../controllers/userController.js'
import { Protect } from '../middlewares/authMiddlewares.js';

const router = express.Router();

router.post("/register", RegisterUser);
router.post("/login", LoginUser);

export default router;
