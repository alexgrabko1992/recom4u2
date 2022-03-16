import React, { useEffect, useState } from "react";
import reviewController from "../controllers/reviewService";
import { Review } from "../components/Review";

export const Home = () => {
  const [reviews, setReviews] = useState();

  const getAllReviews = async () => {
    const response = await reviewController.getAllReviews();
    response.length !== 0 ? setReviews(response) : setReviews();
  };
  useEffect(() => {
    getAllReviews();
  }, []);
  return (
    <>
      <h2>Home</h2>
      <div className="d-flex flex-wrap justify-content-between">
        {reviews ? (
          reviews.map((e) => <Review content={e} key={e.id} />)
        ) : (
          <p>You are havn't reviews yet</p>
        )}
      </div>
    </>
  );
};
