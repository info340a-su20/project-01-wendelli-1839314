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

  addToMyActivities = (newCard) => {
    this.setState({
      cardsInMyActivities: [...this.state.cardsInMyActivities, newCard],
    });
  };

  removeFromMyActivities = (newCard) => {
    this.setState({
      cardsInMyActivities: [
        ...this.state.cardsInMyActivities.filter(
          (card) => card.number !== newCard.number
        ),
      ],
    });
  };

  updateCard = (updatedCard) => {
    this.setState({
      cardsInMyActivities: [
        ...this.state.cardsInMyActivities.filter(
          (card) => card.number !== updatedCard.number
        ),
        updatedCard,
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
            chosenCards={cardsInMyActivities}
          />
          <MyActivities
            onCardClicked={this.removeFromMyActivities}
            chosenCards={cardsInMyActivities}
            updateCard={this.updateCard}
          />
        </div>
      </div>
    );
  }
}

export default ActivitiesSection;
