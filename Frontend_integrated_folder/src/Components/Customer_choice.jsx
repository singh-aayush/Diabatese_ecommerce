"use client";
import Link from "next/link";

const products = [
  { id: 1, name: "Diabetes Care", image: "/10 1.png" },
  { id: 2, name: "Diabetes Care", image: "/10 2.png" },
  { id: 3, name: "Diabetes Care", image: "/10 7.png" },
  { id: 4, name: "Diabetes Care", image: "/4 5.png" },
  { id: 5, name: "Diabetes Care", image: "/5 4.png" },
  { id: 6, name: "Diabetes Care", image: "/6 11.png" },
  { id: 7, name: "Diabetes Care", image: "/6 11.png" },
  { id: 8, name: "Diabetes Care", image: "/5 4.png" },
  { id: 9, name: "Diabetes Care", image: "/4 5.png" },
  { id: 10, name: "Diabetes Care", image: "/10 7.png" },
  { id: 11, name: "Diabetes Care", image: "/10 2.png" },
  { id: 12, name: "Diabetes Care", image: "/10 1.png" },
];

function CustomerChoice() {
  return (
    <section className="w-[90%] md:w-3/4 lg:w-3/4 mx-auto mt-6">
      <h1 className="text-[2rem] font-black text-center mb-6 text-black">
        Customer <span className="text-[#2cc16d]">Choice</span>
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-[5px] p-4 border flex flex-col items-center text-center"
          >
            <Link href="/stores">
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-cover mb-4"
              />
            </Link>
            <h3 className="text-lg font-bold text-black">{product.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomerChoice;
