import React from "react";
import {
  AiOutlineHome,
  BiUser,
  IoBriefcaseOutline,
  AiOutlineFolderOpen,
  BsEnvelopeAt,
} from "react-icons/all";

import drizco from "../assets/images/drizco.png";
import gluetube from "../assets/images/gluetube.png";
import stickstock from "../assets/images/stickstock.png";
import chateth from "../assets/images/chateth.png";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    icon: <AiOutlineHome />,
  },
  {
    id: "about",
    title: "About",
    icon: <BiUser />,
  },
  {
    id: "portfolio",
    title: "Portfolio",
    icon: <AiOutlineFolderOpen />,
  },
  {
    id: "skills",
    title: "Experience",
    icon: <IoBriefcaseOutline />,
  },
  {
    id: "contact",
    title: "Contact",
    icon: <BsEnvelopeAt />,
  },
];

export const portfolio = [
  {
    id: "stickstock",
    title: "StickStock",
    image: stickstock,
    link: "https://stickstock.netlify.app",
    code: "https://github.com/HenjiShip/StickStock",
    description:
      "This is a CRUD website where the UI is modeled after Tiktok's UI. It supports user authentication through google's auth. This application can also track user's likes and posts. Technologies like React, Express, and MongoDB are used in this project.",
  },
  {
    id: "drizco",
    title: "Drizco",
    image: drizco,
    link: "https://drizco.netlify.app",
    code: "https://github.com/HenjiShip/Ecommerce",
    description:
      "An ecommerce website that uses Sanity, a headless CMS so users can easily create and remove items on sale. Stripe for payment and uses https only cookies for cart data for each user. Uses serverless functions to send data from the client to the database.",
  },
  {
    id: "gluetube",
    title: "Gluetube",
    image: gluetube,
    link: "https://gluetube.netlify.app",
    code: "https://github.com/HenjiShip/Youtube-Clone",
    description:
      "Uses YoutubeV3 rapidAPI to imitate video playing functions that youtube offers. Features a search bar, comments, video categories, and related youtube videos.",
  },
  {
    id: "chateth",
    title: "Chateth",
    image: chateth,
    link: "https://chateth.netlify.app/",
    description:
      "A Persona 5 inspired message application that's deployed with Vite, React, and uses Firebase for real time data storage. Unfinished, but will be finished soon!",
  },
];
