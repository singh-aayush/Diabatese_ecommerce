"use client";

import Image from "next/image";
import { useState } from "react";

function Newsletter() {
  const [activeIcon, setActiveIcon] = useState(null);

  return (
    <section className="w-full bg-[#F7F7F7] py-10">
      <div className="w-full md:w-full lg:w-3/4 mx-auto flex flex-col md:flex-col lg:flex-row md:justify-center md:items-center md:text-center  items-center justify-between text-center">
        {/* Heading and Description */}
        <div className="w-2/3 md:w-2/3 lg:w-1/3 lg:text-left lg:pr-8 md:mb-4 md:text-center mb-4 lg:mb-0 text-center">
          <h1 className="text-2xl font-black text-black mb-2">
            Subscribe Our <span className="text-[#2cc16d]">Newsletter</span>
          </h1>
          <p className="text-[12px] text-gray-600 w-[85%] mx-auto">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna.
          </p>
        </div>

        {/* Input Section */}
        <div className="w-2/3 md:w-1/2 lg:w-1/3 flex items-center border border-gray-300 rounded-full overflow-hidden ml-8 relative">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full lg:px-4 lg:py-2 px-2 py-1 lg:text-[1rem] text-[12px] outline-none text-gray-700 pr-32"
          />
          <button className="bg-[#00B207] text-white px-2 py-1 lg:px-6 lg:py-2 text-[12px] lg:text-[1rem] rounded-[2rem] absolute right-0">
            Subscribe
          </button>
        </div>

        {/* Social Icons */}
        <div className="w-2/3 md:w-1/2 lg:w-1/3 flex lg:justify-end lg:space-x-4 md:justify-center md:mt-4 justify-center">
          {[
            { id: 1, src: "/Icons & Icon-gifs/facebook.png", alt: "Facebook" },
            { id: 2, src: "/Icons & Icon-gifs/twitter.png", alt: "Twitter" },
            {
              id: 3,
              src: "/Icons & Icon-gifs/pinterest.png",
              alt: "Pinterest",
            },
            { id: 4, src: "/Icons & Icon-gifs/insta.png", alt: "Instagram" },
          ].map((icon) => (
            <div
              key={icon.id}
              className={`p-3 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 ${
                activeIcon === icon.id ? "bg-[#00B207]" : "bg-transparent"
              }`}
              onClick={() => setActiveIcon(icon.id)}
            >
              <Image src={icon.src} alt={icon.alt} width={25} height={25} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
