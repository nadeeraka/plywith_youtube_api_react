import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const OpModal = props => (
  <div>
    <Modal
      isOpen={true}
      onRequestClose
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h4 className="mb-4 read">Type what you want to search</h4>
      <button className="btn btn-danger btn-lg btn-block mb-4">Ok</button>
    </Modal>
  </div>
);

export default OpModal;
