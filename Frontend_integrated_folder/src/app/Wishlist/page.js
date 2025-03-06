"use client";
import { useState } from "react";
import {
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Product Name",
      price: 14.99,
      oldPrice: 20.99,
      stock: "in",
      image: "/3 4.png",
    },
    {
      id: 2,
      name: "Product Name",
      price: 45.0,
      oldPrice: 50.99,
      stock: "in",
      image: "/5 4.png",
    },
    {
      id: 3,
      name: "Product Name",
      price: 9.0,
      oldPrice: 10.99,
      stock: "out",
      image: "/10 7.png",
    },
  ]);

  const removeItem = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 md:pt-[140px]">
      <h1 className="text-3xl font-bold text-center mb-6 text-black">
        My Wishlist
      </h1>

      {/* Wishlist Table (Hidden on small screens) */}
      <div className="bg-white p-4 rounded-lg shadow-md overflow-x-auto hidden md:block text-black">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="p-3">PRODUCT</th>
              <th className="p-3">PRICE</th>
              <th className="p-3">STOCK STATUS</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded"
                  />
                  {item.name}
                </td>
                <td className="p-3 font-bold">
                  ${item.price.toFixed(2)}
                  {item.oldPrice && (
                    <span className="text-gray-400 line-through ml-2">
                      ${item.oldPrice}
                    </span>
                  )}
                </td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 text-sm font-semibold rounded-md ${
                      item.stock === "in"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.stock === "in" ? "In Stock" : "Out of Stock"}
                  </span>
                </td>
                <td className="p-3">
                  <button
                    className={`px-4 py-2 rounded-full text-white ${
                      item.stock === "in"
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-gray-300 cursor-not-allowed"
                    }`}
                    disabled={item.stock !== "in"}
                  >
                    Add to Cart
                  </button>
                </td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 text-lg"
                  >
                    <FaTimes />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View (Card Layout) */}
      <div className="block md:hidden">
        {wishlist.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">
                  <span className="font-bold">${item.price.toFixed(2)}</span>
                  {item.oldPrice && (
                    <span className="text-gray-400 line-through ml-2">
                      ${item.oldPrice}
                    </span>
                  )}
                </p>
                <span
                  className={`px-3 py-1 text-sm font-semibold rounded-full ${
                    item.stock === "in"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.stock === "in" ? "In Stock" : "Out of Stock"}
                </span>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-gray-400 text-lg ml-auto"
              >
                <FaTimes />
              </button>
            </div>
            <button
              className={`w-full mt-3 py-2 rounded-full text-white ${
                item.stock === "in"
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
              disabled={item.stock !== "in"}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Share Section (Icons Moved to Left) */}

      <div className="mt-6 bg-white p-4 rounded-lg shadow-md w-full flex items-center gap-4">
        {/* Share Text */}
        <p className="text-gray-600 font-semibold">Share:</p>
        {/* Icons (Shifted Left) */}
        <div className="flex gap-2">
          <button className="bg-green-500 text-white p-2 rounded-full">
            <FaFacebook />
          </button>
          <button className="bg-gray-200 text-gray-600 p-2 rounded-full">
            <FaTwitter />
          </button>
          <button className="bg-gray-200 text-gray-600 p-2 rounded-full">
            <FaPinterest />
          </button>
          <button className="bg-gray-200 text-gray-600 p-2 rounded-full">
            <FaInstagram />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
