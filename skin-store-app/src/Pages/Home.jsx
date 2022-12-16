import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import IndividualIntervalsExample from "../Components/Carasoul";
import { CategoryComp } from "../Components/CategoryComp";
import { fetchDataBySearch } from "../data/fetchData";

export const Home = () => {
  // const [data,setData]=useState([]);
  // useEffect(()=>{
  //   fetchDataBySearch().then((res)=>setData(res.data));
  // },[])

  // console.log(data);
  return (
    // <Container>
    //   <CategoryComp />
      <IndividualIntervalsExample />
    // </Container>
    //  <ControlledCarousel />
  );
};
