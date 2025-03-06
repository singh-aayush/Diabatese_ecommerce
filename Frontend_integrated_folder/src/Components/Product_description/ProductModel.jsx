"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

export default function ProductModel({ isOpen, onClose, product }) {
  const [mainImage, setMainImage] = useState("");
  const [userId, setUserId] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // console.log("products", product);

  // useEffect(() => {
  //   // ✅ Retrieve userId from localStorage
  //   const storedUserId = localStorage.getItem("userId");
  //   if (storedUserId) {
  //     setUserId(storedUserId);
  //   }
  // }, []);

  const addToCart = async (product) => {
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
      const response = await axios.post(
        "http://localhost:8000/cart/",
        { product_id: product.id, quantity },
        {
          headers: { Authorization: `Bearer ${token}` }, // ✅ Include the auth token
        }
      );

      console.log("Cart updated:", response.data);
    } catch (error) {
      console.error("Failed to add to cart:", error.response?.data || error);
    }
  };

  if (!isOpen) return null; // Hide modal when it's not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-5xl w-[90%] md:w-[90%] lg:w-full">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <img
            src="/Icons & Icon-gifs/close.png"
            alt="Close"
            width={24}
            height={24}
          />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side - Thumbnails and Main Image */}
          <div className="flex gap-4 flex-col-reverse md:flex-col-reverse lg:flex-row justify-center items-center">
            <div className="flex lg:flex-col gap-2 flex-row md:flex-row justify-center">
              {product.images.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt="Thumbnail"
                  width={60}
                  height={60}
                  className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 ${
                    mainImage === img ? "border-green-500" : "border-gray-300"
                  }`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
            <Image
              src={product.image_url}
              alt={product.name}
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>

          {/* Right Side - Product Details */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Product Name & Stock Status */}
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-black">
                  {product.name}
                </h1>
                <span className="bg-green-100 text-green-600 text-sm px-3 py-1 rounded-md">
                  {product.stockStatus}
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 text-yellow-500 text-lg mt-2">
                <img
                  src="/Icons & Icon-gifs/full star.png"
                  alt="Star"
                  width={16}
                  height={16}
                />
                <img
                  src="/Icons & Icon-gifs/full star.png"
                  alt="Star"
                  width={16}
                  height={16}
                />
                <img
                  src="/Icons & Icon-gifs/full star.png"
                  alt="Star"
                  width={16}
                  height={16}
                />
                <img
                  src="/Icons & Icon-gifs/full star.png"
                  alt="Star"
                  width={16}
                  height={16}
                />
                <img
                  src="/Icons & Icon-gifs/unfull star.png"
                  alt="Empty Star"
                  width={16}
                  height={16}
                />
                <span className="text-sm text-gray-600">(4 Reviews)</span>
              </div>

              {/* Price Section */}
              <p className="text-lg text-gray-700 mt-2">
                <span className="line-through text-gray-500">
                  {product.oldPrice}
                </span>
                <span className="text-green-500 font-bold ml-2 px-2 py-1 rounded">
                  &#8377;{product.price}
                </span>
                <span className="text-sm bg-red-200 text-red-600 px-2 py-1 rounded ml-2">
                  {product.discount}
                </span>
              </p>

              {/* Brand & Share Section */}
              <div className="flex items-center justify-between border-t pt-3 mt-3 flex-col-reverse md:flex-row gap-2">
                {/* Brand Section */}
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 font-semibold">Brand:</span>
                  <Image
                    src="/Icons & Icon-gifs/Group 20.png"
                    alt="Brand Logo"
                    width={40}
                    height={20}
                    className="object-contain"
                  />
                </div>

                {/* Share Section */}
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 font-semibold">
                    Share item:
                  </span>
                  <img
                    src="/Icons & Icon-gifs/facebook.png"
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                  <img
                    src="/Icons & Icon-gifs/twitter.png"
                    alt="Twitter"
                    width={24}
                    height={24}
                  />
                  <img
                    src="/Icons & Icon-gifs/pinterest.png"
                    alt="Pinterest"
                    width={24}
                    height={24}
                  />
                  <img
                    src="/Icons & Icon-gifs/instagram.png"
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-600">{product.description}</p>
            </div>

            {/* Quantity Selector & Add to Cart */}
            <div className="flex items-center gap-4 mt-4 flex-col md:flex-row">
              <div className="flex items-center border rounded-full px-3 py-1 text-black">
                <button
                  className="px-2 text-gray-600"
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                >
                  -
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  className="px-2 text-gray-600"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <div className="flex flex-row gap-2">
                <button
                  onClick={() => addToCart(product)}
                  className="bg-green-400 text-white text-[12px] md:text-[12px] lg:text-[14px] px-6 py-2 rounded-full flex items-center gap-2 hover:scale-101 transition"
                >
                  Add to cart+{" "}
                  <img
                    src="/Icons & Icon-gifs/cart-static.png"
                    className="w-6 h-6"
                    alt="Cart GIF"
                    onMouseEnter={(e) =>
                      (e.currentTarget.src =
                        "/Icons & Icon-gifs/cart-transparent.gif")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.src =
                        "/Icons & Icon-gifs/cart-static.png")
                    }
                  />
                </button>
                {/* <button className="bg-gray-100 p-2 rounded-full text-green-500 text-xl">
                  <img
                    src="/Icons & Icon-gifs/wishlist.png"
                    alt="Wishlist"
                    width={20}
                    height={20}
                  />
                </button> */}
              </div>
            </div>

            {/* Divider Line */}
            <hr className="my-4 border-gray-300" />

            {/* Category & Tags */}
            <div className=" hidden md:block">
              <p className="text-gray-600 font-semibold">
                Category: <span className="text-black">{product.category}</span>
              </p>
              <p className="text-gray-600 font-semibold mt-1">
                Tags:
                {product.tags.map((tag, index) => (
                  <span key={index} className="ml-1 text-green-600">
                    {tag}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
