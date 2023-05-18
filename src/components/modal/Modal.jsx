import React from "react";
import Button from "../button";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  modal: {
    position: "absolute",
    width: "200px",
    height: "200px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
  },
});

const Modal = ({ modal }) => {
  const { isModal, setModal } = modal;

  const styles = useStyles();

  const confirmButtonData = {
    text: "OK",
    onClick: () => setModal(!isModal),
  };

  return (
    <>
      <div className={styles.modal}>
        <h1 className="modal-title">{"title"}</h1>
        <Button btnData={confirmButtonData} />
      </div>
    </>
  );
};

export default Modal;
