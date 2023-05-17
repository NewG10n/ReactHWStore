import React from "react";
import Button from "../button";

const GoodCard = ({ product }) => {
  const { title, image, price, id } = product;

  return (
    <li>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>Price: ${price}</p>
      <p>Product number: {id}</p>
      <Button />
    </li>
  );
};

export default GoodCard;
