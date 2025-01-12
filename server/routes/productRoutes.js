import express from 'express';
import { createProducts, getProducts,deleteProducts,updateProducts } from '../controller/productController.js'
import { isAdminAuthenticated } from '../middlewares/auth.js'
const router = express.Router();

router.post('/createProducts', isAdminAuthenticated,createProducts);
router.delete('/deleteProducts/:id', isAdminAuthenticated,deleteProducts);
router.put('/updateProducts/:id', isAdminAuthenticated,updateProducts);

router.post('/getProducts', getProducts);

export default router;
