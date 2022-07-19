import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="text-center w-100">
      <img
        src="https://c8.alamy.com/comp/2D9R7T6/error-404-page-not-found-vector-illustration-for-web-design-2D9R7T6.jpg"
        className=""
        height="500px"
        width="600px"
        alt=""
      />
      <br />
      <br />
      <button className="btn btn-success" onClick={handleClick}>Go to Home</button>
    </div>
  );
};

export default Error;
