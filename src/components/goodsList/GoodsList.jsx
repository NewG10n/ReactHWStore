import React, { useState, useEffect } from "react";
import axios from "axios";

import GoodCard from "../goodCard";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  cards_container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
});

const GoodsList = () => {
  const [goodsData, setGoodsData] = useState([]);

  const styles = useStyles();

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
    <ul className={styles.cards_container}>
      {goodsData.map((product) => (
        <GoodCard key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default GoodsList;
