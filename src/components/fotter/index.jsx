import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <h1>footer</h1>
      <div
        className="link"
        style={{
          display: "flex",
          marginLeft: 360,
        }}
      >
        <h3
          style={{
            margin: "5px 15px",
          }}
        >
          <Link to="/">Home</Link>
        </h3>
        <h3
          style={{
            margin: "5px 15px",
          }}
        >
          <Link to="/about">About</Link>
        </h3>
        <h3
          style={{
            margin: "5px 15px",
          }}
        >
          <Link to="/contactUs">Contact Us</Link>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
