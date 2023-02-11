import React from "react";
import Topbar from "../Topbar";
import Mainbar from "../Mainbar";

const Header = () => {
  return (
    <header className="bg-white">
      <Topbar />
      <Mainbar />
    </header>
  );
};

export default Header;
