import express from "express";
import {
  getProducts,
  getProductById,
  saveProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/GamesController.js";

const router = express.Router();

router.get("/games", getProducts);
router.get("/games/:id", getProductById);
router.post("/games", saveProduct);
router.patch("/games/:id", updateProduct);
router.delete("/games/:id", deleteProduct);

export default router;
