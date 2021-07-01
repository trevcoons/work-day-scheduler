// Purpose: create a day planner that updates to the current time block live. Also need to add events in timeblock and save in local storage.

// need some kind of button click event 
$(document).ready(function() {
  // listen to the button click, look back at activity with an event listeneer using jquery 
// inputted values in the forms of text 
    // $().on something something   
    $('.saveBtn').on('click', function() {
var userInput = $(this)
.sibings('.description')
.val()
var time = $(this)
// look up js methods
.parent()
.attr('id')
// save in local storage
localStorage.setItem(userInput, time)
    })


// in order to access the local storage item we need to load the saved data
// load each hour using the method getItem
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));
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