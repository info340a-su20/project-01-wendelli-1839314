import React, {Component} from 'react';
import MyActivities from '../MyActivities.js';

export let selectedCards = [1];

class CardItem extends Component {

    constructor(props) {
        super(props);

        this.state ={
            backgroundColor: ""
        };

        this.ChooseCard = this.ChooseCard.bind(this);
    }

    ChooseCard(index){
        this.setState({
            backgroundColor: "lightgrey"
        });
        selectedCards.push(index);
        //console.log(`selectedCards: ${selectedCards}`);
        MyActivities.DisplayMyCards();
    }

    render() {
        return (
            <div className={`flex-activity-item ${this.props.category} ${this.state.button ? "buttonTrue": "buttonFalse"}`} role="button" onClick={() => this.ChooseCard(this.props.index)} style={{backgroundColor: this.state.backgroundColor}}>
                <div tabIndex="0" className="row">
                    <div className="col-1 icon">
                        <img src={this.props.imageSrc} alt={this.props.imageAlt} className="activityIcon"></img>
                    </div>
                    <div className="col">
                        <h3>{this.props.cardName}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardItem;
