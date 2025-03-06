"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const OrderSummary = () => {
  const router = useRouter(); // ✅ Use Next.js router for redirection
  const [cartData, setCartData] = useState({
    subtotal: 0,
    discount: 0,
    total: 0,
    cartItems: [],
  });

  // Retrieve cart details from localStorage when the component mounts
  useEffect(() => {
    const storedCartData = localStorage.getItem("cartData");
    console.log("Retrieved Cart Data:", storedCartData); // Check if data exists
    if (storedCartData) {
      setCartData(JSON.parse(storedCartData));
    }
  }, []);

  // Handle Place Order Click
  const handlePlaceOrder = () => {
    router.push("/payment"); // ✅ Navigate to the Payment Page
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto mt-6">
      <h2 className="text-black text-xl font-semibold mb-4">Order Summary</h2>

      {/* Product List */}
      <div className="space-y-3">
        {cartData.cartItems.length > 0 ? (
          cartData.cartItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={item.image} // Make sure image path is correct
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded-md"
                />
                <span className="text-black">
                  {item.name} x{item.quantity}
                </span>
              </div>
              <span className="text-black font-semibold">
                &#8377;{(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No items in cart</p>
        )}
      </div>

      <hr className="my-3" />

      {/* Pricing Summary */}
      <div className="text-black flex justify-between">
        <span>Subtotal:</span>
        <span className="text-black font-semibold">
          &#8377;{cartData.subtotal.toFixed(2)}
        </span>
      </div>
      <div className="text-black flex justify-between">
        <span>Shipping:</span>
        <span className="font-semibold text-green-600">Free</span>
      </div>

      <hr className="my-3" />

      {/* Total Price */}
      <div className="text-black flex justify-between text-lg font-semibold">
        <span>Total:</span>
        <span>&#8377;{cartData.total.toFixed(2)}</span>
      </div>

      <button
        className="mt-6 w-full bg-green-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-600 transition-all"
        onClick={handlePlaceOrder}
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;
