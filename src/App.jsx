import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

import Header from "./components/header";
import Modal from "./components/modal";

import "./App.css";

export const ViewContext = createContext({ view: "tiles", setView: () => {} });

function App() {
  const isModal = useSelector((state) => state.modal.isModalOpen);

  const [view, setView] = useState("tiles");
  const value = { view, setView };

  return (
    <ViewContext.Provider value={value}>
      <Header />
      <Outlet />
      {isModal && <Modal />}
    </ViewContext.Provider>
  );
}

export default App;
