import express from "express";
import { getUser, valTID } from "../controllers/ValTID.js";
import { VToken } from "../Middleware/AuthVal.js";

const router = express();

router.post("/", valTID);
router.get("/user", VToken, getUser);

export default router;
