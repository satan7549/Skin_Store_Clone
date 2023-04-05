import { Box } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { basicResponsive } from "../data/fetchData";
const offers = [
  "FREE US Shipping Over $49",
  "Refer a Friend, Get $15",
  " New Customers Save 20% - Use Code NEWBIE",
  "Download Our App",
];

export const OfferSlider = () => {
  const BoxStyle = {
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "400",
    color: "#333",
    padding: "16px 8px",
    letterSpacing: "0.5px",
    fontSize: "20px",
    fontFamily: "Lato-Regular Helvetica Arial sans-serif",
  };

  return (
    <Carousel
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      transitionDuration={500}
      responsive={basicResponsive}
      arrows={false}
      showDots={true}
      swipeable={false}
      draggable={false}
    >
      {offers.map((ele, i) => (
        <Box key={i} style={BoxStyle} bg="blackAlpha.100">
          {ele}
        </Box>
      ))}
    </Carousel>
  );
};
