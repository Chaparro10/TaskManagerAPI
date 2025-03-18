import Router from "express";

import { createuser, deleteUser, getUser,updateUser } from "../controllers/user.model.js";
import { handleValidatorSchema } from "../middleware/validator_schema.js";
import { createUserSchema, updateUserSchema } from "../models/user.schema.js";

export const router = Router();

router.get("", getUser);
router.patch("/:id",handleValidatorSchema(updateUserSchema,"body"),updateUser);
router.post("",handleValidatorSchema(createUserSchema,"body"),createuser)
router.delete("",deleteUser)

export default router;
