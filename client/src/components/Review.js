import React, { useState, useContext, useEffect } from "react";
import { Card } from "react-bootstrap";
import Rating from "react-rating";
import { MyVerticallyCenteredModal } from "./MyVerticallyCenteredModal.js";
import { Link } from "react-router-dom";
import { ModalEdit } from "./ModalEdit.js";
import { Button } from "react-bootstrap";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import reviewService from "../controllers/reviewService";
import typeService from "../controllers/typeService.js";
import MDEditor from "@uiw/react-md-editor";
import ratingService from "../controllers/ratingService";
import { ReviewRouters } from "./Routers.js/ReviewRouters.js";

export const Review = observer(({ content, icon, auth }) => {
  const [modalShow, setModalShow] = useState(false);
  const [type, setType] = useState("");
  const [userRating, setUserRating] = useState(0);
  const { currTheme } = useContext(Context);

  const handleClickDelete = async () => {
    const response = await reviewService.deleteReview(content.id);
    alert(response);
    window.location.reload();
  };
  const handleClick = async () => {
    typeService
      .getTypeById(content.typeId)
      .then((r) => (r === null ? setType("Not set") : setType(r)));
    setModalShow(true);
  };

  // useEffect(() => {
  //   ratingService.getRate(content.id).then((r) => {
  //     if (r.length) {
  //       const sum = r.reduce((prev, curr) => prev + curr);
  //       setUserRating(sum / r.length);
  //     }
  //   });
  // }, [userRating]);

  return (
    <Card style={{ width: "18rem" }} className="mt-3">
      <Button
        onClick={handleClick}
        style={{ height: "100%" }}
        variant={currTheme.theme === "light" ? "outline-dark" : "outline-light"}
        className="d-flex flex-column"
        disabled={auth ? false : true}
      >
        <div className="d-flex" style={{ height: "45%", margin: "0 auto" }}>
          <Card.Img
            variant="top"
            src={content.img}
            style={{ maxHeight: "100%" }}
          />
        </div>
        <Card.Body
          className="d-flex flex-column justify-content-between"
          style={{ width: "100%" }}
        >
          <div>
            <Card.Title>{content.title}</Card.Title>
            <Rating
              emptySymbol="fa fa-star-o fa-2x"
              fullSymbol="fa fa-star fa-2x"
              start={0}
              stop={10}
              step={2}
              initialRating={userRating}
              readonly={true}
            />
          </div>
          <MDEditor.Markdown
            style={{ color: "inherit", backgroundColor: "inherit" }}
            source={content.info}
          />

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
            userRating={userRating}
          />
        </>
      ) : (
        <>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            content={content}
            type={type}
            rate={userRating}
          />
          {/* <ReviewRouters
            path={content.id}
            modalShow={modalShow}
            setModalShow={setModalShow}
            content={content}
            type={type}
            userRating={userRating}
          /> */}
        </>
      )}
    </Card>
  );
});
