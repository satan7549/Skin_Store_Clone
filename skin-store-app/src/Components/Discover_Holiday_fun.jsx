import React, { useState } from "react";
import {
  Last_Minute_Gifting,
  New_Arrivals,
  Best_Sellers,
} from "../data/DiscoverHolidayfun";
import CardComp from "./CardComp";
import "../style/Discover_Holiday_fun.css";
import {  GridItem, SimpleGrid } from "@chakra-ui/react";

export const DiscoverHolidayFun = () => {
  const [category, setCategory] = useState(Last_Minute_Gifting);
  return (
    <div className="Discover_Holiday_fun">
      <h2>Discover Holiday fun</h2>
      <div className="btnBox">
        <span onClick={() => setCategory(Last_Minute_Gifting)}>
          25% off Last Minute Gifting
        </span>
        <span onClick={() => setCategory(New_Arrivals)}>New Arrivals</span>
        <span onClick={() => setCategory(Best_Sellers)}>Best Sellers</span>
      </div>
      {/* className="cartItemsBox" */}
      <SimpleGrid  gridTemplateColumns={{lg:"repeat(4,1fr)",md:"repeat(2,1fr)",sm:"repeat(1,1fr)",base:"repeat(1,1fr)"}} alignItems="center" justifyContent="space-around" padding="10px" gap={"10px"}>
        {category.map((ele) => (
          <GridItem key={ele.id}  >
            <CardComp item={ele} />
          </GridItem>
        ))}
      </SimpleGrid>
    </div>
  );
};
