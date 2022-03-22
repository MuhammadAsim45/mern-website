import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const Contact = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const sendMessage = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8000/contact", data);
    setData({ name: "", email: "", message: "" });
    const res = await response.data;
    if (res) {
      alert("message sent succefully");
    }
  };
  return (
    <div className="container">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            onChange={inputHandler}
            value={data.name}
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            onChange={inputHandler}
            value={data.email}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> Message</Form.Label>
          <Form.Control
            name="message"
            onChange={inputHandler}
            value={data.message}
            type="text"
            placeholder="Enter message"
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={sendMessage}>
          Send
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
