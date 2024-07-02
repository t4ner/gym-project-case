import React from "react";

function Footer() {
  return (
    <footer className="w-full  flex items-center justify-center bg-[#d70926]">
      <div className="md:w-2/3 w-full px-4 text-white flex flex-col pt-10">
        <div className="w-full text-4xl md:text-5xl font-bold">
          <h1 className="w-full md:w-2/3">How can we help you. get in touch</h1>
        </div>
        <div className="flex mt-8 flex-col md:flex-row md:justify-between">
          <p className="w-full md:w-2/3  font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos illo veritatis explicabo rem ex optio fuga reprehenderit
            consequatur asperiores non!
          </p>
          <div className="w-44 pt-6 md:pt-0">
            <a className="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">
              Contact US
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex mt-6 mb-6 flex-row justify-between font-medium">
            <a href="#challenge" className=" cursor-pointer uppercase">
              Challenge
            </a>
            <a href="#mobileapp" className="cursor-pointer uppercase">
              Mobile App
            </a>
            <a href="#gallery" className="cursor-pointer uppercase">
              Gallery
            </a>
            <a href="#contact" className="cursor-pointer uppercase">
              Contact
            </a>
          </div>
          <hr />
          <p className="w-full text-center my-4">
            Copyright © 2024 Taner Dökmetaş
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
