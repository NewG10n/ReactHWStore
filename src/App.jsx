import React, { useState } from "react";
import Header from "./components/header";
import GoodsList from "./components/goodsList";
import Modal from "./components/modal";
import ModalContext from "./contexts/ModalContext";
import "./App.css";

function App() {
  const [isModal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  return (
    <ModalContext.Provider
      value={{ isModal, setModal, modalContent, setModalContent }}
    >
      <Header />
      <GoodsList />
      {isModal && <Modal />}
    </ModalContext.Provider>
  );
}

export default App;
