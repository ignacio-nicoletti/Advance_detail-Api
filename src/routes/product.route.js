import express from "express";
import { createProduct, DeleteProductById, GetAllProduct, GetProductById, UpdateProductById } from "../controllers/product.controller.js";
import { isAdmin, verifyToken } from "../middlewares/VerifyToken.js";

const router = express.Router();

router.post('/', [verifyToken, isAdmin], createProduct)
router.get('/', verifyToken, GetAllProduct);
router.get('/:id', verifyToken, GetProductById);
router.put('/:id', [verifyToken, isAdmin], UpdateProductById);
router.delete('/:id', [verifyToken, isAdmin], DeleteProductById);

export default router;