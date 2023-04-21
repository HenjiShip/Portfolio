import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="h-[1080px">
      <motion.div
        initial={{ opacity: 0.01, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex items-center justify-center"
      >
        <div className="flex-1 pl-52 pt-20 pr-10 max-lg:p-10 max-w-screen-2xl">
          <div>
            <h1 className="text-6xl font-bold mb-4">Skills</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut
              luctus ex. Phasellus posuere turpis sed malesuada congue. Nulla id
              tellus metus. Donec tristique lacus et eros rhoncus vestibulum.
              Aliquam erat volutpat. Etiam ullamcorper sagittis tellus, vel
              maximus ante vestibulum sit amet. Nulla volutpat felis nec leo
              bibendum, sit amet fringilla eros porttitor. Sed faucibus, dolor
              id euismod ullamcorper, velit mi euismod nibh, vitae bibendum
              nulla lectus vel est. Morbi vel dignissim elit. Nam eget turpis ut
              leo blandit lobortis.
            </p>
          </div>
          <div className="h-[620px]"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
