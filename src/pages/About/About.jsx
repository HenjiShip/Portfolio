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
                  high-quality work that exceeds client expectations.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="gallery">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
                    alt="a dream catcher"
                  />
                  <img
                    src="https://res.cloudinary.com/hevo/image/upload/v1626694700/hevo-blog/MongoDB-sm-logo-500x400-1-1.gif"
                    alt="a piano"
                  />
                  <img
                    src="https://pbs.twimg.com/card_img/1646793457577480194/DLvzDNz6?format=png&name=medium"
                    alt="a live concert"
                  />
                  <img
                    src="https://scontent-lga3-1.xx.fbcdn.net/v/t31.18172-8/26850584_10156186800336579_1585065027752569016_o.jpg?stp=dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=8631f5&_nc_ohc=EtwURq2UP9cAX_hvms5&_nc_ht=scontent-lga3-1.xx&oh=00_AfC-DyJNXR8B2weIkSdXei-napmJE-UtpQe5th9xPVmBXA&oe=6470E5A9"
                    alt="Paris"
                  />
                </div>
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
