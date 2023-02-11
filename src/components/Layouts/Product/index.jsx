import React from "react";
import Image from "../Image";
import { AiFillHeart, TfiReload, MdShoppingCart } from "../../../Icons";
const Product = ({ item, gap }) => {
  return (
    <div
      className={`group relative w-full overflow-y-hidden ${
        gap ? "p-0 sm:p-2 md:p-2" : "p-0"
      }`}
    >
      <div className="relative w-full overflow-y-hidden">
        <Image src={item.image} className={"w-full"} />
        <p className="absolute top-5 left-5 bg-primary px-8 py-2 capitalize text-white">
          {item.badge}
        </p>
        <div className=" !z-100 absolute bottom-[-44%] left-0 h-40 w-full bg-white py-6 px-7 duration-300 ease-in group-hover:bottom-0">
          <div>
            <div className=" flex items-center justify-end gap-x-2">
              <p className="font-dm text-base font-normal text-[#6D6D6D] sm:text-base">
                Add to Wish List
              </p>
              <AiFillHeart className="text-base" />
            </div>
          </div>
          <div className=" my-5">
            <div className=" flex items-center justify-end gap-x-2">
              <p className="font-dm text-base font-normal text-[#6D6D6D] sm:text-base">
                Compare
              </p>
              <TfiReload className="text-base" />
            </div>
          </div>
          <div>
            <div className=" flex items-center justify-end gap-x-2">
              <p className="font-dm text-base font-bold text-primary sm:text-base">
                Add to Cart
              </p>
              <MdShoppingCart className="text-base" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-6 flex justify-between">
          <h3 className="text-lg font-bold text-primary md:text-xl">
            {item.title}
          </h3>
          <span className="text-base text-secondery">${item.price}</span>
        </div>
        <p className="my-4 text-base capitalize text-secondery">{item.color}</p>
      </div>
    </div>
  );
};

export default Product;
