import React from "react";
import { useSelector } from "react-redux";
import Adds from "../components/Layouts/Adds";
import AditionalInfo from "../components/Layouts/AditionalInfo";
import Banner from "../components/Layouts/Banner";

const Home = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user);

  return (
    <>
      <Banner />
      <AditionalInfo />
      <Adds />
    </>
  );
};

export default Home;
