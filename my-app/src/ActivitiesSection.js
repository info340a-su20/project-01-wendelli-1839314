import React, { Component } from "react";
import ActivityCenter from "./ActivityCenter.js";
import MyActivities from "./MyActivities.js";


class ActivitiesSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardsInMyActivities: []
    };
  }

  addToMyActivities = (newCard) => {
    this.setState({
      cardsInMyActivities: [...this.state.cardsInMyActivities, newCard],
    }, console.log(this.state.cardsInMyActivities));
  };

  removeFromMyActivities = (newCard) => {
    this.setState({
      cardsInMyActivities: [
        ...this.state.cardsInMyActivities.filter(card => card.number !== newCard.number),
      ],
    }, console.log(this.state.cardsInMyActivities));
  };

  render() {
    const { cardsInMyActivities } = this.state;
    return (
      <div className="flex-container">
        <div className="row">
          <ActivityCenter
            onCardClicked={this.addToMyActivities}
            chosenCards={cardsInMyActivities}
          />
          <MyActivities
            onCardClicked={this.removeFromMyActivities}
            chosenCards={cardsInMyActivities}
          />
        </div>
      </div>
    );
  }
}

export default ActivitiesSection;
