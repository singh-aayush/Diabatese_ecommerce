const db = require("../config/db");

exports.getAllUsers = async (req, res) => {
  try {
    const [users] = await db.execute("SELECT id, name, email, role FROM users");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
