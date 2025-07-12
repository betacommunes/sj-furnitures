import React from "react";
import FlashSale from "./FlashSale";
import DealsOfTheDay from "./DealsOfTheDay";
import Testimonial from "./Testimonial";
import SocialGallery from "./SocialGallery";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className=" mt-16">
      <Hero />
      <FlashSale />
      <DealsOfTheDay />
      <Testimonial />
      <SocialGallery />
    </div>
  );
};

export default Home;
