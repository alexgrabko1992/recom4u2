import React from "react";
import { Form, Button } from "react-bootstrap";
import Rating from "react-rating";
import MDEditor from "@uiw/react-md-editor";

export const CreateReview = ({
  validated,
  types,
  setTitle,
  setTypeId,
  setInfo,
  info,
  setRating,
  handleChange,
  handleSubmit,
}) => {
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
        {/* <Form.Control
          as="textarea"
          rows={3}
          required
          onChange={({ target }) => setInfo(target.value)}
        /> */}
        <MDEditor
          style={{ color: "inherit", backgroundColor: "inherit" }}
          value={info}
          onChange={setInfo}
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
      <Button type="submit" style={{ marginLeft: "10%" }}>
        Submit form
      </Button>
    </Form>
  );
};
