import express from "express";
import {
  createCourier,
  deleteCourier,
  getAllCourier,
} from "../controllers/Courier.js";

const router = express();

router
  .get("/", getAllCourier)
  .post("/", createCourier)

  .delete("/:id", deleteCourier);

export default router;
