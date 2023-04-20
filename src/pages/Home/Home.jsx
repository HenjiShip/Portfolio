import React from "react";
import Room from "./Room";
import { Canvas } from "@react-three/fiber";
import "./home.css";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-[#1d1d1d]">
      <div className=" h-[100px] b flex-1 pl-[100px] pt-20 pr-10 max-lg:pt-[100px] max-lg:pl-0 max-lg:pr-0 relative">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-bold mb-4 max-sm:text-4xl">
            Hi, i'm Henry
          </h1>
          <p className="z-[5]">Full stack web developer</p>
        </div>
        <div className="animate-bounce moon" />
      </div>
      <div className="ml-[100px] h-[720px] relative max-lg:p-5 max-lg:ml-0">
        <Canvas camera={{ position: [0, 2, 5] }} className="canvas">
          <Room />
        </Canvas>
      </div>
    </div>
  );
};

export default Home;
