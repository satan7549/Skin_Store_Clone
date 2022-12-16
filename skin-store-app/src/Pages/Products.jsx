import React, { useContext, useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import  CardComp from "../Components/CardComp"
import { fetchAllProducts, SearchByCategory } from '../data/fetchData';
import { ProductContext } from '../Context/ProductContext/ProductContext';

export const Products = () => {
  const {state}=useContext(ProductContext);
  const productType=state.categoryProduct
  
  return (
    <Box display="grid" gap="10px" p="10px" gridTemplateColumns="repeat(4,1fr)" gridTemplateRows="auto" >
      {
        productType.map((ele)=><CardComp key={ele.id} item={ele} /> )
      }
    </Box>
  )
}
