import React, {Component} from 'react';
import CardItemDetails from './Components/CardItemDetails.js';
import selectedCards from './Components/CardItem.js';
import cardListLeft from './ActivityCenter.js';
import cardListRight from './ActivityCenter.js';

export class MyActivities extends Component {

    constructor(props) {
        super(props);

        this.state ={
            cardsChanged: true
        };

        this.CardsChanged = this.CardsChanged.bind(this);
    }

    CardsChanged() {
        this.setState({
            cardsChanged: "1"
        });
    }

    DisplayMyCards() {
        console.log(selectedCards);
        let cards;
        for (var i = 0; i < selectedCards.length; i++) { 
            let card = cardListLeft[i];
            cards += (<CardItemDetails cardName={card.cardName} imageSrc={card.imageSrc} imageAlt={card.imageAlt}/>);
            
        }
        return cards;
    }

    render() {
        return (
            <div className="col" id="pg2-2">
                <section className="flex3-item-1">
                    <h2>My Activities</h2>
                    <p>Tell us if you did/did not wear masks and the duration of each activity.</p>
                    <div className="dropzone">
                        <div className="list-container">
                            <div className="row my-activity-row">
                                <div className="col-auto col-md-auto col-xl-auto d-flex">
                                    <section className="flex3-item1-1">
                                        {this.DisplayMyCards()}
                                    </section>
                                </div>
            
                                <div className="col-auto col-md-auto col-xl-auto d-flex">
                                    <section className="flex3-item1-2">
                                        <CardItemDetails cardName="Staying at Hotel" imageSrc="/icons/bed.png" imageAlt="bed"/>
                                    </section>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div className="row calculator-row">
                        <div className="col-auto col-md-auto col-xl-9 d-flex">
                            <p className="calculation-description">Note: We calculate your risk level by factoring all activities you engage within a day along with the associated attributes.</p>
                        </div>
                        <div className="col-auto col-md-auto col-xl d-flex" id="calculate-btn">
                            <button type="button" className="btn btn-success btn-md" id="calculate">Calculate</button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default MyActivities;