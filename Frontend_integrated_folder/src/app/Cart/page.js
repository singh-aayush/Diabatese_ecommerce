"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function ShoppingCart() {
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [userId, setUserId] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const Router = useRouter();

  const CartSummary = ({ subtotal, discount, total, cartItems }) => {
    useEffect(() => {
      // Store cart details in localStorage whenever they update
      const cartData = {
        subtotal,
        discount,
        total,
        cartItems,
      };
      localStorage.setItem("cartData", JSON.stringify(cartData));
    }, [subtotal, discount, total, cartItems]);
  };

  // ✅ Fetch Cart Items Once When Component Mounts
  useEffect(() => {
    const fetchCartItems = async () => {
      const storedUserId = localStorage.getItem("userId");
      if (storedUserId) {
        setUserId(storedUserId);
      }

      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please log in first.");
        return;
      }

      try {
        const response = await axios.get("http://localhost:8000/cart/", {
          headers: { Authorization: `Bearer ${token}` }, // ✅ Include token correctly
        });

        setCartItems(response.data || []); // ✅ Ensure response data is correctly stored
      } catch (error) {
        console.error("Failed to fetch cart:", error.response?.data || error);
      }
    };

    fetchCartItems();
  }, []); // ✅ Runs only on mount

  // ✅ Update Quantity & Sync with Backend
  const updateQuantity = async (id, newQuantity) => {
    if (newQuantity < 1) return; // Prevents quantity from going below 1

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in first.");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:8000/cart/${id}`,
        { quantity: newQuantity },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log("Quantity updated:", response.data);

      // ✅ Update UI after success
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      console.error(
        "Failed to update quantity:",
        error.response?.data || error
      );
    }
  };

  // ✅ Remove Item from Cart & Backend
  const removeItem = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in first.");
      return;
    }

    try {
      await axios.delete(`http://localhost:8000/cart/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("Item removed from cart");

      // ✅ Update UI after success
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Failed to remove item:", error.response?.data || error);
    }
  };

  const applyCoupon = () => {
    if (couponCode === "DISCOUNT10") {
      setDiscount(0.1); // 10% discount
      alert("Coupon applied successfully!");
    } else {
      alert("Invalid coupon code");
    }
  };

  const handleCheckout = () => {
    Router.push("/billing");
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal * (1 - discount);

  return (
    <div className="max-w-7xl mx-auto p-6 pt-[140px]">
      <h1 className="text-3xl font-bold text-center mb-6 text-black">
        My Shopping Cart
      </h1>

      {/* Cart Section */}
      <div className="flex flex-col lg:flex-col justify-between gap-6">
        <div className="flex flex-row justify-between gap-6">
          {/* Cart Items */}
          <div className="bg-white p-4 rounded-lg shadow-md flex-1 text-black">
            {cartItems.length === 0 ? (
              <div className="text-center py-6">
                <p className="text-gray-600">Your cart is empty.</p>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-full mt-4"
                  onClick={() => Router.push("/Home")}
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Desktop Table */}
                <table className="hidden md:table w-full text-left">
                  <thead>
                    <tr className="border-b">
                      <th className="p-3">PRODUCT</th>
                      <th className="p-3">PRICE</th>
                      <th className="p-3">QUANTITY</th>
                      <th className="p-3">SUBTOTAL</th>
                      <th className="p-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id} className="border-b">
                        <td className="p-3 flex items-center gap-3">
                          {/* <Image
                            src={item.image || "/placeholder.png"}
                            alt={item.name}
                            width={50}
                            height={50}
                            className="rounded"
                          /> */}
                          {item.name}
                        </td>
                        <td className="p-3">
                          &#8377;{parseFloat(item.price).toFixed(2)}
                        </td>
                        <td className="p-3">
                          <div className="flex w-2/3 items-center border rounded-full px-2 py-1">
                            <button
                              aria-label="Decrease quantity"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="px-2"
                              disabled={item.quantity <= 1} // ✅ Prevent going below 1
                            >
                              -
                            </button>
                            <span className="px-4">{item.quantity}</span>
                            <button
                              aria-label="Increase quantity"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="px-2"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="p-3 font-bold">
                          &#8377;{(item.price * item.quantity).toFixed(2)}
                        </td>
                        <td className="p-3 text-center">
                          <button
                            aria-label="Remove item"
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 text-lg hover:text-red-600 transition"
                          >
                            <FaTimes />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <div className="h-[19rem] bg-white p-4 rounded-lg shadow-md w-full lg:w-80 text-black">
            <h3 className="text-lg font-semibold mb-3">Cart Total</h3>
            <div className="flex justify-between border-b pb-2">
              <span>Subtotal:</span>
              <span className="font-bold">&#8377;{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b py-2">
              <span>Shipping:</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between border-b py-2">
              <span>Discount:</span>
              <span className="text-red-600">
                -&#8377;{(subtotal * discount).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between font-bold text-lg py-2">
              <span>Total:</span>
              <span
                onChange={() => {
                  localStorage.setItem("cartTotal", total.toFixed(2));
                }}
              >
                &#8377;{total.toFixed(2)}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="bg-green-500 text-white w-full py-3 rounded-full mt-3 hover:opacity-90"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>

        {/* Coupon Section */}
        <div className="bg-white w-full lg:w-2/5 mt-4 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3 text-black">Coupon Code</h3>
          <div className="relative w-full">
            <label htmlFor="coupon-code" className="sr-only">
              Enter coupon code
            </label>
            <input
              id="coupon-code"
              type="text"
              placeholder="Enter code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="w-full p-3 border rounded-full pr-20 md:pr-16"
            />
            <button
              onClick={applyCoupon}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white px-8 md:px-6 py-2 rounded-full hover:opacity-90"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
