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
import v1portfolio from "../assets/images/v1portfolio.png";

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
  },
  {
    id: "drizco",
    title: "Drizco",
    image: drizco,
    link: "https://drizco.netlify.app",
    code: "https://github.com/HenjiShip/Ecommerce",
  },
  {
    id: "gluetube",
    title: "Gluetube",
    image: gluetube,
    link: "https://gluetube.netlify.app",
    code: "https://github.com/HenjiShip/Youtube-Clone",
  },
  {
    id: "v1portfolio",
    title: "V1 Portfolio",
    image: v1portfolio,
    link: "https://henryli-portfolio.netlify.app",
  },
];
