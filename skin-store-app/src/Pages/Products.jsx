import React, { useContext } from "react";
import { GridItem, SimpleGrid } from "@chakra-ui/react";
import CardComp from "../Components/CardComp";
import { ProductContext } from "../Context/ProductContext/ProductContext";
// import { NavLink } from "react-router-dom";

export const Products = () => {
  const { state } = useContext(ProductContext);
  const productType = state.categoryProduct;
  return (
    <SimpleGrid
      gridTemplateColumns={{
        lg: "repeat(4, 1fr)",
        md: "repeat(3, 1fr)",
        sm: "repeat(2, 1fr)",
        base: "repeat(1, 1fr)",
      }}
      justifyContent="space-around"
      gap={"10px"}
      padding="10px"
    >
      {productType.map((ele) => (
        <GridItem key={ele.id}>
          <CardComp item={ele} />
        </GridItem>
      ))}
    </SimpleGrid>
  );
};
