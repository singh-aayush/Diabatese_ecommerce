const express = require("express");
const { requireAuth, requireAdmin } = require("../middleware/authMiddleware");
// const { authenticateUser } = require("../middleware/authMiddleware");
const cartController = require("../controllers/cartController");

const router = express.Router();

router.post("/", requireAuth, cartController.addToCart);
router.get("/", requireAuth, cartController.viewCart);
router.put("/:item_id", requireAuth, cartController.updateCartItem);
router.delete("/:item_id", requireAuth, cartController.removeCartItem);
router.post("/checkout", requireAuth, cartController.checkout);

module.exports = router;

// const express = require("express");
// const {
//   addItemToCart,
//   getCartItems,
//   updateCartQuantity,
//   removeCartItem,
// } = require("../controllers/cartController");

// const router = express.Router();

// router.post("/", addItemToCart); // Add item to cart
// router.get("/:user_id", getCartItems); // View cart items
// router.put("/:cart_id", updateCartQuantity); // Update quantity
// router.delete("/:cart_id", removeCartItem); // Remove item from cart

// module.exports = router;
