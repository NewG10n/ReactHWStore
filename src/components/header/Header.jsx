import React, { useContext } from "react";

import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { createUseStyles } from "react-jss";
import Button from "../button";
import CartFavContext from "../../contexts/CartFavContext";

const useStyles = createUseStyles({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100px",
    padding: "10px",
    borderBottom: "1px solid black",
  },

  headerBtns: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
  },

  cartIcon: {
    color: "#007780",
    fontSize: "40px",
    cursor: "pointer",
  },

  favIcon: {
    color: "#007780",
    fontSize: "40px",
    cursor: "pointer",
  },
});

const Header = () => {
  const styles = useStyles();

  const { cartQty, favQty } = useContext(CartFavContext);

  const favBtnData = {
    text: <FaHeart className={styles.favIcon} />,
    counter: favQty,
    onClick: () => {
      console.log("going to the favs");
    },
  };

  const cartBtnData = {
    text: <FaShoppingCart className={styles.cartIcon} />,
    counter: cartQty,
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
