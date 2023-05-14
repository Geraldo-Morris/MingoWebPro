import express from "express";
import {
  getProducts,
  getProductById,
  saveProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/NewReleasesController.js";

const router = express.Router();

router.get("/db_newreleases", getProducts);
router.get("/db_newreleases/:id", getProductById);
router.post("/db_newreleases", saveProduct);
router.patch("/db_newreleases/:id", updateProduct);
router.delete("/db_newreleases/:id", deleteProduct);

export default router;
