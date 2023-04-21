import { navLinks } from "../../constants";
import React, { useEffect, useState } from "react";
import "./navbar.css";
import { motion } from "framer-motion";

const Navbar = ({ activePageId, loaded }) => {
  const handleNavLinkClick = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="z-[99] fixed h-full w-44 bg-gray-800/5 backdrop-blur-md rounded-r-[50px] max-lg:hidden"
      >
        <a
          onClick={() => handleNavLinkClick("home")}
          className="mt-4 text-white text-6xl font-bold flex justify-center items-center hover:cursor-pointer select-none caret-transparent"
        >
          H
        </a>
        <div className="flex flex-col h-full justify-center items-center">
          <ul className="mt-[-200px] caret-transparent">
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
      </motion.div>

      {/* small screen navbar */}
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="lg:hidden flex flex-row fixed bg-gray-800/5 backdrop-blur-sm h-[40px] w-full z-[50] items-center justify-center gap-x-4 caret-transparent"
      >
        <li
          className={`${
            activePageId === "about"
              ? "text-[#eded68] underline underline-offset-8 decoration-2 transition-colors duration-300"
              : "text-gray-500"
          } nav-btn`}
          onClick={() => handleNavLinkClick("about")}
        >
          About
        </li>
        <li
          className={`${
            activePageId === "portfolio"
              ? "text-[#eded68] underline underline-offset-8 decoration-2 transition-colors duration-300"
              : "text-gray-500"
          } nav-btn`}
          onClick={() => handleNavLinkClick("portfolio")}
        >
          Portfolio
        </li>
        <a
          onClick={() => handleNavLinkClick("home")}
          className="flex mt-4 text-white text-6xl font-bold justify-center items-center hover:cursor-pointer select-none caret-transparent"
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
          Skills
        </li>
        <li
          className={`${
            activePageId === "contact"
              ? "text-[#eded68] underline underline-offset-8 decoration-2 transition-colors duration-300"
              : "text-gray-500"
          } nav-btn`}
          onClick={() => handleNavLinkClick("contact")}
        >
          Contact
        </li>
      </motion.ul>
    </div>
  );
};

export default Navbar;
