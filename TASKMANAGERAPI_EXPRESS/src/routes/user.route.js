import Router from "express";

import { getUser } from "../controllers/user.model.js";

export const router = Router();

router.get("", getUser);

export default router;
