import Router from "express";

import { createTask } from "../controllers/Task.controller.js";

export const router = Router();

router.post("", createTask);

export default router;
