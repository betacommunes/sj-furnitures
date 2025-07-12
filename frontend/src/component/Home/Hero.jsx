import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import hero from "../../assets/hero.png";
import logo from "../../assets/logo[1].png";
import chair from "../../assets/chair_hero.png";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const fadeInFromLeft = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  const slides = [
    {
      id: 1,
      content: (
        <div className="z-20 flex w-full md:flex-row flex-col items-center justify-center md:justify-end gap-10">
          {/* Center Text */}
          <motion.div
            className="w-full md:w-1/3 text-center space-y-4"
            initial="initial"
            animate="animate"
            variants={fadeInFromLeft}
          >
            <img
              src={logo}
              alt="Logo"
              className="mx-auto md:max-h-[80px] h-[50px] object-contain"
            />
            <h2 className="text-lg font-medium uppercase tracking-[5px] text-secondary">
              Deer Decor
            </h2>
            <p className="text-gray-600 text-sm">
              Nam liber tempor cum soluta nobis eleifend option congue nihil
              imperdiet doming id quod mazim placerat facer possim assum.
            </p>
            <Link to="/product">
              <button className=" pt-5 hover:underline text-secondary  font-semibold flex items-center justify-center w-full gap-2">
                Shop Now <FaArrowRight />
              </button>
            </Link>
          </motion.div>

          {/* Image */}
          <div className="w-full md:w-1/4 flex items-center justify-center md:mr-24 mr-0">
            <img src={hero} className="w-80 object-cover" alt="Hero" />
          </div>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="z-20 justify-around items-center w-full max-w-screen-xl mx-auto px-4 py-20 relative flex flex-col md:flex-row">
          {/* Left Chair */}
          <div className="w-full hidden md:flex justify-center">
            <img
              src={chair}
              alt="Chair Left"
              className="max-h-[400px] object-cover scale-x-[-1]"
            />
          </div>

          {/* Center Logo + Text with Animation */}
          <motion.div
            className="w-full text-center space-y-4"
            initial="initial"
            animate="animate"
            variants={fadeInFromLeft}
          >
            <img
              src={logo}
              alt="Logo"
              className="mx-auto md:max-h-[80px] h-[50px] object-contain"
            />
            <h3 className="text-lg font-medium uppercase tracking-[5px] text-secondary">Design Idea</h3>
            <p className="text-gray-600 text-sm max-w-md mx-auto">
              Nam liber tempor cum soluta nobis eleifend option congue nihil
              imperdiet doming id quod mazim placerat facer possim assum.
            </p>
            <Link to="/product">
              <button className=" text-secondary pt-5 font-semibold flex items-center justify-center w-full gap-2">
                Shop Now <FaArrowRight />
              </button>
            </Link>
          </motion.div>

          {/* Right Chair */}
          <div className="w-full flex justify-center">
            <img
              src={chair}
              alt="Chair Right"
              className="max-h-[400px] object-contain"
            />
          </div>
        </div>
      ),
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full md:px-10 p-5 md:h-[90vh] h-auto bg-gray-100 overflow-hidden flex items-center justify-center">
      {/* Render Active Slide */}
      {slides[currentSlide].content}

      {/* Arrows */}
      <button
        onClick={handlePrev}
        className="absolute md:left-5 left-3 top-1/2 -translate-y-1/2 z-20 grid place-content-center w-7 h-7 bg-primary rounded-full text-gray-300 text-xl md:text-2xl"
      >
        <MdKeyboardArrowLeft />
      </button>

      <button
        onClick={handleNext}
        className="absolute md:right-5 right-1 top-1/2 -translate-y-1/2 z-20 grid place-content-center h-7 w-7 bg-primary rounded-full text-gray-300 text-xl md:text-2xl"
      >
        <MdKeyboardArrowRight />
      </button>

      {/* Border & Circular Decoration */}
      <div className="pointer-events-none absolute inset-3 md:inset-6 border-4 z-10 border-gray-50 rounded-2xl"></div>

      <div className="absolute right-20 aspect-square z-0 rounded-full border-[50px] border-[#f8f8f8] lg:block hidden h-[85vh]" />
    </section>
  );
}
