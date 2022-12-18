import React, { useState } from "react";
import {
  Last_Minute_Gifting,
  New_Arrivals,
  Best_Sellers,
} from "../data/DiscoverHolidayfun";
import CardComp from "./CardComp";
import "../style/Discover_Holiday_fun.css"

export const Discover_Holiday_fun = () => {
    const [category,setCategory]=useState(Last_Minute_Gifting);
  return (
    <div className="Discover_Holiday_fun" >
      <h2>Discover Holiday fun</h2>
      <div className="btnBox" >
        <span onClick={()=>setCategory(Last_Minute_Gifting)} >25% off Last Minute Gifting</span>
        <span onClick={()=>setCategory(New_Arrivals)} >New Arrivals</span>
        <span onClick={()=>setCategory(Best_Sellers)} >Best Sellers</span>
      </div>
      <div className="cartItemsBox" >
        {
          category.map((ele)=><CardComp key={ele.id} item={ele} />)  
        }
      </div>
    </div>
  );
};
