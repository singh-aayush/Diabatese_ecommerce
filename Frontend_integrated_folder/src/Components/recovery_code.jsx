// // // "use client";
// // // import Link from "next/link";
// // // import { useState } from "react";
// // // import { Menu, X } from "lucide-react";

// // // function Header() {
// // //   const [showFilter, setShowFilter] = useState(false);
// // //   const [menuOpen, setMenuOpen] = useState(false);

// // //   return (
// // //     <>
// // //       {/* Top Section */}
// // //       <div className="bg-white text-black flex justify-between items-center px-6 py-0.5 border-b border-gray-300 fixed top-0 w-full z-50">
// // //         {/* Logo / Company Name */}
// // //         <div className="text-xl font-bold">Logo</div>

// // //         {/* Wishlist & Cart */}
// // //         <div className="flex items-center space-x-4">
// // //           {/* Wishlist Button */}
// // //           <button className="px-3 border-r-2">
// // //             <img src="/Icons & Icon-gifs/wishlist.png" className="w-7 h-7" />
// // //           </button>

// // //           {/* Cart Section */}
// // //           <div className="flex items-center space-x-4 relative">
// // //             <button className="relative">
// // //               {/* Cart Icon Container */}
// // //               <div className="w-10 h-10 flex items-center justify-center">
// // //                 {/* Cart Icon with Hover Effect */}
// // //                 <img
// // //                   src="/Icons & Icon-gifs/cart-static.png"
// // //                   className="w-8 h-8"
// // //                   alt="Cart GIF"
// // //                   onMouseEnter={(e) =>
// // //                     (e.currentTarget.src = "/Icons & Icon-gifs/cart.gif")
// // //                   }
// // //                   onMouseLeave={(e) =>
// // //                     (e.currentTarget.src = "/Icons & Icon-gifs/cart-static.png")
// // //                   }
// // //                 />
// // //               </div>

// // //               {/* Cart Count Indicator */}
// // //               <span className="absolute -top-[-2px] -right-2.5 bg-[#6EAC89] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
// // //                 3 {/* Replace this with dynamic cart count */}
// // //               </span>
// // //             </button>
// // //             {/* Cart Summary (Now Inside Flex, Not Absolute) */}
// // //             <div className="relative text-black rounded-md min-w-[90px] max-w-[110px]">
// // //               <p className="text-sm text-gray-500">Shopping Cart:</p>
// // //               <p className="text-sm"> $250</p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Main Navbar */}
// // //       <nav className="bg-black text-white py-2 px-12 fixed top-[42px] w-full z-50">
// // //         <div className="container mx-auto flex items-center justify-between">
// // //           {/* Left Section: Home and Navigation Links (Hidden on Small Screens) */}
// // //           <div className="hidden md:flex space-x-6">
// // //             <Link href="/Home">
// // //               <img src="/Icons & Icon-gifs/home-icon.svg" className="w-5 h-5" />
// // //             </Link>
// // //             <Link href="/Product">Product</Link>
// // //             <Link href="/Collection">Collection</Link>
// // //             <Link href="/Shop">Shop</Link>
// // //           </div>

// // //           {/* Middle Section: Search Bar */}
// // //           <div className="relative w-1/3 max-w-md hidden md:flex justify-center">
// // //             <input
// // //               type="text"
// // //               placeholder="Search..."
// // //               className="w-full py-2 px-4 rounded-[2rem] text-black outline-none"
// // //             />
// // //             <button className="absolute right-0 top-1/2 transform -translate-y-1/2 border border-black bg-[#6EAC89] p-2.5 rounded-[50%]">
// // //               <img
// // //                 src="/Icons & Icon-gifs/magnifier-static.png"
// // //                 className="w-5 h-5 bg-transparent"
// // //                 alt="Search"
// // //                 onMouseEnter={(e) =>
// // //                   (e.currentTarget.src = "/Icons & Icon-gifs/magnifier.gif")
// // //                 }
// // //                 onMouseLeave={(e) =>
// // //                   (e.currentTarget.src =
// // //                     "/Icons & Icon-gifs/magnifier-static.png")
// // //                 }
// // //               />
// // //             </button>
// // //           </div>

// // //           {/* Right Section: Account (Only on Desktop) */}
// // //           <div className="hidden md:flex items-center space-x-4">
// // //             <div className="text-center">
// // //               <p>Account</p>
// // //               <div className="flex space-x-2">
// // //                 <Link
// // //                   href="/Login"
// // //                   className="text-sm text-gray-400 hover:text-white"
// // //                 >
// // //                   Login
// // //                 </Link>
// // //                 <span className="text-sm text-gray-400">/</span>
// // //                 <Link
// // //                   href="/Register"
// // //                   className="text-sm text-gray-400 hover:text-white"
// // //                 >
// // //                   Register
// // //                 </Link>
// // //               </div>
// // //             </div>

// // //             <img
// // //               src="/image.png"
// // //               alt="Profile"
// // //               className="w-8 h-8 rounded-full cursor-pointer"
// // //             />
// // //           </div>

