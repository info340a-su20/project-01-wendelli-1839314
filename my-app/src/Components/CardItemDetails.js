import React, { Component } from "react";
import { hours } from "../Constants/hours";

class CardItemDetails extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedOption: true,
      selectedValue: "0-1 hour"
    };
    this.handleChangeDropdown = this.handleChangeDropdown.bind(this);
  }

  onChangeRadioButton = () => {
    this.setState({
      selectedOption: !this.state.selectedOption
    });
    console.log(!this.state.selectedOption);
  }

  handleChangeDropdown = (event) => {
    this.setState({selectedValue: event.target.value});
    console.log(event.target.value);
  }

  render() {
    const { imageAlt, imageSrc, index, name, onClick } = this.props;
    return (
      <div className="flex-my-activity-item" role="form">
        <div className="row">
          <div onClick={() => onClick(index)}>
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
            <input type="radio" value="mask-yes" name="yes_no" defaultChecked={this.state.selectedOption === true} onClick={this.onChangeRadioButton}/> Yes
            <input type="radio" value="mask-no" name="yes_no" defaultChecked={this.state.selectedOption === false} onClick={this.onChangeRadioButton}/> No
          </div>
        </form>
        <div className="card-select-box">
          <label>Duration?</label>
          <select name="duration" value={this.state.selectedValue} onChange={this.handleChangeDropdown}>
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