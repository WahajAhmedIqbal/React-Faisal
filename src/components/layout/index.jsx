import React from "react";
import { Button } from "react-bootstrap";
import Image from "../../assesst/logo.png";
import Icon1 from "../../assesst/face.png";
import Icon2 from "../../assesst/gmail.png";
import Icon3 from "../../assesst/insta.jpeg";
import Footer from "../fotter";

const Layout = () => {
  return (
    <div
      style={{
        width: "70%",
        margin: "auto",
        textAlign: "center",
        marginTop: 140,
        height: 500,
        /* display: flex, */
      }}
    >
      <div className="logo">
        <img alt="logo" src={Image} style={{ width: 520, height: 200 }} />
      </div>
      <div
        className="input-feild"
        style={{
          margin: "30px 0",
        }}
      >
        <input
          type="text"
          placeholder="Enter URL"
          style={{
            borderRadius: 10,
            padding: 10,
            width: 320,
            marginRight: 15,
          }}
        />
        <Button
          style={{
            fontSize: "larger",
            fontWeight: 800,
          }}
        >
          Shorten
        </Button>
      </div>
      <div
        className="icon"
        style={{
          margin: "40px 0",
        }}
      >
        <img
          src={Icon1}
          alt="icon1"
          style={{
            width: 100,
            margin: "0 10px",
          }}
        />
        <img
          src={Icon2}
          alt="icon2"
          style={{
            width: 100,
            margin: "0 10px",
          }}
        />
        <img
          src={Icon3}
          alt="icon3"
          style={{
            width: 100,
            margin: "0 10px",
          }}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
