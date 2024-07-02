import React, { useState } from "react";
import mobileApp from "/mobileApp/mobileapp.webp";
import mobileApp2 from "/mobileApp/mobileapp2.webp";
import mobileApp3 from "/mobileApp/mobileapp3.webp";
import mobileApp4 from "/mobileApp/mobileapp4.webp";
import mobileApp5 from "/mobileApp/mobileapp5.webp";

function MobileApp() {
  const [currentImage, setCurrentImage] = useState(mobileApp);

  const handleImageChange = (newImage) => {
    setCurrentImage(newImage);
  };

  return (
    <section id="mobileapp" className="flex-col lg:flex lg:flex-row my-20 w-3/4 mx-auto items-center">
      <div className="basis-1/2">
        <img src={currentImage} alt="mobileapp" />
      </div>
      <div className="basis-1/2 space-y-8 ">
        <h3 className="text-4xl mt-5 lg:mt-0 md:text-5xl font-semibold">
          A complete fitness plan in your hands
        </h3>
        <p className="text-lg text-gray-400 font-medium">
          With all the great new features on the Fitness First UK app, you can
          maximise your workouts and always be in control.
        </p>
        <div className="flex flex-col space-y-2">
          <button
            className={`text-lg font-semibold ${
              currentImage === mobileApp ? "text-red-500" : "text-gray-500"
            }`}
            onClick={() => handleImageChange(mobileApp)}
          >
            <span
              className={`inline-block ${
                currentImage === mobileApp ? "border-b-2 border-red-500" : ""
              }`}
            >
              FFX App
            </span>
          </button>
          <button
            className={`text-lg font-semibold ${
              currentImage === mobileApp2 ? "text-red-500" : "text-gray-500"
            }`}
            onClick={() => handleImageChange(mobileApp2)}
          >
            <span
              className={`inline-block ${
                currentImage === mobileApp2 ? "border-b-2 border-red-500" : ""
              }`}
            >
              Contactless check-in
            </span>
          </button>
          <button
            className={`text-lg font-semibold ${
              currentImage === mobileApp3 ? "text-red-500" : "text-gray-500"
            }`}
            onClick={() => handleImageChange(mobileApp3)}
          >
            <span
              className={`inline-block ${
                currentImage === mobileApp3 ? "border-b-2 border-red-500" : ""
              }`}
            >
              Book a Personal Trainer
            </span>
          </button>
          <button
            className={`text-lg font-semibold ${
              currentImage === mobileApp4 ? "text-red-500" : "text-gray-500"
            }`}
            onClick={() => handleImageChange(mobileApp4)}
          >
            <span
              className={`inline-block ${
                currentImage === mobileApp4 ? "border-b-2 border-red-500" : ""
              }`}
            >
              Book your classes
            </span>
          </button>
          <button
            className={`text-lg font-semibold ${
              currentImage === mobileApp5 ? "text-red-500" : "text-gray-500"
            }`}
            onClick={() => handleImageChange(mobileApp5)}
          >
            <span
              className={`inline-block ${
                currentImage === mobileApp5 ? "border-b-2 border-red-500" : ""
              }`}
            >
              FFX on-demand
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default MobileApp;
