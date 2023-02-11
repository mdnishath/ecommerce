import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Image from "../Image";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          width: "50px",
          top: "50%",
          left: "8%",
          transform: "translateY(-50%)",
        }}
      >
        <ul className="absolute top-1/2 left-0 flex -translate-y-1/2 flex-col gap-y-5">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={
          i === dotActive
            ? "border-262626 w-8 border-r-4  py-3 px-0 text-base font-bold text-[#262626]"
            : "w-8 border-r-4 border-white  py-3 px-0 text-base font-bold text-transparent"
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                width: "50px",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul className="absolute top-1/2 left-0 flex -translate-y-1/2 flex-col ">
                {dots}
              </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              className={
                i === dotActive
                  ? "border-262626 w-8 border-r-2   px-0 text-[12px] text-[#262626]"
                  : "w-8 border-r-2 border-white  px-0 text-transparent"
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <Link to="#">
        <div className=" outline-none">
          <Image src="images/banner.png" />
        </div>
      </Link>
      <Link to="#">
        <div className=" outline-none">
          <Image src="images/banner.png" />
        </div>
      </Link>
      <Link to="#">
        <div className=" outline-none">
          <Image src="images/banner.png" />
        </div>
      </Link>
    </Slider>
  );
};

export default Banner;
