import React, { Component } from "react";
import { CardItemDetails } from "./Components/CardItemDetails.js";

export class MyActivities extends Component {
  render() {
    const { onCardClicked, chosenCards, updateCard, calculateLevel } = this.props;

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
                    {chosenCards.map((card, index) => (
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
                onClick={() => calculateLevel()}>
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