"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [showFilter, setShowFilter] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartTotals, setCartTotals] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [cartTotal, setCartTotal] = useState(0);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Function to update total from localStorage
    const updateCartTotal = () => {
      const storedTotal = localStorage.getItem("cartTotal");
      if (storedTotal) {
        setCartTotals(parseFloat(storedTotal));
      }
    };

    // Update when component mounts
    updateCartTotal();
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const shopLinks = [{ name: "store 1", link: "/stores" }];

  return (
    <>
      {/* Top Section */}
      <div className="bg-white text-black flex justify-between items-center px-6 py-0.5 border-b border-gray-300 fixed top-0 w-full z-50">
        {/* Logo / Company Name */}
        <div className="text-xl font-bold">Logo</div>

        {/* Wishlist & Cart */}
        <div className="flex items-center space-x-4">
          {/* Wishlist Button */}
          {/* <Link href="/Wishlist">
            <button className="px-3 border-r-2">
              <img src="/Icons & Icon-gifs/wishlist.png" className="w-7 h-7" />
            </button>
          </Link> */}

          {/* Cart Section */}
          <div className="flex items-center space-x-4 relative">
            <Link href="/Cart">
              <button className="relative">
                {/* Cart Icon Container */}
                <div className="w-10 h-10 flex items-center justify-center">
                  {/* Cart Icon with Hover Effect */}
                  <img
                    src="/Icons & Icon-gifs/cart-static.png"
                    className="w-8 h-8"
                    alt="Cart GIF"
                    onMouseEnter={(e) =>
                      (e.currentTarget.src = "/Icons & Icon-gifs/cart.gif")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.src =
                        "/Icons & Icon-gifs/cart-static.png")
                    }
                  />
                </div>

                {/* Cart Count Indicator */}
                {/* <span className="absolute -top-[-2px] -right-2.5 bg-[#6EAC89] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  3 {/* Replace this with dynamic cart count 
                </span> */}
              </button>
            </Link>
            {/* Cart Summary (Now Inside Flex, Not Absolute) */}
            <div className="relative text-black rounded-md min-w-[90px] max-w-[110px]">
              <p className="text-sm text-gray-500">Shopping Cart:</p>
              {/* <p className="text-sm"> &#8377;{cartTotals}</p> */}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-black text-white py-2 px-12 fixed top-[42px] w-full z-50">
        <div className="container mx-auto flex items-center justify-between">
          {/* Left Section: Home and Navigation Links (Hidden on Small Screens) */}
          <div className="hidden md:flex space-x-6">
            <Link href="/Home">
              <img src="/Icons & Icon-gifs/home-icon.svg" className="w-5 h-5" />
            </Link>
            <Link href="/Products">Product</Link>
            <Link href="/categories">Categories</Link>
            <div className="relative" ref={dropdownRef}>
              <button
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
              >
                Stores
              </button>
              {dropdownOpen && (
                <div
                  className="absolute top-full left-0 w-40 bg-white text-black shadow-md rounded-md border border-gray-300"
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  {shopLinks.map((shop, index) => (
                    <Link
                      key={index}
                      href={shop.link}
                      className="block px-4 py-2 border-b border-gray-200 hover:bg-gray-100"
                    >
                      {shop.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Middle Section: Search Bar */}
          <div className="relative w-1/3 max-w-md hidden md:flex justify-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-4 rounded-[2rem] text-black outline-none"
            />
            <Link href="/Products">
              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 border border-black bg-[#6EAC89] p-2.5 rounded-[50%]">
                <img
                  src="/Icons & Icon-gifs/magnifier-static.png"
                  className="w-5 h-5 bg-transparent"
                  alt="Search"
                  onMouseEnter={(e) =>
                    (e.currentTarget.src = "/Icons & Icon-gifs/magnifier.gif")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.src =
                      "/Icons & Icon-gifs/magnifier-static.png")
                  }
                />
              </button>
            </Link>
          </div>

          {/* Right Section: Account (Only on Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-center">
              <p>Account</p>
              <div className="flex space-x-2">
                <Link
                  href="/Login"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Login
                </Link>
                <span className="text-sm text-gray-400">/</span>
                <Link
                  href="/Register"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Register
                </Link>
              </div>
            </div>

            <img
              src="/image.png"
              alt="Profile"
              className="w-8 h-8 rounded-full cursor-pointer"
            />
          </div>

          {/* Mobile View: Menu Button on Left, Search on Right */}
          <div className="flex w-full justify-between items-center md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="relative w-2/3 max-w-sm flex justify-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 px-4 rounded-[2rem] text-black outline-none"
              />
              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 border border-black bg-[#6EAC89] p-2.5 rounded-[50%]">
                <img
                  src="/Icons & Icon-gifs/magnifier-static.png"
                  className="w-5 h-5 bg-transparent"
                  alt="Search"
                  onMouseEnter={(e) =>
                    (e.currentTarget.src = "/Icons & Icon-gifs/magnifier.gif")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.src =
                      "/Icons & Icon-gifs/magnifier-static.png")
                  }
                />
              </button>
            </div>
          </div>
        </div>

        {/* Responsive Mobile Menu (Only on Mobile) */}
        {menuOpen && (
          <div className="fixed top-0 left-0 w-[60%] h-full bg-black text-white flex flex-col p-4 space-y-4 md:hidden">
            <button onClick={() => setMenuOpen(false)} className="self-end">
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col space-y-4 flex-grow text-center">
              <Link href="/Home" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link href="/Product" onClick={() => setMenuOpen(false)}>
                Product
              </Link>
              <Link href="/categories" onClick={() => setMenuOpen(false)}>
                Categories
              </Link>
              <Link href="/store" onClick={() => setMenuOpen(false)}>
                Stores
              </Link>
            </div>
            <div className="mt-auto">
              <div className=" text-center">
                <div className="flex flex-row m-2 text-center justify-center">
                  <img
                    src="/image.png"
                    alt="Profile"
                    className="w-8 h-8 rounded-full mx-2"
                  />
                  <p className="p-0">Account</p>
                </div>
                <Link
                  href="/Login"
                  className="text-sm text-gray-400"
                  onClick={() => setMenuOpen(false)}
                >
                  Login / Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
