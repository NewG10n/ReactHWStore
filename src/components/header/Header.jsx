import React, { useContext } from "react";

import CartFavContext from "../../contexts/CartFavContext";

import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { createUseStyles } from "react-jss";
import Button from "../button";

const useStyles = createUseStyles({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100px",
    padding: "10px",
    borderBottom: "2px solid grey",
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

  const { cartQty, favQty } = useContext(CartFavContext);

  const favBtnData = {
    content: (
      <>
        <FaHeart className={styles.headerIcon} />
        {favQty}
      </>
    ),
    onClick: () => {
      console.log("going to the favs");
    },
  };

  const cartBtnData = {
    content: (
      <>
        <FaShoppingCart className={styles.headerIcon} />
        {cartQty}
      </>
    ),
    onClick: () => {
      console.log("going to the cart");
    },
  };

  return (
    <header className={styles.header}>
      <h1>Shop Anything</h1>
      <div className={styles.headerBtns}>
        <Button btnData={favBtnData} />
        <Button btnData={cartBtnData} />
      </div>
    </header>
  );
};

export default Header;
