import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";

const Root = () => {
  return (
    <>
      <Header />

      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
