"use client";
import { useEffect, useState } from "react";
import ProductCard from "../Shop_components/ProductCard";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function ProductPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    category: "",
    price: "",
    rating: "",
    sortBy: "Latest",
  });
  const router = useRouter();

  useEffect(() => {
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

  const totalPages = 10; // Example total pages
  const totalResults = 256; // Example total results

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (key, value) => {
    setSelectedFilters({ ...selectedFilters, [key]: value });
  };

  const removeFilter = (key) => {
    setSelectedFilters({ ...selectedFilters, [key]: "" });
  };

  return (
    <div className="w-[95%] mx-auto text-black pt-[120px]">
      {/* Breadcrumb Navigation */}
      <div className="flex flex-wrap items-center mb-4 text-sm">
        <a href="/" className="text-gray-600">
          Home
        </a>
        <span className="mx-2 text-black">›</span>
        <a href="/categories" className="text-gray-600">
          Categories
        </a>
        <span className="mx-2 text-black">›</span>
        <span className="text-green-500">Product</span>
      </div>

      {/* Filter & Sort Options */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="flex flex-wrap space-x-2 md:space-x-4">
          <select
            className="border rounded-md p-2 cursor-pointer w-full md:w-auto"
            onChange={(e) => handleFilterChange("category", e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Diabatese">Diabatese</option>
          </select>

          <select
            className="border rounded-md p-2 cursor-pointer w-full md:w-auto"
            onChange={(e) => handleFilterChange("price", e.target.value)}
          >
            <option value="">Select Price</option>
            <option value="Low">Low</option>
            <option value="High">High</option>
          </select>

          <select
            className="border rounded-md p-2 cursor-pointer w-full md:w-auto"
            onChange={(e) => handleFilterChange("rating", e.target.value)}
          >
            <option value="">Select Rating</option>
            <option value="4+">4+ Stars</option>
          </select>
        </div>

        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <span className="text-sm">Sort by:</span>
          <select
            className="border rounded-md p-2 cursor-pointer"
            onChange={(e) => handleFilterChange("sortBy", e.target.value)}
          >
            <option>Latest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
          </select>
        </div>
      </div>

      {/* Active Filters Section */}
      <div className="flex flex-wrap items-center justify-between py-2 border-t-2 border-b-2 mt-4">
        <div className="text-sm py-2 font-semibold">Active Filters:</div>
        <div className="flex flex-wrap space-x-2">
          {Object.entries(selectedFilters).map(([key, value]) =>
            value ? (
              <div
                key={key}
                className="px-3 py-1 rounded-md bg-gray-300 flex items-center"
              >
                {value}
                <button
                  onClick={() => removeFilter(key)}
                  className="ml-2 text-black font-bold"
                >
                  ×
                </button>
              </div>
            ) : null
          )}
        </div>
      </div>

      {/* Product Cards */}
      <ProductCard />

      {/* Pagination */}
      <div className="flex flex-wrap justify-center items-center mt-8 mb-8 space-x-2">
        <button
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-black"
          onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        {Array.from({ length: Math.min(5, totalPages) }).map((_, index) => {
          let pageNumber = currentPage + index;
          if (pageNumber > totalPages) {
            pageNumber = totalPages - (4 - index);
          }
          return (
            <button
              key={pageNumber}
              className={`w-8 h-8 flex items-center justify-center rounded-full ${
                currentPage === pageNumber
                  ? "bg-green-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200"
          onClick={() =>
            currentPage < totalPages && handlePageChange(currentPage + 1)
          }
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
