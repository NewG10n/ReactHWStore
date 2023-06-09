import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { getAllGoods } from "../../redux/goodsSlice";

import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { createUseStyles } from "react-jss";
import Button from "../button";

const useStyles = createUseStyles({
  header: {
    position: "sticky",
    top: "0px",
    height: "60px",
    padding: "10px",
    backgroundColor: "#e28743",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerBtns: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
  },

  headerIcon: {
    fontSize: "40px",
  },
});

const Header = () => {
  const styles = useStyles();

  const goods = useSelector(getAllGoods);
  const favoriteQty = goods.filter((item) => item.isFavorite).length;
  const cartQty = goods.reduce(
    (acc, item) => (item.cartQty ? (acc += item.cartQty) : acc),
    null
  );

  const favBtnData = {
    content: (
      <>
        <FaHeart className={styles.headerIcon} />
        {favoriteQty || null}
      </>
    ),
  };

  const cartBtnData = {
    content: (
      <>
        <FaShoppingCart className={styles.headerIcon} />
        {cartQty}
      </>
    ),
  };

  return (
    <header className={styles.header}>
      <Link to={"/"}>
        <h1>Shop Anything</h1>
      </Link>

      <div className={styles.headerBtns}>
        <Link to={"favorites"}>
          <Button btnData={favBtnData} />
        </Link>
        <Link to={"cart"}>
          <Button btnData={cartBtnData} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
