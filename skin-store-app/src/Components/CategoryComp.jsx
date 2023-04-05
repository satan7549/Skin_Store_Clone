import { Box, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { c_avg } from "../data/CategoryData";

const CategoryComp = () => {
  return (
    <Box >
      <Heading fontWeight="bolder">Shop By Category</Heading>
      <SimpleGrid
        gridTemplateColumns={{
          lg: "repeat(6, 1fr)",
          md: "repeat(3, 1fr)",
          sm: "repeat(2, 1fr)",
          base: "repeat(1, 1fr)",
        }}
        gridTemplateRows="auto"
        justifyContent="space-around"
        gap={"10px"}
        padding="10px"
      >
        {c_avg.map((el, i) => {
          return (
            <GridItem key={i} p="10px">
              <img alt={i} src={el.src} />
            </GridItem>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default CategoryComp;
