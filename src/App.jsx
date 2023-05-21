import React, { useState } from "react";
import Header from "./components/header";
import GoodsList from "./components/goodsList";
import Modal from "./components/modal";
import ModalContext from "./contexts/ModalContext";
import CartFavContext from "./contexts/CartFavContext";
import "./App.css";
import { getCartQty } from "./utils/CartHelpers";
import { getFavQty } from "./utils/FavHelpers";

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
        <GoodsList />
      </CartFavContext.Provider>

      {isModal && <Modal />}
    </ModalContext.Provider>
  );
}

export default App;
