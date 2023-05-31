import React from "react";
import PropTypes from "prop-types";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  button: {
    color: "#2596be",
    border: "none",
    padding: "4px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#2596be",
      color: "white",
    },
  },
});

const Button = ({ btnData }) => {
  const styles = useStyles();

  const { content, onClick = null } = btnData;

  return (
    <button className={styles.button} onClick={onClick}>
      {content}
    </button>
  );
};

Button.propTypes = {
  btnData: PropTypes.shape({
    content: PropTypes.element.isRequired,
  }).isRequired,
};

export default Button;
