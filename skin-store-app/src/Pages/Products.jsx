import React, { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import  CardComp from "../Components/CardComp"
import { fetchAllProducts, SearchByCategory } from '../data/fetchData';

export const Products = () => {
  // const {type}=props;
  // console.log(type);
  const [productType,setProductTtype]=useState([]);


// useEffect(()=>{
//   try{
//     SearchByCategory(type).then((res)=>setProductTtype(res.data))
//   }catch(error){
//   console.log('error:', error)
//   }
  
// },[type])

console.log(productType);

  return (
    <Box display="grid" gap="10px" p="10px" gridTemplateColumns="repeat(4,1fr)" gridTemplateRows="auto" >
      {
        productType.map((ele)=><CardComp key={ele.id} item={ele} /> )
      }
      
    </Box>
  )
}
