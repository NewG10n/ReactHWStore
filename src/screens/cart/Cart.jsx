import React, { useEffect, useState } from "react";
import GoodCard from "../../components/goodCard";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  cards_container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
});

const Cart = () => {
  const [goodsData, setGoodsData] = useState([]);
  const styles = useStyles();

  useEffect(() => {
    const getGoods = () => {
      setGoodsData(JSON.parse(localStorage.getItem("cart")));
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

export default Cart;
