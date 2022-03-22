import React, { useState, useContext, useEffect } from "react";
import reviewService from "../../controllers/reviewService";
import typeService from "../../controllers/typeService";
import { Context } from "../../index";
import { CreateReview } from "./CreateReview";

export const CreateReviewContainer = () => {
  const [validated, setValidated] = useState(false);
  const [types, setTypes] = useState([]);
  const [base64, setBase64] = useState([]);
  const [title, setTitle] = useState();
  const [typeId, setTypeId] = useState();
  const [info, setInfo] = useState();
  const [rating, setRating] = useState();
  const { currentUser } = useContext(Context);

  const handleChange = ({ target }) => {
    setBase64([]);
    if (target.files.length > 3) {
      target.value = null;
      alert("You can upload only 3 images");
    }

    for (let i = 0; i < target.files.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(target.files[i]);
      reader.onload = function () {
        const blob = reader.result.split(",")[1];
        setBase64((prevState) => [...prevState, blob]);
      };
    }
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
    } else {
      event.preventDefault();

      let img = [];

      base64.forEach(async (e) => {
        const data = await reviewService.uploadToStorage(e);
        img.push(data.display_url);
      });

      setTimeout(() => {
        reviewService.createReview(
          title,
          info,
          img,
          rating,
          currentUser.userId,
          typeId
        );
        event.target.submit();
      }, 2000);

      setValidated(true);
    }
  };

  useEffect(() => {
    typeService.getTypes().then((response) => {
      setTypes(response);
    });
  }, []);
  return (
    <CreateReview
      validated={validated}
      types={types}
      setTitle={setTitle}
      setTypeId={setTypeId}
      setInfo={setInfo}
      info={info}
      setRating={setRating}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};
