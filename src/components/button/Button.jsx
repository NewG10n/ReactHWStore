import React from "react";

const Button = ({ btnData }) => {
  const { isInCart, onClick } = btnData;

  return (
    <button onClick={onClick}>{isInCart ? "Add +1" : "Add to cart"}</button>
  );
};

export default Button;
