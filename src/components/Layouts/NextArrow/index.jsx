import React from "react";
import { FaArrowRight } from "react-icons/fa";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <span
      className="absolute bottom-[-5%] right-[30%] z-20 !inline-block h-8 w-8 rounded-full bg-black text-white md:bottom-[-20%] xl:top-1/2 xl:right-[-4%] xl:h-16 xl:w-16 xl:-translate-y-1/2"
      onClick={onClick}
    >
      <div className="flex h-full w-full items-center justify-center ">
        <FaArrowRight className="text-base" />
      </div>
    </span>
  );
};

export default NextArrow;
