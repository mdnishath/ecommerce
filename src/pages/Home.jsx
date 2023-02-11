import React from "react";
import { useSelector } from "react-redux";
import Adds from "../components/Layouts/Adds";
import AditionalInfo from "../components/Layouts/AditionalInfo";
import Banner from "../components/Layouts/Banner";
import BestSellers from "../components/Layouts/BestSellers";
import MiddleAdd from "../components/Layouts/MiddleAdd";
import NewArrivals from "../components/Layouts/NewArrivals";
import SpecialOffer from "../components/Layouts/SpecialOffer";

const Home = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user);

  return (
    <>
      <Banner />
      <AditionalInfo />
      <Adds />
      <NewArrivals />
      <BestSellers />
      <MiddleAdd />
      <SpecialOffer />
    </>
  );
};

export default Home;
