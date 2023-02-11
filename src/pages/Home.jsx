import React from "react";
import { useSelector } from "react-redux";
import Banner from "../components/Layouts/Banner";

const Home = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user);

  return (
    <>
      <Banner />
    </>
  );
};

export default Home;
