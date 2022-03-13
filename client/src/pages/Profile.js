import React, { useEffect, useState } from "react";
import { Col, Row, Image, Tab, Tabs } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { CreateReview } from "../components/CreateReview";
import { Review } from "../components/Review";
import reviewController from "../controllers/reviewService";

export const Profile = () => {
  const { user } = useAuth0();
  const [reviews, setReviews] = useState();

  const getReviews = async () => {
    const info = await reviewController.getReviews();
    info.length !== 0 ? setReviews(info) : setReviews();
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <Row>
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
      <Col lg={8} className="border">
        <Tabs
          defaultActiveKey="create"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="reviews" title="Reviews">
            {reviews ? (
              reviews.map((e) => <Review content={e} key={e.id} />)
            ) : (
              <p>You are havn't reviews yet</p>
            )}
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
};
