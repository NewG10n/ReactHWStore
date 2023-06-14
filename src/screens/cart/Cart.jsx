import React from "react";
import { useSelector } from "react-redux";

import GoodsList from "../../components/goodsList";
import { getAllGoods, getOrderedGoods } from "../../redux/goodsSlice";

import DeliveryForm from "../../components/deliveryForm";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    width: "100%",
    display: "flex",
  },
});

const Goods = () => {
  const cartList = useSelector(getOrderedGoods);

  const styles = useStyles();

  return cartList.length ? (
    <div className={styles.container}>
      <DeliveryForm />
      <GoodsList list={cartList} />
    </div>
  ) : (
    <h3>Your Cart is empty</h3>
  );
};

export default Goods;
