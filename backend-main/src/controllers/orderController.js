const db = require("../config/db");

// 📌 Place a new order
exports.placeOrder = async (req, res) => {
    const { user_id, total_price, items } = req.body;

    if (!user_id || !total_price || !Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ error: "Invalid request. Ensure user_id, total_price, and items array are provided." });
    }

    const connection = await db.promise().getConnection();

    try {
        await connection.beginTransaction();

        // Insert into orders table
        const [orderResult] = await connection.query(
            "INSERT INTO orders (user_id, total_price, status, payment_status) VALUES (?, ?, 'pending', 'unpaid')",
            [user_id, total_price]
        );
        const orderId = orderResult.insertId;

        // Insert order items
        const orderItems = items.map(({ product_id, quantity, price }) => [orderId, product_id, quantity, price]);
        await connection.query("INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ?", [orderItems]);

        await connection.commit();
        console.log(`✅ Order placed successfully! Order ID: ${orderId}`);
        res.status(201).json({ message: "✅ Order placed successfully!", order_id: orderId });

    } catch (error) {
        await connection.rollback();
        console.error("❌ Error placing order:", error);
        res.status(500).json({ error: "Failed to place order. Please try again." });
    } finally {
        connection.release();
    }
};

// 📌 Get all orders for a specific user
exports.getUserOrders = async (req, res) => {
    const { user_id } = req.params;

    if (isNaN(user_id)) {
        return res.status(400).json({ error: "Invalid user ID. Must be a numeric value." });
    }

    try {
        const [orders] = await db.promise().query(
            "SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC",
            [user_id]
        );

        if (orders.length === 0) {
            return res.status(404).json({ message: "No orders found for this user." });
        }

        console.log(`📦 Retrieved ${orders.length} orders for user_id: ${user_id}`);
        res.status(200).json({ orders });

    } catch (error) {
        console.error("❌ Error fetching orders:", error);
        res.status(500).json({ error: "Failed to fetch orders." });
    }
};

// 📌 Update order status & payment status
exports.updateOrderStatus = async (req, res) => {
    const { order_id, status, payment_status } = req.body;

    if (!order_id || (!status && !payment_status)) {
        return res.status(400).json({ error: "Invalid request. Provide order_id and at least one field to update." });
    }

    try {
        const [result] = await db.promise().query(
            "UPDATE orders SET status = COALESCE(?, status), payment_status = COALESCE(?, payment_status) WHERE id = ?",
            [status, payment_status, order_id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Order not found or no update needed." });
        }

        console.log(`🔄 Order ${order_id} updated successfully!`);
        res.status(200).json({ message: "✅ Order updated successfully!" });

    } catch (error) {
        console.error("❌ Error updating order:", error);
        res.status(500).json({ error: "Failed to update order." });
    }
};

// 📌 Cancel an order
exports.cancelOrder = async (req, res) => {
    const { order_id } = req.body;

    if (!order_id) {
        return res.status(400).json({ error: "Order ID is required." });
    }

    try {
        const [result] = await db.promise().query(
            "UPDATE orders SET status = 'canceled' WHERE id = ? AND status = 'pending'",
            [order_id]
        );

        if (result.affectedRows === 0) {
            return res.status(400).json({ error: "Order cannot be canceled. It may already be processed or completed." });
        }

        console.log(`🚫 Order ${order_id} canceled successfully!`);
        res.status(200).json({ message: "✅ Order canceled successfully!" });

    } catch (error) {
        console.error("❌ Error canceling order:", error);
        res.status(500).json({ error: "Failed to cancel order." });
    }
};

