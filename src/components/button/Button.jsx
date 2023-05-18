import React from "react";

const Button = ({ btnData }) => {
  const { text, onClick } = btnData;

  return <button onClick={onClick}>{text}</button>;
};

export default Button;
