'use strict';

// view on load
window.onload = function() {
  displayHousekeeping();
}

// activity center
var housekeepingActivity = document.getElementsByClassName("housekeeping");
var jobActivity = document.getElementsByClassName("job");
var transportationActivity = document.getElementsByClassName("transportation");
var entertainmentActivity = document.getElementsByClassName("entertainment");
var miscellaneousActivity = document.getElementsByClassName("miscellaneous");

function showOrHide(category, showOrHide) {
  for (let i = 0; i < category.length; i++) {
    if (showOrHide) {
      category[i].style.display = "block";
    } else {
      category[i].style.display = "none";
    }
  }
}

function hideAllCategory() {
  showOrHide(housekeepingActivity, false);
  showOrHide(jobActivity, false);
  showOrHide(transportationActivity, false);
  showOrHide(entertainmentActivity, false);
  showOrHide(miscellaneousActivity, false);
  document.getElementById("option1").style.backgroundColor = "#475a7b";
  document.getElementById("option2").style.backgroundColor = "#475a7b";
  document.getElementById("option3").style.backgroundColor = "#475a7b";
  document.getElementById("option4").style.backgroundColor = "#475a7b";
  document.getElementById("option5").style.backgroundColor = "#475a7b";
}

function displayHousekeeping() {
  hideAllCategory();
  showOrHide(housekeepingActivity, true);
  document.getElementById("option1").style.backgroundColor = "#202d45";
}

function displayJob() {
  hideAllCategory();
  showOrHide(jobActivity, true);
  document.getElementById("option2").style.backgroundColor = "#202d45";
}

function displayTransportation() {
  hideAllCategory();
  showOrHide(transportationActivity, true);
  document.getElementById("option3").style.backgroundColor = "#202d45";
}

function displayEntertainment() {
  hideAllCategory();
  showOrHide(entertainmentActivity, true);
  document.getElementById("option4").style.backgroundColor = "#202d45";
}

function displayMiscellaneous() {
  hideAllCategory();
  showOrHide(miscellaneousActivity, true);
  document.getElementById("option5").style.backgroundColor = "#202d45";
}

// my activities
function addCard(name) {
  let iconName = ""
  switch (name) {
    case "string":
      
      break;

    default:
      break;
  }
}

function discardCard() {

}


