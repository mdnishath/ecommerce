import React from "react";
import { NavLink } from "react-router-dom";
import { menu } from "../../../Data";
const Navbar = () => {
  const active = "text-sm font-bold text-primary";
  const inactive = "text-sm font-normal text-secondery";
  return (
    <div className="">
      <ul className="flex gap-10">
        {menu.map((item, index) => (
          <li key={index}>
            <NavLink
              to={`/${item.link}`}
              className={({ isActive }) => (isActive ? active : inactive)}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
