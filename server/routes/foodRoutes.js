import express from "express";

import {
  getFoods,
  getFoodById,
  addFood,
} from "../controllers/foodController.js";

const router = express.Router();

router.get("/", getFoods);

router.get("/:id", getFoodById);

router.post("/", addFood);

export default router;