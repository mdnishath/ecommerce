import React from "react";
import Container from "../Container";
import Image from "../Image";
import Navbar from "../Navbar";

const Topbar = () => {
  return (
    <Container>
      <div className="flex py-8">
        <Image
          className={"object-contain"}
          src={"images/logo.png"}
          alt={"logo"}
        />
        <div className="mx-auto">
          <Navbar />
        </div>
      </div>
    </Container>
  );
};

export default Topbar;
