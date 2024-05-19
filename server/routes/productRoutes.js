import express from 'express';
import { createProducts, getProducts } from '../controller/productController.js'
import { isAdminAuthenticated, isSellerAuthenticated } from '../middlewares/auth.js';
const router = express.Router();

router.post('/admin/createProducts', isAdminAuthenticated,createProducts);
router.post('/seller/createProducts', isSellerAuthenticated,createProducts);
router.post('/getProducts', getProducts);

export default router;