// // //           {/* Mobile View: Menu Button on Left, Search on Right */}
// // //           <div className="flex w-full justify-between items-center md:hidden">
// // //             <button
// // //               onClick={() => setMenuOpen(!menuOpen)}
// // //               className="text-white"
// // //             >
// // //               <Menu className="w-6 h-6" />
// // //             </button>
// // //             <div className="relative w-2/3 max-w-sm flex justify-center">
// // //               <input
// // //                 type="text"
// // //                 placeholder="Search..."
// // //                 className="w-full py-2 px-4 rounded-[2rem] text-black outline-none"
// // //               />
// // //               <button className="absolute right-0 top-1/2 transform -translate-y-1/2 border border-black bg-[#6EAC89] p-2.5 rounded-[50%]">
// // //                 <img
// // //                   src="/Icons & Icon-gifs/magnifier-static.png"
// // //                   className="w-5 h-5 bg-transparent"
// // //                   alt="Search"
// // //                   onMouseEnter={(e) =>
// // //                     (e.currentTarget.src = "/Icons & Icon-gifs/magnifier.gif")
// // //                   }
// // //                   onMouseLeave={(e) =>
// // //                     (e.currentTarget.src =
// // //                       "/Icons & Icon-gifs/magnifier-static.png")
// // //                   }
// // //                 />
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Responsive Mobile Menu (Only on Mobile) */}
// // //         {menuOpen && (
// // //           <div className="fixed top-0 left-0 w-[60%] h-full bg-black text-white flex flex-col p-4 space-y-4 md:hidden">
// // //             <button onClick={() => setMenuOpen(false)} className="self-end">
// // //               <X className="w-6 h-6" />
// // //             </button>
// // //             <div className="flex flex-col space-y-4 flex-grow text-center">
// // //               <Link href="/Home" onClick={() => setMenuOpen(false)}>
// // //                 Home
// // //               </Link>
// // //               <Link href="/Product" onClick={() => setMenuOpen(false)}>
// // //                 Product
// // //               </Link>
// // //               <Link href="/Collection" onClick={() => setMenuOpen(false)}>
// // //                 Collection
// // //               </Link>
// // //               <Link href="/Shop" onClick={() => setMenuOpen(false)}>
// // //                 Shop
// // //               </Link>
// // //             </div>
// // //             <div className="mt-auto">
// // //               <div className=" text-center">
// // //                 <div className="flex flex-row m-2 text-center justify-center">
// // //                   <img
// // //                     src="/image.png"
// // //                     alt="Profile"
// // //                     className="w-8 h-8 rounded-full mx-2"
// // //                   />
// // //                   <p className="p-0">Account</p>
// // //                 </div>
// // //                 <Link
// // //                   href="/Login"
// // //                   className="text-sm text-gray-400"
// // //                   onClick={() => setMenuOpen(false)}
// // //                 >
// // //                   Login / Register
// // //                 </Link>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </nav>
// // //     </>
// // //   );
// // // }

// // // export default Header;

// // const [dropdownOpen, setDropdownOpen] = useState(false);
// // const dropdownRef = useRef(null);

// // useEffect(() => {
// //   function handleClickOutside(event) {
// //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// //       setDropdownOpen(false);
// //     }
// //   }
// //   document.addEventListener("mousedown", handleClickOutside);
// //   return () => {
// //     document.removeEventListener("mousedown", handleClickOutside);
// //   };
// // }, []);

// // <div className="relative" ref={dropdownRef}>
// //   <button className="relative" onMouseEnter={() => setDropdownOpen(true)}>
// //     Shop
// //   </button>
// //   {dropdownOpen && (
// //     <div
// //       className="absolute top-full left-0 w-40 bg-white text-black shadow-md rounded-md border border-gray-300"
// //       onMouseLeave={() => setDropdownOpen(false)}
// //     >
// //       {Array.from({ length: 5 }, (_, i) => (
// //         <Link
// //           key={i}
// //           href={`/shop${i + 1}`}
// //           className="block px-4 py-2 border-b border-gray-200 hover:bg-gray-100"
// //         >
// //           Shop {i + 1}
// //         </Link>
// //       ))}
// //     </div>
// //   )}
// // </div>;

// // <div className="relative" ref={dropdownRef}>
// //   <button className="relative" onMouseEnter={() => setDropdownOpen(true)}>
// //     Shop
// //   </button>
// //   {dropdownOpen && (
// //     <div
// //       className="absolute top-full left-0 w-40 bg-white text-black shadow-md rounded-md border border-gray-300"
// //       onMouseLeave={() => setDropdownOpen(false)}
// //     >
// //       {shopLinks.map((shop, index) => (
// //         <Link
// //           key={index}
// //           href={shop.link}
// //           className="block px-4 py-2 border-b border-gray-200 hover:bg-gray-100"
// //         >
// //           {shop.name}
// //         </Link>
// //       ))}
// //     </div>
// //   )}
// // </div>;

// // // categories code

// // \"use client";
// // import { useState } from "react";
// // import Image from "next/image";
// // import { FaChevronDown, FaSearch } from "react-icons/fa";

// // const categories = [
// //   "All Categories",
// //   "Low GI Foods",
// //   "Sugar-Free Snacks",
// //   "Diabetic-Friendly Drinks",
// //   "Keto & Low-Carb",
// //   "Healthy Grains",
// //   "Supplements",
// //   "Organic Vegetables",
// //   "Protein Bars",
// //   "Dairy Alternatives",
// // ];

// // const productsList = {
// //   "Low GI Foods": [
// //     {
// //       id: 1,
// //       name: "Quinoa",
// //       image: "/stripProduct.jpg",
// //       price: 12.99,
// //       rating: 4.8,
// //       sale: true,
// //     },
// //     {
// //       id: 2,
// //       name: "Oats",
// //       image: "/category1product2.jpg",
// //       price: 7.99,
// //       rating: 4.7,
// //       sale: false,
// //     },
// //     {
// //       id: 3,
// //       name: "Brown Rice",
// //       image: "/stripProduct5.jpg",
// //       price: 9.49,
// //       rating: 4.5,
// //       sale: true,
// //     },
// //   ],
// //   "Sugar-Free Snacks": [
// //     {
// //       id: 4,
// //       name: "Almond Cookies",
// //       image: "/stripProduct22.jpg",
// //       price: 5.99,
// //       rating: 4.6,
// //       sale: true,
// //     },
// //     {
// //       id: 5,
// //       name: "Dark Chocolate",
// //       image: "/stripProduct10.jpg",
// //       price: 9.99,
// //       rating: 4.5,
// //       sale: false,
// //     },
// //     {
// //       id: 6,
// //       name: "Protein Biscuits",
// //       image: "/stripProduct9.jpg",
// //       price: 6.49,
// //       rating: 4.4,
// //       sale: true,
// //     },
// //   ],
// //   "Diabetic-Friendly Drinks": [
// //     {
// //       id: 7,
// //       name: "Green Tea",
// //       image: "/stripProduct8.webp",
// //       price: 6.49,
// //       rating: 4.9,
// //       sale: true,
// //     },
// //     {
// //       id: 8,
// //       name: "Sugar-Free Juice",
// //       image: "/stripProduct7.jpg",
// //       price: 4.99,
// //       rating: 4.3,
// //       sale: false,
// //     },
// //     {
// //       id: 9,
// //       name: "Herbal Detox Tea",
// //       image: "/stripProduct6.avif",
// //       price: 8.99,
// //       rating: 4.7,
// //       sale: true,
// //     },
// //   ],
// //   "Organic Vegetables": [
// //     {
// //       id: 10,
// //       name: "Broccoli",
// //       image: "/stripProduct5.jpg",
// //       price: 5.99,
// //       rating: 4.8,
// //       sale: false,
// //     },
// //     {
// //       id: 11,
// //       name: "Carrots",
// //       image: "/stripProduct4.webp",
// //       price: 4.99,
// //       rating: 4.6,
// //       sale: true,
// //     },
// //     {
// //       id: 12,
// //       name: "Spinach",
// //       image: "/stripProduct3.jpg",
// //       price: 3.99,
// //       rating: 4.9,
// //       sale: false,
// //     },
// //   ],

