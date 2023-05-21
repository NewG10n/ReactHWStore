import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  button: {
    backgroundColor: "none",
    color: "#007780",
    border: "none",
    padding: "4px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#007780",
      color: "white",
    },
  },
});

const Button = ({ btnData }) => {
  const styles = useStyles();

  const { text, counter = null, onClick } = btnData;

  return (
    <button className={styles.button} onClick={onClick}>
      {text}
      {counter}
    </button>
  );
};

export default Button;
