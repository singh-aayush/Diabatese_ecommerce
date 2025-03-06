const express = require("express");
const { requireAuth, requireAdmin  } = require("../middleware/authMiddleware");
const router = express.Router();
const userController = require("../controllers/userController");

// ✅ Protect this route
router.get("/", requireAuth, requireAdmin, userController.getAllUsers);

module.exports = router;