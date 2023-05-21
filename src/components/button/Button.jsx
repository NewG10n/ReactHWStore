import React from "react";
import PropTypes from "prop-types";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  button: {
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

  const { content, onClick } = btnData;

  return (
    <button className={styles.button} onClick={onClick}>
      {content}
    </button>
  );
};

Button.propTypes = {
  btnData: PropTypes.shape({
    content: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
  }).isRequired,
};

export default Button;
