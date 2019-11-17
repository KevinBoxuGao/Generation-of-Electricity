import "bootstrap";
import $ from "jquery";

import "./index.scss";

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
