import React from "react";
import Room from "./Room";
import { Canvas } from "@react-three/fiber";
import "./home.css";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/all";

const Home = () => {
  return (
    <div className="h-[1080px]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-b from-slate-800 to-[#1d1d1d] fixed w-full z-[-99]"
      >
        <div className="h-[100px] b flex-1 pl-[100px] pt-20 pr-10 max-lg:pt-[100px] max-lg:pl-0 max-lg:pr-0 relative">
          <div className="flex flex-col items-center">
            <h1
              className="text-6xl font-bold mb-4 max-sm:text-4xl z-[5] select-none"
              style={{ textShadow: "5px 10px 13px black" }}
            >
              Hi, I'm Henry
            </h1>
            <p
              className="z-[5] select-none"
              style={{ textShadow: "5px 8px 6px black" }}
            >
              Full stack web developer
            </p>
          </div>
          <div className="animate-bounce moon select-none" />
        </div>
        <div className="ml-[100px] h-[800px] sm:h-[720px] md:h-[875px] lg:h-[900px] relative max-lg:p-5 max-lg:ml-0">
          <Canvas camera={{ position: [2, 4, 5] }} className="canvas">
            <Room />
          </Canvas>
        </div>
        <div className="floating-diamonds">
          <div className="diamond"></div>
          <div className="diamond"></div>
          <div className="diamond"></div>
          <div className="diamond"></div>
          <div className="diamond"></div>
          <div className="diamond"></div>
          <div className="diamond"></div>
          <div className="diamond"></div>
          <div className="diamond"></div>
          <div className="diamond"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
