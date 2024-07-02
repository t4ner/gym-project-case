import React from "react";
import { distanceData } from "../../data/data";


function DistanceContent() {
  return (
    <div className="flex flex-col space-y-5">
      {distanceData.map((item, index) => (
        <div
          key={index}
          className={`border border-black py-3 px-4 rounded-lg ${
            item.isBeth ? "shadow-[5px_5px_0px_0px_rgba(109,40,217)]" : ""
          }`}
        >
          <div className="flex justify-between items-center">
            <p className="font-semibold text-xl md:text-3xl font_teko">{item.rank}</p>
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                className="rounded-full w-16 md:w-20"
                alt={`Image of ${item.name}`}
              />
              <div>
                <h3 className="font-semibold text-xl md:text-2xl">{item.name}</h3>
                <p className="font-medium text-gray-500 italic">{item.club}</p>
              </div>
            </div>
            <p className="font-bold text-xl md:text-2xl ">{item.distance}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DistanceContent;
