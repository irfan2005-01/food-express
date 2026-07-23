import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "../config/db.js";
import Food from "../models/Food.js";
import foods from "./foodData.js";

dotenv.config();

const importData = async () => {
  try {
    await connectDB();

    await Food.deleteMany();
    await Food.insertMany(foods);

    console.log("✅ Food data imported");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();