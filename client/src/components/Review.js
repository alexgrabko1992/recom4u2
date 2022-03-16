import React from "react";
import { Card } from "react-bootstrap";
import Rating from "react-rating";

export const Review = ({ content }) => {
  return (
    <Card style={{ width: "18rem" }} className="mt-3">
      <Card.Img variant="top" src={content.img} />
      <Card.Body>
        <Card.Title>{content.title}</Card.Title>
        <Card.Text>{content.info}</Card.Text>
        <Rating
          emptySymbol="fa fa-star-o fa-2x"
          fullSymbol="fa fa-star fa-2x"
          initialRating={content.rating}
          readonly={true}
        />
      </Card.Body>
    </Card>
  );
};