// //   "Healthy Grains": [
// //     {
// //       id: 13,
// //       name: "Barley",
// //       image: "/stripProduct2.webp",
// //       price: 12.99,
// //       rating: 4.8,
// //       sale: true,
// //     },
// //     {
// //       id: 14,
// //       name: "Oats",
// //       image: "/stripProduct.jpg",
// //       price: 7.99,
// //       rating: 4.7,
// //       sale: false,
// //     },
// //     {
// //       id: 15,
// //       name: "Brown Rice",
// //       image: "/10 7.png",
// //       price: 9.49,
// //       rating: 4.5,
// //       sale: true,
// //     },
// //   ],
// //   Supplements: [
// //     {
// //       id: 16,
// //       name: "Multivitamin Capsules",
// //       image: "/10 1.png",
// //       price: 19.99,
// //       rating: 4.9,
// //       sale: true,
// //     },
// //     {
// //       id: 17,
// //       name: "Omega-3 Fish Oil",
// //       image: "/6 11.png",
// //       price: 14.99,
// //       rating: 4.5,
// //       sale: false,
// //     },
// //     {
// //       id: 18,
// //       name: "Probiotics",
// //       image: "/5 4.png",
// //       price: 16.99,
// //       rating: 4.8,
// //       sale: true,
// //     },
// //     {
// //       id: 19,
// //       name: "Vitamin D3",
// //       image: "/3 4.png",
// //       price: 12.49,
// //       rating: 4.7,
// //       sale: false,
// //     },
// //     {
// //       id: 20,
// //       name: "Iron Tablets",
// //       image: "/4 5.png",
// //       price: 9.99,
// //       rating: 4.6,
// //       sale: true,
// //     },
// //   ],
// // };

// // // **Combine all products into "All Categories"**
// // const allProducts = Object.values(productsList).flat();
// // productsList["All Categories"] = allProducts;

// // export default function CategoryPage() {
// //   const [selectedCategory, setSelectedCategory] = useState("All Categories");
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [searchTerm, setSearchTerm] = useState("");

// //   // **Fix: Ensure filteredProducts is always an array**
// //   const filteredProducts = (
// //     selectedCategory === "All Categories"
// //       ? allProducts
// //       : productsList[selectedCategory] ?? []
// //   ).filter(
// //     (item) =>
// //       item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       item.price.toString().includes(searchTerm)
// //   );

// //   return (
// //     <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-6 pt-[140px] text-black">
// //       {/* Sidebar for Categories - Scrollable on Desktop */}
// //       <div className="w-full md:w-1/4 bg-gray-100 p-4 rounded-lg min-h-fit md:h-screen md:sticky md:top-20 overflow-y-auto">
// //         {/* Dropdown for mobile */}
// //         <div
// //           className="md:hidden flex justify-between items-center bg-white p-3 rounded-md cursor-pointer"
// //           onClick={() => setMenuOpen(!menuOpen)}
// //         >
// //           <span className="font-medium">{selectedCategory}</span>
// //           <FaChevronDown />
// //         </div>
// //         {/* Sidebar Menu */}
// //         <div className={`mt-4 md:block ${menuOpen ? "block" : "hidden"}`}>
// //           {categories.map((category) => (
// //             <button
// //               key={category}
// //               className={`block w-full text-left px-4 py-2 rounded-md font-medium mb-2 transition ${
// //                 selectedCategory === category
// //                   ? "bg-green-500 text-white"
// //                   : "bg-white text-gray-600 border"
// //               }`}
// //               onClick={() => {
// //                 setSelectedCategory(category);
// //                 setMenuOpen(false);
// //               }}
// //             >
// //               {category}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Product Section */}
// //       <div className="w-full md:w-3/4">
// //         <h1 className="text-3xl font-bold text-center mb-6">
// //           {selectedCategory}
// //         </h1>

// //         {/* Search Bar */}
// //         <div className="relative w-full mb-4">
// //           <input
// //             type="text"
// //             placeholder="Search products by name or price..."
// //             className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //           />
// //           <FaSearch className="absolute top-4 right-4 text-gray-500" />
// //         </div>

// //         {/* Product Grid */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //           {filteredProducts.length > 0 ? (
// //             filteredProducts.map((item) => (
// //               <div
// //                 key={item.id}
// //                 className="border p-4 bg-white rounded-lg shadow-md transition hover:scale-105 hover:shadow-lg"
// //               >
// //                 <Image
// //                   src={item.image}
// //                   alt={item.name}
// //                   width={200}
// //                   height={200}
// //                   className="w-full h-40 object-cover rounded-md"
// //                 />
// //                 <h3 className="font-bold text-lg mt-2">{item.name}</h3>
// //                 <p className="mt-1 text-lg font-bold text-green-600">
// //                   ${item.price.toFixed(2)}
// //                 </p>
// //                 <button className="bg-green-600 text-white px-4 py-2 mt-3 rounded-md hover:bg-green-700">
// //                   Add to Cart
// //                 </button>
// //               </div>
// //             ))
// //           ) : (
// //             <p className="text-center text-gray-500 col-span-full">
// //               No products found.
// //             </p>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// //  REcovery of all the code

