import Router from "express";

import { createTask, deleteTask, getTaskByUser, getTasks, updateTask } from "../controllers/Task.controller.js";

export const router = Router();

router.post("", createTask);
router.get("",getTasks);
router.patch("/:id",updateTask);
router.delete("",deleteTask);
router.get("/:id", getTaskByUser);

export default router;
