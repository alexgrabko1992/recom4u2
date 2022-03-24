import React, { useState, useEffect, useContext } from "react";
import { Modal, Button, Image, Form } from "react-bootstrap";
import { Context } from "../index";
import Rating from "react-rating";
import reviewService from "../controllers/reviewService";
import MDEditor from "@uiw/react-md-editor";

export const ModalEdit = (props) => {
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState(props.content.title);
  const [info, setInfo] = useState(props.content.info);
  const [typeId, setTypeId] = useState(props.content.typeId);
  const [rating, setRating] = useState(props.content.rating);
  const { types } = useContext(Context);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
    }

    reviewService
      .updateReview(title, info, rating, typeId, props.content.id)
      .then((response) => console.log(response));

    setValidated(true);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <Form.Select
              aria-label="Default select example"
              className="mb-2"
              onChange={({ target }) => setTypeId(target.value)}
            >
              <option value={props.content.typeId}>{props.type.name}</option>
              {types.types.map((e) => {
                return e.name !== props.type.name ? (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                ) : (
                  <p key={e.id}>undefined</p>
                );
              })}
            </Form.Select>
            {props.content.img.map((e) => (
              <Image
                src={e}
                key={e}
                style={{ width: "30%" }}
                className="me-2"
              />
            ))}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            required
            onChange={({ target }) => setTitle(target.value)}
            value={title}
          />
          <MDEditor
            style={{ color: "inherit", backgroundColor: "inherit" }}
            value={info}
            onChange={setInfo}
          />
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
          <Rating
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
            initialRating={rating}
            onClick={(value) => setRating(value)}
          />
          <div style={{ width: "30%" }}>
            <Button variant="success" type="submit" className="me-2">
              Update
            </Button>
            <Button onClick={props.onHide}>Close</Button>
          </div>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
