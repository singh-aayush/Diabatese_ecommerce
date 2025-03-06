"use client";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="w-[90%] md:w-3/4 lg:w-3/4 pt-[100px] mx-auto flex flex-col lg:flex-row gap-4 mt-6">
      {/* ---------------------- 🖥️ Desktop & Laptop View (Large Screens) ---------------------- */}
      {/* Left Container (Main Banner) */}
      <div className="left-container w-full lg:w-[60%] bg-[rgba(53,139,91,0.74)] text-white p-6 md:p-8 flex flex-col lg:flex-row rounded-lg justify-center items-center text-center lg:text-left min-w-[250px]">
        {/* 🖼️ Image (For Desktop: Right side) */}
        <div className="w-full lg:w-1/2 flex justify-center items-center lg:order-2">
          <img
            src="/3 4.png"
            className="w-[60%] md:w-[70%] lg:w-[80%] max-w-[250px] md:max-w-none"
          />
        </div>

        {/* 📝 Text Content (For Desktop: Left side) */}
        <div className="left-container-content w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start gap-4 text-center md:text-left">
          <h1 className="text-[28px] md:text-[32px] font-bold leading-tight">
            Healthy Organic Products
          </h1>
          <div className="mt-2 flex flex-col gap-2 text-start items-start border-l-2 px-4">
            <p>
              Sale up to{" "}
              <span className="bg-[#FF8A00] rounded-md py-1 px-2">30% Off</span>
            </p>
            <p className="text-[10px]">Free shipping on all your orders.</p>
          </div>
          <Link href="/stores">
            <button className="mt-4 px-6 py-2 bg-white text-[#00B207] rounded-[2rem]">
              Shop Now →
            </button>
          </Link>
        </div>
      </div>

      {/* Right Containers */}
      <div className="w-full lg:w-[40%] flex flex-col md:flex-row lg:flex-col gap-4 min-w-[250px]">
        {/* 🔹 Top Right Container (SUMMER SALE) */}
        <div className="second-container w-full md:w-1/2 lg:w-full h-[12rem] md:h-[15rem] bg-[rgba(255,131,193,0.22)] text-white flex flex-col justify-center py-4 px-6 text-start rounded-lg min-w-[250px]">
          <p className="text-[12px] text-[#1A1A1A]">SUMMER SALE</p>
          <h1 className="text-[1.2rem] md:text-[1.5rem] text-[#1A1A1A] font-bold">
            75% OFF
          </h1>
          <p className="text-[10px] text-[#666666]">Only Fruit & Vegetable</p>
          <a href="/stores" className="text-[#00B207] text-[1rem]">
            Shop Now →
          </a>
        </div>

        {/* 🔹 Bottom Right Container (Background Image) */}
        <div
          className="w-full md:w-1/2 lg:w-full h-[12rem] md:h-[15rem] bg-cover bg-center text-white flex items-center justify-center text-xl font-bold rounded-lg min-w-[250px]"
          style={{ backgroundImage: "url('/Bannar.png')" }}
        ></div>
      </div>
    </section>
  );
}

export default HeroSection;
