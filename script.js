$(document).ready(function () {
  var today = moment().format("dddd, MMMM Do");
  $(".todaysDate").append(today);
});
