import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext/ProductContext";
import { fetchSingleProductByID } from "../data/fetchData";

export const SingleProduct = () => {
  // const {state,}=useContext(ProductContext);
  const {id}=useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetchSingleProductByID(id).then((res) => setData(res.data));
  }, [id]);
  console.log(data);

  return <div>SingleProduct</div>;
};
