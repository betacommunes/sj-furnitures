import React, { useState } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const testimonials = [
  {
    id: 1,
    name: "Leslie Alexander",
    title: "Architect",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    review:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.",
  },
  {
    id: 2,
    name: "Jenny Wilson",
    title: "Interior Designer",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    review:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.",
  },
  {
    id: 3,
    name: "Cody Fisher",
    title: "Developer",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    review:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.",
  },
  {
    id: 4,
    name: "Eleanor Pena",
    title: "UI/UX Designer",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    review:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.",
  },
  {
    id: 5,
    name: "Bessie Cooper",
    title: "Product Manager",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    review:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.",
  },
  {
    id: 6,
    name: "Wade Warren",
    title: "System Analyst",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    review:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleSlides = () => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 1;
    return 2;
  };

  const visibleSlides = getVisibleSlides();
  const totalPages = Math.ceil(testimonials.length / visibleSlides);

  const handleSlide = (index) => {
    setCurrentIndex(index);
  };

  const getCurrentCards = () => {
    const start = currentIndex * visibleSlides;
    return testimonials.slice(start, start + visibleSlides);
  };

  return (
    <div className="md:mx-20 mx-3 md:py-10 py-16 px-3 md:px-20 bg-gray-50 mt-10 text-center rounded-3xl">
      <p className="text-sm text-gray-500 uppercase"> <span className=" text-secondary">— </span>Testimonial</p>
      <h2 className="text-3xl font-semibold text-secondary mt-2 mb-10">
        What <span className=" text-primary">Our Clients Say</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-start transition-all">
        {getCurrentCards().map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow-md overflow-hidden text-left relative"
          >
            <div className="flex items-center mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full border-4  border-primary"
              />
              <div className=" flex flex-col gap-1 ml-5">
                <h4 className="font-semibold text-gray-800">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.title}</p>

                <div className="flex items-center text-yellow-400 mb-2">
                  {Array(item.rating)
                    .fill(0)
                    .map((_, idx) => (
                      <FaStar key={idx} />
                    ))}
                  <span className="text-black text-sm ml-2">
                    {item.rating}.0
                  </span>
                </div>
              </div>
              <div className="ml-auto bg-gray-50 h-10 w-10 flex items-center justify-center rounded-full  text-primary text-xl">
                <BiSolidQuoteAltLeft className=" w-6 h-6" />
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.review}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-1">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => handleSlide(i)}
            className={`w-2 h-2 rounded-full transition-[width] duration-300 ease-in-out ${
              currentIndex === i ? "bg-primary" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
