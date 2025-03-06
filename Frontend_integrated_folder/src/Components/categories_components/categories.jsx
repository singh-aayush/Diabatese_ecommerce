"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Medicines & Supplements",
    items: [
      { name: "Prescription Medicines", image: "/stripproduct.jpg" },
      { name: "OTC Medicines", image: "/stripproduct9.jpg" },
      { name: "Vitamins & Supplements", image: "/stripproduct2.webp" },
      { name: "Ayurvedic Medicines", image: "/stripproduct3.jpg" },
      { name: "Homeopathy Medicines", image: "/stripproduct7.jpg" },
      { name: "Health Drinks", image: "/stripproduct8.webp" },
      { name: "Immunity Boosters", image: "/stripproduct4.webp" },
    ],
  },
  {
    title: "Personal Care",
    items: [
      { name: "Skin Care", image: "/stripproduct5.jpg" },
      { name: "Hair Care", image: "/stripproduct6.avif" },
      { name: "Oral Care", image: "/stripproduct10.jpg" },
      { name: "Body Care", image: "/stripproduct22.jpg" },
      { name: "Baby Care", image: "/stripproductch5.jpg" },
      { name: "Feminine Hygiene", image: "/category1product4.jpg" },
      { name: "Men's Grooming", image: "/category1product2.jpg" },
    ],
  },
  {
    title: "Health Essentials",
    items: [
      { name: "Medical Devices", image: "/image 1.png" },
      { name: "Diabetic Care", image: "/image 2.png" },
      { name: "Covid Essentials", image: "/3 4.png" },
      { name: "First Aid", image: "/5 4.png" },
    ],
  },
];

const newInStore = [
  { name: "Fitness Equipment", discount: "85%", image: "/10 2.png" },
  { name: "Health Monitors", discount: "90%", image: "/10 7.png" },
  { name: "Mobility Aids", discount: "95%", image: "/6 11.png" },
  { name: "Wellness Products", discount: "50%", image: "/10 1.png" },
  { name: "Hearing Aids", discount: "70%", image: "/10 7.png" },
];

export default function CategoryPage() {
  const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto p-6 pt-[140px] text-black">
      <h1 className="text-[14px] lg:text-[2rem] font-bold text-center mb-8">
        Shop by <span className="text-[#2cc16d]">Category</span>
      </h1>

      {categories.map((section, index) => (
        <div key={index} className="mb-10 p-6 rounded-lg bg-gray-200">
          <h2 className="text-[16px] lg:text-[20px] font-bold mb-6">
            {section.title}
          </h2>
          <Link href="/Products">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {section.items.map((category, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center cursor-pointer hover:scale-105 transition bg-white p-4 rounded-lg"
                  onClick={() =>
                    router.push(`/stores?category=${category.name}`)
                  }
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={200}
                    height={200}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <p className="text-center text-[14px] font-bold mt-2">
                    {category.name}
                  </p>
                </div>
              ))}
            </div>
          </Link>
        </div>
      ))}

      {/* New in Store Section */}
      <h2 className="text-[16px] lg:text-[2rem] font-bold text-center my-10">
        New in <span className="text-[#2cc16d]">store</span>
      </h2>
      <Link href="/stores">
        <div className="bg-blue-100 p-6 rounded-lg grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {newInStore.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center cursor-pointer hover:scale-105 transition bg-white p-4 rounded-lg overflow-hidden"
            >
              {/* Discount Badge */}ded-bl-n
              <div className="absolute text-black w-[5rem] h-[3rem] border-none rounded-tr-md rounded-br-md rounded-tl-none rounone top-36 left-0 bg-blue-100  text-xs font-bold px-3 py-1">
                Up to {item.discount} OFF
              </div>
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
                className="w-full h-40 object-cover"
              />
              <p className="text-center text-lg font-bold mt-2">{item.name}</p>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
}
