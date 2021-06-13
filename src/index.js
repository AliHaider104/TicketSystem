import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Component from "./Component";
import Header from "./Header";
import Login from "./login";
import SignUp from "./Signup";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <SignUp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
