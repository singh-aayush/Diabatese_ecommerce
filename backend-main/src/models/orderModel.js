const db = require("../config/db");

// Create orders table if not exists
db.query(
  `CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    status ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  (err) => {
    if (err) console.error("❌ Orders table creation failed:", err);
  }
);

const Order = {
  placeOrder: (user_id, total_amount, callback) => {
    db.query(
      `INSERT INTO orders (user_id, total_amount, status) VALUES (?, ?, 'pending')`,
      [user_id, total_amount],
      callback
    );
  },

  getUserOrders: (user_id, callback) => {
    db.query(`SELECT * FROM orders WHERE user_id = ?`, [user_id], callback);
  },

  updateOrderStatus: (order_id, status, callback) => {
    db.query(
      `UPDATE orders SET status = ? WHERE id = ?`,
      [status, order_id],
      callback
    );
  },

  cancelOrder: (order_id, callback) => {
    db.query(
      `UPDATE orders SET status = 'cancelled' WHERE id = ?`,
      [order_id],
      callback
    );
  },
};

module.exports = Order;