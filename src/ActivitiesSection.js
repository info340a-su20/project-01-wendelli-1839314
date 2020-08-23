import React, { Component } from "react";
import ActivityCenter from "./ActivityCenter.js";
import MyActivities from "./MyActivities.js";
import * as d3 from 'd3';
import data from './ActivityRiskList.csv';
import Result from "./Result.js";

class ActivitiesSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardsInMyActivities: [],
      calculateLevelNumber: 0
    };
  }

  addToMyActivities = (newCard) => {
    this.setState({
      cardsInMyActivities: [...this.state.cardsInMyActivities, newCard],
    });
  };

  removeFromMyActivities = (newCard) => {
    this.setState({
      cardsInMyActivities: this.state.cardsInMyActivities.filter(
          (card) => card.number !== newCard.number
      )
    });
  };

  updateCard = (updatedCard) => {
    const { cardsInMyActivities } = this.state;
    let cardNumber = cardsInMyActivities.map((card) => card.number);
    let checkIndex = cardNumber.indexOf(updatedCard.number);
    this.setState({
      cardsInMyActivities: [...cardsInMyActivities.slice(0,checkIndex),updatedCard,...cardsInMyActivities.slice(checkIndex+1),
      ],
    });
  };

  calculateLevel = () => {
    const { cardsInMyActivities } = this.state;

    let levelIndex = 0;
    d3.csv(data).then((data) => {
      data.forEach((data) => { 
        for (let i = 0; i < cardsInMyActivities.length; i++) {
          let card = cardsInMyActivities[i];
          if (card.name === data.Activity) {
            console.log("Each card data:", data.Activity, data.Risk, data.Category, card.activityDuration, card.maskOn);
            let riskLevel = data.Risk;
            riskLevel = riskLevel * ((card.activityDuration + 1) * 2 + 1) / 2;
            if (!card.maskOn) {
              riskLevel = riskLevel * 2;
            } else {
              riskLevel = riskLevel / 2;
            }
            levelIndex += riskLevel;
          }
        }
      });
      // let levelNum = Math.floor(levelIndex / cardsInMyActivities.length / 10) ? why if else
      let levelNum = Math.floor(levelIndex / cardsInMyActivities.length)
      console.log(levelNum);
      if (levelNum > 30) {
        levelNum = 4;
      } else if (levelNum > 21) {
        levelNum = 3;
      } else if (levelNum > 14) {
        levelNum = 2;
      } else if (levelNum > 7) {
        levelNum = 1;
      } else {
        levelNum = 0;
      }
      this.setState({ calculateLevelNumber: levelNum });
    }).catch((error) => {
      throw error;
    })
  }

  render() {
    const { cardsInMyActivities, calculateLevelNumber } = this.state;
    
    return (
      <div>
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
              calculateLevel={this.calculateLevel}
            />
          </div>
        </div>
        <div className="flex-container" id="pg3">
          <div>
            <Result displayLevel={calculateLevelNumber} />
          </div>
        </div>
      </div>
    );
  }
}

export default ActivitiesSection;