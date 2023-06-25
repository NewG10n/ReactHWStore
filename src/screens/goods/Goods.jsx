import React, { useEffect, createContext, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchGoods, getAllGoods } from "../../redux/goodsSlice";

import GoodsList from "../../components/goodsList";

import { GiSandsOfTime } from "react-icons/gi";

export const ViewContext = createContext("tiles");

const Goods = () => {
  const dispatch = useDispatch();
  const goodsStatus = useSelector((state) => state.goods.status);

  const [view, setView] = useState("tiles");

  useEffect(() => {
    if (goodsStatus === "idle") {
      dispatch(fetchGoods());
    }
  }, [goodsStatus, dispatch]);

  const ViewToggle = () => {
    return (
      <input
        type={"checkbox"}
        onChange={() => setView(view === "tiles" ? "list" : "tiles")}
      />
    );
  };

  const goodsList = useSelector(getAllGoods);

  return goodsStatus === "loading" ? (
    <GiSandsOfTime />
  ) : (
    <ViewContext.Provider value={view}>
      <ViewToggle />
      <GoodsList list={goodsList} />
    </ViewContext.Provider>
  );
};

export default Goods;
