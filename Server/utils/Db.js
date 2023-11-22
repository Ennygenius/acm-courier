import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URI = process.env.DB_URI;

export const connectDB = async () => {
  const connect = mongoose.connect(URI);
  console.log("Database connected successfully");
};
