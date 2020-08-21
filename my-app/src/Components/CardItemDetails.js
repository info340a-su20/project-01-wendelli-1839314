import React, { Component } from "react";
import { hours } from "../Constants/hours";

export class CardItemDetails extends Component {

  constructor(props){
    super(props);

    this.state = {
      maskOn: true,
      activityDuration: hours[0]
    };
  }


  onChangeRadioButton = () => {
    this.setState({
      maskOn: !this.state.maskOn
    });
  }

  handleChangeDropdown = (event) => {
    this.setState({activityDuration: event.target.value});
  }

  render() {
    const { maskOn, activityDuration } = this.state;
    const { imageAlt, imageSrc, number, name, onClick} = this.props;
    const card = {
      name,
      number,
      maskOn,
      activityDuration
    };

    return (
      <div className="flex-my-activity-item" role="form">
        <div className="row">
          <div onClick={() => onClick(card)}>
            <div className="close" role="button" aria-label="Close">
              ×
            </div>
          </div>
          <div className="col-1 icon">
            <img src={imageSrc} alt={imageAlt} className="activityIcon"></img>
          </div>
          <div className="col">
            <h3>{name}</h3>
          </div>
        </div>
        <form>
          <div className="card-radio-button">
            <label>Wear Mask?</label>
            <input type="radio" value="mask-yes" name="yes_no" defaultChecked={true} onClick={this.onChangeRadioButton}/> Yes
            <input type="radio" value="mask-no" name="yes_no" onClick={this.onChangeRadioButton}/> No
          </div>
        </form>
        <div className="card-select-box">
          <label>Duration?</label>
          <select name="duration" value={activityDuration} onChange={this.handleChangeDropdown}>
            {hours.map((hour, index) => (
              <option key={index} value={index}>{hour}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default CardItemDetails;

// import React, { Component } from "react";
// import { hours } from "../Constants/hours";

// export class CardItemDetails extends Component {

//   constructor(props){
//     super(props);

//     this.state = {
//       maskOn: true,
//       activityDuration: hours[0]
//     };
//   }


//   onChangeRadioButton = () => {
//     this.setState({
//       maskOn: !this.state.maskOn
//     });
//   }

//   handleChangeDropdown = (event) => {
//     this.setState({activityDuration: event.target.value});
//   }

//   render() {
//     const { maskOn, activityDuration } = this.state;
//     const { imageAlt, imageSrc, number, name, onClick} = this.props;
//     const card = {
//       name,
//       number,
//       maskOn,
//       activityDuration
//     };

//     return (
//       <div className="flex-my-activity-item" role="form">
//         <div className="row">
//           <div onClick={() => onClick(card)}>
//             <div className="close" role="button" aria-label="Close">
//               ×
//             </div>
//           </div>
//           <div className="col-1 icon">
//             <img src={imageSrc} alt={imageAlt} className="activityIcon"></img>
//           </div>
//           <div className="col">
//             <h3>{name}</h3>
//           </div>
//         </div>
//         <form>
//           <div className="card-radio-button">
//             <label>Wear Mask?</label>
//             <input type="radio" value="mask-yes" name="yes_no" defaultChecked={true} onClick={this.onChangeRadioButton}/> Yes
//             <input type="radio" value="mask-no" name="yes_no" onClick={this.onChangeRadioButton}/> No
//           </div>
//         </form>
//         <div className="card-select-box">
//           <label>Duration?</label>
//           <select name="duration" value={activityDuration} onChange={this.handleChangeDropdown}>
//             {hours.map((hour, index) => (
//               <option key={index} value={index}>{hour}</option>
//             ))}
//           </select>
//         </div>
//       </div>
//     );
//   }
// }

// export default CardItemDetails;

