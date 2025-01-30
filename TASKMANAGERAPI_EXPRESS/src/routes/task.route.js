import Router from "express";

import { createTask, deleteTask, getTasks, updateTask } from "../controllers/Task.controller.js";

export const router = Router();

router.post("", createTask);
router.get("",getTasks)
router.patch("/:id",updateTask)
router.delete("",deleteTask)

export default router;
