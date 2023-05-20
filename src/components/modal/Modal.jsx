import React, { useContext } from "react";
import Button from "../button";
import ModalContext from "../../contexts/ModalContext";

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

  modalImage: {
    maxWidth: "30%",
  },

  modalText: {
    textAlign: "center",
  },
});

const Modal = ({ modal }) => {
  const { isModal, setModal, modalContent } = useContext(ModalContext);

  const { title, image } = modalContent;

  const styles = useStyles();

  const confirmButtonData = {
    text: "Keep shopping",
    onClick: () => setModal(!isModal),
  };

  return (
    <>
      <div
        className={styles.modal}
        onClick={(e) => e.target === e.currentTarget && setModal(!isModal)}
      >
        <div className={styles.modalBody}>
          <h3>Great choice!</h3>
          <img
            src={image}
            className={styles.modalImage}
            alt={"product image"}
          />
          <p className={styles.modalText}>
            <strong>{title}</strong> was successfully added to the Cart
          </p>
          <Button btnData={confirmButtonData} />
        </div>
      </div>
    </>
  );
};

export default Modal;
