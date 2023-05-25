import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import ModalContext from "./contexts/ModalContext";

import CartFavContext from "./contexts/CartFavContext";
import { getCartQty } from "./utils/CartHelpers";
import { getFavQty } from "./utils/FavHelpers";

import Header from "./components/header";
import Modal from "./components/modal";

import "./App.css";

function App() {
  const [isModal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const [cartQty, setCartQty] = useState(getCartQty);
  const [favQty, setFavQty] = useState(getFavQty);

  return (
    <ModalContext.Provider
      value={{ isModal, setModal, modalContent, setModalContent }}
    >
      <CartFavContext.Provider
        value={{
          cartQty,
          setCartQty,
          favQty,
          setFavQty,
        }}
      >
        <Header />
        <Outlet />
      </CartFavContext.Provider>

      {isModal && <Modal />}
    </ModalContext.Provider>
  );
}

export default App;
