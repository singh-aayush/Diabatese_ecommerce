const db = require("../config/db");

exports.createUser = async (name, email, passwordHash, role = "user") => {
  const sql =
    "INSERT INTO users (name, email, password_hash,role) VALUES (?, ?, ?,?)";
  await db.execute(sql, [name, email, passwordHash, role]); // Use passwordHash, NOT password
};

exports.findUserByEmail = async (email) => {
  const sql =
    "SELECT id, name, email, password_hash, role FROM users WHERE email = ?";
  const [rows] = await db.execute(sql, [email]);
  return rows; // Ensure it returns an array
};
