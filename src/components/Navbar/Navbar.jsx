import { navLinks } from "../../constants";
import React from "react";
import "./navbar.css";

const Navbar = ({ activePageId }) => {
  const handleNavLinkClick = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="z-[99] fixed h-full w-44 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-r-[50px] max-lg:hidden">
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
                } nav-btn`}
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

      {/* small screen navbar */}

      <ul className="lg:hidden flex flex-row fixed bg-gray-800/5 backdrop-blur-sm h-[40px] w-full z-[50] items-center justify-center gap-x-4">
        <li
          className={`${
            activePageId === "about"
              ? "text-[#eded68] underline underline-offset-8 decoration-2 transition-colors duration-300"
              : "text-gray-500"
          } nav-btn`}
          onClick={() => handleNavLinkClick("about")}
        >
          about
        </li>
        <li
          className={`${
            activePageId === "portfolio"
              ? "text-[#eded68] underline underline-offset-8 decoration-2 transition-colors duration-300"
              : "text-gray-500"
          } nav-btn`}
          onClick={() => handleNavLinkClick("portfolio")}
        >
          portfolio
        </li>
        <a
          onClick={() => handleNavLinkClick("home")}
          className="flex mt-4 text-white text-6xl font-bold justify-center items-center hover:cursor-pointer"
        >
          H
        </a>
        <li
          className={`${
            activePageId === "skills"
              ? "text-[#eded68] underline underline-offset-8 decoration-2 transition-colors duration-300"
              : "text-gray-500"
          } nav-btn`}
          onClick={() => handleNavLinkClick("skills")}
        >
          skills
        </li>
        <li
          className={`${
            activePageId === "contact"
              ? "text-[#eded68] underline underline-offset-8 decoration-2 transition-colors duration-300"
              : "text-gray-500"
          } nav-btn`}
          onClick={() => handleNavLinkClick("contact")}
        >
          contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
