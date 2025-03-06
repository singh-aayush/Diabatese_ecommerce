"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function PopularTagsFilter() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedTags, setSelectedTags] = useState([
    "Healthy",
    "Herbal",
    "Vegetarian",
  ]);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      // Auto-close on mobile
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    // Initial check
    checkIfMobile();

    // Add resize listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const tags = ["Diabetic-Friendly"];

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="border rounded-md p-4 pb-0 bg-white text-black">
      <div
        className="flex justify-between items-center mb-4 cursor-pointer"
        onClick={toggleFilter}
      >
        <h3 className="font-medium">Popular Tag</h3>
        <button className="text-xl">
          <span>{isOpen ? "▾" : "▸"}</span>
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-wrap gap-2 pb-4">
          {tags.map((tag) => (
            <Link href="/Products">
              <button
                key={tag}
                className={`px-3 py-1 rounded-full text-sm  ${
                  selectedTags.includes(tag)
                    ? "bg-green-300 bg-bg-green-600"
                    : "bg-gray-100 text-gray-700"
                }`}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
