import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div className="h-[1080px]">
      <motion.div
        initial={{ opacity: 0.01, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex items-center justify-center"
      >
        <div className="flex-1 pl-52 pt-20 pr-10 max-lg:p-10 max-w-screen-2xl">
          <div>
            <h1 className="text-6xl font-bold mb-4">Portfolio</h1>
            <div className="h-[720px]"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
