const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Login and Signup Routes
router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.post("/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to log out" });
      }
      res.status(200).json({ message: "Logged out successfully" });
    });
  });
  

// ✅ Session Check Route
router.get("/session", (req, res) => {
  if (req.session.userId) {
    res.status(200).json({ message: "Session active", userId: req.session.userId });
  } else {
    res.status(401).json({ error: "No active session" });
  }
});

module.exports = router;
