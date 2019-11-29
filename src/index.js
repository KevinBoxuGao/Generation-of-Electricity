import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "./index.scss";
import App from "./app/App";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

ReactDOM.render(<App />, document.getElementById("root"));
