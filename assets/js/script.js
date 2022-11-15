var today = dayjs();
$("#currentDay").text(today.format("dddd, MMMM D, YYYY"));

function timeTracker() {
  var timeNow = dayjs().format('HH');
  console.log(timeNow)
  
  $(".time-block").each(function () {
  var blockTime = parseInt($(this).attr("id").split("hour")[1]);

  if (blockTime < timeNow) {
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");
  } else if (blockTime == timeNow) {
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

$(".saveBtn").click(function (event) {
  event.preventDefault();
  var value = $(this).siblings(".time-block").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, value);
});

$("#hour8 .time-block").val(localStorage.getItem("08"));
$("#hour9 .time-block").val(localStorage.getItem("09"));
$("#hour10 .time-block").val(localStorage.getItem("10"));
$("#hour11 .time-block").val(localStorage.getItem("11"));
$("#hour12 .time-block").val(localStorage.getItem("12"));
$("#hour13 .time-block").val(localStorage.getItem("13"));
$("#hour14 .time-block").val(localStorage.getItem("14"));
$("#hour15 .time-block").val(localStorage.getItem("15"));
$("#hour16 .time-block").val(localStorage.getItem("16"));

timeTracker();
