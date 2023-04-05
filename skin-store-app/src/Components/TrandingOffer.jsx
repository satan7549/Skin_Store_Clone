import {
  Box,
  Button,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { trandingOffer } from "../data/DiscoverHolidayfun";

export const TrandingOffer = () => {
  return (
    <Box>
      <Heading fontWeight="bolder">Tranding Offer</Heading>
      <SimpleGrid
        gridTemplateColumns={{
          lg: "repeat(3, 1fr)",
          md: "repeat(2, 1fr)",
          sm: "repeat(2, 1fr)",
          base: "repeat(1, 1fr)",
        }}
        gridTemplateRows="auto"
        justifyContent="space-around"
        gap={"10px"}
        padding="10px"
      >
        {trandingOffer.map((el, i) => {
          return (
            <GridItem key={i} p={"10px"}>
              <VStack gap={"20px"}>
                <Image alt={i} src={el.src} />
                <Text as={"h4"} h="50px" overflow={"auto"}>
                  {el.h}
                </Text>
                <Text as={"p"} h="100px" overflow={"auto"}>
                  {el.p}
                </Text>
                <Button>Shop Now</Button>
              </VStack>
            </GridItem>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};
