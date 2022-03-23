import React, { useEffect, useState } from "react";
import reviewController from "../controllers/reviewService";
import { Review } from "../components/Review";
import { useAuth0 } from "@auth0/auth0-react";
import { Sort } from "../components/Sort";

export const Home = () => {
  const [reviews, setReviews] = useState();
  const { isAuthenticated } = useAuth0();

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
      <Sort />
      <div className="row justify-content-around">
        {reviews ? (
          reviews.map((e) => (
            <Review content={e} key={e.id} auth={isAuthenticated} />
          ))
        ) : (
          <p>You are havn't reviews yet</p>
        )}
      </div>
    </>
  );
};
