import React from "react";

const Button = ({ btnData }) => {
  const { text, counter = null, onClick } = btnData;

  return (
    <button onClick={onClick}>
      {text}
      {counter}
    </button>
  );
};

export default Button;
