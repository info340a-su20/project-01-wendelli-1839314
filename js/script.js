// 'use strict';

// // import React from 'react';
// // import ReactDOM from 'react-dom';

// // view on load
// window.onload = function() {
//   displayHousekeeping();
// }

// // activity center Menu Bar
// var housekeepingActivity = document.getElementsByClassName("housekeeping");
// var jobActivity = document.getElementsByClassName("job");
// var transportationActivity = document.getElementsByClassName("transportation");
// var entertainmentActivity = document.getElementsByClassName("entertainment");
// var miscellaneousActivity = document.getElementsByClassName("miscellaneous");

// function showOrHide(category, showOrHide) {
//   for (let i = 0; i < category.length; i++) {
//     if (showOrHide) {
//       category[i].style.display = "block";
//     } else {
//       category[i].style.display = "none";
//     }
//   }
// }

// function hideAllCategory() {
//   showOrHide(housekeepingActivity, false);
//   showOrHide(jobActivity, false);
//   showOrHide(transportationActivity, false);
//   showOrHide(entertainmentActivity, false);
//   showOrHide(miscellaneousActivity, false);
//   document.getElementById("option1").style.backgroundColor = "#475a7b";
//   document.getElementById("option2").style.backgroundColor = "#475a7b";
//   document.getElementById("option3").style.backgroundColor = "#475a7b";
//   document.getElementById("option4").style.backgroundColor = "#475a7b";
//   document.getElementById("option5").style.backgroundColor = "#475a7b";
// }

// function displayHousekeeping() {
//   hideAllCategory();
//   showOrHide(housekeepingActivity, true);
//   document.getElementById("option1").style.backgroundColor = "#202d45";
// }

// function displayJob() {
//   hideAllCategory();
//   showOrHide(jobActivity, true);
//   document.getElementById("option2").style.backgroundColor = "#202d45";
// }

// function displayTransportation() {
//   hideAllCategory();
//   showOrHide(transportationActivity, true);
//   document.getElementById("option3").style.backgroundColor = "#202d45";
// }

// function displayEntertainment() {
//   hideAllCategory();
//   showOrHide(entertainmentActivity, true);
//   document.getElementById("option4").style.backgroundColor = "#202d45";
// }

// function displayMiscellaneous() {
//   hideAllCategory();
//   showOrHide(miscellaneousActivity, true);
//   document.getElementById("option5").style.backgroundColor = "#202d45";
// }

// // All activities cards
// function getIcon(name) {
//   switch (name) {
//     case "Check Mailbox":
//       return "mailbox.png";

//     case "Grocery Shopping":
//       return "mailbox.png";
    
//     case "Invite Friends Over":
//       return "house.png";

//     case "Grab Takeout Food":
//       return "hamburger.png";

//     case "Open a Package":
//       return "package.png";

//     case "In-person Meeting":
//       return "meeting-room.png";

//     case "Meet a Patient":
//       return "recovery.png";

//     case "Interview Someone":
//       return "interview.png";

//     case "Working Alone":
//       return "working.png";

//     case "Coworking":
//       return "coworking.png";
    
//     case "Bus":
//       return "bus.png";

//     case "Subway":
//       return "subway.png";

//     case "Uber":
//       return "uber-taxi.png";

//     case "Drive alone":
//       return "car.png";

//     case "Pumping Gasoline":
//       return "gasoline.png";

//     case "Movie at Theater":
//       return "theater.png";

//     case "Golf":
//       return "golf.png";
    
//     case "Camping":
//       return "camping.png";

//     case "Go to a Bar":
//       return "bar.png";

//     case "Go to Beach":
//       return "beach.png";

//     case "Public Restroom":
//       return "toilet.png";

//     case "Restaurant Dine-in":
//       return "waiter.png";

//     case "Church Event":
//       return "church.png";

//     case "Visit Nursing Home":
//       return "elder.png";

//     case "Staying at Hotel":
//       return "bed.png";
    
//     case "House Cleaning":
//       return "vaccum.png";

//     case "House Moving":
//       return "truck.png";

//     case "Yardwork":
//       return "lawnmover.png";

//     case "Walk a Dog":
//       return "dog.png";

//     case "Use Public Laundry":
//       return "laundry.png";

//     case "Lunch at Cafeteria":
//       return "cafeteria.png";

//     case "Video Conference":
//       return "video-conference.png";

//     case "Drive w/ Passengers":
//       return "door-ajar.png";
    
//     case "Walk":
//       return "walking.png";

//     case "Bike":
//       return "bike.png";

//     case "Travel by Plane":
//       return "plane.png";

//     case "Shopping at Mall":
//       return "shopping-mall.png";

//     case "Tennis":
//       return "tennis.png";
    
//     case "Basketball/Football":
//       return "basketball.png";
    
//     case "Concert/Sports":
//       return "stage.png";

//     case "Backyard Barbecue":
//       return "souvla.png";

//     case "Attend a Wedding":
//       return "wedding.png";

//     case "Shaking Hands":
//       return "handshake.png";

//     case "Workout at Gym":
//       return "gym.png";

//     case "Visit Library":
//       return "library.png";
  
//     case "Stay in Crowds":
//       return "crowd.png";

//     default:
//       return "";
//   }
// }


// class MyButton extends Component {
//   //method to call when clicked. The name is conventional, but arbitrary
//   //the callback function will be passed the DOM event
//   handleClick(event) {
//      console.log('clicky clicky');
//   }

//   render() {
//     //make a button with an `onClick` attribute!
//     //this "registers" the listener and sets the callback
//     return (
//     <div className="flex-activity-item housekeeping" role="button" onClick={this.handleClick}>
//       <div tabindex="0" class="row">
//           <div className="col-1 icon">
//               <img src="css/images/icons/mailbox.png" alt="mailbox" class="activityIcon" />
//           </div>
//           <div className="col">
//               <h3>Check Mailbox</h3>
//           </div>
//       </div>
//     </div>);
//   }
// }
// ReactDOM.render(<MyButton text="Click me!"/>, document.getElementById("allRows"));  
