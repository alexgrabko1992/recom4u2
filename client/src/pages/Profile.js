import React, { useEffect, useState, useContext } from "react";
import { Col, Row, Image, Tab, Tabs } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { CreateReview } from "../components/CreateReview";
import { Review } from "../components/Review";
import reviewController from "../controllers/reviewService";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { MdDeleteForever } from "react-icons/md";

export const Profile = observer(() => {
  const { user, isAuthenticated } = useAuth0();
  const [reviews, setReviews] = useState();
  const { currentUser } = useContext(Context);

  useEffect(async () => {
    // const info = await reviewController.getReviews(currentUser.userId);
    // info.length !== 0 ? setReviews(info) : setReviews();
    // console.log(info);
    reviewController
      .getReviews(currentUser.userId)
      .then((response) =>
        response !== [] ? setReviews(response) : setReviews()
      );
  }, []);

  return (
    <Row style={{ height: "85vh" }}>
      <Col
        lg={4}
        className="border"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>User info</h2>
        <Image src={user.picture} roundedCircle style={{ width: "40%" }} />
        <h4>
          {user.sub.split("|")[0] === "github" ? user.nickname : user.name}
        </h4>
        <h5>Role: user</h5>
      </Col>
      <Col lg={8} className="border overflow-scroll" style={{ height: "100%" }}>
        <Tabs
          defaultActiveKey="reviews"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="reviews" title="Reviews">
            <div className="d-flex flex-wrap justify-content-around">
              {reviews ? (
                reviews.map((e) => (
                  <Review
                    auth={isAuthenticated}
                    content={e}
                    key={e.id}
                    icon={
                      <MdDeleteForever
                        style={{
                          transform: "scale(2)",
                          cursor: "pointer",
                          marginLeft: 0,
                          marginBottom: 0,
                        }}
                      />
                    }
                  />
                ))
              ) : (
                <p>You are havn't reviews yet</p>
              )}
            </div>
          </Tab>
          <Tab eventKey="create" title="Create">
            <CreateReview />
          </Tab>
          <Tab eventKey="users" title="Users" disabled>
            {/* <Sonnet /> */}
          </Tab>
        </Tabs>
      </Col>
    </Row>
  );
});
