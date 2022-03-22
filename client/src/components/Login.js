import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const loginUser = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8000/login", data);
    setData({ email: "", password: "" });
    const res = await response.data;
    if (res) {
      alert("login successfully");
    } else {
      alert("login failed");
    }
  };
  return (
    <>
      <div className="container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              value={data.email}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              value={data.password}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={loginUser}>
            log in
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Login;
