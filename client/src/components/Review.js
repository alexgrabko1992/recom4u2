import React, { useState, useContext, useEffect } from "react";
import { Card } from "react-bootstrap";
import Rating from "react-rating";
import { MyVerticallyCenteredModal } from "./MyVerticallyCenteredModal.js";
import { ModalEdit } from "./ModalEdit.js";
import { Button } from "react-bootstrap";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import reviewService from "../controllers/reviewService";
import typeService from "../controllers/typeService.js";

export const Review = observer(({ content, icon, auth }) => {
  const [modalShow, setModalShow] = useState(false);
  const [type, setType] = useState("");
  const { currTheme } = useContext(Context);

  const handleClickDelete = async () => {
    const response = await reviewService.deleteReview(content.id);
    alert(response);
    window.location.reload();
  };
  const handleClick = async () => {
    typeService.getTypeById(content.typeId).then((r) => setType(r));
    setModalShow(true);
  };

  return (
    <Card style={{ width: "18rem" }} className="mt-3">
      <Button
        onClick={handleClick}
        style={{ height: "100%" }}
        variant={currTheme.theme === "light" ? "outline-dark" : "outline-light"}
        className="d-flex flex-column"
        disabled={auth ? false : true}
      >
        <Card.Img variant="top" src={content.img} />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title>{content.title}</Card.Title>
          <Card.Text>{content.info}</Card.Text>
          <Rating
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
            initialRating={content.rating}
            readonly={true}
          />
        </Card.Body>
      </Button>
      {icon ? (
        <>
          <Button type="submit" variant="danger" onClick={handleClickDelete}>
            {icon}
          </Button>
          <ModalEdit
            show={modalShow}
            onHide={() => setModalShow(false)}
            content={content}
            type={type}
          />
        </>
      ) : (
        <>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            content={content}
            type={type}
          />
        </>
      )}
    </Card>
  );
});
