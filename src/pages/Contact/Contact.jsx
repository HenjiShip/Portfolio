import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex-1 pl-52 pt-20 pr-10 max-lg:p-10 max-w-screen-2xl">
        <div className="grid gap-8 grid-cols-2 max-sm:grid-cols-1">
          <div>
            <h1 className="text-6xl font-bold mb-4">Contact</h1>
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
          <div>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="name"
                className="p-3 rounded-md text-gray-100 bg-gray-900 drop-shadow-lg"
              ></input>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="email"
                className="p-3 rounded-md text-gray-100 bg-gray-900 drop-shadow-lg"
              ></input>
              <textarea
                id="message"
                name="message"
                placeholder="message"
                rows="10"
                className="p-3 rounded-md text-gray-100 bg-gray-900 drop-shadow-lg"
              ></textarea>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
