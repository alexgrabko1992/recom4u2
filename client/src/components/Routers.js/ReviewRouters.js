import React from "react";
import { Routes, Route } from "react-router-dom";
import { MyVerticallyCenteredModal } from "../MyVerticallyCenteredModal";

export const ReviewRouters = ({
  path,
  modalShow,
  setModalShow,
  content,
  type,
  userRating,
}) => {
  return (
    <Routes>
      <Route
        key={path}
        path={"/id" + path}
        element={
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            content={content}
            type={type}
            rate={userRating}
          />
        }
        exact
      />
    </Routes>
  );
};
