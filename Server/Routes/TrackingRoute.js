import express from "express";
import {
  createInfo,
  deleteInfo,
  getAllTInfo,
  updateInfo,
  getSingleTrack,
} from "../controllers/Tracking.js";
import { VToken } from "../Middleware/AuthVal.js";
import multer from "multer";
import storage from "../cloudinary.js";

const upload = multer({ storage: storage });
const router = express();

router
  .get("/", getAllTInfo)
  .post("/", upload.single("goodsImage"), createInfo)
  .patch("/:id", upload.single("goodsImage"), updateInfo)
  .get("/details", VToken, getSingleTrack)
  .delete("/:id", deleteInfo);

export default router;
