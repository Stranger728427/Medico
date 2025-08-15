import express from 'express';
import { userRegister,userLogin, deleteUser, updateUser, userLogout } from "../controller/userController.js";


const router = express.Router();

router.post('/signup', userRegister);
router.post('/login', userLogin);
router.post('/logout',userLogout)
router.delete('/deleteUser/:id', deleteUser);
router.put('/updateUser/:id', updateUser);


export default router