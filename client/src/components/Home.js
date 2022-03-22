import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
          fontSize: "3rem",
        }}
      >
        <div className="center">
          <p>demo page</p>
          <div className="button">
            <Button
              variant="primary"
              type="submit"
              onClick={() => {
                navigate("/register");
              }}
            >
              sign up
            </Button>
            <Button
              variant="primary"
              type="submit"
              className="ml-2"
              onClick={() => {
                navigate("/login");
              }}
            >
              log in
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
