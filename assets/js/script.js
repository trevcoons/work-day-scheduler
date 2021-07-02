var hour9 = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour1 = $("#13");
var hour2 = $("#14");
var hour3 = $("#15");
var hour4 = $("#16");
var hour5 = $("#17");
var time = moment();

function setPlanner() {

  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

  $(".time-block").each(function () {
      var id = $(this).attr("id");
      var schedule = localStorage.getItem(id);

      if (schedule !== null) {
          $(this).children(".schedule").val(schedule);
      }
  });
}


setPlanner();
var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
});
// change color to show time past, present and future
function timeUpdate() {
// getting moment hours in military time 
var currentTime = moment().hours();
// is to be able to compare hour-# to military time 
// using conditionals to loop through the time blocks
// each()
// if else if else 

}

timeUpdate();

//display current date on page using moment.js
// check the moment js documentation for understaning what to put into the text() method
$('#currentDay').text(moment().format('dddd, MMMM Do'))

})