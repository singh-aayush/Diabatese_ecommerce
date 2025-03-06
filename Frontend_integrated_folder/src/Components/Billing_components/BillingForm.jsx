"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const BillingForm = () => {
  // State variables
  const [phone, setPhone] = useState("");
  const Router = useRouter();

  useEffect(() => {
    // ✅ Check if user is authenticated
    const authenticatedPhone = localStorage.getItem("authenticatedPhone");

    if (!authenticatedPhone) {
      // If user is not authenticated, redirect to OTP page
      Router.push("/otp-authentication");
    } else {
      setPhone(authenticatedPhone);
    }
  }, [Router]);

  const handlePlaceOrder = () => {
    Router.push("/payment"); // ✅ Navigate to the Payment Page
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <h2 className="text-xl text-black font-semibold mb-4">
        Billing Information
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name Inputs */}
        <input
          type="text"
          placeholder="Your first name"
          autoComplete="off"
          className="text-black input-field border border-gray-300 rounded-md p-2 focus:border-black outline-none"
        />
        <input
          type="text"
          placeholder="Your last name"
          autoComplete="off"
          className="text-black input-field border border-gray-300 rounded-md p-2 focus:border-black outline-none"
        />

        {/* Company */}
        <input
          type="text"
          placeholder="Company name"
          autoComplete="off"
          className="text-black input-field md:col-span-2 border border-gray-300 rounded-md p-2 focus:border-black outline-none"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          autoComplete="off"
          className="text-black input-field md:col-span-2 border border-gray-300 rounded-md p-2 focus:border-black outline-none"
          required
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          title="Please enter a valid email address (e.g., example@mail.com)"
        />

        {/* Country & State Dropdowns */}
        <select className="text-black input-field border border-gray-300 rounded-md p-2 focus:border-black outline-none">
          <option>Select Country</option>
          <option>India</option>
        </select>
        <select className="text-black input-field border border-gray-300 rounded-md p-2 focus:border-black outline-none">
          <option>Select State</option>
          <option>Maharashtra</option>
          <option>Karnataka</option>
          <option>Tamil Nadu</option>
          <option>Delhi</option>
          <option>Uttar Pradesh</option>
          <option>West Bengal</option>
          <option>Telangana</option>
          <option>Gujarat</option>
          <option>Rajasthan</option>
          <option>Madhya Pradesh</option>
        </select>

        {/* Zip Code */}
        <input
          type="text"
          placeholder="Zip Code"
          autoComplete="off"
          className="text-black input-field border border-gray-300 rounded-md p-2 focus:border-black outline-none"
        />

        {/* Phone Number read only */}
        <div className="flex flex-col">
          <input
            type="text"
            value={phone}
            readOnly
            className="text-black border border-gray-300 rounded-md p-2 outline-none bg-gray-100"
          />
        </div>

        {/* Ship to Different Address */}
        <div className="text-black md:col-span-2 flex items-center">
          <input type="checkbox" className="mr-2" />
          <span>Ship to a different address</span>
        </div>

        {/* Order Notes */}
        <div className="flex flex-col">
          <h1 className="text-[1.25rem] font-black text-black w-full">
            Additional <span className="text-green-400">Info</span>
          </h1>
          <p className="text-black text-[10px] mt-4">Order Notes (Optional)</p>
        </div>
        <textarea
          placeholder="Order Notes (Optional)"
          autoComplete="off"
          className="text-black input-field md:col-span-2 h-24 border border-gray-300 rounded-md p-2 focus:border-black outline-none"
        ></textarea>
      </form>
      <button
        className="mt-6 w-full bg-green-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-600 transition-all"
        onClick={handlePlaceOrder}
      >
        Place Order
      </button>
    </div>
  );
};

export default BillingForm;
