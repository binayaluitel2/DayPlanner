$(document).ready(function () {
  var today = moment().format("dddd, MMMM Do");
  $(".todaysDate").append(today);

  var now = parseInt(moment().format("HH"));
  console.log(now);

  var $9AM = $("#9AM");
  var $10AM = $("#10AM");
  var $11AM = $("#11AM");
  var $12PM = $("#12PM");
  var $1PM = $("#1PM");
  var $2PM = $("#2PM");
  var $3PM = $("#3PM");
  var $4PM = $("#4PM");
  var $5PM = $("#5PM");

  var timeHour = [
    $9AM,
    $10AM,
    $11AM,
    $12PM,
    $1PM,
    $2PM,
    $3PM,
    $4PM,
    $5PM
  ];

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
    for (i = 0; i < timeHour.length; i++) {
      localStorage.setItem(i.toString(), timeHour[i].val());
    }
  });

  for (i = 0; i < timeHour.length; i++) {
    timeHour[i].append(localStorage.getItem(i.toString()));
  }
});
