import express from "express";
import auth from "./auth.route";
import file from "./file.upload.route";
import user from "./user.route";
const router = express.Router();

router.use("/user", user);
router.use("/auth", auth);
router.use("/file", file);
export default router;
