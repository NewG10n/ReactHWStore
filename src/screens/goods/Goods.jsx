import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchGoods, getAllGoods } from "../../redux/goodsSlice";

import GoodsList from "../../components/goodsList";

import { GiSandsOfTime } from "react-icons/gi";
import ViewToggle from "../../components/viewToggle";

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
    <>
      <ViewToggle />
      <GoodsList list={goodsList} />
    </>
  );
};

export default Goods;
