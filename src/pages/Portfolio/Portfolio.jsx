import React from "react";
import { motion } from "framer-motion";
import drizco from "../../assets/images/drizco.png";
import gluetube from "../../assets/images/gluetube.png";
import stickstock from "../../assets/images/stickstock.png";

const Portfolio = () => {
  return (
    <div className="h-[1080px] overflow-x-hidden pt-[100px] max-sm:pt-[30px]">
      <div>
        <motion.div
          initial={{ opacity: 0, x: 300 }}
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
          <div className="flex-1 pl-52 pt-20 pr-10 max-lg:p-2 max-w-screen-2xl">
            <div className="p-[50px] max-sm:p-[10px] bg-slate-900/50 backdrop-blur-md rounded-lg">
              <h1
                className="text-6xl font-bold mb-4 max-sm:text-4xl"
                style={{ textShadow: "5px 10px 13px black" }}
              >
                Portfolio
              </h1>
              <div>
                <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-10 place-items-center p-0">
                  <a
                    href="https://stickstock.netlify.app"
                    className="relative flex h-[200px] w-11/12 rounded-lg overflow-hidden"
                    target="_blank"
                  >
                    <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-b from-transparent to-zinc-900 z-10">
                      <h2 className="text-2xl font-bold text-white p-[5px]">
                        StickStock
                      </h2>
                    </div>
                    <img
                      src={stickstock}
                      className="object-cover h-[300px] w-[600px]"
                    />
                  </a>
                  <a
                    href="https://drizco.netlify.app"
                    className="relative flex h-[200px] w-11/12 rounded-lg overflow-hidden"
                    target="_blank"
                  >
                    <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-b from-transparent to-zinc-900 z-10">
                      <h2 className="text-2xl font-bold text-white p-[5px]">
                        Drizco
                      </h2>
                    </div>
                    <img
                      src={drizco}
                      className="object-cover h-[300px] w-[600px]"
                    />
                  </a>
                  <a
                    href="https://gluetube.netlify.app"
                    className="relative flex h-[200px] w-11/12 rounded-lg overflow-hidden"
                    target="_blank"
                  >
                    <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-b from-transparent to-zinc-900 z-10">
                      <h2 className="text-2xl font-bold text-white p-[5px]">
                        Gluetube
                      </h2>
                    </div>
                    <img
                      src={gluetube}
                      className="object-cover h-[300px] w-[600px]"
                    />
                  </a>
                </div>
                <div className="max-sm:h-[40px]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
