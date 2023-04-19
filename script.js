// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var $timeBlock = $('.time-block')

$(function () {
  // TODO: Add a listener for click events on the save button. This code should|
  // use the id in the containing time-block as a key to save the user input in|
  // local storage. HINT: What does `this` reference in the click listener|
  // function? How can DOM traversal be used to get the "hour-x" id of the|
  // time-block containing the button that was clicked? How might the id be|
  // useful when saving the description in local storage?|
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set|
  // the values of the corresponding textarea elements. HINT: How can the id|
  // attribute of each time-block be used to do this? |
  //
  // TODO: Add code to display the current date in the header of the page.|
});

function currentDay() {
var date = dayjs().format('dddd[,] MMMM,D');
$('#currentDay').text(date) 
}


function renSavedPlan(){
  for (var i=9 ; i <= 17 ; i++){
  var hourId = 'hour'+[i]
  console.log(hourId)
  var savedHour = localStorage.getItem(hourId)
  $('#'+hourId).children('textarea').val(savedHour)
  console.log(savedHour)
  }
}

function handleSavePlan(event){
  var btnClicked = $(event.target)
  var hour = $(this).parent().attr('id');
  var plan = btnClicked.siblings('textarea').val()
  localStorage.setItem(hour,plan)
}

$timeBlock.on('click','.saveBtn',handleSavePlan)

function timeTracker() {
 
  var curTime = dayjs().hour();
  
  $timeBlock.each(function(){
  var workHour = parseInt($(this).attr('id').split('hour')[1])
  console.log(workHour)
  if(workHour < curTime){
    $(this).removeClass('future')
    $(this).removeClass('present')
    $(this).addClass('past')
  }
  else if(workHour === curTime){
    $(this).removeClass('future')
    $(this).removeClass('past')
    $(this).addClass('present')
  }
  else{
    $(this).addClass('future')
    $(this).removeClass('present')
    $(this).removeClass('past')
  }
  })
}

renSavedPlan();
currentDay();
timeTracker()