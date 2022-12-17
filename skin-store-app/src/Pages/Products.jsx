import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import CardComp from "../Components/CardComp";
import { ProductContext } from "../Context/ProductContext/ProductContext";
import { NavLink } from "react-router-dom";

export const Products = () => {
  const { state } = useContext(ProductContext);
  const productType = state.categoryProduct;

  return (
    <Box
      display="grid"
      gap="10px"
      p="10px"
      gridTemplateColumns="repeat(4,1fr)"
      gridTemplateRows="auto"
    >
      {productType.map((ele) => (
        <NavLink to={`/products/${ele.id}`} key={ele.id}>
          <CardComp item={ele} />
        </NavLink>
      ))}
    </Box>
  );
};
