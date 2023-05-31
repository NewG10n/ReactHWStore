import React from "react";
import GoodCard from "../goodCard";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  cards_container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
});
const GoodsList = ({ list }) => {
  const styles = useStyles();

  return (
    <ul className={styles.cards_container}>
      {list.map((product) => (
        <GoodCard key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default GoodsList;
