import React, { Component } from "react";
import { CardItemDetails } from "./Components/CardItemDetails.js";
import { cardListLeft, cardListRight } from "./Constants/cards";
import * as d3 from 'd3';

const cards = [...cardListLeft, ...cardListRight];
// const cardNames = cards.map((card) => card.name);
// d3.csv("../public/ActivityRiskList.csv", function(data) {
//   for (var i = 0; i < data.length; i++) {
//       console.log(data[i].Activity);
//       console.log(data[i].Risk);
//       console.log(data[i].Category);
//   }
// });

// d3.csvfunction(data) {
//   console.log(data[i].Activity);
// }

// let dataSet = d3.csv("../public/ActivityRiskList.csv");
// console.log(dataSet);

export class MyActivities extends Component {
  constructor(props) {
    super(props);
  }

  calculateLevel() {
    // card.preventDefault();
    const { chosenCards } = this.props;
    console.log(chosenCards);
    // calculation logic, irrelevant to error
    let levelIndex = 0;
    for (let i = 0; i < chosenCards.length; i++) {
      let card = chosenCards[i];
      // let dataSet = d3.csv("../public/ActivityRiskList.csv");
      // console.log(dataSet.Activity)
      var riskLevel = 2; // fetch from csv
      riskLevel = riskLevel * (card.activityDuration * 2 + 1) / 2;
      if (!card.maskOn) {
        riskLevel = riskLevel * 2;
      }
      levelIndex += riskLevel;
    }
    console.log("levelIndex", levelIndex);
  }

  render() {
    const { onCardClicked, chosenCards, updateCard } = this.props;
    const cardsNumbers = chosenCards.map((card) => card.number);

    return (
      <div className="col" id="pg2-2">
        <section className="flex3-item-1">
          <h2>My Activities</h2>
          <p>
            Tell us if you did/did not wear masks and the duration of each
            activity.
          </p>

          <div className="dropzone">
            <div className="list-container">
              <div className="row my-activity-row">
                <div className="col-auto col-md-auto col-xl-auto d-flex">
                  <section className="flex3-item1-1">
                    {cards
                      .filter(
                        (card) => cardsNumbers.indexOf(card.number) !== -1
                      )
                      .map((card, index) => (
                        <CardItemDetails
                          key={index}
                          name={card.name}
                          number={card.number}
                          imageSrc={card.imageSrc}
                          imageAlt={card.imageAlt}
                          onDeleteCard={onCardClicked}
                          onUpdateCard={updateCard}
                        />
                      ))}
                  </section>
                </div>
              </div>
            </div>
          </div>

          <div className="row calculator-row">
            <div className="col-auto col-md-auto col-xl-9 d-flex">
              <p className="calculation-description">
                Note: We calculate your risk level by factoring all activities
                you engage within a day along with the associated attributes.
              </p>
            </div>
            <div
              className="col-auto col-md-auto col-xl d-flex"
              id="calculate-btn">
              <button
                type="button"
                className="btn btn-success btn-md"
                id="calculate"
                onClick={() => {
                  this.calculateLevel();
                }}>
                {" "}
                Calculate
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MyActivities;
