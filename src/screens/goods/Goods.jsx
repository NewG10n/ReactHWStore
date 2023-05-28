import React, { useEffect } from "react";
import axios from "axios";

import GoodsList from "../../components/goodsList";
import GoodCard from "../../components/goodCard";

import { useDispatch, useSelector } from "react-redux";
import { fetch } from "../../app/goodsSlice";

const Goods = () => {
  const goodsList = useSelector((state) => state.goods);
  const dispatch = useDispatch();

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

  return <GoodsList list={goodsList} />;
};

export default Goods;
