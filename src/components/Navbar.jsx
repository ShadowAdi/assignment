import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between px-1 py-3 border-b border-b-gray-600 items-center">
      <NavLink
        to={"/"}
        className="text-2xl font-bold cursor-pointer
    "
      >
        Assignment
      </NavLink>
      <div className="flex gap-3 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-base ${isActive ? "border-b-2 border-black" : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/postAll"
          className={({ isActive }) =>
            `text-base ${isActive ? "border-b-2 border-black" : ""}`
          }
        >
          All Posts
        </NavLink>{" "}
      </div>
    </nav>
  );
};

export default Navbar;
