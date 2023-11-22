import mongoose from "mongoose";

import jwt from "jsonwebtoken";
import Courier from "../Models/CourierModels.js";

export const VToken = async (req, res, next) => {
  //Grab the auth Header from the req.headers
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];

    if (!token) {
      res.json("No token found");
    }

    jwt.verify(token, process.env.Secret, async (err, payload) => {
      try {
        if (err) {
          console.error("JWT verification error:", err);
          return res
            .status(401)
            .json({ message: "An Error Occurred unauthorized" });
        }

        // user
        const userID = payload.courier;
        req.user = userID;

        //admin
        const admin = payload.user;
        req.admin = admin;

        console.log(req.admin);

        next();
      } catch (error) {
        console.log(error);
        res.json({ message: "unauthorized" });
      }
    });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};
