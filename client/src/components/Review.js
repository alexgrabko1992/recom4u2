import React, { useState, useContext } from "react";
import { Card } from "react-bootstrap";
import Rating from "react-rating";
import { MyVerticallyCenteredModal } from "./MyVerticallyCenteredModal.js";
import { Button } from "react-bootstrap";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import reviewService from "../controllers/reviewService";

export const Review = observer(({ content, icon, auth }) => {
  const [modalShow, setModalShow] = useState(false);
  const { currTheme } = useContext(Context);

  const handleClick = async (event) => {
    const response = await reviewService.deleteReview(content.id);
    alert(response);
    window.location.reload();
  };

  return (
    <Card style={{ width: "18rem" }} className="mt-3">
      <Button
        onClick={() => setModalShow(true)}
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
        <Button type="submit" variant="danger" onClick={handleClick}>
          {icon}
        </Button>
      ) : (
        <></>
      )}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        content={content}
      />
    </Card>
  );
});