// // Popular product

// "use client";
// import Link from "next/link";

// const products = [
//   {
//     id: 1,
//     name: "Organic Apple",
//     price: "5.99",
//     image: "/4 5.png",
//     sale: "10% Off",
//   },
//   {
//     id: 2,
//     name: "Fresh Banana",
//     price: "3.99",
//     image: "/5 4.png",
//     sale: "15% Off",
//   },
//   {
//     id: 3,
//     name: "Green Broccoli",
//     price: "4.49",
//     image: "/6 11.png",
//     sale: "5% Off",
//   },
//   {
//     id: 4,
//     name: "Carrot Crunch",
//     price: "2.99",
//     image: "/10 1.png",
//     sale: "20% Off",
//   },
//   {
//     id: 5,
//     name: "Juicy Orange",
//     price: "6.99",
//     image: "/10 2.png",
//     sale: "10% Off",
//   },
//   {
//     id: 6,
//     name: "Healthy Grapes",
//     price: "7.49",
//     image: "/10 7.png",
//     sale: "12% Off",
//   },
//   {
//     id: 7,
//     name: "Organic Apple",
//     price: "5.99",
//     image: "/4 5.png",
//     sale: "10% Off",
//   },
//   {
//     id: 8,
//     name: "Fresh Banana",
//     price: "3.99",
//     image: "/5 4.png",
//     sale: "15% Off",
//   },
//   {
//     id: 9,
//     name: "Green Broccoli",
//     price: "4.49",
//     image: "/6 11.png",
//     sale: "5% Off",
//   },
//   {
//     id: 10,
//     name: "Carrot Crunch",
//     price: "2.99",
//     image: "/10 1.png",
//     sale: "20% Off",
//   },
// ];

// function PopularProduct() {
//   return (
//     <section className="w-[90%] md:w-3/4 lg:w-3/4 mx-auto mt-6">
//       <h1 className="text-xl md:text-lg lg:text-[2rem] font-black text-center mb-6 text-black">
//         Popular <span className="text-[#2cc16d]">Products</span>
//       </h1>
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-[5px] p-2 md:p-3 border flex flex-col items-center text-center relative transition-all duration-300 hover:scale-101 hover:shadow-lg"
//           >
//             {/* Sale Tag */}
//             <div className="absolute top-2 right-2 bg-red-500 text-white text-xs md:text-[10px] px-2 py-1 rounded">
//               {product.sale}
//             </div>
//             <Link href="/Product_description">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover mb-4 cursor-pointer"
//               />
//             </Link>
//             {/* Product Details */}
//             <div className="w-full flex justify-between items-center">
//               <div className="flex flex-col text-left">
//                 <h3 className="text-[10px] md:text-[12px] lg:text-[12px] font-bold text-[#4D4D4D]">
//                   {product.name}
//                 </h3>
//                 <p className="text-[12px] md:text-[14px] lg:text-[16px] text-[#1A1A1A]">
//                   &#8377;{product.price}
//                 </p>
//                 <div className="flex mt-1">
//                   <img
//                     src="/Icons & Icon-gifs/full star.png"
//                     className="w-[10px] md:w-[12px] lg:w-[14px]"
//                   />
//                   <img
//                     src="/Icons & Icon-gifs/full star.png"
//                     className="w-[10px] md:w-[12px] lg:w-[14px]"
//                   />
//                   <img
//                     src="/Icons & Icon-gifs/full star.png"
//                     className="w-[10px] md:w-[12px] lg:w-[14px]"
//                   />
//                   <img
//                     src="/Icons & Icon-gifs/full star.png"
//                     className="w-[10px] md:w-[12px] lg:w-[14px]"
//                   />
//                   <img
//                     src="/Icons & Icon-gifs/unfull star.png"
//                     className="w-[9px] md:w-[11px] lg:w-[13px]"
//                   />
//                 </div>
//               </div>

//               {/* Buttons */}
//               <div className="flex flex-col space-y-2">
//                 <button className="bg-[#6EAC89] text-white py-1 px-3 md:py-2 md:px-4 lg:py-2 lg:px-2 rounded text-[10px] md:text-[10px] lg:text-[10px]">
//                   Add to Cart
//                 </button>
//                 <button className="bg-white text-black border border-black py-1 px-3 md:py-2 md:px-4 lg:py-2 lg:px-2 rounded text-[10px] md:text-[10px] lg:text-[10px]">
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default PopularProduct;

// // ProductModel

// "use client";
// import { useState } from "react";
// import Image from "next/image";

// export default function ProductModel({ isOpen, onClose, product }) {
//   const [mainImage, setMainImage] = useState(product.images[0]);
//   const [quantity, setQuantity] = useState(1);

//   if (!isOpen) return null; // Hide modal when it's not open

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-5xl w-[90%] md:w-[90%] lg:w-full">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
//         >
//           <img
//             src="/Icons & Icon-gifs/close.png"
//             alt="Close"
//             width={24}
//             height={24}
//           />
//         </button>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Left Side - Thumbnails and Main Image */}
//           <div className="flex gap-4 flex-col-reverse md:flex-col-reverse lg:flex-row justify-center items-center">
//             <div className="flex lg:flex-col gap-2 flex-row md:flex-row justify-center">
//               {product.images.map((img, index) => (
//                 <Image
//                   key={index}
//                   src={img}
//                   alt="Thumbnail"
//                   width={60}
//                   height={60}
//                   className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 ${
//                     mainImage === img ? "border-green-500" : "border-gray-300"
//                   }`}
//                   onClick={() => setMainImage(img)}
//                 />
//               ))}
//             </div>
//             <Image
//               src={mainImage}
//               alt={product.name}
//               width={400}
//               height={400}
//               className="rounded-lg"
//             />
//           </div>

