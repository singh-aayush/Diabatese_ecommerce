"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

function ProductCard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState(null);
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

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <section className="w-[90%] md:w-full lg:w-full mx-auto mt-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-[5px] p-2 md:p-3 border flex flex-col items-center text-center relative transition-all duration-300 hover:scale-101 hover:shadow-lg"
          >
            {/* Sale Tag */}
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs md:text-[10px] px-2 py-1 rounded">
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
                <h3 className="text-[10px] md:text-[10px] lg:text-[10px] font-bold text-[#4D4D4D]">
                  {product.name}
                </h3>
                <p className="text-[12px] md:text-[14px] lg:text-[16px] text-[#1A1A1A]">
                  &#8377;{product.price}
                </p>
                <div className="flex mt-1">
                  <img
                    src="/Icons & Icon-gifs/full star.png"
                    className="w-[10px] md:w-[12px] lg:w-[14px]"
                  />
                  <img
                    src="/Icons & Icon-gifs/full star.png"
                    className="w-[10px] md:w-[12px] lg:w-[14px]"
                  />
                  <img
                    src="/Icons & Icon-gifs/full star.png"
                    className="w-[10px] md:w-[12px] lg:w-[14px]"
                  />
                  <img
                    src="/Icons & Icon-gifs/full star.png"
                    className="w-[10px] md:w-[12px] lg:w-[14px]"
                  />
                  <img
                    src="/Icons & Icon-gifs/unfull star.png"
                    className="w-[9px] md:w-[11px] lg:w-[13px]"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => addToCart(product)}
                  className="bg-[#6EAC89] text-white py-1 px-3 md:py-2 md:px-4 lg:py-2 lg:px-2 rounded text-[10px] md:text-[10px] lg:text-[10px]"
                >
                  Add to Cart
                </button>
                <Link href="/billing">
                  <button className="bg-white text-black border border-black py-1 px-3 md:py-2 md:px-4 lg:py-2 lg:px-2 rounded text-[10px] md:text-[10px] lg:text-[10px]">
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

export default ProductCard;
