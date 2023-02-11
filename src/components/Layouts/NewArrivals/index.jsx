import React from "react";
import { products } from "../../../Data";
import Container from "../Container";
import Heading from "../Heading.jsx";
import Product from "../Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";

const NewArrivals = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    // arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 736,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 734,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 684,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mb-[118px]">
      <Container>
        <Heading>New Arrivals</Heading>
        <div className="mt-4 md:mt-12">
          <Slider {...settings}>
            {products.map((item, index) => (
              <Product key={index} item={item} gap={true} />
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default NewArrivals;
