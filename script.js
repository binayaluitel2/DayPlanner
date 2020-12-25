$(document).ready(function () {
  var today = moment().format("dddd, MMMM Do");
  $(".todaysDate").append(today);

  $(document).ready(function () {
    var today = moment().format("dddd, MMMM Do");
    console.log(today);
    $(".todaysDate").append(today);
    var now = parseInt(moment().format("HH"));
    var $9AM = $("#9AM");
    $("button").on("click", function () {
      localStorage.setItem("0", $9AM.val());
    });

    $("#9AM").append(localStorage.getItem("0"));
  });
});
