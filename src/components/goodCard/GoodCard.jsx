import React, { useState, useContext } from "react";
import ModalContext from "../../contexts/ModalContext";
import Button from "../button";
import {
  getCartQty,
  addToCart,
  removeFromCart,
  checkCart,
} from "../../utils/CartHelpers";
import { getFavQty, checkFav, toggleFav } from "../../utils/FavHelpers";
import CartFavContext from "../../contexts/CartFavContext";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    alignItems: "center",
    width: "20%",
    padding: "20px",
  },

  card__img: {
    maxWidth: "200px",
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
    text: isInCart ? "Add +1" : "Add to Cart",
    onClick: () => {
      addToCart(id);
      setInCart(true);
      setCartQty(getCartQty());
      setModalContent(product);
      setModal(!isModal);
    },
  };

  const btnRemoveData = {
    text: "Remove from Cart",
    onClick: () => {
      removeFromCart(id);
      setCartQty(getCartQty());
      setInCart(false);
    },
  };

  const btnFavData = {
    text: isFav ? "Remove from Favorites" : "Add to Favorites",
    onClick: () => {
      toggleFav(id);
      setFavQty(getFavQty());
      setFav(!isFav);
    },
  };

  return (
    <li className={styles.card}>
      <h3>{title}</h3>
      <img className={styles.card__img} src={image} alt={title} />
      <p>Price: ${price}</p>
      <p>Product number: {id}</p>
      <Button btnData={btnFavData} />
      <Button btnData={btnAddData} />
      {isInCart && <Button btnData={btnRemoveData} />}
    </li>
  );
};

export default GoodCard;
