import React, { useEffect, useState } from "react";
import reviewController from "../controllers/reviewService";
import { Review } from "../components/Review";
import { useAuth0 } from "@auth0/auth0-react";
import { Sort } from "../components/Sort";

export const Home = () => {
  const [reviews, setReviews] = useState();
  const [radioValue, setRadioValue] = useState(0);
  const { isAuthenticated } = useAuth0();

  const getReviewByType = async (typeId) => {
    if (typeId === 0) {
      reviewController.getAllReviews().then((response) => {
        response.length !== 0 ? setReviews(response) : setReviews();
      });
    } else {
      const response = await reviewController.getReviewByType(typeId);
      response.length !== 0 ? setReviews(response) : setReviews();
    }
    
  };

  useEffect(() => {
    console.log(radioValue)
    getReviewByType(radioValue)
  }, [radioValue]);

  return (
    <>
      <h2>Home</h2>
      <Sort radioValue={radioValue} setRadioValue={setRadioValue} />
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
