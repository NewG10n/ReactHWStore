import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchGoods, getAllGoods } from "../../redux/goodsSlice";

import GoodsList from "../../components/goodsList";

import { GiSandsOfTime } from "react-icons/gi";

const Goods = () => {
  const dispatch = useDispatch();
  const goodsStatus = useSelector((state) => state.goods.status);

  useEffect(() => {
    if (goodsStatus === "idle") {
      dispatch(fetchGoods());
    }
  }, [goodsStatus, dispatch]);

  const goodsList = useSelector(getAllGoods);

  return goodsStatus === "loading" ? (
    <GiSandsOfTime />
  ) : (
    <GoodsList list={goodsList} />
  );
};

export default Goods;
