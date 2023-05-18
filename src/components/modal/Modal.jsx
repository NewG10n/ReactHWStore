import React from "react";
import Button from "../button";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  modal: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  modalBody: {
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow:
      "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 8px 0 rgba(0, 0, 0, 0.19)",
    maxWidth: "600px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const Modal = ({ modal }) => {
  const { isModal, setModal } = modal;

  const styles = useStyles();

  const confirmButtonData = {
    text: "Keep shopping",
    onClick: () => setModal(!isModal),
  };

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalBody}>
          <h1 className="modal-title">{"title"}</h1>
          <Button btnData={confirmButtonData} />
        </div>
      </div>
    </>
  );
};

export default Modal;
