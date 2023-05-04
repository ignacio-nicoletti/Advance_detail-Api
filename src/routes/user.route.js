import express from "express";
import { deleteUser, getAllUser, getUserById, updateUser } from "../controllers/user.controller.js";


const router = express.Router();

router.get('/', getAllUser);

router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;