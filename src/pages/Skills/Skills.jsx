import React from "react";
import { motion } from "framer-motion";
import { SlCalender } from "react-icons/all";

const Skills = () => {
  return (
    <div className="h-[1080px] lg:h-[950px] overflow-x-hidden pt-[100px] max-sm:pt-[30px] bg-[#1d1d1d]">
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex items-center justify-center"
      >
        <div className="flex-1 pl-52 pr-10 max-lg:p-10 max-sm:p-[10px] max-w-screen-2xl">
          <div className="p-[50px] max-sm:p-[20px] bg-slate-900/50 backdrop-blur-md rounded-lg">
            <div>
              <div className="flex justify-center">
                <h1
                  className="text-6xl font-bold mb-4 max-sm:text-4xl"
                  style={{ textShadow: "5px 10px 13px black" }}
                >
                  Experience
                </h1>
              </div>
              <div className="flex justify-center pb-[30px]">
                <div className="h-[5px] w-3/12 bg-white" />
              </div>
              <div className="absolute h-[75%] w-[3px] bg-gradient-to-b from-gray-700 to-transparent"></div>
              <ol className="relative">
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3">
                    <SlCalender
                      className="w-[25px] h-[25px]"
                      style={{ textShadow: "5px 10px 13px black" }}
                    />
                  </span>
                  <h3
                    className="flex items-center mb-1 text-lg font-semibold"
                    style={{ textShadow: "5px 10px 13px black" }}
                  >
                    Sesame Workshop: Intern
                    <span
                      className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3"
                      style={{ textShadow: "5px 10px 13px black" }}
                    >
                      Latest
                    </span>
                  </h3>
                  <time
                    className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                    style={{ textShadow: "5px 10px 13px black" }}
                  >
                    January 13th, 2022
                  </time>
                  <p
                    className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
                    style={{ textShadow: "5px 10px 13px black" }}
                  >
                    Learned industry standards like technologies used and
                    workflow. Participated in weekly meetings and helped develop
                    a fan game that can be demo'd{" "}
                    <a
                      className="text-blue-300 hover:text-blue-100"
                      target="_blank"
                      href="https://sesameworm.netlify.app"
                    >
                      here
                    </a>
                  </p>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3">
                    <SlCalender className="w-[25px] h-[25px]" />
                  </span>
                  <h3
                    className="mb-1 text-lg font-semibold"
                    style={{ textShadow: "5px 10px 13px black" }}
                  >
                    CUNY: College Assistant
                  </h3>
                  <time
                    className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                    style={{ textShadow: "5px 10px 13px black" }}
                  >
                    December 7th, 2021
                  </time>
                  <p
                    className="text-base font-normal text-gray-500 dark:text-gray-400"
                    style={{ textShadow: "5px 10px 13px black" }}
                  >
                    Looked at various code and assisted solving coding problems
                    from websites like leetcode
                  </p>
                </li>
                <li className="ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3">
                    <SlCalender className="w-[25px] h-[25px]" />
                  </span>
                  <h3
                    className="mb-1 text-lg font-semibold"
                    style={{ textShadow: "5px 10px 13px black" }}
                  >
                    CUNY 2X Tech Talent Pipeline
                  </h3>
                  <time
                    className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                    style={{ textShadow: "5px 10px 13px black" }}
                  >
                    December 2nd, 2021
                  </time>
                  <p
                    className="text-base font-normal text-gray-500 dark:text-gray-400"
                    style={{ textShadow: "5px 10px 13px black" }}
                  >
                    Worked with a small team of fellow student developers to
                    create a react application that uses{" "}
                    <a
                      className="text-blue-300 hover:text-blue-100"
                      target="_blank"
                      href="https://developers.themoviedb.org/3"
                    >
                      The Movie Database API
                    </a>{" "}
                    to search for movies and it's corresponding information.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
