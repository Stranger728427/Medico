import express from 'express';
import { userRegister,userLogin } from "../controller/userController.js";
import { auth } from '../middlewares/auth.js';

const router = express.Router();

router.post('/register', userRegister);
 router.post('/login', userLogin);

export default router