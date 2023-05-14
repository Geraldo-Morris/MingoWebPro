import express from "express";
import {
  getProducts,
  getProductById,
  saveProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/TrendingController.js";

const router = express.Router();

router.get("/db_trending", getProducts);
router.get("/db_trending/:id", getProductById);
router.post("/db_trending", saveProduct);
router.patch("/db_trending/:id", updateProduct);
router.delete("/db_trending/:id", deleteProduct);

export default router;
