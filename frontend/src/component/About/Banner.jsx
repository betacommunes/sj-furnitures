import React from "react";
import AboutBanner from "../../assets/AboutBanner.jpg";

const Banner = () => {
  return (
    <div className="relative md:h-screen h-[70vh]  w-full">
      {/* Background image */}
      <img
        src={AboutBanner}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-left md:object-center object-cover   brightness-[30%]"
      />

      {/* Centered content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="  text-center space-y-8 md:p-8 px-3 w-full md:max-w-2xl mt-20">
          <h1 className=" text-white md:text-4xl text-2xl font-bold">
            About Us
          </h1>
          <p>
            Fusce convallis metus id felis luctus adipiscing. Nullam tincidunt
            adipiscing enim. Nunc sed turpis. Praesent nonummy mi in odio. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Sed in libero ut nibh placerat accumsan. Pellentesque
            commodo eros a enim. Maecenas nec odio et ante tincidunt tempus.
            Curabitur nisi. Nam adipiscing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
