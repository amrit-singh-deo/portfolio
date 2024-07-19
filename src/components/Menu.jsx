import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const menuList = useRef();

  return (
    <ul
      ref={menuList}
      className="lg:flex-row flex-col flex items-center justify-center sm:justify-between gap-10 font-semibold text-2xl h-2/3 w-full lg:text-xl md:text-4xl"
    >
      <li className="h-full flex items-center justify-center menu">
        <Link className="hover:text-teal-500 transition duration-200" to="/">
          Home
        </Link>
      </li>
      <li className="h-full flex items-center justify-center menu">
        <Link
          className="hover:text-teal-500 transition duration-200"
          to="/about"
        >
          About
        </Link>
      </li>
      <li className="h-full flex items-center justify-center menu">
        <Link
          className="hover:text-teal-500 transition duration-200"
          to="/project"
        >
          Projects
        </Link>
      </li>
      <li className="h-full flex items-center justify-center menu">
        <Link
          className="hover:text-teal-500 transition duration-200"
          to="/contact"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
