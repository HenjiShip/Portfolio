import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex-1 pl-52 pt-[200px] pr-10 max-lg:p-10 max-sm:pt-[50px] max-sm:pl-[10px] max-sm:pr-[10px]">
        <div className="bg-yellow-200 p-[100px] rounded-xl h-[500px] font-col text-black max-sm:p-[10px]">
          <h1 className="text-6xl font-bold mb-4">About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut
            luctus ex. Phasellus posuere turpis sed malesuada congue. Nulla id
            tellus metus. Donec tristique lacus et eros rhoncus vestibulum.
            Aliquam erat volutpat. Etiam ullamcorper sagittis tellus, vel
            maximus ante vestibulum sit amet. Nulla volutpat felis nec leo
            bibendum, sit amet fringilla eros porttitor. Sed faucibus, dolor id
            euismod ullamcorper, velit mi euismod nibh, vitae bibendum nulla
            lectus vel est. Morbi vel dignissim elit. Nam eget turpis ut leo
            blandit lobortis.
          </p>
        </div>
        <div className="h-[500px]"></div>
      </div>
    </div>
  );
};

export default About;
