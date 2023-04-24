import React from "react";
import { motion } from "framer-motion";
import { SlCalender } from "react-icons/all";

const Skills = () => {
  return (
    <div className="h-[1080px] overflow-x-hidden pt-[100px] max-sm:pt-[30px]">
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
              <h1 className="text-6xl font-bold mb-4 max-sm:text-4xl">
                Experience
              </h1>
              <div className="absolute h-[75%] w-[3px] bg-gradient-to-b from-gray-700 to-transparent"></div>
              <ol className="relative">
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3">
                    <SlCalender className="w-[25px] h-[25px]" />
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold">
                    Sesame Workshop: Intern
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                      Latest
                    </span>
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    January 13th, 2022
                  </time>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam voluptas magnam, animi laboriosam similique voluptate
                    natus, reiciendis distinctio nemo odio veritatis explicabo,
                    aliquid ipsam? Eaque est aperiam temporibus molestias atque!
                  </p>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3">
                    <SlCalender className="w-[25px] h-[25px]" />
                  </span>
                  <h3 className="mb-1 text-lg font-semibold">
                    CUNY: College Assistant
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    December 7th, 2021
                  </time>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam voluptas magnam, animi laboriosam similique voluptate
                    natus, reiciendis distinctio nemo odio veritatis explicabo,
                    aliquid ipsam? Eaque est aperiam temporibus molestias atque!
                  </p>
                </li>
                <li className="ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3">
                    <SlCalender className="w-[25px] h-[25px]" />
                  </span>
                  <h3 className="mb-1 text-lg font-semibold">
                    Flowbite Library v1.2.2
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    December 2nd, 2021
                  </time>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam voluptas magnam, animi laboriosam similique voluptate
                    natus, reiciendis distinctio nemo odio veritatis explicabo,
                    aliquid ipsam? Eaque est aperiam temporibus molestias atque!
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
