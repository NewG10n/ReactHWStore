import React, { useEffect } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { fetch, getAllGoods } from "../../redux/goodsSlice";

import GoodsList from "../../components/goodsList";

const Goods = () => {
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

  const goodsList = useSelector(getAllGoods);

  return <GoodsList list={goodsList} />;
};

export default Goods;
