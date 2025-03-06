const express = require("express");
const { requireAuth, requireAdmin } = require("../middleware/authMiddleware");
const productController = require("../controllers/productController");

const router = express.Router();

// Public Routes
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);

// Admin Routes
router.post("/", requireAuth, requireAdmin, productController.addProduct);
router.put("/:id", requireAuth, requireAdmin, productController.updateProduct);
router.delete(
  "/:id",
  requireAuth,
  requireAdmin,
  productController.deleteProduct
);

module.exports = router;
