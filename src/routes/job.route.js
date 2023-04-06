import express from "express";
import { createJob, DeleteJobById, GetAllJob, GetJobById, UpdateJobById } from "../controllers/job.controller.js";
import { isAdmin, verifyToken } from "../middlewares/VerifyToken.js";

const router = express.Router();

router.post('/', [verifyToken, isAdmin], createJob)
router.get('/', verifyToken, GetAllJob);
router.get('/:id', verifyToken, GetJobById);
router.put('/:id', [verifyToken, isAdmin], UpdateJobById);
router.delete('/:id', [verifyToken, isAdmin], DeleteJobById);

export default router;