import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import productData from "../../assets/productData";
import ReactStars from "react-rating-stars-component";


const DealsOfTheDay = () => {
  // Filter products with a discount
  const discountedProducts = productData.filter(
    (product) => product.discount && product.onSale
  );

  return (
    <div className="md:mx-20 mx-3 py-8">
      {/* Header section */}
      <div className="flex flex-col lg:flex-row items-center lg:justify-between justify-center mb-8">
        <div className="lg:text-start text-center">
          <span className="text-sm lg:block hidden text-gray-800">Today Deals</span>
          <h2 className="text-3xl font-bold text-primary">
            <span className="text-secondary">Deals</span> of the Day
          </h2>
        </div>
        <p className="max-w-md text-gray-500 mt-3 md:mt-0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam,
        </p>
      </div>

      {/* Product deals grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
        {discountedProducts.map((product) => (
          <div
            key={product.id}
            className=" bg-gray-50 rounded-2xl overflow-hidden w-full shadow flex gap-5 md:h-[40vh]"
          >
            <div className="flex items-center w-1/2 justify-between relative">
              <span className="bg-primary/70 absolute top-1 left-1 text-white text-xs px-3 py-1 rounded-full font-semibold">
                {product.discount}
              </span>

              <img
                src={product.image}
                alt={product.name}
                className=" h-full object-cover w-full"
              />
            </div>

            <div className=" w-1/2 py-5 mx-2">
              <div className="mb-2">

                <h3 className="font-semibold">{product.name}</h3>
              </div>
              <div className="flex items-center  gap-2 mb-2">
                <span className="text-lg font-bold text-gray-800">
                  ${product.new_price.toFixed(2)}
                </span>
                <span className="line-through text-gray-400 text-sm">
                  ${product.old_price.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center gap-1 mb-2">
                  <ReactStars
                    count={5}
                    size={24}
                    value={product.ratingValue}
                    edit={false}
                    char="★"
                    color="#e5e7eb"
                    activeColor="#facc15"
                  />
              </div>
              <p className="text-xs text-gray-600 mb-4">
                {product.description}
              </p>
              <Link to="/product">
                <button className=" text-secondary  font-semibold flex items-center justify-start w-full gap-2">
                  Shop Now <FaArrowRight/>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default DealsOfTheDay;
