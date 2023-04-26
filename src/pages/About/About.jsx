import React from "react";
import { motion } from "framer-motion";
import "./about.css";

const About = () => {
  return (
    <div>
      <div className="h-[100px] max-sm:h-[30px] bg-[#1d1d1d]" />
      <div className="h-auto lg:h-[800px] overflow-x-hidden bg-[#1d1d1d]">
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: 0.3,
          }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          <div className="flex-1 pl-52 pr-10 max-lg:p-10 max-sm:pl-[10px] max-sm:pr-[10px] max-w-screen-2xl">
            <div className="h-auto p-[50px] max-sm:p-[20px] bg-slate-900/50 backdrop-blur-md rounded-lg lg:grid lg:grid-cols-2 lg:gap-12">
              <div>
                <h1
                  className="text-6xl font-bold mb-4 max-sm:text-4xl"
                  style={{ textShadow: "5px 10px 13px black" }}
                >
                  About
                </h1>
                <p style={{ textShadow: "5px 10px 13px black" }}>
                  I am a highly skilled Full Stack Web Developer with a
                  Bachelor's degree in Computer Science. With a passion for
                  problem-solving, I thrive in developing creative and
                  innovative solutions for clients. Additionally, I possesses an
                  artistic side, which aids in designing visually stunning
                  websites and choosing color schemes that are aesthetically
                  pleasing. Over the past few months, I have honed my expertise
                  in back-end development, allowing me to be well-equipped to
                  tackle any project with confidence. With a wealth of
                  experience in web development, I am committed to delivering
                  high-quality work that exceeds client expectations. I am
                  confident in my dedication, combined with my technical
                  expertise, would make me an invaluable asset to any team.
                </p>
              </div>
              
            </div>
          </div>
        </motion.div>
        <div className="h-[0px] max-lg:h-[100px]"></div>
      </div>
    </div>
  );
};

export default About;
