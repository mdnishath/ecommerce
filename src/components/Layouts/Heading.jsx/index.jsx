import React from "react";

const Heading = ({ children }) => {
  return (
    <div className="text-2xl font-bold text-primary md:text-[40px]">
      {children}
    </div>
  );
};

export default Heading;
