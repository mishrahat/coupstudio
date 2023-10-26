import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="lg:flex justify-center lg:space-y-0 space-y-10">
      <div className="flex flex-col lg:justify-start lg:items-start items-center gap-5">
        <h4 className="text-3xl text-center lg:text-start lg:text-5xl font-bold uppercase">
          Our Services
        </h4>
        <p className="lg:w-1/2 text-[4.5vw] lg:text-lg lg:text-start text-center services_text">
          The goal is to serve you the best quality experience and our work is
          to make your business go boom 🚀
        </p>
        <button className="bg-[#CCFD01] lg:w-1/4 w-1/2 rounded-full px-3 py-2 text-black cursor-pointer">
          Learn More
        </button>
      </div>
      <div className="grid lg:grid-cols-2 gap-x-[15px] gap-y-5">
        <div className="border-solid border-2 border-[#CCFD01] lg:w-74 lg:h-80 rounded-2xl flex flex-col gap-4 justify-end items-start px-4 pb-5 hover:bg-[#FFFFFF] hover:text-black hover:border-none service-1 relative">
          <h3 className="text-2xl font-bold capitalize">
            Social Media Marketing
          </h3>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            reiciendis.
          </p>
        </div>
        <div className="border-solid border-2 border-[#CCFD01] lg:w-74 lg:h-80  rounded-2xl flex flex-col gap-4 justify-end items-start px-4 pb-5 hover:bg-[#FFFFFF] hover:text-black hover:border-none service-2 relative">
          <h3 className="text-2xl font-bold capitalize">
            Web & App Development
          </h3>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            reiciendis.
          </p>
        </div>
        <div className="border-solid border-2 border-[#CCFD01] lg:w-74 lg:h-80 rounded-2xl flex flex-col gap-4 justify-end items-start px-4 pb-5 hover:bg-[#FFFFFF] hover:text-black hover:border-none service-3 relative">
          <h3 className="text-2xl font-bold capitalize">Content Writing</h3>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            reiciendis.
          </p>
        </div>
        <div className="border-solid border-2 border-[#CCFD01] lg:w-74 lg:h-80 rounded-2xl flex flex-col gap-4 justify-end items-start px-4 pb-5 hover:bg-[#FFFFFF] hover:text-black hover:border-none service-4 relative">
          <h3 className="text-2xl font-bold capitalize">
            Search Engine Optimization
          </h3>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            reiciendis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
