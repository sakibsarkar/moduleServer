import express from "express";
import { login, register, verifyOTP } from "../controllers/auth.controller";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/verify", verifyOTP);
export default router;
