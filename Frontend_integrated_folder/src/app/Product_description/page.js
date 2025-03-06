"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "@/styles/ProductDetails.module.css";
import ProductModel from "@/Components/Product_description/ProductModel";
import { Calendar, MessageCircle, User, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const product = {
  name: "Stevia Extract",
  description:
    "Chinese Cabbage, also known as Napa Cabbage, is a highly versatile vegetable widely used in Asian cuisines. It has a mild, sweet flavor with a tender, crunchy texture, making it an excellent ingredient for stir-fries, soups, kimchi, and fresh salads.",
  price: "17.28",
  oldPrice: "48.00",
  discount: "64% off",
  stockStatus: "In Stock",
  category: "Healthy Food",
  tags: ["Healthy", "Organic", "Green Cabbage"],
  images: [
    "/stripProduct6.avif",
    "/stripProduct7.jpg",
    "/stripProduct8.webp",
    "/stripProduct9.jpg",
  ],
  details: [
    "Chinese Cabbage, also known as Napa Cabbage, is a highly versatile vegetable widely used in Asian cuisines.",
    "It has a mild, sweet flavor with a tender, crunchy texture, making it an excellent ingredient for stir-fries, soups, kimchi, and fresh salads.",
    "Chinese Cabbage is low in calories and high in fiber, making it an excellent choice for weight loss and digestive health.",
    "It is also a good source of vitamins A, C, and K, as well as minerals like potassium, calcium, and magnesium.",
    "It is also rich in antioxidants, which can help protect your cells from damage and reduce inflammation in the body.",
  ],
  videoThumbnail: "/videos/video-thumbnail.mp4",
  discountBadge: "Save 64% Today!",
  discountCoupon: "USE CODE: SAVE64",
  originalBadge: "100% Original Product",
};

const relatedProducts = [
  {
    id: 1,
    name: "Green Apple",
    image: "/stripProduct.jpg",
    price: "14.99",
    rating: 4.5,
    sale: true,
  },
  {
    id: 2,
    name: "Cauliflower",
    image: "/stripProduct5.jpg",
    price: "14.99",
    rating: 4,
  },
  {
    id: 3,
    name: "Green Capsicum",
    image: "/stripProduct7.jpg",
    price: "14.99",
    rating: 4.7,
    sale: true,
  },
  {
    id: 4,
    name: "Ladies Finger",
    image: "/stripProduct8.webp",
    price: "14.99",
    rating: 4.2,
  },
  {
    id: 5,
    name: "Organic Tomatoes",
    image: "/category1Product1.webp",
    price: "8.99",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Fresh Broccoli",
    image: "/category1Product2.jpg",
    price: "11.49",
    rating: 4.6,
    sale: true,
  },
  {
    id: 7,
    name: "Red Bell Pepper",
    image: "/category1Product3.webp",
    price: "13.99",
    rating: 4.4,
    sale: false,
  },
  {
    id: 8,
    name: "Organic Spinach",
    image: "/category1Product4.jpg",
    price: "7.49",
    rating: 4.9,
    sale: true,
  },
];

export default function ProductPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mainImage, setMainImage] = useState("");
  const [userId, setUserId] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [relatedProducts, setRelatedProducts] = useState([]);

  const router = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const originalPrice = parseFloat(params.get("price")) || 0;
      const discount = parseFloat(params.get("discount")) || 0;
      const discountedPrice = originalPrice - (originalPrice * discount) / 100;

      const fetchedProduct = {
        id: params.get("id"),
        name: params.get("name"),
        price: discountedPrice.toFixed(2),
        originalPrice: originalPrice.toFixed(2),
        description: params.get("description"),
        image_url: params.get("image_url"),
        discount: params.get("discount"),
        images: params.get("image_url") ? [params.get("image_url")] : [],
        tags: [params.get("category") || "General"], // Default tag if not provided
        details: params.get("description")
          ? [params.get("description")]
          : ["No additional details available."], // Ensure images array exists
      };

      setProduct(fetchedProduct);
      setMainImage(fetchedProduct.image_url || "/default-image.jpg");
    }
  }, []);

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
    } catch (error) {
      console.error("Failed to add to cart:", error.response?.data || error);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/products/") // Replace with actual API
      .then((response) => {
        setRelatedProducts(response.data);
      })

      .catch((error) =>
        console.error("Error fetching related products:", error)
      );
  }, []);

  if (!product) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto mt-14 p-4 rounded-lg pt-[100px]">
      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="flex gap-4 w-full md:w-full lg:w-45 items-start justify-center flex-col-reverse md:flex-col-reverse lg:flex-row">
          {/* Thumbnail Images (Left Side) */}
          <div className="w-full md:w-full lg:w-16 flex flex-row md:flex-row lg:flex-col justify-center gap-2 pt-4 md:mt-0">
            {product.images?.map((img, index) => (
              <Image
                key={index}
                src={img} // Use 'img' instead of 'mainImage'
                alt={product.name}
                width={80}
                height={80}
                className={`w-16 h-16 bg-red-200 object-cover rounded-md cursor-pointer border-2 ${
                  mainImage === img ? "border-green-500" : "border-gray-300"
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>

          {/* Main Image */}
          <Image
            src={mainImage}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-lg w-full"
          />
        </div>

        {/* Product Details */}
        <div className="bg-white p-5 rounded-lg shadow-md">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-black">{product.name}</h1>
            <span className="bg-green-100 text-green-600 text-sm px-3 py-1 rounded-md">
              {`In Stock`}
            </span>
          </div>

          <div className="flex items-center gap-2 text-yellow-500 text-lg mt-2">
            {"★".repeat(4)}
            {"☆"}
            <span className="text-sm text-gray-600">(21,564 Reviews)</span>
          </div>

          <p className="text-lg text-gray-700 mt-2">
            <span className="line-through text-gray-500">
              &#8377;{product.originalPrice}
            </span>
            <span className="text-green-500 font-bold ml-2 px-2 py-1 rounded">
              &#8377;{product.price}
            </span>
            <span className="text-sm bg-red-200 text-red-600 px-2 py-1 rounded ml-2">
              {product.discount}%
            </span>
          </p>

          {/* Brand & Share Section */}
          <div className="flex flex-col-reverse md:flex-row gap-2 items-center justify-between border-t pt-3 mt-3">
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
            <div className="flex items-center gap-2 mt-4">
              <span className="text-gray-600 font-semibold">Share item:</span>
              <a href="#">
                <img
                  src="/Icons & Icon-gifs/facebook.png"
                  alt="Facebook"
                  className="w-8 h-8"
                />
              </a>
              <a href="#">
                <img
                  src="/Icons & Icon-gifs/twitter.png"
                  alt="Twitter"
                  className="w-8 h-8"
                />
              </a>
              <a href="#">
                <img
                  src="/Icons & Icon-gifs/pinterest.png"
                  alt="Pinterest"
                  className="w-8 h-8"
                />
              </a>
              <a href="#">
                <img
                  src="/Icons & Icon-gifs/instagram.png"
                  alt="Instagram"
                  className="w-8 h-8"
                />
              </a>
            </div>
          </div>

          <p className="mt-4 text-gray-600">{product.description}</p>

          {/* Quantity Selector + Add to Cart + Wishlist */}
          <div className="flex items-center gap-4 mt-4 flex-col md:flex-row lg:flex-row">
            {/* Quantity Selector */}
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

            {/* Add to Cart Button */}
            <div className="flex flex-row gap-2">
              <button
                onClick={() => addToCart(product)}
                className="bg-green-400 text-[12px] md:text-[12px] lg:text-[14px] text-white px-4 py-2 md:px-6 md:py-2 rounded-full flex items-center gap-2 hover:bg-green-300 transition md:w-auto"
              >
                Add to Cart{" "}
                <img
                  src="/Icons & Icon-gifs/cart-static.png"
                  className="w-8 h-8"
                  alt="Cart GIF"
                  onMouseEnter={(e) =>
                    (e.currentTarget.src =
                      "/Icons & Icon-gifs/cart-transparent.gif")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.src = "/Icons & Icon-gifs/cart-static.png")
                  }
                />
              </button>

              {/* Wishlist Button */}
              {/* <button className="bg-green-100 p-2 rounded-full text-green-500 text-xl">
                <img
                  src="/Icons & Icon-gifs/wishlist.png"
                  className="w-10 h-10"
                />
              </button> */}
            </div>
          </div>

          {/* Divider Line */}
          <hr className="my-4 border-gray-300" />

          {/* Category & Tags */}
          <p className="mt-3 text-gray-700">
            <span className="font-semibold">Category:</span> {product.category}
          </p>
          <p className="mt-1 text-gray-700 flex lg:flex-row">
            <span className="font-semibold">Tags:</span>{" "}
            {product.tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded ml-1 flex flex-col md:flex-col lg:flex-row gap-2 text-center items-center"
              >
                {tag}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* Description & Right Side Content */}
      <div className="mt-10 flex flex-col md:flex-row gap-6">
        <div className="flex-1 bg-gray-100 p-6 rounded-md mt-4">
          <div className="flex justify-center border-b pb-2">
            {["description", "additionalInfo", "customerFeedback"].map(
              (tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 font-semibold text-sm md:text-base ${
                    activeTab === tab
                      ? "text-green-600 border-b-2 border-green-600"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "description"
                    ? "Description"
                    : tab === "additionalInfo"
                    ? "Additional Information"
                    : "Customer Feedback"}
                </button>
              )
            )}
          </div>

          {/* Tab Content */}
          <div className="mt-4 p-2 md:p-4">
            {activeTab === "description" && (
              <p className="text-gray-700">
                {product.details?.length
                  ? product.details.join(" ")
                  : "No additional details available."}
              </p>
            )}
            {activeTab === "additionalInfo" && (
              <p className="text-gray-700">
                This is additional product information.
              </p>
            )}
            {activeTab === "customerFeedback" && (
              <p className="text-gray-700">Customer feedback will be here.</p>
            )}
          </div>
        </div>

        {/* Right Side Content */}
        <div className=" w-full md:w-1/3">
          {/* Video Card - Fixed */}
          <div className="bg-white-200 p-4 rounded-md w-full">
            <video controls className="w-full rounded-md">
              <source src={product.videoThumbnail} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Discount Coupon */}
          <div className="bg-yellow-200 text-yellow-700 p-3 rounded-md text-center mt-4">
            {`CODE:7891`}
          </div>

          {/* 100% Original Badge */}
          <div className="flex items-center text-green-600 font-semibold mt-4">
            <img />
            {product.originalBadge}
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-10">
        <h2 className="text-lg lg:text-[2rem] font-black text-center border-b pb-4 text-black">
          Related <span className="text-[#2cc16d]">Products</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-4">
          {relatedProducts.map((item) => (
            <div
              key={item.id}
              className="border p-4 bg-white cursor-pointer rounded-lg  hover:scale-101 hover:shadow-lg relative transition-all duration-300 "
            >
              {/* Sale Badge */}

              <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-0.5 rounded-[5px] text-xs">
                {item.discount}%
              </span>

              {/* Product Image */}
              <Link href="/Product_description">
                <Image
                  src={item.image_url}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="w-full h-52 object-cover rounded-md"
                />
              </Link>

              {/* Product Name */}
              <h3 className="font-bold text-[14px] mt-2 text-black">
                {item.name}
              </h3>

              {/* Price & Rating */}
              <p className="mt-1 text-[14px] font-bold text-green-600">
                &#8377;{item.price}
              </p>
              <p className="text-yellow-500 text-sm">
                {"★".repeat(Math.floor(item.rating))}
                {"☆".repeat(5 - Math.floor(item.rating))}
              </p>

              {/* Cart Button */}
              <button
                onClick={() => addToCart(product)}
                className="absolute bottom-7 right-4 bg-green-300 text-white p-2 rounded-full shadow-md hover:bg-green-200 transition"
              >
                {" "}
                <img
                  src="/Icons & Icon-gifs/cart-static.png"
                  className="w-6 h-6"
                  alt="Cart GIF"
                  onMouseEnter={(e) =>
                    (e.currentTarget.src =
                      "/Icons & Icon-gifs/cart-transparent.gif")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.src = "/Icons & Icon-gifs/cart-static.png")
                  }
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-14 p-4">
        <h2 className="text-lg lg:text-[2rem] font-black text-center border-b pb-4 text-black">
          Seleted <span className="text-[#2cc16d]">Product</span>
        </h2>
        <h1 className="text-3xl font-bold text-black pt-4">{product.name}</h1>
        <p className="text-green-500 text-[1rem] font-semibold">
          &#8377;{product.price}
        </p>
        {/* Open Pop-up Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-4 bg-green-400 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-green-300 transition"
        >
          View Details{" "}
          <img
            src="/Icons & Icon-gifs/cart-static.png"
            className="w-6 h-6"
            alt="Cart GIF"
            onMouseEnter={(e) =>
              (e.currentTarget.src = "/Icons & Icon-gifs/cart-transparent.gif")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.src = "/Icons & Icon-gifs/cart-static.png")
            }
          />
        </button>
        {/* Modal Component */}
        <ProductModel
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={product}
        />
      </div>
    </div>
  );
}
