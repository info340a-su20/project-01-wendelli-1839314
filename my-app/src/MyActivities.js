import React, { Component } from "react";
import CardItemDetails from "./Components/CardItemDetails.js";
import { cardListLeft, cardListRight } from "./Constants/cards";

const cards = [...cardListLeft, ...cardListRight];

export class MyActivities extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { onCardClicked, cardIndices } = this.props;

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
                        (card) =>
                          cardIndices.indexOf(card.index) !== -1 &&
                          cardIndices.indexOf(card.index) % 2 === 0
                      )
                      .map((card, index) => (
                        <CardItemDetails
                          key={index}
                          name={card.name}
                          index={card.index}
                          imageSrc={card.imageSrc}
                          imageAlt={card.imageAlt}
                          onClick={onCardClicked}
                        />
                      ))}
                  </section>
                </div>

                <div className="col-auto col-md-auto col-xl-auto d-flex">
                  <section className="flex3-item1-2">
                    {cards
                      .filter(
                        (card) =>
                          cardIndices.indexOf(card.index) !== -1 &&
                          cardIndices.indexOf(card.index) % 2 === 1
                      )
                      .map((card, index) => (
                        <CardItemDetails
                          key={index}
                          name={card.name}
                          index={card.index}
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
                id="calculate">
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
