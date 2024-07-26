import express from "express";
import {
  test,
  updateUser,
} from "../../controllers/userController/user.controller.js";
import { VerifyToken } from "../../utills/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", VerifyToken, updateUser);

export default router;
