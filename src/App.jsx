import React, { useState } from "react";
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
      <GoodsList />
      {isModal && <Modal />}
    </ModalContext.Provider>
  );
}

export default App;
