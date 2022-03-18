import React from "react";
import { Modal, Button, Image } from "react-bootstrap";

export const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.content.img.map((e) => (
            <Image src={e} key={e} />
          ))}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.content.title}</h4>
        <p>{props.content.info}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
