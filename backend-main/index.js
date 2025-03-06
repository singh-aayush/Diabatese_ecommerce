const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");

dotenv.config();

const db = require("./src/config/db");
const bodyParser = require("body-parser");
const authRoutes = require("./src/routes/auth");
const productRoutes = require("./src/routes/productRoutes");

const cartRoutes = require("./src/routes/cartRoutes");


const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(morgan("dev"));
app.use(cors({ credentials: true, origin: "http://localhost:3000" })); // Allow frontend
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

// 🔹 Session Middleware (Stores Session in Memory)
app.use(
  session({
    secret: process.env.SESSION_SECRET || "mySecretKey", // Change this to a secure value
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // ❌ Set `true` in production with HTTPS
      httpOnly: true, // ✅ Prevent client-side access
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
    },
  })
);

app.use((req, res, next) => {
  console.log("🔹 Incoming request:", req.method, req.url);
  console.log("🔹 Session data:", req.session);
  next();
});


// Routes
const userRoutes = require("./src/routes/userRoutes");
app.use("/users", userRoutes);
app.use("/auth", authRoutes);


//Other Routes
app.use("/products", productRoutes);

app.use("/cart", cartRoutes);


// Test Route
app.get("/", (req, res) => {
  res.send("Welcome to the E-Commerce API");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
