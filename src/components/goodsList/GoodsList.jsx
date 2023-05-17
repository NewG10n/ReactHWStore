import React, { useState, useEffect } from "react";
import axios from "axios";
import GoodCard from "../goodCard";

const GoodsList = () => {
  const [goodsData, setGoodsData] = useState([]);

  useEffect(() => {
    const getGoods = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setGoodsData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getGoods();
  }, []);

  return (
    <ul>
      {goodsData.map((product) => (
        <GoodCard key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default GoodsList;