//           {/* Right Side - Product Details */}
//           <div className="flex flex-col justify-between">
//             <div>
//               {/* Product Name & Stock Status */}
//               <div className="flex items-center gap-3">
//                 <h1 className="text-2xl font-bold text-black">
//                   {product.name}
//                 </h1>
//                 <span className="bg-green-100 text-green-600 text-sm px-3 py-1 rounded-md">
//                   {product.stockStatus}
//                 </span>
//               </div>

//               {/* Rating */}
//               <div className="flex items-center gap-2 text-yellow-500 text-lg mt-2">
//                 <img
//                   src="/Icons & Icon-gifs/full star.png"
//                   alt="Star"
//                   width={16}
//                   height={16}
//                 />
//                 <img
//                   src="/Icons & Icon-gifs/full star.png"
//                   alt="Star"
//                   width={16}
//                   height={16}
//                 />
//                 <img
//                   src="/Icons & Icon-gifs/full star.png"
//                   alt="Star"
//                   width={16}
//                   height={16}
//                 />
//                 <img
//                   src="/Icons & Icon-gifs/full star.png"
//                   alt="Star"
//                   width={16}
//                   height={16}
//                 />
//                 <img
//                   src="/Icons & Icon-gifs/unfull star.png"
//                   alt="Empty Star"
//                   width={16}
//                   height={16}
//                 />
//                 <span className="text-sm text-gray-600">(4 Reviews)</span>
//               </div>

//               {/* Price Section */}
//               <p className="text-lg text-gray-700 mt-2">
//                 <span className="line-through text-gray-500">
//                   {product.oldPrice}
//                 </span>
//                 <span className="text-green-500 font-bold ml-2 px-2 py-1 rounded">
//                   &#8377;{product.price}
//                 </span>
//                 <span className="text-sm bg-red-200 text-red-600 px-2 py-1 rounded ml-2">
//                   {product.discount}
//                 </span>
//               </p>

//               {/* Brand & Share Section */}
//               <div className="flex items-center justify-between border-t pt-3 mt-3 flex-col-reverse md:flex-row gap-2">
//                 {/* Brand Section */}
//                 <div className="flex items-center gap-2">
//                   <span className="text-gray-600 font-semibold">Brand:</span>
//                   <Image
//                     src="/Icons & Icon-gifs/Group 20.png"
//                     alt="Brand Logo"
//                     width={40}
//                     height={20}
//                     className="object-contain"
//                   />
//                 </div>

//                 {/* Share Section */}
//                 <div className="flex items-center gap-2">
//                   <span className="text-gray-600 font-semibold">
//                     Share item:
//                   </span>
//                   <img
//                     src="/Icons & Icon-gifs/facebook.png"
//                     alt="Facebook"
//                     width={24}
//                     height={24}
//                   />
//                   <img
//                     src="/Icons & Icon-gifs/twitter.png"
//                     alt="Twitter"
//                     width={24}
//                     height={24}
//                   />
//                   <img
//                     src="/Icons & Icon-gifs/pinterest.png"
//                     alt="Pinterest"
//                     width={24}
//                     height={24}
//                   />
//                   <img
//                     src="/Icons & Icon-gifs/instagram.png"
//                     alt="Instagram"
//                     width={24}
//                     height={24}
//                   />
//                 </div>
//               </div>

//               {/* Description */}
//               <p className="mt-4 text-gray-600">{product.description}</p>
//             </div>

//             {/* Quantity Selector & Add to Cart */}
//             <div className="flex items-center gap-4 mt-4 flex-col md:flex-row">
//               <div className="flex items-center border rounded-full px-3 py-1 text-black">
//                 <button
//                   className="px-2 text-gray-600"
//                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                 >
//                   -
//                 </button>
//                 <span className="px-4">{quantity}</span>
//                 <button
//                   className="px-2 text-gray-600"
//                   onClick={() => setQuantity(quantity + 1)}
//                 >
//                   +
//                 </button>
//               </div>
//               <div className="flex flex-row gap-2">
//                 <button className="bg-green-400 text-white text-[12px] md:text-[12px] lg:text-[14px] px-6 py-2 rounded-full flex items-center gap-2 hover:scale-101 transition">
//                   Add to cart+{" "}
//                   <img
//                     src="/Icons & Icon-gifs/cart-static.png"
//                     className="w-6 h-6"
//                     alt="Cart GIF"
//                     onMouseEnter={(e) =>
//                       (e.currentTarget.src =
//                         "/Icons & Icon-gifs/cart-transparent.gif")
//                     }
//                     onMouseLeave={(e) =>
//                       (e.currentTarget.src =
//                         "/Icons & Icon-gifs/cart-static.png")
//                     }
//                   />
//                 </button>
//                 <button className="bg-gray-100 p-2 rounded-full text-green-500 text-xl">
//                   <img
//                     src="/Icons & Icon-gifs/wishlist.png"
//                     alt="Wishlist"
//                     width={20}
//                     height={20}
//                   />
//                 </button>
//               </div>
//             </div>

//             {/* Divider Line */}
//             <hr className="my-4 border-gray-300" />

//             {/* Category & Tags */}
//             <div className=" hidden md:block">
//               <p className="text-gray-600 font-semibold">
//                 Category: <span className="text-black">{product.category}</span>
//               </p>
//               <p className="text-gray-600 font-semibold mt-1">
//                 Tags:
//                 {product.tags.map((tag, index) => (
//                   <span key={index} className="ml-1 text-green-600">
//                     {tag}
//                   </span>
//                 ))}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // page model of page -description

