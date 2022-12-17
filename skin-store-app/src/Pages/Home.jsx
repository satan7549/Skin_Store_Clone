import { Spacer } from "@chakra-ui/react";
import React from "react";
import Carasoul from "../Components/Carasoul";
import  Footer  from "../Components/Footer";
import { Products } from "./Products";

export const Home = () => {


  return (
    <>
    <Carasoul />
    <Spacer />
    <Footer />
    </>
    
  );
};
