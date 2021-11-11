
// fecha is date in spanish
var currentFecha = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');

var hour = moment().hours();
var userInput;
var hourSpan;

var interval = setInterval(function() {
  var momentNow = moment();
  $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                      + momentNow.format('dddd')
                       .substring(0,3).toUpperCase());
  $('#currentDay').html(currentFecha + " " + momentNow.format('hh:mm:ss A'));
}, 100);
// hours
var nineMor = $("#9am");
var tenMor = $("#10am");
var elevenMor = $("#11am");
var twelveAfter = $("#12pm");
var oneAfter = $("#13pm");
var twoAfter = $("#14pm");
var threeAfter = $("#15pm");
var fourAfter = $("#16pm");
var fiveAfter = $("#17pm");
var sixAfter = $("#18pm");
var sevenNight = $("#19pm");

function initPage() {

  console.log("Current Hour " + hour);
  var init9 = JSON.parse(localStorage.getItem("09:00 am"));
  nineMor.val(init9);

  var init10 = JSON.parse(localStorage.getItem("10:00 am"))
  tenMor.val(init10);
  
  var init11 = JSON.parse(localStorage.getItem("11:00 am"))
  elevenMor.val(init11);
  
  var init12 = JSON.parse(localStorage.getItem("12:00 pm"))
  twelveAfter.val(init12);
  
  var init1 = JSON.parse(localStorage.getItem("01:00 pm"))
  oneAfter.val(init1);
  
  var init2 = JSON.parse(localStorage.getItem("02:00 pm"))
  twoAfter.val(init2);
  
  var init3 = JSON.parse(localStorage.getItem("03:00 pm"))
  threeAfter.val(init3);
 
  var init4 = JSON.parse(localStorage.getItem("04:00 pm"))
  fourAfter.val(init4);
  
  var init5 = JSON.parse(localStorage.getItem("05:00 pm"))
  fiveAfter.val(init5);
  
  var init6 = JSON.parse(localStorage.getItem("06:00 pm"))
  sixAfter.val(init6);
  
  var init7 = JSON.parse(localStorage.getItem("07:00 pm"))
  sevenNight.val(init7);
} 

function background () {
      
  $(".form-control").each(function () {
      var timeTest = parseInt($(this).attr("id"));
      hour = parseInt(hour);
      console.log(timeTest);
      console.log(hour);
//      console.log(this);
      if (hour > timeTest) {
          $(this).addClass("past");
      } else if (hour < timeTest) {
          $(this).addClass("future");
      } else {
          $(this).addClass("present");
      }
  });
}

$(document).ready(function(){
  initPage()
  background()

  (".saveBtn").on("click", function(){
    userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));

  })
  // clear data
  $("#clearDay").on("click", function(){
    localStorage.clear();
    initPage()
  }) 
// end script
});
