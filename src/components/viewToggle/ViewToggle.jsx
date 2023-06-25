import React, { useContext } from "react";
import { ViewContext } from "../../App";
export const ViewToggle = () => {
  const { view, setView } = useContext(ViewContext);

  return (
    <>
      <input
        type="checkbox"
        id="switch"
        onChange={() => setView(view === "tiles" ? "list" : "tiles")}
      />
      <label htmlFor="switch">List view</label>
    </>
  );
};
