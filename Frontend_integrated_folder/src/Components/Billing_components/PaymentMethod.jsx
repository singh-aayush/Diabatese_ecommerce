"use client";
import { useState } from "react";
import { loadScript } from "../../../utils/razorpayUtils";

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [upiApp, setUpiApp] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const totalAmount = 199; // Example total in INR (₹)

  // Function to initialize Razorpay
  const handlePayment = () => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js").then(() => {
      const options = {
        key: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay Key
        amount: totalAmount * 1, // Razorpay accepts amount in paisa
        currency: "INR",
        name: "Your Company",
        description: "Order Payment",
        image: "/your-logo.png", // Add your company logo
        handler: function (response) {
          alert(
            `Payment successful! Payment ID: ${response.razorpay_payment_id}`
          );
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9876543210",
        },
        theme: {
          color: "#6EAC89",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    });
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-100 z-50 p-6">
      {/* Payment Container */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] md:w-2/4 flex gap-8">
        {/* Left Section - Payment Options */}
        <div className="w-full md:w-full space-y-6">
          <h2 className="text-black text-2xl font-semibold mb-4 text-center">
            Choose Your Payment Method
          </h2>

          {/* Payment Icons */}
          <div className="flex justify-center gap-6">
            <img
              src="/Icons & Icon-gifs/upi-icon.png"
              alt="UPI"
              className="w-10 h-10"
            />
            <img
              src="/Icons & Icon-gifs/visa-icon.png"
              alt="Visa"
              className="w-10 h-10"
            />
            <img
              src="/Icons & Icon-gifs/mastercard.png"
              alt="MasterCard"
              className="w-10 h-10"
            />
            <img
              src="/Icons & Icon-gifs/net-banking-icon.png"
              alt="Net Banking"
              className="w-10 h-10"
            />
          </div>

          {/* UPI Payment */}
          <label
            className="border border-gray-300 rounded-lg p-3 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
            onClick={() => setSelectedMethod("UPI")}
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="payment"
                className="mr-2 hidden"
                checked={selectedMethod === "UPI"}
                readOnly
              />
              <span className="text-black font-medium">UPI Payment</span>
            </div>
          </label>

          {/* Show UPI Options when selected (With Background) */}
          {selectedMethod === "UPI" && (
            <div className="bg-gray-100 p-4 rounded-lg mt-2">
              <div className="mt-3 flex flex-col gap-3 text-black">
                {["Google Pay", "PhonePe", "Paytm", "BHIM UPI"].map((app) => (
                  <button
                    key={app}
                    className="border border-gray-300 rounded-md px-4 py-2 flex items-center gap-2 justify-between hover:bg-gray-200"
                    onClick={handlePayment}
                  >
                    <div className="flex flex-row gap-4">
                      <img
                        src={`/Icons & Icon-gifs/${app.toLowerCase()}.png`}
                        alt={app}
                        className="w-6 h-6"
                      />
                      <span>{app}</span>
                    </div>
                    <span> ₹{totalAmount}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Card Payment */}
          <label
            className="border border-gray-300 rounded-lg p-3 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
            onClick={() => setSelectedMethod("Card")}
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="payment"
                className="mr-2 hidden"
                checked={selectedMethod === "Card"}
                readOnly
              />
              <span className="text-black font-medium">Credit/Debit Card</span>
            </div>
          </label>

          {/* Show Card Fields when selected (With Background) */}
          {selectedMethod === "Card" && (
            <div className="bg-gray-100 p-4 rounded-lg mt-2">
              <div className="space-y-3">
                {/* Card Number */}
                <label className="text-black font-medium pb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full border border-gray-300 rounded-md p-2 bg-white text-black"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />

                <div className="flex gap-3">
                  {/* Expiry Date */}
                  <div className="w-1/2 flex flex-col gap-2">
                    <label className="text-black font-medium">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full border border-gray-300 rounded-md p-2 bg-white text-black"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                    />
                  </div>

                  {/* CVV */}
                  <div className="w-1/6 flex flex-col gap-2">
                    <label className="text-black font-medium">CVV</label>
                    <input
                      type="password"
                      placeholder="***"
                      className="w-full border border-gray-300 rounded-md p-2 bg-white text-black"
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value)}
                    />
                  </div>
                </div>

                {/* Payment Button */}
                <button
                  className="mt-3 w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700"
                  onClick={handlePayment}
                >
                  Pay ₹{totalAmount}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
