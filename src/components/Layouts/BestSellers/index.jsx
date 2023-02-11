import React from "react";
import Container from "../Container";
import { products } from "../../../Data";
import Product from "../Product";
import Heading from "../Heading.jsx/index.jsx";

const BestSellers = () => {
  const limit = 4;
  return (
    <div className="mb-10 xl:mb-[118px]">
      <Container>
        <Heading>Our Bestsellers</Heading>
        <div className="mt-4 grid sm:grid-cols-2 md:mt-12 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
          {products.map(
            (item, index) =>
              index < limit && <Product key={index} item={item} gap={true} />
          )}
        </div>
      </Container>
    </div>
  );
};

export default BestSellers;
