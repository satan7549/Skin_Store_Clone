// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css"

import React, { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

// {<p class="primaryBanner_subtitle primaryBanner_subtitle-light"><font size="+1">
// Get 15% off the best beauty finds with code 
// <b> SS15</b> and achieve the ultimate winter-approved beauty routine. 
// <br><br> Order with express shipping by 12/21 and they'll make it under the tree.
// </font></p>}

const Carasoul = () => {
  const [slider, setSlider] =useState(0);
  //  (< Slider) | (null > null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });
  const cards = [
    {
      // title: "Design Projects 1",
      // text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "	https://static.thcdn.com/images/large/webp/widgets/121-us/44/original-New_Project_%288%29-090344.jpg",
    },
    {
      // title: "Design Projects 2",
      // text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://static.thcdn.com/images/medium/webp/widget…ing-And-Artwork-P2-Shot-5-580x384.jpeg-095611.jpg",
    },
    {
      // title: "Design Projects 3",
      // text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:"	https://static.thcdn.com/images/medium/webp/widgets/121-us/00/original-Shot6-580x384-095500.jpeg",
       
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        {/* <BiLeftArrowAlt size="40px" /> */}
        snf

      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        jsd
        {/* <BiRightArrowAlt size="40px" /> */}
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height="100vh"
            w="100vw"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            {/* This is the block you need to change, to customize the caption */}
            {/* <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: "md", lg: "lg" }} color="GrayText">
                  {card.text}
                </Text>
              </Stack>
            </Container> */}
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carasoul;
