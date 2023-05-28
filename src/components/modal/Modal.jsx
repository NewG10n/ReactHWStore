import React from "react";
import Button from "../button";

import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../app/modalSlice";

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
    gap: "12px",
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

const Modal = () => {
  const dispatch = useDispatch();
  const modalContent = useSelector((state) => state.modal.modalContent);
  const { title, image, actions } = modalContent;

  const styles = useStyles();

  const btnContinueData = {
    content: <>Continue</>,
    onClick: () => dispatch(toggleModal()),
  };

  const btnConfirmData = {
    content: <>Yes, confirm</>,
    onClick: () => {
      actions();
      dispatch(toggleModal());
    },
  };

  const addedToCart = (
    <>
      <h3>Great choice!</h3>
      <img src={image} className={styles.modalImage} alt={"product"} />
      <p className={styles.modalText}>
        <strong>{title}</strong> was successfully added to the Cart
      </p>
      <Button btnData={btnContinueData} />
    </>
  );

  const confirmRemoveFromCart = (
    <>
      <h3>Are you sure?</h3>
      <img src={image} className={styles.modalImage} alt={"product"} />
      <p className={styles.modalText}>
        Are you sure you want to delete <strong>{title}</strong> from your Cart?
      </p>
      <Button btnData={btnConfirmData} />
    </>
  );

  return (
    <>
      <div
        className={styles.modal}
        onClick={(e) => e.target === e.currentTarget && dispatch(toggleModal())}
      >
        <div className={styles.modalBody}>
          {actions ? confirmRemoveFromCart : addedToCart}
        </div>
      </div>
    </>
  );
};

export default Modal;
