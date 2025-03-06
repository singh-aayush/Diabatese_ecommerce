"use client";
import axios from "axios";
import { use, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function FeatureProduct() {
  const [products, setProducts] = useState([]);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // ✅ Ensure setLoading is defined
        const response = await axios.get("http://localhost:8000/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // ✅ Ensure setLoading is defined
      }
    };

    fetchData();
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

  if (loading) {
    return <p>Loading...</p>; // Display a loading message while fetching data
  }

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

  return (
    <section className="w-[90%] md:w-3/4 lg:w-3/4 mx-auto mt-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg lg:text-[2rem] font-black text-black">
          Featured <span className="text-[#2cc16d]">Prodcuts</span>
        </h1>
        <a href="#" className="text-green-600 font-semibold">
          View All →
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-[5px] p-2 border flex flex-col items-center text-center relative transition-all duration-300 hover:scale-101 hover:shadow-lg"
          >
            {/* Sale Tag */}
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              {product.discount}% Off
            </div>

            <img
              src={product.image_url}
              alt={product.name}
              className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover mb-4 cursor-pointer"
              onClick={() => handleProductClick(product)}
            />

            {/* Product Details */}
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col text-left">
                <h3 className="text-[12px] font-bold text-[#4D4D4D]">
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
    </section>
  );
}

export default FeatureProduct;
