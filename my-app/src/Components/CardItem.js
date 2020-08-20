import React, { Component } from "react";

export let selectedCards = [1];

class CardItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      button: true,
    };
  }

  render() {
    const { button } = this.state;
    const {
      category,
      name,
      index,
      imageSrc,
      imageAlt,
      isClicked,
      onClick,
    } = this.props;

    return (
      <div
        className={`flex-activity-item ${category} ${
          button ? "buttonTrue" : "buttonFalse"
        }`}
        role="button"
        onClick={() => onClick(index)}
        style={{ backgroundColor: isClicked ? "lightgrey" : "" }}>
        <div tabIndex="0" className="row">
          <div className="col-1 icon">
            <img src={imageSrc} alt={imageAlt} className="activityIcon"></img>
          </div>
          <div className="col">
            <h3>{name}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default CardItem;
