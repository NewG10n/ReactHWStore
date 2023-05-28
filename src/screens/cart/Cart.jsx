import React from "react";
import { useSelector } from "react-redux";

import GoodsList from "../../components/goodsList";

const Goods = () => {
  const cartList = useSelector((state) => state.goods).filter(
    (item) => item.cartQty
  );

  return cartList.length ? (
    <GoodsList list={cartList} />
  ) : (
    <h3>Your Cart is empty</h3>
  );
};

export default Goods;
