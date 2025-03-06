const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
  waitForConnections: true,
  queueLimit: 0,
});

// Check database connection
(async () => {
  try {
    const connection = await db.getConnection();
    console.log("✅ Connected to MySQL Database!");
    connection.release();
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
  }
})();

module.exports = db;
