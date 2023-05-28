import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

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

  const favoriteQty = useSelector((state) => state.goods).reduce(
    (acc, item) => (item.isFavorite ? (acc += 1) : acc),
    null
  );

  console.log(favoriteQty);

  const cartQty = useSelector((state) => state.goods).reduce(
    (acc, item) => (item.cartQty ? (acc += item.cartQty) : acc),
    null
  );

  const favBtnData = {
    content: (
      <>
        <FaHeart className={styles.headerIcon} />
        {favoriteQty}
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
        <Link to={"fav"}>
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
