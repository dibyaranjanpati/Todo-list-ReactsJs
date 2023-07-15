// import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const AddTodo = ({
  addTodo,
  title,
  setTitle,
  desc,
  setDesc,
  action,
  updateTodo,
  setAction,
}) => {
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title and description can't be empty");
      return;
    }
    switch (action) {
      case "add": {
        addTodo(title, desc);
        setTitle("");
        setDesc("");
        break;
      }
      case "edit": {
        updateTodo(title, desc);
        setTitle("");
        setDesc("");
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <div>
      <h3 className="container my-3">Add Todos Here</h3>
      <Form onSubmit={submit}>
        <FormGroup className="container my-3">
          <Label for="exampleEmail">Todos Title</Label>
          <Input
            className="form-control"
            id="title"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
          />
        </FormGroup>
        <FormGroup className="container my-3">
          <Label for="examplePassword">Todos Description</Label>
          <Input
            id="desc"
            name="desc"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            type="text"
          />
        </FormGroup>{" "}
        {action === "add" ? (
          <Button
            type="submit"
            className="btn-success ms-8"
            style={{ marginLeft: "120px" }}
          >
            Add Todos
          </Button>
        ) : (
          <>
            <Button
              type="submit"
              className="btn-warning ms-8"
              style={{ marginLeft: "120px" }}
            >
              Update Todos
            </Button>{" "}
            <Button
              type="button"
              onClick={() => {
                setTitle("");
                setDesc("");
                setAction("add");
              }}
              className="btn-danger ms-8 text-white"
              style={{ marginLeft: "20px" }}
            >
              Cancel
            </Button>
          </>
        )}
      </Form>
    </div>
  );
};

export default AddTodo;
