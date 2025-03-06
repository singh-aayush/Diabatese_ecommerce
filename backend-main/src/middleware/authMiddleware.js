const jwt = require("jsonwebtoken");
const db = require("../config/db");
require("dotenv").config();

// ✅ Authentication Middleware (For Authenticated Users)
const requireAuth = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Extract Bearer token

  if (!token) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId; // ✅ Attach user ID to request
    req.userRole = decoded.role; // ✅ Attach user role for admin check
    next();
  } catch (error) {
    return res.status(403).json({ error: "Invalid token" });
  }
};

// ✅ Authorization Middleware (For Admin Users Only)
const requireAdmin = (req, res, next) => {
  if (!req.userRole || req.userRole !== "admin") {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }
  next();
};

// ✅ Export all middleware functions
module.exports = { requireAuth, requireAdmin };
