//product.routes.js

import express from "express";
import { 
    postProduct, 
    productForm, 
    getProducts
} from '../controller/products.controller.js';


const router = express.Router();

router.get('/', productForm);
router.get('/products', getProducts);
router.post('/products', postProduct);

export default router ;