import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          marginTop: "20px",
          marginLeft: "32%",
          width: "35%",
          height: "550px",
          backgroundColor: "black",
          border: "solid 6px #e75480",
          display: "flex",
          flexDirection: "column",
          color: "white",
        }}
      >
        <h1 style={{ marginLeft: "31%", marginTop: "20%" }}>User Sign Up</h1>
        <input
          style={{
            marginLeft: "24%",
            width: "50%",
            height: "35px",
            borderColor: "black",
          }}
          placeholder="Enter Your ID"
        ></input>
        <input
          style={{
            marginTop: "5%",
            marginLeft: "24%",
            width: "50%",
            height: "35px",
            borderColor: "black",
          }}
          placeholder="Enter Your Name"
        ></input>
        <input
          style={{
            marginTop: "5%",
            marginLeft: "24%",
            width: "50%",
            height: "35px",
            borderColor: "black",
          }}
          placeholder="Enter Your Password"
        ></input>
        <button
          style={{
            marginLeft: "39%",
            color: "white",
            backgroundColor: "#e75480",
            marginTop: "5%",
            width: "20%",
            height: "8%",
            borderColor: "black",
          }}
        >
          Sign up
        </button>
      </div>
    );
  }
}

export default Signup;
