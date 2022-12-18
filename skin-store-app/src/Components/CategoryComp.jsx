import {Heading } from "@chakra-ui/react";
import React from "react";
import { c_avg } from "../data/CategoryData";
import "../style/CategoryComp.css"

const CategoryComp = () => {
  return (
    <div className="maincategoryItem">
      <Heading fontWeight="bolder">Shop By Category</Heading>
      <div className="categoryItem">
        {c_avg.map((el,i) => {
          return (
            <div key={i}>
              <img src={el.src} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryComp