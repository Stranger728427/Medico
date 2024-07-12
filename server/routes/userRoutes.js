import express from 'express';
import { userRegister,userLogin, deleteUser, updateUser } from "../controller/userController.js";


const router = express.Router();

router.post('/register', userRegister);
router.post('/login', userLogin);
router.delete('/deleteUser/:id', deleteUser);
router.put('/updateUser/:id', updateUser);


export default router