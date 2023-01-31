import { Box,Image } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { cards } from "../data/fetchData";
import { basicResponsive } from "../data/fetchData";

export const ImageSlider = () => {
  return (
    <Carousel
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      transitionDuration={1000}
      responsive={basicResponsive}
      arrows={true}
      showDots={true}
      swipeable={false}
      draggable={false}
    >
      {cards.map((ele, i) => (
        <Box key={i} h={{lg:"600px",md:"400px",sm:"200px"}} >
          <Image w="full" h="full" src={ele.image} alt={i} />
        </Box>
      ))}
    </Carousel>
  );
};
