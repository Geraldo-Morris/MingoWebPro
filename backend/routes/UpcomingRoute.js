import express from "express";
import {
  getProducts,
  getProductById,
  saveProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/UpcomingController.js";

const router = express.Router();

router.get("/db_upcoming", getProducts);
router.get("/db_upcoming/:id", getProductById);
router.post("/db_upcoming", saveProduct);
router.patch("/db_upcoming/:id", updateProduct);
router.delete("/db_upcoming/:id", deleteProduct);

export default router;
