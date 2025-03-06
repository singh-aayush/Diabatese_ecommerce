"use client";
import { Calendar, MessageCircle, User, Tag } from "lucide-react";

const newsArticles = [
  {
    id: 1,
    image: "/news 1.png",
    category: "Medicine",
    author: "Admin",
    comments: 65,
    title: "Fully Organic Diabetes-Free Products",
    date: "18",
    month: "NOV",
  },
  {
    id: 2,
    image: "/news 2.png",
    category: "Health",
    author: "Admin",
    comments: 42,
    title: "The Benefits of Organic Food for Diabetes",
    date: "22",
    month: "OCT",
  },
  {
    id: 3,
    image: "/news 3.png",
    category: "Nutrition",
    author: "Admin",
    comments: 78,
    title: "How a Balanced Diet Can Prevent Diabetes",
    date: "30",
    month: "SEP",
  },
];

function LatestNews() {
  return (
    <section className="w-[90%] md:w-3/4 lg:w-3/4 mx-auto mt-10">
      <h1 className="text-lg lg:text-[2rem] font-black text-center mb-6 text-black">
        Latest <span className="text-[#2cc16d]">News</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsArticles.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-lg shadow-md overflow-hidden relative"
          >
            {/* News Image */}
            <div className="relative w-full h-64">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover"
              />
              {/* Date Box */}
              <div className="absolute bottom-2 left-2 bg-white text-black p-2 text-center rounded">
                <p className="text-[12px] font-bold">{news.date}</p>
                <p className="text-[10px] font-semibold">{news.month}</p>
              </div>
            </div>

            {/* News Info */}
            <div className="p-4">
              <div className="flex items-center space-x-4 text-gray-600 text-sm mb-2">
                <div className="flex items-center space-x-1">
                  <Tag size={16} />
                  <span>{news.category}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User size={16} />
                  <span>By {news.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle size={16} />
                  <span>{news.comments} comments</span>
                </div>
              </div>
              <h2 className="text-[16px] font-bold text-green-600">
                {news.title}
              </h2>
              <a
                href="#"
                className="text-blue-500 font-semibold mt-2 inline-block text-[12px]"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LatestNews;
