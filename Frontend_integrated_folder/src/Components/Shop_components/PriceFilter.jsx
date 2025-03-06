"use client";

import { useState, useEffect } from "react";

export default function PriceFilter() {
  const [isOpen, setIsOpen] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 1500]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const handleMaxChange = (e) => {
    const newMax = parseInt(e.target.value);
    if (newMax >= 0) {
      setPriceRange([0, newMax]);
    }
  };

  if (!isClient) return <div className="p-4 bg-white">Loading...</div>;

  return (
    <div className="border rounded-md p-4 pb-0 bg-white text-black">
      <div
        className="flex justify-between items-center mb-4 cursor-pointer"
        onClick={toggleFilter}
      >
        <h3 className="font-medium">Price</h3>
        <button className="text-xl">
          <span>{isOpen ? "▾" : "▸"}</span>
        </button>
      </div>

      {isOpen && (
        <div>
          {/* Scroll Bar */}
          <div className="relative w-full h-8 flex items-center">
            {/* Background Track */}
            <div className="absolute top-1/2 left-0 w-full h-[8px] bg-gray-200 rounded transform -translate-y-1/2"></div>

            {/* Green Progress Bar */}
            <div
              className="absolute top-1/2 left-0 h-[8px] bg-green-500 rounded transform -translate-y-1/2"
              style={{
                width: `${(priceRange[1] / 1500) * 100}%`,
              }}
            ></div>

            {/* Input Slider - Properly Positioned */}
            <input
              type="range"
              min="0"
              max="1500"
              value={priceRange[1]}
              onChange={handleMaxChange}
              className="relative w-full h-8 bg-transparent appearance-none cursor-pointer"
            />

            {/* Custom Thumb Styling */}
            <style jsx>{`
              input[type="range"]::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 16px;
                height: 16px;
                background: green;
                border-radius: 50%;
                cursor: pointer;
              }
              input[type="range"]::-moz-range-thumb {
                width: 16px;
                height: 16px;
                background: green;
                border-radius: 50%;
                cursor: pointer;
              }
            `}</style>
          </div>

          {/* Price Display */}
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500 pb-4">
              Price: ₹0 — ₹{priceRange[1]}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
