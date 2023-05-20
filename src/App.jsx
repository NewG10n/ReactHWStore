import React, { useState } from "react";
import GoodsList from "./components/goodsList";
import Modal from "./components/modal";
import ModalContext from "./contexts/ModalContext";
import "./App.css";

function App() {
  const [isModal, setModal] = useState(false);

  return (
    <ModalContext.Provider value={{ isModal, setModal }}>
      <GoodsList />
      {isModal && <Modal />}
    </ModalContext.Provider>
  );
}

export default App;
