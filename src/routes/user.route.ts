import express from "express";
import { getUser, updatePrivacy } from "../controllers/user.controller";

const router = express.Router();

router.get("/get/:id", getUser);
router.put("/privacy/:id", updatePrivacy);
export default router;
