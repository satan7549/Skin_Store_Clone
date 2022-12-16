import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CardComp from "../Components/CardComp";
// import IndividualIntervalsExample from "../Components/Carasoul";
import { CategoryComp } from "../Components/CategoryComp";
import { fetchDataBySearch } from "../data/fetchData";
import { Products } from "./Products";

export const Home = () => {


  return (
    // <Container>
    // <CategoryComp /> 
    //   {/* <IndividualIntervalsExample /> */}
    // </Container>
    <Products />
    
  );
};
