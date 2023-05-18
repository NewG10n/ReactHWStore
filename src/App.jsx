import React, { useState } from "react";
import GoodsList from "./components/goodsList";
import GoodCard from "./components/goodCard";
import Button from "./components/button";
import Modal from "./components/modal";
import "./App.css";

function App() {
  const [isModal, setModal] = useState(false);

  return (
    <>
      <GoodsList modal={{ isModal, setModal }} />
      {isModal && <Modal modal={{ isModal, setModal }} />}
    </>
  );
}

export default App;
