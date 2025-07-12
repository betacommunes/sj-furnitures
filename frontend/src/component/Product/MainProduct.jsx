import React, { useState } from "react";
import ProductCard from "./ProductCard";
import productData from "../../assets/productData.js";

const MainProduct = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const buttonsCategoryData = [
    { title: "All Products", category: "all" },
    { title: "Latest Products", category: "latestProduct" },
    { title: "Best Sellers", category: "bestSeller" },
    { title: "Featured Products", category: "featuredProduct" },
  ];

  return (
    <div className="pt-10 text-center space-y-10 ">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Our Products</h2>
      <h1 className="text-3xl md:text-5xl font-semibold text-primary">
        Our <span className="text-secondary">Products Collections</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-4">
        {buttonsCategoryData.map(({ title, category }) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-8 py-2 font-semibold rounded-full border transition hover:border-transparent
              ${activeCategory === category
                ? "bg-primary text-white border-transparent"
                : "border-inherit hover:bg-primary hover:text-white"}`}
          >
            {title}
          </button>
        ))}
      </div>

      <ProductCard products={productData} filter={activeCategory} />
    </div>
  );
};

export default MainProduct;
