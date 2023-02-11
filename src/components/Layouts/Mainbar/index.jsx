import React, { useRef, useState, useEffect } from "react";
import Container from "../Container";
import {
  HiBars2,
  BiSearchAlt2,
  BsCartFill,
  FaUserAlt,
  IoMdArrowDropdown,
} from "../../../Icons";
import Dropdown from "../Dropdown";
import { NavLink } from "react-router-dom";
import { cat } from "../../../Data";

const Mainbar = () => {
  const active = "text-sm font-bold text-white pl-3";
  const inactive = "text-sm font-normal text-whiteoff";
  const [categoryshow, setCategory] = useState(false);
  const [usershow, setUsershow] = useState(false);
  const [cartshow, setCartshow] = useState(false);
  const categoryRef = useRef();
  const userRef = useRef();
  const cartRef = useRef();

  //show hide using ref
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      // console.log(ref.current);
      if (categoryRef.current.contains(e.target)) {
        setCategory(true);
      } else {
        setCategory(false);
      }
      //   if (userRef.current.contains(e.target)) {
      //     setUsershow(true);
      //   } else {
      //     setUsershow(false);
      //   }
      //   if (cartRef.current.contains(e.target)) {
      //     setCartshow(true);
      //   } else {
      //     setCartshow(false);
      //   }
    });
  }, []);
  return (
    <div className="bg-third py-6">
      <Container>
        <div className="grid grid-cols-2 items-center gap-3 md:grid-cols-3 md:gap-0">
          <div className="inline-flex">
            <Dropdown dropref={categoryRef} className={"relative"}>
              <div className="flex cursor-pointer items-center gap-3">
                <HiBars2 className="text-xl text-primary" />
                <p className=" text-sm font-semibold">Shop by Category</p>
              </div>
              {categoryshow && (
                <ul className="absolute top-6 z-50 order-1 w-[263px] divide-y divide-divid bg-primary">
                  {cat.map((item, index) => (
                    <li key={index} className="px-6 py-4">
                      <NavLink
                        to={`/${item.link}`}
                        className={({ isActive }) =>
                          isActive ? active : inactive
                        }
                      >
                        {item.text}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </Dropdown>
          </div>

          <div className="relative order-3 col-span-2 md:order-2 md:col-span-1">
            <input
              type="text"
              placeholder="Search Products"
              className="input w-full placeholder:text-sm placeholder:text-placeholder"
            />
            <BiSearchAlt2 className="absolute top-1/2 right-5 -translate-y-1/2 text-xl" />
          </div>
          <div className="order-2 flex items-center justify-end gap-10 md:order-3">
            <div className="flex items-center gap-3">
              <FaUserAlt />
              <IoMdArrowDropdown />
            </div>
            <div>
              <BsCartFill />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Mainbar;
