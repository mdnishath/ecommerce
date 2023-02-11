import React from "react";
import Container from "./Container";
import { TbNumber2 } from "react-icons/tb";
import { MdLocalShipping } from "react-icons/md";
import { BsArrowReturnLeft } from "react-icons/bs";

const AditionalInfo = () => {
  return (
    <div className="z-50 -mt-2 border border-[#F0F0F0]  md:-mt-4">
      <Container>
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2 py-2 sm:gap-x-4 sm:py-7">
            <TbNumber2 className="text-[10px] sm:text-xl" />
            <p className="font-dm text-[10px] font-normal text-[#6D6D6D] sm:text-base">
              Two years warranty
            </p>
          </div>
          <div className="flex items-center gap-x-2 py-2 sm:gap-x-4 sm:py-7">
            <MdLocalShipping className="text-[10px] sm:text-xl" />
            <p className="font-dm text-[10px] font-normal text-[#6D6D6D] sm:text-base">
              Free shipping
            </p>
          </div>
          <div className="flex items-center gap-x-2 py-2 sm:gap-x-4 sm:py-7">
            <BsArrowReturnLeft className="text-[10px] sm:text-xl" />
            <p className="font-dm text-[10px] font-normal text-[#6D6D6D] sm:text-base">
              Return policy in 30 days
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AditionalInfo;
