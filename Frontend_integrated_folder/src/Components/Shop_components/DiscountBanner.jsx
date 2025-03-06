import Link from "next/link";

export default function DiscountBanner() {
  return (
    <div className="border rounded-md overflow-hidden bg-white">
      <div className="relative">
        <img
          src="/discount-banner.jpg"
          alt="Fresh vegetables"
          className="w-full h-32 object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-green-500/80 to-yellow-500/80 flex flex-col justify-center items-center text-white">
          <div className="text-3xl font-bold">79%</div>
          <div>Discount</div>
          <div className="text-sm">on your first order</div>
          <Link href="/Products">
            <button className="mt-2 bg-white text-green-600 px-4 py-1 rounded-full text-sm font-medium flex items-center">
              Shop Now
              <span className="ml-1">→</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
