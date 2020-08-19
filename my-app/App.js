import React, { Component } from 'react';


class MyButton extends Component {
    //method to call when clicked. The name is conventional, but arbitrary
    //the callback function will be passed the DOM event
    handleClick(event) {
       console.log('clicky clicky');
    }
  
    render() {
      //make a button with an `onClick` attribute!
      //this "registers" the listener and sets the callback
      return (
      <div className="flex-activity-item housekeeping" role="button" onClick={this.handleClick}>
        <div tabindex="0" class="row">
            <div className="col-1 icon">
                <img src="css/images/icons/mailbox.png" alt="mailbox" class="activityIcon" />
            </div>
            <div className="col">
                <h3>Check Mailbox</h3>
            </div>
        </div>
      </div>);
    }
  }
  ReactDOM.render(<MyButton text="Click me!"/>, document.getElementById("allRows"));  


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