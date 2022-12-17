import { Avatar, Box, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import { c_avg } from "../data/CategoryData";

export const CategoryComp = () => {
  return (
    <Box mt={4} border="1px solid red">
      <Heading fontWeight="bolder">Shop By Category</Heading>
      <Grid templateColumns="repeat(6,1fr)" gap={2}>
        {c_avg.map((el) => {
          return (
            <GridItem>
              <Avatar size="2xl" src={el} />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};
