import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "./index.scss";
import App from "./app/App";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

ReactDOM.render(<App />, document.getElementById("root"));

/*
import $ from "jquery";
$(document).ready(function() {
  //header button
  $(".closeHeaderButton").click(function() {
    $("#intro").animate({ bottom: "100vh" });
    $("main").show();
  });

  //navigation links
  $(".nav-link").click(function() {
    let page = $(this).attr("page");
    $("main section").hide();
    $("#" + page).show();
    $("#" + page)
      .nextAll()
      .show();
  });

  //next page button
  $(".next-page-button").click(function() {
    let page = $(this).attr("page");
    let nextPage = $(this).attr("next-page");
    $("#" + page).hide();
    $("#" + nextPage).show();
  });
});
*/
