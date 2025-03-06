import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";
import PopularTagsFilter from "./PopularTagsFilter";

export default function MobileFilterButton() {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <>
      {/* Mobile filter button */}
      <div className="md:hidden">
        <button
          className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md"
          onClick={toggleFilters}
        >
          <span className="mr-2">Filter</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Mobile filter modal/drawer */}
        {showFilters && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-end">
            <div className="bg-white w-full rounded-t-lg p-4 max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium">Filters</h2>
                <button className="text-gray-500" onClick={toggleFilters}>
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <CategoryFilter />
                <PriceFilter />
                <RatingFilter />
                <PopularTagsFilter />
              </div>

              <div className="mt-4 flex justify-between">
                <button
                  className="px-4 py-2 border border-gray-300 rounded-md"
                  onClick={() => {
                    // Reset filters functionality would go here
                    toggleFilters();
                  }}
                >
                  Reset
                </button>
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded-md"
                  onClick={() => {
                    // Apply filters functionality would go here
                    toggleFilters();
                  }}
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
