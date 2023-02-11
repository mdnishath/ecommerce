import Container from "../Container";
import { products } from "../../../Data";
import Product from "../Product";
import Heading from "../Heading.jsx/index.jsx";

const SpecialOffer = () => {
  const limit = 4;
  return (
    <div className="mt-10 xl:mt-[118px]">
      <Container>
        <Heading>Special Offers</Heading>
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

export default SpecialOffer;
