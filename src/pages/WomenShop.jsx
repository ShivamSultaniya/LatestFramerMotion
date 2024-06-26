import React from "react";
import CustomCursor from "../components/Global/CustomCursor";
import WomenHero from "../components/WomenShop/WomenHero";
import Header from "../components/Global/Header";
import Transition from "../Transition";


const WomenShop = () => {
  return (
    <>
      <Header bgColor={"#f7d7d2"}/>
      <WomenHero />
      <CustomCursor />
    </>
  );
};


export default Transition(WomenShop)