import React from 'react';
import './App.css';
import Header from './Header.js';
import Introduction from './Introduction.js';
// import ActivityCenter from './ActivityCenter.js';
// import MyActivities from './MyActivities.js';
import ActivitiesSection from './ActivitiesSection.js';
import Result from './Result.js';
import Footer from './Footer.js';

function App() {

  return (
    <div className="App">
      <Header />
      <Introduction />
      <ActivitiesSection />
      <Result />
      <Footer />
    </div>
  );
}

//  view on load
// window.onload = function() {
//     displayHousekeeping();
// }


// // activity center Menu Bar
// let housekeepingActivity = document.getElementsByClassName("housekeeping");
// let jobActivity = document.getElementsByClassName("job");
// let transportationActivity = document.getElementsByClassName("transportation");
// let entertainmentActivity = document.getElementsByClassName("entertainment");
// let miscellaneousActivity = document.getElementsByClassName("miscellaneous");

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
//   // document.getElementById("option1").style.backgroundColor = "#475a7b";
//   // document.getElementById("option2").style.backgroundColor = "#475a7b";
//   // document.getElementById("option3").style.backgroundColor = "#475a7b";
//   // document.getElementById("option4").style.backgroundColor = "#475a7b";
//   // document.getElementById("option5").style.backgroundColor = "#475a7b";
// }

// function displayHousekeeping() {
//   hideAllCategory();
//   showOrHide(housekeepingActivity, true);
//   console.log("hihihihihihihihi");
//   // document.getElementById("option1").style.backgroundColor = "#202d45";
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
//   handleClick(event) {
//      console.log('clicky clicky');
//   }
  
//   render() {
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


/*
class addCard extends React.Component {

handleClick = (event) => {
   console.log("You clicked on", this.props.text);
}

 render() {
  let iconPath = `css/images/icons/${getIcon(name)}`;

  return (<div className={flex-my-activity-item} role="form">
      <div className={row}>
          <div id="container">
              <div id="close" role="button" aria-label="Close">
                  ×
              </div>
          </div>
          <div className={col-1 icon}>
           <img src={iconPath} alt={getIcon(name).substring(0, getIcon(name).length-4)} class="activityIcon" />
       </div>             <div className={col}>
              <h3>{name}</h3>
          </div>
      </div>
      <form>
          <div id="card-radio-button">
              <label for="yes_no_radio">Wear Mask?</label>
              <input type="radio" value="mask-yes" name="yes_no">Yes</input>
              <input type="radio" value="mask-no" name="yes_no">No</input>
          </div>
       <div id="card-select-box">
          <label for="select_box">Duration?</label>
          <select name="duration" id="duration">
              <option value="0-1h">0-1 hour</option>
              <option value="1-2h">1-2 hours</option>
              <option value="2-3h">2-3 hours</option>
              <option value="3-4h">3-4 hours</option>
              <option value="4-5h">4-5 hours</option>
              <option value="5-6h">5-6 hours</option>
              <option value="6h+">6+ hours</option>
          </select>
       </div>
     </div>);
 }
}
*/

export default App;
