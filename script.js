$(document).ready(function () {
  var today = moment().format("dddd, MMMM Do");
  $(".todaysDate").append(today);

  var now = parseInt(moment().format("HH"));
  console.log(now);

  var $9AM = $("#9AM");
  var $10AM = $("#10AM");
  var $11AM = $("#11AM");
  var $12AM = $("#12AM");
  var $1PM = $("#1PM");
  var $2PM = $("#2PM");
  var $3PM = $("#3PM");
  var $4PM = $("#4PM");
  var $5PM = $("#5PM");

  $("textarea").each(function () {
    var name = parseInt($(this).attr("name"));
    if (name < now) {
      $(this).addClass("textarea-past");
    }
    if (name > now) {
      $(this).addClass("textarea-future");
    }
    if (name === now) {
      $(this).addClass("textarea-present");
    }
  });

  $("button").each(function () {
    var name = parseInt($(this).attr("name"));
    if (name < now) {
      $(this).addClass("button-past");
    }
    if (name > now) {
      $(this).addClass("button-future");
    }
    if (name === now) {
      $(this).addClass("button-present");
    }
  });

  $("button").on("click", function () {
    localStorage.setItem("0", $9AM.val());
    localStorage.setItem("1", $10AM.val());
    localStorage.setItem("2", $11AM.val());
    localStorage.setItem("3", $12AM.val());
    localStorage.setItem("4", $1PM.val());
    localStorage.setItem("5", $2PM.val());
    localStorage.setItem("6", $3PM.val());
    localStorage.setItem("7", $4PM.val());
    localStorage.setItem("8", $5PM.val());
  });

  $("#9AM").append(localStorage.getItem("0"));
  $("#10AM").append(localStorage.getItem("1"));
  $("#11AM").append(localStorage.getItem("2"));
  $("#12AM").append(localStorage.getItem("3"));
  $("#1PM").append(localStorage.getItem("4"));
  $("#2PM").append(localStorage.getItem("5"));
  $("#3PM").append(localStorage.getItem("6"));
  $("#4PM").append(localStorage.getItem("7"));
  $("#5PM").append(localStorage.getItem("8"));
});
