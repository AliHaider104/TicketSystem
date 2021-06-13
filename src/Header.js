import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "150px",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <img src="https://svn.osgeo.org/qgis/trunk/qgis/images/svg/transport/transport_train_station.svg"></img>
        <h1 style={{ marginLeft: "40px" }}>TRAIN</h1>
        <h1>TICKET</h1>
        <h1 style={{ marginLeft: "40px", color: "#e75480" }}>
          RESERVATION SYSTEM
        </h1>
        <button
          style={{
            marginLeft: "300px",
            width: "100px",
            height: "50px",
            marginTop: "20px",
            backgroundColor: "#e75480",
            color: "white",
          }}
        >
          Login
        </button>
        <button
          style={{
            width: "100px",
            height: "50px",
            marginTop: "20px",
            backgroundColor: "#e75480",
            color: "white",
          }}
        >
          Sign Up
        </button>
      </div>
    );
  }
}

export default Header;
