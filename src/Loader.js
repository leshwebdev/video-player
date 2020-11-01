import React from "react";
import { Modal } from "react-bootstrap";

function Loader(props) {
  return (
    <Modal show={props.isLoaderShown}>
      <Modal.Body>
        <div className="flex column centered">
          <h2>Loading...</h2>
          <h2><i className="fas fa-download"></i></h2>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Loader;
