import { FiAlignJustify } from "react-icons/fi";
import logo from "/logo/logo.svg";
import { useState } from "react";

const Navbar = ({ nav }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header
      className={`w-full overflow-y-hidden ${
        nav ? "fixed bg-black duration-300 top-0 left-0 z-30" : "absolute"
      }`}
    >
      <nav className="flex items-center justify-between xl:justify-around">
        <a
          href="#"
          className="text-5xl font_teko text-white font-bold flex items-center pt-2 pl-3 md:pl-0"
        >
          <img
            src={logo}
            alt="logo"
            className="w-[60px] md:w-[95px] md:h-[95px]"
          />
          FITNESS
        </a>

        <ul className="hidden xl:flex items-center font-medium space-x-5 text-lg">
          <li>
            <a
              href="#feedback"
              className="text-white hover:text-[#d70926]"
              onClick={closeSidebar}
            >
              Feedbacks
            </a>
          </li>
          <li>
            <a
              href="#challenge"
              className="text-white hover:text-[#d70926]"
              onClick={closeSidebar}
            >
              Challenge
            </a>
          </li>
          <li>
            <a
              href="#mobileapp"
              className="text-white hover:text-[#d70926]"
              onClick={closeSidebar}
            >
              Mobile App
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className="text-white hover:text-[#d70926]"
              onClick={closeSidebar}
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-[#d70926]"
              onClick={closeSidebar}
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="hidden xl:block space-x-5">
          <button className=" py-4 px-7 text-xl group relative text-white bg-[#ededec] rounded-sm max-xl:hidden">
            <div className=" buttonDiv bg-gray-300"></div>
            <span className="buttonSpan text-black text-lg font-semibold">
              Try Us Free
            </span>
          </button>

          <button className=" py-4 px-7 text-xl group relative text-white bg-[#d70926] rounded-sm ">
            <div className=" buttonDiv bg-red-700"></div>
            <span className="buttonSpan text-lg font-semibold">Join Now</span>
          </button>
        </div>

        <div className="xl:hidden py-3 px-3">
          <button
            className="text-4xl font-extrabold text-white"
            onClick={toggleSidebar}
          >
            <FiAlignJustify />
          </button>
        </div>

        <div
          className={`xl:hidden fixed inset-0 bg-white z-50 transform transition-transform ease-linear ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end pt-3 pr-2">
            <button className="text-4xl" onClick={toggleSidebar}>
              <FiAlignJustify />
            </button>
          </div>
          <ul className="text-lg text-gray-800 space-y-5 pl-3 font-medium">
            <li className="hover:text-[#d70926]">
              <a href="#feedback" onClick={toggleSidebar}>
                Feedbacks
              </a>
            </li>
            <li className="hover:text-[#d70926]">
              <a href="#challenge" onClick={toggleSidebar}>
                Challenge
              </a>
            </li>
            <li className="hover:text-[#d70926]">
              <a href="#mobileapp" onClick={toggleSidebar}>
                Mobile App
              </a>
            </li>
            <li className="hover:text-[#d70926]">
              <a href="#gallery" onClick={toggleSidebar}>
                Gallery
              </a>
            </li>
            <li className="hover:text-[#d70926]">
              <a href="#contact" onClick={toggleSidebar}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