// "use client";
// import { useState } from "react";
// import "@/styles/ProductDetails.module.css";
// import ProductModel from "@/Components/Product_description/ProductModel";
// import { Calendar, MessageCircle, User, Tag } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// const product = {
//   name: "Stevia Extract",
//   description:
//     "Chinese Cabbage, also known as Napa Cabbage, is a highly versatile vegetable widely used in Asian cuisines. It has a mild, sweet flavor with a tender, crunchy texture, making it an excellent ingredient for stir-fries, soups, kimchi, and fresh salads.",
//   price: "17.28",
//   oldPrice: "48.00",
//   discount: "64% off",
//   stockStatus: "In Stock",
//   category: "Healthy Food",
//   tags: ["Healthy", "Organic", "Green Cabbage"],
//   images: [
//     "/stripProduct6.avif",
//     "/stripProduct7.jpg",
//     "/stripProduct8.webp",
//     "/stripProduct9.jpg",
//   ],
//   details: [
//     "Chinese Cabbage, also known as Napa Cabbage, is a highly versatile vegetable widely used in Asian cuisines.",
//     "It has a mild, sweet flavor with a tender, crunchy texture, making it an excellent ingredient for stir-fries, soups, kimchi, and fresh salads.",
//     "Chinese Cabbage is low in calories and high in fiber, making it an excellent choice for weight loss and digestive health.",
//     "It is also a good source of vitamins A, C, and K, as well as minerals like potassium, calcium, and magnesium.",
//     "It is also rich in antioxidants, which can help protect your cells from damage and reduce inflammation in the body.",
//   ],
//   videoThumbnail: "/videos/video-thumbnail.mp4",
//   discountBadge: "Save 64% Today!",
//   discountCoupon: "USE CODE: SAVE64",
//   originalBadge: "100% Original Product",
// };

// const relatedProducts = [
//   {
//     id: 1,
//     name: "Green Apple",
//     image: "/stripProduct.jpg",
//     price: "14.99",
//     rating: 4.5,
//     sale: true,
//   },
//   {
//     id: 2,
//     name: "Cauliflower",
//     image: "/stripProduct5.jpg",
//     price: "14.99",
//     rating: 4,
//   },
//   {
//     id: 3,
//     name: "Green Capsicum",
//     image: "/stripProduct7.jpg",
//     price: "14.99",
//     rating: 4.7,
//     sale: true,
//   },
//   {
//     id: 4,
//     name: "Ladies Finger",
//     image: "/stripProduct8.webp",
//     price: "14.99",
//     rating: 4.2,
//   },
//   {
//     id: 5,
//     name: "Organic Tomatoes",
//     image: "/category1Product1.webp",
//     price: "8.99",
//     rating: 4.8,
//   },
//   {
//     id: 6,
//     name: "Fresh Broccoli",
//     image: "/category1Product2.jpg",
//     price: "11.49",
//     rating: 4.6,
//     sale: true,
//   },
//   {
//     id: 7,
//     name: "Red Bell Pepper",
//     image: "/category1Product3.webp",
//     price: "13.99",
//     rating: 4.4,
//     sale: false,
//   },
//   {
//     id: 8,
//     name: "Organic Spinach",
//     image: "/category1Product4.jpg",
//     price: "7.49",
//     rating: 4.9,
//     sale: true,
//   },
// ];

// export default function ProductPage() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [mainImage, setMainImage] = useState(product.images[0]);
//   const [quantity, setQuantity] = useState(1);
//   const [activeTab, setActiveTab] = useState("description");

//   return (
//     <div className="max-w-7xl mx-auto mt-14 p-4 rounded-lg pt-[100px]">
//       {/* Product Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
//         <div className="flex gap-4 w-full md:w-full lg:w-45 items-start justify-center flex-col-reverse md:flex-col-reverse lg:flex-row">
//           {/* Thumbnail Images (Left Side) */}
//           <div className="w-full md:w-full lg:w-16 flex flex-row md:flex-row lg:flex-col justify-center gap-2 pt-4 md:mt-0">
//             {product.images.map((img, index) => (
//               <Image
//                 key={index}
//                 src={img}
//                 alt="Thumbnail"
//                 width={80}
//                 height={80}
//                 className={`w-16 h-16  bg-red-200 object-cover rounded-md cursor-pointer border-2 {
//                   mainImage === img ? "border-green-500" : "border-gray-300"
//                 }`}
//                 onClick={() => setMainImage(img)}
//               />
//             ))}
//           </div>

//           {/* Main Image */}
//           <Image
//             src={mainImage}
//             alt={product.name}
//             width={400}
//             height={400}
//             className="rounded-lg w-full"
//           />
//         </div>

//         {/* Product Details */}
//         <div className="bg-white p-5 rounded-lg shadow-md">
//           <div className="flex items-center gap-3">
//             <h1 className="text-3xl font-bold text-black">{product.name}</h1>
//             <span className="bg-green-100 text-green-600 text-sm px-3 py-1 rounded-md">
//               {product.stockStatus}
//             </span>
//           </div>

//           <div className="flex items-center gap-2 text-yellow-500 text-lg mt-2">
//             {"★".repeat(4)}
//             {"☆"}
//             <span className="text-sm text-gray-600">(21,564 Reviews)</span>
//           </div>

//           <p className="text-lg text-gray-700 mt-2">
//             <span className="line-through text-gray-500">
//               &#8377;{product.oldPrice}
//             </span>
//             <span className="text-green-500 font-bold ml-2 px-2 py-1 rounded">
//               &#8377;{product.price}
//             </span>
//             <span className="text-sm bg-red-200 text-red-600 px-2 py-1 rounded ml-2">
//               {product.discount}
//             </span>
//           </p>

//           {/* Brand & Share Section */}
//           <div className="flex flex-col-reverse md:flex-row gap-2 items-center justify-between border-t pt-3 mt-3">
//             {/* Brand Section */}
//             <div className="flex items-center gap-2">
//               <span className="text-gray-600 font-semibold">Brand:</span>
//               <Image
//                 src="/Icons & Icon-gifs/Group 20.png"
//                 alt="Brand Logo"
//                 width={40}
//                 height={20}
//                 className="object-contain"
//               />
//             </div>

