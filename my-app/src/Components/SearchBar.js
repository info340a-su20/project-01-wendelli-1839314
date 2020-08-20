import React, { Component } from "react";
import { cardListLeft, cardListRight } from "../Constants/cards";

const cardList = [...cardListLeft, ...cardListRight];
var cardNames = [];
for (var i = 0; i < cardList.length; i++) {
    cardNames[i] = cardList[i].name;
}

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            cards: cardNames,
            mySearch: ""
        };
    }

    onClick = () => {
        return (
            this.state.cards.filter(card => card.toLowerCase().includes(this.state.mySearch.toLowerCase()))
        );
      }
    
    onChange = (event) => {
        this.setState({
            mySearch: event.target.value
        });
        console.log(event.target.value)
    }

    render() { 
        return (
            <form id="searchBar">
                <input type="text" placeholder="Enter activity name here..." name="search" onChange={this.onChange} value={this.state.mySearch}></input>
                <button type="submit" onClick={this.onClick}><i className="fa fa-search"></i></button>
            </form>
        );
    }
}

export default SearchBar;