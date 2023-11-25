import express from "express";
import {
  createInfo,
  deleteInfo,
  getAllTInfo,
  updateInfo,
  getSingleTrack,
} from "../controllers/Tracking.js";
import { VToken } from "../Middleware/AuthVal.js";

const router = express();

router
  .get("/", getAllTInfo)
  .post("/", createInfo)
  .patch("/:id", updateInfo)
  .get("/details", VToken, getSingleTrack)
  .delete("/:id", deleteInfo);

export default router;
