import React from "react";
import img1 from "../../assets/team1.webp";
import img2 from "../../assets/team2.webp";
import img3 from "../../assets/team3.webp";
import img4 from "../../assets/team4.webp";

const Team = () => {
  let data_team = [
    {
      id: 1,
      name: "Johny",
      role: "Designer",
      image: img1,
    },
    {
      id: 2,
      name: "Johny",
      role: "Designer",
      image: img2,
    },
    {
      id: 3,
      name: "Johny",
      role: "Designer",
      image: img3,
    },
    {
      id: 4,
      name: "Johny",
      role: "Designer",
      image: img4,
    },
  ];

  return (
    <div className=" mt-10 md:mt-20 px-3 md:px-20 text-center space-y-10">
      <h1 className=" text-gray-800 font-bold md:text-4xl text-2xl">
        Meet Our <span className=" text-primary"> Team </span>
      </h1>

      <div className=" flex justify-center w-full ">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-4 gap-10 ">
          {data_team.map((item, i) => (
            <div className="w-full max-w-md gap-5 md:mt-10" key={i}>
              <div>
                <div className=" overflow-hidden">
                  <img
                    src={item.image}
                    className=" w-full "
                  />
                </div>
              </div>
              <div className=" my-5 space-y-2">
                <p className=" font-bold text-primary md:text-2xl text-xl">
                  {item.name}
                </p>
                <p className="  text-secondary">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
