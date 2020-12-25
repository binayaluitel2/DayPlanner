$(document).ready(function () {
  var today = moment().format("dddd, MMMM Do");
  console.log(today);
  $(".todaysDate").append(today);
  var now = parseInt(moment().format("HH"));
  var $9AM = $("#9AM");
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
  });
  $("#9AM").append(localStorage.getItem("0"));
});
