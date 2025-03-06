const db = require("../config/db");

// 🔹 Fetch all products
exports.getAllProducts = async (req, res) => {
    try {
        const [products] = await db.execute("SELECT * FROM Products");
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 🔹 Fetch a single product by ID
exports.getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const [product] = await db.execute("SELECT * FROM Products WHERE id = ?", [id]);
        if (product.length === 0) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.json(product[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 🔹 Add a new product (Admin Only)
exports.addProduct = async (req, res) => {
    const { name, description, price, stock_quantity, category, discount, image_url } = req.body;
    try {
        await db.execute(
            "INSERT INTO Products (name, description, price, stock_quantity, category, discount, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [name, description, price, stock_quantity, category, discount, image_url]
        );
        res.status(201).json({ message: "Product added successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 🔹 Update a product (Admin Only)
exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, stock_quantity, category, discount, image_url } = req.body;
    try {
        const [result] = await db.execute(
            "UPDATE Products SET name = ?, description = ?, price = ?, stock_quantity = ?, category = ?, discount = ?, image_url = ? WHERE id = ?",
            [name, description, price, stock_quantity, category, discount, image_url, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Product not found" });
        }

        res.json({ message: "Product updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 🔹 Delete a product (Admin Only)
exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await db.execute("DELETE FROM Products WHERE id = ?", [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Product not found" });
        }

        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
