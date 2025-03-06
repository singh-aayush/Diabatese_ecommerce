"use client";

import { useEffect, useState } from "react";

export default function CategorySelector() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isClient, setIsClient] = useState(false);

  // Ensuring the component only renders on the client to avoid SSR hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  const categories = [
    {
      id: 1,
      name: "All Categories",
      count: null,
      isParent: true,
      isOpen: true,
    },
  ];

  const handleRadioChange = (id) => {
    setSelectedCategory(id);
  };

  // Avoid rendering mismatched content during SSR
  if (!isClient)
    return <div className="p-4 bg-white">Loading categories...</div>;

  return (
    <div className="w-4.5 p-4 border rounded-md bg-white text-black">
      <h2 className="font-bold mb-4">Filters :</h2>
      <h3 className=" mb-4">Select a Category:</h3>

      {categories.map((category) => (
        <label
          key={category.id}
          className="flex items-center mb-2 cursor-pointer lg:text-[14px] md:text-[12px] text-9px"
        >
          <input
            type="radio"
            name="category"
            value={category.id}
            checked={selectedCategory === category.id}
            onChange={() => handleRadioChange(category.id)}
            className="mr-2"
          />
          {category.name} {category.count !== null && `(${category.count})`}
        </label>
      ))}

      {/* <h3 className="font-bold mt-4">Selected Category:</h3>
      <p>{selectedCategory ? categories.find(cat => cat.id === selectedCategory)?.name : "None"}</p> */}
    </div>
  );
}
