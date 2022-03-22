import React from "react";
import { Modal, Button, Image } from "react-bootstrap";
import Rating from "react-rating";
import MDEditor from "@uiw/react-md-editor";

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
          <h1>{props.type.name}</h1>
          {props.content.img.map((e) => (
            <Image src={e} key={e} style={{ width: "30%" }} className="me-2" />
          ))}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.content.title}</h4>
        <MDEditor.Markdown
          style={{ color: "inherit", backgroundColor: "inherit" }}
          source={props.content.info}
        />
      </Modal.Body>
      <Modal.Footer>
        <Rating
          emptySymbol="fa fa-star-o fa-2x"
          fullSymbol="fa fa-star fa-2x"
          initialRating={props.content.rating}
          readonly={true}
        />
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
