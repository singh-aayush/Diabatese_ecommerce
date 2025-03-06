const jwt = require("jsonwebtoken"); // ✅ Import JWT
const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const db = require("../config/db");

exports.signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingUser = await userModel.findUserByEmail(email);
    if (existingUser.length > 0) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Only allow "admin" role if explicitly provided, otherwise default to "user"
    const userRole = role === "admin" ? "admin" : "user";

    await userModel.createUser(name, email, hashedPassword, userRole);

    res
      .status(201)
      .json({ message: "User registered successfully", role: userRole });
  } catch (err) {
    res.status(500).json({ error: err.message || "Server error" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [users] = await db.execute("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (users.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // ✅ Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role }, // Include user role
      process.env.JWT_SECRET,
      { expiresIn: "1d", issuer: process.env.JWT_ISSUER }
    );

    // ✅ Send token & user details in response
    res.json({
      message: "Login successful",
      token,
      userId: user.id,
      role: user.role,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Server error" });
  }
};
