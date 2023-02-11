import React from "react";
import Container from "../Container";

import Image from "../Image";

const Adds = () => {
  return (
    <div className=" my-5 md:my-[140px]">
      <Container>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <Image className="h-full w-full" src="images/add1.png" />
          </div>
          <div className="flex w-full flex-col gap-y-3 md:gap-y-10">
            <Image className="w-full" src="images/add2.png" />
            <Image className="w-full object-cover" src="images/add3.png" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Adds;

{
  /* <div className="flex h-full gap-x-5 md:gap-x-10">
  <div className="w-1/2">
    <Image className="h-full w-full" src="images/add1.png" />
  </div>
  <div className="w-1/2">
    <div className="flex w-full flex-col gap-y-5 md:gap-y-10">
      <Image className="w-full" src="images/add2.png" />
      <Image className="w-full object-cover" src="images/add3.png" />
    </div>
  </div>
</div>; */
}
