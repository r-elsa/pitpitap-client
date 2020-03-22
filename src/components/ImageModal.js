import React, { useState } from "react";
import { Modal, Button } from "./common/Modal";

const ImageModal = props => {
  const { show, closeModal, activeCard } = props;

  return (
    <>
      <Modal background={activeCard} className={show ? "modal" : "hide"}>
        <Button onClick={closeModal}>X</Button>
      </Modal>
      }{" "}
    </>
  );
};

export default ImageModal;
