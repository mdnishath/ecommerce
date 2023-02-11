import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Layouts/Header";

const Root = () => {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};

export default Root;
