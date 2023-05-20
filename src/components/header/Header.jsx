import React from "react";

import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { createUseStyles } from "react-jss";

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

  headerBtn: {
    position: "relative",
    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "200px",
      height: "200px",
      background: "red",
      zIndex: "1",
    },
  },
});

const Header = () => {
  const styles = useStyles();

  return (
    <header className={styles.header}>
      <h1>Shop Anything</h1>
      <div className={styles.headerBtns}>
        <FaHeart className={`${styles.favIcon} ${styles.headerBtn}`} />
        <FaShoppingCart className={styles.cartIcon} />
      </div>
    </header>
  );
};

export default Header;
