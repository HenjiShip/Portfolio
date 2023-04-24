import React from "react";
import {
  AiOutlineHome,
  BiUser,
  IoBriefcaseOutline,
  AiOutlineFolderOpen,
  BsEnvelopeAt,
} from "react-icons/all";

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
