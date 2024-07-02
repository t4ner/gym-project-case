import React from "react";
import navSection1 from "/navSection/image1.webp";
import navSection2 from "/navSection/image2.webp";

function NavSection() {
  return (
    <section className="w-full bg-[#ededec]">
      <div className="flex-col md:flex md:flex-row items-center  w-4/5 mx-auto py-20 space-y-10 md:space-y-0 md:space-x-5">
        <div className="flex flex-col basis-1/2">
          <img src={navSection1} alt="" />
          <p className="text-2xl md:text-3xl font-semibold py-5">
            Redefining fitness with gyms across the country. Find your nearest
            gym
          </p>
          <button className="py-4 px-7 text-xl group relative text-white bg-[#d70926] rounded-sm max-w-max">
            <div className="buttonDiv bg-red-700"></div>
            <span className="buttonSpan text-lg font-medium">Find a Gym</span>
          </button>
        </div>
        <div className="flex flex-col basis-1/2">
          <img src={navSection2} alt="" />
          <p className="text-2xl md:text-3xl font-semibold py-5">
            Find your new workout crew with the best range of classes in the UK
          </p>
          <button className="py-4 px-7 text-xl group relative text-white bg-[#d70926] rounded-sm max-w-max">
            <div className="buttonDiv bg-red-700"></div>
            <span className="buttonSpan text-lg font-medium">
              Discover classes
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default NavSection;
