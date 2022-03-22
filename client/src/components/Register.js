import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const inputHandler = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };
  const submitData = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "http://localhost:8000/register",
      registerData
    );
    setRegisterData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    const res = await response.data;
    if (res) {
      alert("registered successfully");
    } else {
      alert("registration failed");
    }
  };
  return (
    <>
      <div className="container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={registerData.name}
              onChange={inputHandler}
              type="text"
              placeholder="Enter name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              value={registerData.email}
              onChange={inputHandler}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              value={registerData.password}
              onChange={inputHandler}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>confirm Password</Form.Label>
            <Form.Control
              name="confirmPassword"
              value={registerData.confirmPassword}
              onChange={inputHandler}
              type="password"
              placeholder="confirm password"
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={submitData}>
            register
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Register;
