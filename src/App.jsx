import React from "react";
import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

import Header from "./components/header";
import Modal from "./components/modal";

import "./App.css";

function App() {
  const isModal = useSelector((state) => state.modal.isModalOpen);

  return (
    <>
      <Header />
      <Outlet />
      {isModal && <Modal />}
    </>
  );
}

export default App;
