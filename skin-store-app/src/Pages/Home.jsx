import React, { useState } from 'react'
import { useEffect } from 'react'
import { Carasoul } from '../Components/Carasoul'
import { fetchDataBySearch } from '../data/fetchData'

export const Home = () => {
//   const [data,setData]=useState([]);
//   useEffect(()=>{
//     fetchDataBySearch().then((res)=>setData(res.data))
//   },[])
// console.log(data);

  return (
    <Carasoul />
  )
}
