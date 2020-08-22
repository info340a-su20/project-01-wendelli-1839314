import React, { Component } from "react";
import { cardListLeft, cardListRight } from "./Constants/cards";
import { categories } from "./Constants/categories";
import CardItem from "./Components/CardItem.js";

const categoriesLowerCased = categories.map((c) => c.toLowerCase());

class ActivityCenter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      category: 0,
      button: true,
    };
  }

  chooseCategory = (index) => {
    this.setState({
      category: index,
    });
  };

  displayCards = (col) => {
    const { category } = this.state;
    const { onCardClicked, chosenCards } = this.props;
    const cards = col === 0 ? cardListLeft : cardListRight;
    const cardsNumbers = chosenCards.map((card) => card.number);

    return (
      <section>
        {cards
          .filter(
            (card) => categoriesLowerCased.indexOf(card.category) === category
          )
          .map((card) => (
            <CardItem
              key={card.name}
              category={card.category}
              name={card.name}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              number={card.number}
              onClick={onCardClicked}
              isClicked={cardsNumbers.indexOf(card.number) !== -1}
            />
          ))}
      </section>
    );
  };

  render() {
    const { button, category } = this.state;

    return (
      <div
        className={`col-auto col-md-auto col-xl d-flex ${
          button ? "buttonTrue" : "buttonFalse"
        }`}
        id="pg2-1">
        <section className="flex2-item-1">
          <h2>Activity Center</h2>
          <p>Click the activity cards to add them to "My Activities".</p>
          <div
            className="btn-group btn-group-toggle"
            data-toggle="buttons"
            role="button">
            {categories.map((categoryName, index) => (
              <button
                className={`menuButton ${category === index ? "active" : ""}`}
                name="options"
                key={index}
                onClick={() => this.chooseCategory(index)}>
                {categoryName}
              </button>
            ))}
          </div>
          <div className="activityList">
            <div className="list-container">
              <div className="row" id="allRows">
                <div className="col-auto col-xl-6 d-flex" key={0}>
                  {this.displayCards(0)}
                </div>
                <div className="col-auto col-xl-6 d-flex" key={1}>
                  {this.displayCards(1)}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ActivityCenter;
