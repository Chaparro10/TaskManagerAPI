import Router from "express";

import { createuser, deleteUser, getUser,updateUser } from "../controllers/user.model.js";

export const router = Router();

router.get("", getUser);
router.patch("/:id",updateUser);
router.post("",createuser)
router.delete("",deleteUser)

export default router;
