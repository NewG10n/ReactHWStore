import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

import ModalContext from "./contexts/ModalContext";

import Header from "./components/header";
import Modal from "./components/modal";

import "./App.css";

function App() {
  const isModal = useSelector((state) => state.modal);

  const [modalContent, setModalContent] = useState(null);

  return (
    <ModalContext.Provider value={{ modalContent, setModalContent }}>
      <Header />
      <Outlet />

      {isModal && <Modal />}
    </ModalContext.Provider>
  );
}

export default App;
