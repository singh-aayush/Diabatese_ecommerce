const db = require("../config/db");

// ✅ Add item to cart
// ✅ Add item to cart
exports.addToCart = async (req, res) => {
  try {
    const { product_id, quantity } = req.body;
    const user_id = req.userId; // ✅ Ensure req.userId is set by auth middleware

    console.log(
      "Received in addToCart - user_id:",
      user_id,
      "product_id:",
      product_id,
      "quantity:",
      quantity
    );

    if (!user_id) {
      return res.status(401).json({ error: "Unauthorized: No user ID found" });
    }
    if (!product_id || !quantity) {
      return res
        .status(400)
        .json({ error: "Product ID and quantity are required" });
    }

    // ✅ Insert or update the cart item
    const [result] = await db.execute(
      "INSERT INTO Cart (user_id, product_id, quantity) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE quantity = quantity + ?",
      [user_id, product_id, quantity, quantity]
    );

    // ✅ Retrieve updated cart items for debugging
    const [cartItems] = await db.execute(
      "SELECT cart.id, cart.quantity, products.name, products.price FROM cart JOIN products ON cart.product_id = products.id WHERE cart.user_id = ?",
      [user_id]
    );

    res.status(200).json({
      message: "Item added to cart",
      cart: cartItems, // Send back updated cart
    });
  } catch (error) {
    console.error("Error in addToCart:", error.stack || error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
};

// ✅ View cart items
exports.viewCart = async (req, res) => {
  const user_id = req.userId;

  try {
    const [cartItems] = await db.execute(
      `SELECT Cart.id, Products.name, Products.price, Cart.quantity,
            (Products.price * Cart.quantity) AS total_price
            FROM Cart
            JOIN Products ON Cart.product_id = Products.id
            WHERE Cart.user_id = ?`,
      [user_id]
    );
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update cart item quantity
exports.updateCartItem = async (req, res) => {
  const { item_id } = req.params;
  const { quantity } = req.body;
  const user_id = req.userId;

  try {
    await db.execute(
      "UPDATE Cart SET quantity = ? WHERE id = ? AND user_id = ?",
      [quantity, item_id, user_id]
    );
    res.json({ message: "Cart updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Remove item from cart
exports.removeCartItem = async (req, res) => {
  const { item_id } = req.params;
  const user_id = req.userId;

  try {
    await db.execute("DELETE FROM Cart WHERE id = ? AND user_id = ?", [
      item_id,
      user_id,
    ]);
    res.json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Checkout (Clear cart)
exports.checkout = async (req, res) => {
  const user_id = req.userId;

  try {
    await db.execute("DELETE FROM Cart WHERE user_id = ?", [user_id]);
    res.json({ message: "Checkout successful. Cart cleared." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// const Cart = require("../models/Cart");

// exports.addItemToCart = async (req, res) => {
//   try {
//     const { user_id, product_id, quantity } = req.body;
//     const result = await Cart.addItem(user_id, product_id, quantity);
//     res
//       .status(201)
//       .json({ message: "Item added to cart", cart_id: result.insertId });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// exports.getCartItems = async (req, res) => {
//   try {
//     const user_id = req.params.user_id;
//     const cartItems = await Cart.getCart(user_id);
//     res.json(cartItems);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// exports.updateCartQuantity = async (req, res) => {
//   try {
//     const { cart_id } = req.params;
//     const { quantity } = req.body;
//     await Cart.updateQuantity(cart_id, quantity);
//     res.json({ message: "Cart updated successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// exports.removeCartItem = async (req, res) => {
//   try {
//     const { cart_id } = req.params;
//     await Cart.removeItem(cart_id);
//     res.json({ message: "Item removed from cart" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
