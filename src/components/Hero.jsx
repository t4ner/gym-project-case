import React from "react";
import Navbar from "../components/Navbar";
import { IoIosSearch } from "react-icons/io";
const Hero = () => {
  return (
    <section className="bg-hero-image  bg-no-repeat overflow-y-hidden h-[690px]  lg:h-screen relative flex justify-center md:justify-start">
      <Navbar />
      <div className="flex flex-col justify-center items-center text-white md:pl-16">
        <h3 className="text-6xl md:text-7xl font-medium font_teko text-center">
          2 MONTHS HALF PRICE
        </h3>
        <h4 className="text-6xl md:text-7xl font-medium font_teko text-center">
          + NO JOINING FEE
        </h4>

        <div className="flex  border-b-4 border-b-[#d70926]">
          <IoIosSearch className="text-black bg-white text-5xl lg:text-7xl p-4 font-bold " />
          <input
            type="text"
            className=" lg:py-6 w-44 md:w-72 text-black focus:outline-none font-medium pl-2"
          />
          <button className="px-6 md:px-10 font-medium text-white  bg-[#d70926]">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
