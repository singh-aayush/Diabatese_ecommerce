"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

function PocketFriendlyContainer() {
  const [products, setProducts] = useState([]);
  const [userId, setUserId] = useState(null);
  const [timeLeft, setTimeLeft] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/products"); // Replace with your local API endpoint
        setProducts(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = async (product) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in first.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/cart/",
        { product_id: product.id, quantity: 1 },
        {
          headers: { Authorization: `Bearer ${token}` }, // ✅ Include the auth token
        }
      );
    } catch (error) {
      console.error("Failed to add to cart:", error.response?.data || error);
    }
  };

  const calculateTimeLeft = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3); // Offer ends in 3 days
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          "0"
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }
    return timeLeft;
  };

  const handleProductClick = (product) => {
    const queryString = new URLSearchParams({
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      image_url: product.image_url,
      discount: product.discount,
    }).toString();

    router.push(`/Product_description?${queryString}`);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[#F7F7F7] py-10 mx-auto my-[4rem]">
      <div className="w-[90%] md:w-3/4 lg:w-3/4 mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-lg lg:text-[2rem] font-black text-black">
            Pocket Friendly <span className="text-[#2cc16d]">Deals</span>
          </h1>
          <a href="#" className="text-green-600 font-semibold">
            View All →
          </a>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 md:grid-cols-3 grid-cols-2">
          {/* Large Product Card */}
          {products.length > 0 && (
            <div className="col-span-2 row-span-2 bg-white rounded-lg px-8 py-4 border relative flex flex-col items-center text-center transition-all duration-300 hover:scale-101 hover:shadow-lg">
              <div className="absolute top-4 right-4 flex space-x-2">
                <span className="bg-red-500 text-white px-2 py-1 text-xs rounded">
                  {products[0].discount}% Off
                </span>
                <span className="bg-blue-500 text-white px-2 py-1 text-xs rounded">
                  Best Sale
                </span>
              </div>
              <img
                src={products[0].image_url}
                alt={products[0].name}
                className="w-[16rem] h-[16rem] object-cover mb-4"
                onClick={() => handleProductClick(products[0])}
              />
              <div className="w-full flex justify-center space-x-2 mb-2 relative  mt-2">
                {/* <button className="px-4 py-2 rounded-[50%] bg-[#F2F2F2] w-16 h-16">
                  <img
                    src="/Icons & Icon-gifs/wishlist.png"
                    className="w-10 h-10"
                  />
                </button> */}
                <button
                  onClick={() => addToCart(products[0])}
                  className="w-[75%] h-16 px-4 bg-green-600 text-white rounded-[2rem]"
                >
                  Add to Cart
                </button>
              </div>
              <h3 className="text-lg font-bold text-green-800 mt-2">
                {products[0].name}
              </h3>
              <p className="text-xl font-semibold text-green-600 py-2">
                &#8377;
                {(
                  products[0].price -
                  (products[0].price * products[0].discount) / 100
                ).toFixed(2)}
                <span className="text-sm text-gray-500 line-through ml-2">
                  &#8377;{products[0].price}
                </span>
              </p>
              <p className="text-gray-600 flex flex-row items-center">
                <img
                  src="/Icons & Icon-gifs/full star.png"
                  className="w-[12px] h-[12px]"
                />
                <img
                  src="/Icons & Icon-gifs/full star.png"
                  className="w-[12px] h-[12px]"
                />
                <img
                  src="/Icons & Icon-gifs/full star.png"
                  className="w-[12px] h-[12px]"
                />
                <img
                  src="/Icons & Icon-gifs/full star.png"
                  className="w-[12px] h-[12px]"
                />
                <img
                  src="/Icons & Icon-gifs/unfull star.png"
                  className="w-[11px] h-[11px]"
                />{" "}
                <span className="px-2">({products[0].feedback} feedback)</span>
              </p>
              <p className="text-red-500 font-semibold mt-2">
                Hurry Up! Offer ends in:
              </p>
              <div className="text-lg font-bold flex justify-center space-x-6 mt-1 text-black">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="flex flex-col items-center">
                    <span>{value}</span> {/* Time value */}
                    <span className="text-sm text-[#999999] mt-1 uppercase">
                      {unit}
                    </span>{" "}
                    {/* Label with spacing & color */}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other Product Cards */}
          {products.slice(1).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg py-2 px-2 border flex flex-col items-center text-center justify-center relative transition-all duration-300 hover:scale-101 hover:shadow-lg"
            >
              <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {product.discount}% Off
              </div>
              <img
                src={product.image_url}
                alt={product.name}
                className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover mb-4 cursor-pointer"
                onClick={() => handleProductClick(product)}
              />
              <div className="w-full flex justify-between items-center">
                <div className="flex flex-col text-left">
                  <h3 className="text-[10px] font-bold text-[#4D4D4D]">
                    {product.name}
                  </h3>
                  <p className="text-[14px] text-[#1A1A1A]">
                    &#8377;{product.price}
                  </p>
                  <div className="flex mt-1">
                    <img
                      src="/Icons & Icon-gifs/full star.png"
                      className="w-[12px] h-[12px]"
                    />
                    <img
                      src="/Icons & Icon-gifs/full star.png"
                      className="w-[12px] h-[12px]"
                    />
                    <img
                      src="/Icons & Icon-gifs/full star.png"
                      className="w-[12px] h-[12px]"
                    />
                    <img
                      src="/Icons & Icon-gifs/full star.png"
                      className="w-[12px] h-[12px]"
                    />
                    <img
                      src="/Icons & Icon-gifs/unfull star.png"
                      className="w-[11px] h-[11px]"
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-[#6EAC89] text-white py-2 px-4 rounded text-[10px]"
                  >
                    Add to Cart
                  </button>
                  <Link href="/billing">
                    <button className="bg-white text-black border border-black py-2 px-4 rounded text-[10px]">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PocketFriendlyContainer;
