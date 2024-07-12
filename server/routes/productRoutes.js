import express from 'express';
import { createProducts, getProducts,deleteProducts,updateProducts } from '../controller/productController.js'
import { isAdminAuthenticated } from '../middlewares/auth.js'
const router = express.Router();

router.post('/admin/createProducts', isAdminAuthenticated,createProducts);
router.delete('/admin/deleteProducts/:id', isAdminAuthenticated,deleteProducts);
router.put('/admin/updateProducts/:id', isAdminAuthenticated,updateProducts);

router.post('/getProducts', getProducts);

export default router;
