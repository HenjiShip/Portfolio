import { navLinks } from "../../constants";
import React from "react";

const Navbar = ({ activePageId }) => {
  const handleNavLinkClick = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="z-[99] fixed h-full w-44 bg-gray-800 bg-opacity-50 backdrop-blur-md  rounded-r-[50px] max-lg:hidden">
      <a
        onClick={() => handleNavLinkClick("home")}
        className="mt-4 text-white text-6xl font-bold flex justify-center items-center hover:cursor-pointer"
      >
        H
      </a>
      <div className="flex flex-col h-full justify-center items-center">
        <ul className="mt-[-200px]">
          {navLinks.map((items) => (
            <li
              key={items.id}
              className={`${
                activePageId === items.id
                  ? "text-[#eded68] underline underline-offset-8 decoration-2 transition-colors duration-300"
                  : "text-gray-500"
              } py-2  font-bold hover:text-white hover:underline hover:underline-offset-8 hover:decoration-2 cursor-pointer transition-colors duration-500`}
              onClick={() => handleNavLinkClick(items.id)}
            >
              <a className="flex items-center text-lg">
                {items.icon}
                <div className="ml-5">{items.title}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
