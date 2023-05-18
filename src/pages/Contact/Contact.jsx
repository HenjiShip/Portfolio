import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/all";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        "template_uspqde5",
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast("Email Sent!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          form.current.reset();
        },
        (error) => {
          toast("Failed to send email.", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };

  return (
    <div className="h-[880px] bg-[#1d1d1d]">
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex items-center justify-center"
      >
        <div className="flex-1 pl-52 pt-20 pr-10 max-lg:p-10 max-w-screen-2xl">
          <div className="grid gap-8 grid-cols-2 max-sm:grid-cols-1">
            <div>
              <h1
                className="text-6xl font-bold mb-4 max-sm:text-4xl"
                style={{ textShadow: "5px 10px 13px black" }}
              >
                Contact
              </h1>
              <span style={{ textShadow: "5px 10px 13px black" }}>
                <p>
                  Services: creating full stack websites using React, Nodejs and
                  MongoDB or Sanity
                </p>
                <br />
                <p>You can also contact me for my resume.</p>
                <ToastContainer />
              </span>
              <div className="flex py-[50px] lg:hidden">
                <div className="p-[10px]">
                  <a href="https://www.linkedin.com/in/henji/" target="_blank">
                    <AiFillLinkedin className="icons-react" />
                  </a>
                </div>
                <div className="p-[10px]">
                  <a href="https://github.com/HenjiShip" target="_blank">
                    <AiFillGithub className="icons-react" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-4"
              >
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="name"
                  className="p-3 rounded-md text-gray-100 bg-gray-900 drop-shadow-lg"
                  required
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@email.com"
                  className="p-3 rounded-md text-gray-100 bg-gray-900 drop-shadow-lg"
                  required
                />
                <textarea
                  id="message"
                  name="message"
                  placeholder="message"
                  rows="10"
                  className="p-3 rounded-md text-gray-100 bg-gray-900 drop-shadow-lg"
                  required
                />
                <input
                  type="submit"
                  value="Send"
                  className="p-[10px] bg-slate-900 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400"
                />
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
