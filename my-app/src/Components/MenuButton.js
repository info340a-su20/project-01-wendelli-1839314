'use strict';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


// class MenuButton extends Component { 

//     render() {
//         return (<button class="menuButton" name="options" id="option1" autocomplete="off" onclick="displayHousekeeping()">Housekeeping</button>);
//     }
// }


const e = React.createElement;

class MenuButton extends Component { 
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

  render() {
    const {display} = this.props; 
    return e(
      'button',
      { className:"menuButton", onClick: () => display() },
      'Housekeeping'
    );
  }
}

const domContainer = document.querySelector('#menuButtonGroup');
ReactDOM.render(e(MenuButton), domContainer);

export default MenuButton;