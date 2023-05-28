import React, { useEffect } from "react";
import axios from "axios";

import GoodCard from "../../components/goodCard";

import { useDispatch, useSelector } from "react-redux";
import { fetch } from "../../app/goodsSlice";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  cards_container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
});

const Goods = () => {
  const goodsList = useSelector((state) => state.goods);
  const dispatch = useDispatch();

  const styles = useStyles();

  useEffect(() => {
    const getGoods = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        dispatch(fetch(response.data));
      } catch (error) {
        console.error(error);
      }
    };

    getGoods();
  }, [dispatch]);

  return (
    <ul className={styles.cards_container}>
      {goodsList.map((product) => (
        <GoodCard key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default Goods;
