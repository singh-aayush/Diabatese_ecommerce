"use client";
import { ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";

const testimonials = [
  {
    id: 1,
    icon: "/Icons & Icon-gifs/comments.png",
    name: "John Doe",
    comment:
      "This organic honey is absolutely amazing! The taste is pure and rich, without any artificial sweetness. I love using it in my tea and breakfast bowls.",
    image: "/Icons & Icon-gifs/user.png",
    rating: 5,
  },
  {
    id: 2,
    icon: "/Icons & Icon-gifs/comments.png",
    name: "Sarah Smith",
    comment:
      "These wireless earbuds are a game-changer! The sound quality is crisp, and the bass is deep. They fit perfectly in my ears and never fall out, even during workouts. ",
    image: "/Icons & Icon-gifs/user 2.png",
    rating: 4,
  },
  {
    id: 3,
    icon: "/Icons & Icon-gifs/comments.png",
    name: "Michael Lee",
    comment:
      "I've been using this moisturizer for a month now, and my skin feels softer and more hydrated than ever. It’s lightweight, non-greasy, and perfect for daily use.",
    image: "/Icons & Icon-gifs/user 3.png",
    rating: 5,
  },
];

function Testimonial() {
  return (
    <section className="w-full bg-[#F7F7F7] py-10 mt-16 mb-16">
      <div className="w-[90%] md:w-3/4 lg:w-3/4 mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className=" text-lg lg:text-[2rem] font-black text-black">
            Client <span className="text-[#2cc16d]">Testimonials</span>
          </h1>
          {/* <div className="flex space-x-2">
            <button className="bg-[#6EAC89] text-white px-2 py-2 rounded-[50%]">
              <ChevronLeft size={20} />
            </button>
            <button className="bg-white text-black border border-black px-2 py-2 rounded-[50%]">
              <ChevronRight size={20} />
            </button>
          </div> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-start relative"
            >
              <img src={testimonial.icon} />
              <p className="text-gray-700 mb-4 mt-4">{testimonial.comment}</p>
              <div className="flex items-center w-full mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4 text-left">
                  <p className="text-lg font-semibold text-black">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">Customer</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <img
                      key={i}
                      src="/Icons & Icon-gifs/full star.png"
                      className="w-4 h-4"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
