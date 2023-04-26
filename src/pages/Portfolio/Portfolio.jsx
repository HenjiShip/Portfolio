import React from "react";
import { motion } from "framer-motion";
import { portfolio } from "../../constants";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="h-auto overflow-x-hidden max-sm:pt-[30px] bg-[#1d1d1d]">
      <div className="h-[50px]" />
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
          <div className="flex-1 pl-52 pt-20 pr-10 max-sm:p-[10px] max-lg:p-[40px] lg:pl-52 max-w-screen-2xl">
            <div className="p-[50px] max-sm:p-[10px] bg-slate-900/50 backdrop-blur-md rounded-lg">
              <h1
                className="text-6xl font-bold mb-4 max-sm:text-4xl"
                style={{ textShadow: "5px 10px 13px black" }}
              >
                Portfolio
              </h1>
              <div>
                <div className="grid max-lg:grid-cols-1 grid-cols-2 gap-2 place-items-center p-0">
                  {portfolio.map((project) => (
                    <div
                      key={project.id}
                      className="maincontainer flex justify-center"
                    >
                      <div className="back">
                        <h2>{project.title}</h2>
                        <span>
                          {project.description}
                          <div className="p-[10px]">
                            <button className="p-[5px] border-solid border-2 rounded-md">
                              <a target="_blank" href={project.link}>
                                Demo
                              </a>
                            </button>
                            {project.code && (
                              <button className="p-[5px] border-solid border-2 ml-[10px] rounded-md">
                                <a target="_blank" href={project.code}>
                                  Code
                                </a>
                              </button>
                            )}
                          </div>
                        </span>
                      </div>
                      <div className="front bg-zinc-600/25 rounded-2xl">
                        <div className="image">
                          <img src={project.image} />
                          <h2>{project.title}</h2>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="max-sm:h-[40px]" />
              </div>
            </div>
          </div>
        </motion.div>
        <div className="h-[100px]" />
      </div>
    </div>
  );
};

// <a
//   href={project.link}
//   className="relative flex h-[200px] lg:h-[300px] w-11/12 rounded-lg overflow-hidden border-solid border-4 border-zinc-500 shadow-xl"
//   target="_blank"
// >
//   <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-b from-transparent to-zinc-900 z-10 ">
//     <h2 className="text-2xl font-bold text-white p-[5px]">
//       {project.title}
//     </h2>
//   </div>
//   <img
//     src={project.image}
//     className="object-cover h-[300px] w-[600px]"
//   />
// </a>
{
  /* <a
  href="https://stickstock.netlify.app"
  className="relative flex h-[200px] lg:h-[300px] w-11/12 rounded-lg overflow-hidden border-solid border-4 border-zinc-500"
  target="_blank"
>
  <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-b from-transparent to-zinc-900 z-10 ">
    <h2 className="text-2xl font-bold text-white p-[5px]">
      StickStock
    </h2>
  </div>
  <img
    src={stickstock}
    className="object-cover h-[300px] w-[600px]"
  />
</a> */
}
{
  /* <a
  href="https://drizco.netlify.app"
                    className="relative flex h-[200px] lg:h-[300px] w-11/12 rounded-lg overflow-hidden"
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
                    className="relative flex h-[200px] lg:h-[300px] w-11/12 rounded-lg overflow-hidden"
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
                  <a
                    href="https://henryli-portfolio.netlify.app"
                    className="relative flex h-[200px] lg:h-[300px] w-11/12 rounded-lg overflow-hidden"
                    target="_blank"
                  >
                    <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-b from-transparent to-zinc-900 z-10">
                      <h2 className="text-2xl font-bold text-white p-[5px]">
                        V1 Portfolio
                      </h2>
                    </div>
                    <img
                      src={v1portfolio}
                      className="object-cover h-[300px] w-[600px]"
                    />
                  </a> */
}

export default Portfolio;
