import React from "react";
import Room from "./Room";
import { Canvas } from "@react-three/fiber";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-[#1d1d1d]">
      <div className=" h-[100px] b flex-1 pl-[100px] pt-20 pr-10 max-lg:p-10 relative">
        <div className="flex flex-col justify-end items-center">
          <h1 className="text-6xl font-bold mb-4">Hi, i'm Henry</h1>
          <p>Full stack web developer</p>
        </div>
        <div
          className="animate-bounce"
          style={{
            position: "absolute",
            right: "15%",
            backgroundColor: "#eded6d",
            borderRadius: "50%",
            width: "200px",
            height: "200px",
          }}
        />
      </div>
      <div className="ml-[100px] h-[900px] relative max-lg:p-5 max-lg:ml-0">
        <Canvas
          camera={{ position: [0, 2, 5] }}
          style={{ background: "none", height: "855px" }}
        >
            <Room />
        </Canvas>
      </div>
    </div>
  );
};

export default Home;
