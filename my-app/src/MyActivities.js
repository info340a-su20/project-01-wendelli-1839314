
import React, { Component } from "react";
import { CardItemDetails } from "./Components/CardItemDetails.js";
import { cardListLeft, cardListRight } from "./Constants/cards";
import * as d3 from 'd3';

const cards = [...cardListLeft, ...cardListRight];
const cardNames = cards.map(card => card.name);


d3.csv("../public/ActivityRiskList.csv", function(data) {
  for (var i = 0; i < data.length; i++) {
      console.log(data[i].Activity);
      console.log(data[i].Risk);
      console.log(data[i].Category);
  }
});

export class MyActivities extends Component {

  constructor(props) {
    super(props);
  }

  calculateLevel(card, chosenCards) {
    card.preventDefault();
    let cardMaskOn = chosenCards.map(card => card.maskOn);
    console.log(chosenCards);
    // calculation logic, irrelevant to error
    //let levelIndex = 0;
    //for (var i = 0; i < this.arrayOfObj.length; i++) {
    //   let card = this.arrayOfObj[i];
    //   var cardLevel = 2; // fetch from csv
    //   cardLevel = cardLevel * card.hour;
    //   if (!card.mask) {
    //     cardLevel = cardLevel * 2;
    //   }
    //   levelIndex += cardLevel;
    // }
    // console.log("levelIndex", levelIndex);

  }
  
  render() {
    const { onCardClicked, chosenCards} = this.props;
    const cardsNumbers = chosenCards.map(card => card.number);

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
                          onClick={onCardClicked}
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
                onClick={(card) => {this.calculateLevel(card, chosenCards)}}
                > Calculate
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MyActivities;