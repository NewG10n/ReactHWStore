import React, { useState, createContext } from "react";
import GoodsList from "./components/goodsList";
import Modal from "./components/modal";

import "./App.css";

const ModalContext = createContext(null);
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
