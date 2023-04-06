import express from "express";
import { createService, DeleteServiceById, GetAllService, GetServiceById, UpdateServiceById } from "../controllers/service.controller.js";
import { isAdmin, verifyToken } from "../middlewares/VerifyToken.js";

const router = express.Router();

router.post('/', [verifyToken, isAdmin], createService)
router.get('/', verifyToken, GetAllService);
router.get('/:id', verifyToken, GetServiceById);
router.put('/:id', [verifyToken, isAdmin], UpdateServiceById);
router.delete('/:id', [verifyToken, isAdmin], DeleteServiceById);

export default router;