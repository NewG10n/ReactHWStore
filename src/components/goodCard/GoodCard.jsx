import React, { useState } from "react";
import Button from "../button";
import { addToCart, cartHelpers, checkCart } from "../../utils/CartHelpers";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
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
  const styles = useStyles();
  const [isInCart, setInCart] = useState(checkCart(id));

  const btnData = {
    isInCart: isInCart,
    onClick: () => {
      addToCart(id);
      setInCart(true);
    },
  };

  return (
    <li className={styles.card}>
      <h3>{title}</h3>
      <img className={styles.card__img} src={image} alt={title} />
      <p>Price: ${price}</p>
      <p>Product number: {id}</p>
      <Button btnData={btnData} />
    </li>
  );
};

export default GoodCard;
