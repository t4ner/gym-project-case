import React, { useState } from "react";
import DistanceContent from "../components/challengeContent/DistanceContent";
import CaloriesContent from "../components/challengeContent/CaloriesContent";
import WorkoutsContent from "../components/challengeContent/WorkoutsContent";
import googlePlay from "/challenge/image10.svg";
import appStore from "/challenge/image9.svg";

function Challenge() {
  const [activeTab, setActiveTab] = useState("distance");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section id="challenge" className="bg-[#ededec]">
      <div className="w-4/5 mx-auto flex-col  lg:flex lg:flex-row gap-10">
        <div className="basis-1/2 py-5 md:py-10 space-y-6">
          <h5 className="tracking-wider font-semibold text-xl md:text-2xl font_teko">
            TAKE THE CHALLENGE
          </h5>
          <h3 className="text-3xl md:text-5xl font-semibold">
            Have you got what it takes to reach the top of the leaderboard?
          </h3>
          <p className="text-lg text-gray-400 font-medium ">
            We’re constantly pushing our members to be their very best. Compete
            in our challenges and test yourself against the rest of the Fitness
            First community.
          </p>
          <div className="flex items-center gap-10">
            <img src={googlePlay} width={150} />
            <img src={appStore} width={150} />
          </div>
        </div>
        <div className="basis-1/2 py-10">
          <div className="flex items-center justify-between">
            <button
              className={`text-xl md:text-2xl text-gray-700 font-semibold ${
                activeTab === "distance" && "border-b-2 border-b-red-700"
              }`}
              onClick={() => handleTabClick("distance")}
            >
              Distance
            </button>
            <button
              className={`text-xl md:text-2xl text-gray-700 font-semibold ${
                activeTab === "workouts" && "border-b-2 border-b-red-700"
              }`}
              onClick={() => handleTabClick("workouts")}
            >
              Workouts
            </button>
            <button
              className={`text-xl md:text-2xl text-gray-700 font-semibold ${
                activeTab === "calories" && "border-b-2 border-b-red-700"
              }`}
              onClick={() => handleTabClick("calories")}
            >
              Calories
            </button>
          </div>
          <div className="pt-5">
            {activeTab === "distance" && <DistanceContent />}
            {activeTab === "workouts" && <WorkoutsContent />}
            {activeTab === "calories" && <CaloriesContent />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Challenge;
