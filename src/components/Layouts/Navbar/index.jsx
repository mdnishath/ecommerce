import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { menu } from "../../../Data";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const active = "md:text-sm text-white font-bold md:text-primary";
  const inactive = "md:text-sm text-whiteoff font-normal md:text-secondery";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShow(false);
      } else {
        setShow(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);
  return (
    <nav className="">
      <RiBarChartHorizontalFill
        onClick={() => setShow(!show)}
        className="absolute top-6 right-2.5 ml-auto block cursor-pointer md:hidden"
      />
      {show && (
        <ul className="absolute top-0 left-0 z-[100] h-full w-full gap-10 bg-primary md:static md:flex md:h-auto md:bg-transparent">
          <AiOutlineClose
            onClick={() => setShow(!show)}
            className="absolute top-6 right-2.5 ml-auto block cursor-pointer text-white md:hidden"
          />
          {menu.map((item, index) => (
            <li key={index} className="py-3 px-4 md:py-0 md:px-0">
              <NavLink
                to={`/${item.link}`}
                className={({ isActive }) => (isActive ? active : inactive)}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