//             {/* Share Section */}
//             <div className="flex items-center gap-2 mt-4">
//               <span className="text-gray-600 font-semibold">Share item:</span>
//               <a href="#">
//                 <img
//                   src="/Icons & Icon-gifs/facebook.png"
//                   alt="Facebook"
//                   className="w-8 h-8"
//                 />
//               </a>
//               <a href="#">
//                 <img
//                   src="/Icons & Icon-gifs/twitter.png"
//                   alt="Twitter"
//                   className="w-8 h-8"
//                 />
//               </a>
//               <a href="#">
//                 <img
//                   src="/Icons & Icon-gifs/pinterest.png"
//                   alt="Pinterest"
//                   className="w-8 h-8"
//                 />
//               </a>
//               <a href="#">
//                 <img
//                   src="/Icons & Icon-gifs/instagram.png"
//                   alt="Instagram"
//                   className="w-8 h-8"
//                 />
//               </a>
//             </div>
//           </div>

//           <p className="mt-4 text-gray-600">{product.description}</p>

//           {/* Quantity Selector + Add to Cart + Wishlist */}
//           <div className="flex items-center gap-4 mt-4 flex-col md:flex-row lg:flex-row">
//             {/* Quantity Selector */}
//             <div className="flex items-center border rounded-full px-3 py-1 text-black">
//               <button
//                 className="px-2 text-gray-600"
//                 onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
//               >
//                 -
//               </button>
//               <span className="px-4">{quantity}</span>
//               <button
//                 className="px-2 text-gray-600"
//                 onClick={() => setQuantity(quantity + 1)}
//               >
//                 +
//               </button>
//             </div>

//             {/* Add to Cart Button */}
//             <div className="flex flex-row gap-2">
//               <button className="bg-green-400 text-[12px] md:text-[12px] lg:text-[14px] text-white px-4 py-2 md:px-6 md:py-2 rounded-full flex items-center gap-2 hover:bg-green-300 transition md:w-auto">
//                 Add to Cart{" "}
//                 <img
//                   src="/Icons & Icon-gifs/cart-static.png"
//                   className="w-8 h-8"
//                   alt="Cart GIF"
//                   onMouseEnter={(e) =>
//                     (e.currentTarget.src =
//                       "/Icons & Icon-gifs/cart-transparent.gif")
//                   }
//                   onMouseLeave={(e) =>
//                     (e.currentTarget.src = "/Icons & Icon-gifs/cart-static.png")
//                   }
//                 />
//               </button>

//               {/* Wishlist Button */}
//               <button className="bg-green-100 p-2 rounded-full text-green-500 text-xl">
//                 <img
//                   src="/Icons & Icon-gifs/wishlist.png"
//                   className="w-10 h-10"
//                 />
//               </button>
//             </div>
//           </div>

//           {/* Divider Line */}
//           <hr className="my-4 border-gray-300" />

//           {/* Category & Tags */}
//           <p className="mt-3 text-gray-700">
//             <span className="font-semibold">Category:</span> {product.category}
//           </p>
//           <p className="mt-1 text-gray-700 flex lg:flex-row">
//             <span className="font-semibold">Tags:</span>{" "}
//             {product.tags.map((tag, index) => (
//               <span
//                 key={index}
//                 className="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded ml-1 flex flex-col md:flex-col lg:flex-row gap-2 text-center items-center"
//               >
//                 <Tag size={16} />
//                 {tag}
//               </span>
//             ))}
//           </p>
//         </div>
//       </div>

//       {/* Description & Right Side Content */}
//       <div className="mt-10 flex flex-col md:flex-row gap-6">
//         <div className="flex-1 bg-gray-100 p-6 rounded-md">
//           {/* Tabs */}
//           <div className="flex justify-center border-b pb-2">
//             {["description", "additionalInfo", "customerFeedback"].map(
//               (tab) => (
//                 <button
//                   key={tab}
//                   className={`px-4 py-2 font-semibold text-sm md:text-base {
//                     activeTab === tab
//                       ? "text-green-600 border-b-2 border-green-600"
//                       : "text-gray-500"
//                   }`}
//                   onClick={() => setActiveTab(tab)}
//                 >
//                   {tab === "description"
//                     ? "Description"
//                     : tab === "additionalInfo"
//                     ? "Additional Information"
//                     : "Customer Feedback"}
//                 </button>
//               )
//             )}
//           </div>

//           {/* Tab Content */}
//           <div className="mt-4 p-2 md:p-4">
//             {activeTab === "description" && (
//               <p className="text-gray-700">{product.details.join(" ")}</p>
//             )}
//             {activeTab === "additionalInfo" && (
//               <p className="text-gray-700">
//                 This is additional product information.
//               </p>
//             )}
//             {activeTab === "customerFeedback" && (
//               <p className="text-gray-700">Customer feedback will be here.</p>
//             )}
//           </div>
//         </div>

//         {/* Right Side Content */}
//         <div className=" w-full md:w-1/3">
//           {/* Video Card - Fixed */}
//           <div className="bg-white-200 p-4 rounded-md w-full">
//             <video controls className="w-full rounded-md">
//               <source src={product.videoThumbnail} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>

//           {/* Discount Coupon */}
//           <div className="bg-yellow-200 text-yellow-700 p-3 rounded-md text-center mt-4">
//             {product.discountCoupon}
//           </div>

//           {/* 100% Original Badge */}
//           <div className="flex items-center text-green-600 font-semibold mt-4">
//             <img />
//             {product.originalBadge}
//           </div>
//         </div>
//       </div>

