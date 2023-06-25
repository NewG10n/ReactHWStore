import React, { useContext } from "react";
import { ViewContext } from "../../App";
export const ViewToggle = () => {
  const { view, setView } = useContext(ViewContext);

  const handleChange = () => setView(view === "tiles" ? "list" : "tiles");

  return (
    <>
      <input
        type="checkbox"
        checked={view === "list"}
        onChange={handleChange}
        id="switch"
      />
      <label htmlFor="switch">List view</label>
    </>
  );
};
