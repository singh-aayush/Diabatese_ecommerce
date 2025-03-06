"use client";
import { useState, useEffect } from "react";
import PriceFilter from "@/Components/Shop_components/PriceFilter";
import RatingFilter from "@/Components/Shop_components/RatingFilter";
import PopularTagsFilter from "@/Components/Shop_components/PopularTagsFilter";
import MobileFilterButton from "@/Components/Shop_components/MobileFilterButton";
import DiscountBanner from "@/Components/Shop_components/DiscountBanner";
import CategorySelector from "@/Components/Shop_components/CategoryFilter";
import ProductCard from "@/Components/Shop_components/ProductCard";
import Link from "next/link";

// Sample product data
const sampleProducts = [
  {
    id: 1,
    name: "Organic Carrots",
    price: 2.99,
    image: "/images/vegetables/carrots.jpg",
    rating: 4.5,
    category: "vegetables",
  },
  {
    id: 2,
    name: "Fresh Spinach",
    price: 3.49,
    image: "/images/vegetables/spinach.jpg",
    rating: 4.3,
    category: "vegetables",
  },
  {
    id: 3,
    name: "Red Bell Peppers",
    price: 1.99,
    image: "/images/vegetables/peppers.jpg",
    rating: 4.7,
    category: "vegetables",
  },
  {
    id: 4,
    name: "Broccoli",
    price: 2.49,
    image: "/images/vegetables/broccoli.jpg",
    rating: 4.2,
    category: "vegetables",
  },
];

export default function ShopPage() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [products, setProducts] = useState(sampleProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 21; // Based on pagination shown in the image

  // Check if we're on mobile for initial sidebar visibility
  useEffect(() => {
    const checkIfMobile = () => {
      if (window.innerWidth < 768) {
        setShowSidebar(false);
      } else {
        setShowSidebar(true);
      }
    };

    // Initial check
    checkIfMobile();

    // Add resize listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // For a real application, you would fetch products from an API like this:
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch('/api/products');
  //       const data = await response.json();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //       setProducts([]);
  //     }
  //   };
  //
  //   fetchProducts();
  // }, []);

  // Pagination handler
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // In a real app, you would fetch the products for the current page
    // fetchProducts(page);
  };

  return (
    <div className="container w-[90%]  mx-auto px-4 py-8 pt-[120px]">
      {/* Breadcrumb */}
      <div className="flex items-center mb-6 text-sm">
        <a href="/" className="text-gray-600">
          Home
        </a>
        <span className="mx-2 text-black">›</span>
        <a href="/categories" className="text-gray-600">
          Categories
        </a>
        <span className="mx-2 text-black">›</span>
        <span className="text-green-500">store 1</span>
      </div>

      {/* Mobile filter button - only shown on mobile */}
      <div className="md:hidden mb-4">
        <MobileFilterButton />
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar - hidden on mobile, shown on desktop */}
        <div
          className={`w-full md:w-1/4 space-y-4 ${
            showSidebar ? "" : "hidden md:block"
          }`}
        >
          <CategorySelector />
          <PriceFilter />
          <RatingFilter />
          <PopularTagsFilter />

          {/* Advertisement Banner */}
          <div className="mt-6">
            <DiscountBanner
              title="Fresh vegetables"
              discount="79%"
              description="Discount on your first order"
              buttonText="Shop Now"
            />
          </div>
        </div>

        {/* Main content */}
        <div className="w-full md:w-3/4 text-black">
          <div className="flex justify-between items-center mb-6">
            <div className="text-[12px] md:text-[1rem]">20 Results Found</div>
            <div className="flex items-center text-[12px] md:text-[1rem]">
              <span className="mr-2">Sort by:</span>
              <select className="w-[9rem] md:w-[12rem] border rounded-md p-2 cursor-pointer">
                <option>Latest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
            </div>
          </div>

          <ProductCard />

          {/* Pagination */}
          <div className="flex justify-center items-center mt-8 space-x-2">
            {/* Previous Button */}
            <button
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-black"
              onClick={() =>
                currentPage > 1 && handlePageChange(currentPage - 1)
              }
              disabled={currentPage === 1}
            >
              &lt;
            </button>

            {/* Page Numbers Logic */}
            {Array.from({ length: Math.min(5, totalPages) }).map((_, index) => {
              let pageNumber;

              if (totalPages <= 5) {
                pageNumber = index + 1;
              } else {
                pageNumber = currentPage + index;
                if (pageNumber > totalPages - 1) {
                  pageNumber = totalPages - (4 - index);
                }
              }

              // Show Ellipsis Before Last Page
              if (index === 4 && pageNumber < totalPages - 1) {
                return <span key="ellipsis">...</span>;
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

            {/* Last Page Button */}
            {currentPage < totalPages - 4 && (
              <button
                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                  currentPage === totalPages
                    ? "bg-green-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => handlePageChange(totalPages)}
              >
                {totalPages}
              </button>
            )}

            {/* Next Button */}
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
      </div>
    </div>
  );
}
