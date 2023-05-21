import React, { useState, useContext } from "react";
import ModalContext from "../../contexts/ModalContext";
import CartFavContext from "../../contexts/CartFavContext";

import Button from "../button";
import {
  getCartQty,
  addToCart,
  removeFromCart,
  checkCart,
} from "../../utils/CartHelpers";
import { getFavQty, checkFav, toggleFav } from "../../utils/FavHelpers";

import {
  FaShoppingCart,
  FaCartPlus,
  FaRegHeart,
  FaHeart,
} from "react-icons/fa";

import { IoRemoveCircleOutline } from "react-icons/io5";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    alignItems: "center",
    width: "20%",
    padding: "20px",

    borderRadius: "10px",
    boxShadow: "0 0 10px #007780",
    margin: "8px",
  },

  productID: {
    fontSize: "8px",
    color: "grey",
    margin: "0 auto 0 0",
  },

  product__title: {
    margin: "8px auto 8px 0",
  },

  card__img: {
    width: "100%",
    height: "200px",
    objectFit: "contain",
    margin: "8px auto",
  },

  product__price: {
    fontWeight: "700",
    margin: "auto 0 0 auto ",
    color: "darkred",
  },

  actions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "8px",
  },

  cartActions: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "4px",
    width: "100%",
  },
});

const GoodCard = ({ product }) => {
  const { title, image, price, id } = product;

  const [isInCart, setInCart] = useState(checkCart(id));
  const [isFav, setFav] = useState(checkFav(id));

  const { isModal, setModal, setModalContent } = useContext(ModalContext);
  const { setCartQty, setFavQty } = useContext(CartFavContext);

  const styles = useStyles();

  const btnAddData = {
    text: isInCart ? <FaCartPlus /> : <FaShoppingCart />,
    onClick: () => {
      addToCart(id);
      setInCart(true);
      setCartQty(getCartQty());
      setModalContent(product);
      setModal(!isModal);
    },
  };

  const btnRemoveData = {
    text: <IoRemoveCircleOutline />,
    onClick: () => {
      removeFromCart(id);
      setCartQty(getCartQty());
      setInCart(false);
    },
  };

  const btnFavData = {
    text: isFav ? <FaHeart /> : <FaRegHeart />,
    onClick: () => {
      toggleFav(id);
      setFavQty(getFavQty());
      setFav(!isFav);
    },
  };

  return (
    <li className={styles.card}>
      <p className={styles.productID}>Product ID: {id}</p>
      <img className={styles.card__img} src={image} alt={title} />
      <h4 className={styles.product__title}>{title}</h4>
      <p className={styles.product__price}>${price}</p>
      <div className={styles.actions}>
        <Button btnData={btnFavData} />
        <div className={styles.cartActions}>
          {isInCart && <Button btnData={btnRemoveData} />}
          <Button btnData={btnAddData} />
        </div>
      </div>
    </li>
  );
};

export default GoodCard;
