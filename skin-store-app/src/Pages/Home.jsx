import React, { useEffect, useState } from 'react'
import { fetchDataBySearch } from '../data/fetchData'

export const Home = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetchDataBySearch().then((res)=>setData(res.data));
  },[])

  console.log(data);
  return (
   <div>Home</div>
  )
}
