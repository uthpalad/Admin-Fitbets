import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Category",
    path: "/categorylist",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Subcategory",
    path: "/subcategorylist",
    icon: <IoIcons.IoIosBrowsers />,
    cName: "nav-text",
  },
  {
    title: "Admin List",
    path: "/userlist",
    icon: <IoIcons.IoMdContact />,
    cName: "nav-text",
  },

  {
    title: "User List",
    path: "/adduserlist",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },

  {
    title: "Add Users",
    path: "/adduser",
    icon: <IoIcons.IoMdPersonAdd />,
    cName: "nav-text",
  },

  {
    title: "Profile",
    path: "/profile",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "SignOut",
    path: "/login",
    icon: <FaIcons.FaSignOutAlt />,
    cName: "nav-text",
  },
];
