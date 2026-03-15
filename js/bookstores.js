"use strict";

$(document).ready(function () {
  $(".flip-card").on("click", function () {
    $(this).toggleClass("flipped");
  });

  $(".flip-card").on("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      $(this).toggleClass("flipped");
    }
  });
});
