import React, { useContext } from "react";
import GoodCard from "../goodCard";

import { createUseStyles } from "react-jss";
import { ViewContext } from "../../App";

const useStyles = createUseStyles({
  cards_container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },

  list_view: {
    flexDirection: "column",
  },
});
const GoodsList = ({ list }) => {
  const { view } = useContext(ViewContext);

  const styles = useStyles();

  return (
    <ul
      className={`${styles.cards_container} ${
        view === "list" ? styles.list_view : ""
      }`}
    >
      {list.map((product) => (
        <GoodCard key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default GoodsList;