//       {/* Related Products Section */}
//       <div className="mt-10">
//         <h2 className="text-lg lg:text-[2rem] font-black text-center border-b pb-4 text-black">
//           Related <span className="text-[#2cc16d]">Products</span>
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-4">
//           {relatedProducts.map((item) => (
//             <div
//               key={item.id}
//               className="border p-4 bg-white cursor-pointer rounded-lg  hover:scale-101 hover:shadow-lg relative transition-all duration-300 "
//             >
//               {/* Sale Badge */}
//               {item.sale && (
//                 <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-0.5 rounded-[5px] text-xs">
//                   Sale 10%
//                 </span>
//               )}

//               {/* Product Image */}
//               <Link href="/Product_description">
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   width={200}
//                   height={200}
//                   className="w-full h-52 object-cover rounded-md"
//                 />
//               </Link>

//               {/* Product Name */}
//               <h3 className="font-bold text-[14px] mt-2 text-black">
//                 {item.name}
//               </h3>

//               {/* Price & Rating */}
//               <p className="mt-1 text-[14px] font-bold text-green-600">
//                 &#8377;{item.price}
//               </p>
//               <p className="text-yellow-500 text-sm">
//                 {"★".repeat(Math.floor(item.rating))}
//                 {"☆".repeat(5 - Math.floor(item.rating))}
//               </p>

//               {/* Cart Button */}
//               <button className="absolute bottom-7 right-4 bg-green-300 text-white p-2 rounded-full shadow-md hover:bg-green-200 transition">
//                 {" "}
//                 <img
//                   src="/Icons & Icon-gifs/cart-static.png"
//                   className="w-6 h-6"
//                   alt="Cart GIF"
//                   onMouseEnter={(e) =>
//                     (e.currentTarget.src =
//                       "/Icons & Icon-gifs/cart-transparent.gif")
//                   }
//                   onMouseLeave={(e) =>
//                     (e.currentTarget.src = "/Icons & Icon-gifs/cart-static.png")
//                   }
//                 />
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto mt-14 p-4">
//         <h2 className="text-lg lg:text-[2rem] font-black text-center border-b pb-4 text-black">
//           Seleted <span className="text-[#2cc16d]">Product</span>
//         </h2>
//         <h1 className="text-3xl font-bold text-black pt-4">{product.name}</h1>
//         <p className="text-green-500 text-[1rem] font-semibold">
//           &#8377;{product.price}
//         </p>
//         {/* Open Pop-up Button */}
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="mt-4 bg-green-400 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-green-300 transition"
//         >
//           View Details{" "}
//           <img
//             src="/Icons & Icon-gifs/cart-static.png"
//             className="w-6 h-6"
//             alt="Cart GIF"
//             onMouseEnter={(e) =>
//               (e.currentTarget.src = "/Icons & Icon-gifs/cart-transparent.gif")
//             }
//             onMouseLeave={(e) =>
//               (e.currentTarget.src = "/Icons & Icon-gifs/cart-static.png")
//             }
//           />
//         </button>
//         {/* Modal Component */}
//         <ProductModel
//           isOpen={isModalOpen}
//           onClose={() => setIsModalOpen(false)}
//           product={product}
//         />
//       </div>
//     </div>
//   );
// }

// // Feature Products

// "use client";
// import Link from "next/link";

// const products = [
//   {
//     id: 1,
//     name: "Organic Apple",
//     price: "5.99",
//     image: "/4 5.png",
//     sale: "10% Off",
//   },
//   {
//     id: 2,
//     name: "Fresh Banana",
//     price: "3.99",
//     image: "/5 4.png",
//     sale: "15% Off",
//   },
//   {
//     id: 3,
//     name: "Green Broccoli",
//     price: "4.49",
//     image: "/6 11.png",
//     sale: "5% Off",
//   },
//   {
//     id: 4,
//     name: "Carrot Crunch",
//     price: "2.99",
//     image: "/10 1.png",
//     sale: "20% Off",
//   },
//   {
//     id: 5,
//     name: "Juicy Orange",
//     price: "6.99",
//     image: "/10 2.png",
//     sale: "10% Off",
//   },
// ];

// function FeatureProduct() {
//   return (
//     <section className="w-[90%] md:w-3/4 lg:w-3/4 mx-auto mt-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-lg lg:text-[2rem] font-black text-black">
//           Featured <span className="text-[#2cc16d]">Prodcuts</span>
//         </h1>
//         <a href="#" className="text-green-600 font-semibold">
//           View All →
//         </a>
//       </div>
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-[5px] p-2 border flex flex-col items-center text-center relative transition-all duration-300 hover:scale-101 hover:shadow-lg"
//           >
//             {/* Sale Tag */}
//             <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
//               {product.sale}
//             </div>
//             <Link href="/Product_description">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover mb-4 cursor-pointer"
//               />
//             </Link>

//             {/* Product Details */}
//             <div className="w-full flex justify-between items-center">
//               <div className="flex flex-col text-left">
//                 <h3 className="text-[12px] font-bold text-[#4D4D4D]">
//                   {product.name}
//                 </h3>
//                 <p className="text-[14px] text-[#1A1A1A]">
//                   &#8377;{product.price}
//                 </p>
//                 <div className="flex mt-1">
//                   <img
//                     src="/Icons & Icon-gifs/full star.png"
//                     className="w-[12px] h-[12px]"
//                   />
//                   <img
//                     src="/Icons & Icon-gifs/full star.png"
//                     className="w-[12px] h-[12px]"
//                   />
//                   <img
//                     src="/Icons & Icon-gifs/full star.png"
//                     className="w-[12px] h-[12px]"
//                   />
//                   <img
//                     src="/Icons & Icon-gifs/full star.png"
//                     className="w-[12px] h-[12px]"
//                   />
//                   <img
//                     src="/Icons & Icon-gifs/unfull star.png"
//                     className="w-[11px] h-[11px]"
//                   />
//                 </div>
//               </div>

//               {/* Buttons */}
//               <div className="flex flex-col space-y-2">
//                 <button className="bg-[#6EAC89] text-white py-2 px-4 rounded text-[10px]">
//                   Add to Cart
//                 </button>
//                 <button className="bg-white text-black border border-black py-2 px-4 rounded text-[10px]">
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default FeatureProduct;
