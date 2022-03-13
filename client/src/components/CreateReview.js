import React, { useState, useContext, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Rating from "react-rating";
import reviewService from "../controllers/reviewService";
import typeService from "../controllers/typeService";
import { Context } from "../index";

export const CreateReview = () => {
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
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="title" className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          required
          onChange={({ target }) => setTitle(target.value)}
        />
      </Form.Group>
      <Form.Select
        aria-label="Default select example"
        className="mb-2"
        onChange={({ target }) => setTypeId(target.value)}
      >
        <option>Open this select menu</option>
        {types.map((e) => {
          return (
            <option key={e.id} value={e.id}>
              {e.name}
            </option>
          );
        })}
      </Form.Select>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          required
          onChange={({ target }) => setInfo(target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formFiles" className="mb-3">
        <Form.Label>Default files input example</Form.Label>
        <Form.Control
          type="file"
          required
          onChange={handleChange}
          multiple
          accept="image"
        />
      </Form.Group>
      <Rating
        emptySymbol="fa fa-star-o fa-2x"
        fullSymbol="fa fa-star fa-2x"
        onClick={(value) => setRating(value)}
      />
      <Button type="submit">Submit form</Button>
    </Form>
  );
};
