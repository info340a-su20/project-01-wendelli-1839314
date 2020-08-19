import React, { Component } from "react";
import ActivityCenter from "./ActivityCenter.js";
import MyActivities from "./MyActivities.js";

class ActivitiesSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardsInMyActivities: [],
    };
  }

  addToMyActivities = (index) => {
    this.setState({
      cardsInMyActivities: [...this.state.cardsInMyActivities, index],
    });
  };

  removeFromMyActivities = (index) => {
    this.setState({
      cardsInMyActivities: [
        ...this.state.cardsInMyActivities.filter((i) => i !== index),
      ],
    });
  };

  render() {
    const { cardsInMyActivities } = this.state;
    return (
      <div className="flex-container">
        <div className="row">
          <ActivityCenter
            onCardClicked={this.addToMyActivities}
            cardIndices={cardsInMyActivities}
          />
          <MyActivities
            onCardClicked={this.removeFromMyActivities}
            cardIndices={cardsInMyActivities}
          />
        </div>
      </div>
    );
  }
}

export default ActivitiesSection;
