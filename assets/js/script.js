// Displays todays date at the top.
var today = dayjs();
$("#currentDay").text(today.format("dddd, MMMM D, YYYY"));

//Current Time in hours
function timeTracker() {
  var timeNow = dayjs().format('HH');
  console.log(timeNow)
  
  $(".time-block").each(function() {
  var blockTime = parseInt($(this).attr("id").split("hour")[1]);

  // Compares the current time and adds classes for past, present and future colors.
  if (blockTime < timeNow) {
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");
  } else if (blockTime === timeNow) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
  } else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
  }
})
}

// saveBtn click listener
$(".saveBtn").click(function (event) {
  event.preventDefault();
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, value);
});

//Pulls any items from local storage
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));

timeTracker();
