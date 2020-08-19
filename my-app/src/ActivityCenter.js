import React, {Component} from 'react';
import SearchBar from './Components/SearchBar.js';
import CardItem from './Components/CardItem.js';

export let cardListLeft = [
    {category:"housekeeping", cardName:"Check Mailbox", imageSrc:"/icons/mailbox.png", imageAlt:"mailbox", index:0},
    {category:"housekeeping", cardName:"Grocery Shopping", imageSrc:"icons/shopping.png", imageAlt:"shopping", index:1},
    {category:"housekeeping", cardName:"Invite Friends Over", imageSrc:"/icons/house.png", imageAlt:"house", index:2},
    {category:"housekeeping", cardName:"Grab Takeout Food", imageSrc:"/icons/hamburger.png", imageAlt:"hamburger", index:3},
    {category:"housekeeping", cardName:"Open a Package", imageSrc:"/icons/package.png", imageAlt:"package", index:4},
    {category:"job", cardName:"In-person Meeting", imageSrc:"/icons/meeting-room.png", imageAlt:"meeting-room", index:5},
    {category:"job", cardName:"Meet a Patient", imageSrc:"/icons/recovery.png", imageAlt:"recovery", index:6},
    {category:"job", cardName:"Interview Someone", imageSrc:"/icons/interview.png", imageAlt:"interview", index:7},
    {category:"job", cardName:"Working Alone", imageSrc:"/icons/working.png", imageAlt:"working", index:8},
    {category:"job", cardName:"Coworking", imageSrc:"/icons/coworking.png", imageAlt:"coworking", index:9},
    {category:"transportation", cardName:"Bus", imageSrc:"/icons/bus.png", imageAlt:"bus", index:10},
    {category:"transportation", cardName:"Subway", imageSrc:"/icons/Subway.png", imageAlt:"subway", index:11},
    {category:"transportation", cardName:"Uber", imageSrc:"/icons/uber-taxi.png", imageAlt:"uber-taxi", index:12},
    {category:"transportation", cardName:"Drive alone", imageSrc:"/icons/car.png", imageAlt:"car", index:13},
    {category:"transportation", cardName:"Pumping Gasoline", imageSrc:"/icons/gasoline.png", imageAlt:"gasoline", index:14},
    {category:"entertainment", cardName:"Movie at Theater", imageSrc:"/icons/theater.png", imageAlt:"theater", index:15},
    {category:"entertainment", cardName:"Golf", imageSrc:"icons/golf.png", imageAlt:"golf", index:16},
    {category:"entertainment", cardName:"Camping", imageSrc:"/icons/camping.png", imageAlt:"camping", index:17},
    {category:"entertainment", cardName:"Go to a Bar", imageSrc:"/icons/bar.png", imageAlt:"bar", index:18},
    {category:"entertainment", cardName:"Go to Beach", imageSrc:"/icons/beach.png", imageAlt:"beach", index:19},
    {category:"miscellaneous", cardName:"Public Restroom", imageSrc:"/icons/toilet.png", imageAlt:"toilet", index:20},
    {category:"miscellaneous", cardName:"Restaurant Dine-in", imageSrc:"icons/waiter.png", imageAlt:"waiter", index:21},
    {category:"miscellaneous", cardName:"Church Events", imageSrc:"/icons/church.png", imageAlt:"church", index:22},
    {category:"miscellaneous", cardName:"Visit Nursing Home", imageSrc:"/icons/elder.png", imageAlt:"elder", index:23},
    {category:"miscellaneous", cardName:"Staying at Hotel", imageSrc:"/icons/bed.png", imageAlt:"bed", index:24}
];

export let cardListRight = [
    {category:"housekeeping", cardName:"House Cleaning", imageSrc:"/icons/vaccum.png", imageAlt:"vaccum", index:25},
    {category:"housekeeping", cardName:"House Moving", imageSrc:"/icons/truck.png", imageAlt:"truck", index:26},
    {category:"housekeeping", cardName:"Yardwork", imageSrc:"/icons/lawnmover.png", imageAlt:"lawnmover", index:27},
    {category:"housekeeping", cardName:"Walk a Dog", imageSrc:"/icons/dog.png", imageAlt:"dog", index:28},
    {category:"housekeeping", cardName:"Use Public Laundry", imageSrc:"/icons/laundry.png", imageAlt:"laundry", index:29},
    {category:"job", cardName:"Lunch at Cafeteria", imageSrc:"/icons/cafeteria.png", imageAlt:"cafeteria", index:30},
    {category:"job", cardName:"Video Conference", imageSrc:"/icons/video-conference.png", imageAlt:"video-conference", index:31},
    {category:"transportation", cardName:"Drive w/ Passengers", imageSrc:"/icons/door-ajar.png", imageAlt:"door-ajar", index:32},
    {category:"transportation", cardName:"Walk", imageSrc:"/icons/walking.png", imageAlt:"walking",index:33},
    {category:"transportation", cardName:"Bike", imageSrc:"/icons/bike.png", imageAlt:"bike",index:34},
    {category:"transportation", cardName:"Travel by Plane", imageSrc:"/icons/plane.png", imageAlt:"plane", index:35},
    {category:"entertainment", cardName:"Shopping at Mall", imageSrc:"/icons/shopping-mall.png", imageAlt:"shopping-mall", index:36},
    {category:"entertainment", cardName:"Tennis", imageSrc:"icons/tennis.png", imageAlt:"tennis", index:37},
    {category:"entertainment", cardName:"Basketball/Football", imageSrc:"/icons/basketball.png", imageAlt:"basketball", index:38},
    {category:"entertainment", cardName:"Concerts", imageSrc:"/icons/stage.png", imageAlt:"stage", index:39},
    {category:"entertainment", cardName:"Backyard Barbecue", imageSrc:"/icons/souvla.png", imageAlt:"souvla", index:40},
    {category:"miscellaneous", cardName:"Attend a Wedding", imageSrc:"/icons/wedding.png", imageAlt:"wedding", index:41},
    {category:"miscellaneous", cardName:"Shaking Hands", imageSrc:"icons/handshake.png", imageAlt:"handshake", index:42},
    {category:"miscellaneous", cardName:"Workout at Gym", imageSrc:"/icons/gym.png", imageAlt:"gym", index:43},
    {category:"miscellaneous", cardName:"Visit Library", imageSrc:"/icons/library.png", imageAlt:"library", index:44},
    {category:"miscellaneous", cardName:"Stay in Crowds", imageSrc:"/icons/crowd.png", imageAlt:"crowd", index:45}
];

let category = 0;
let cardSelectedLeft = cardListLeft.slice(0, 5);
let cardSelectedRight = cardListRight.slice(0, 5);

class ActivityCenter extends Component {

    constructor(props) {
        super(props);

        this.state ={
            categoryChanged: true
        };

        this.CategoryChanged = this.CategoryChanged.bind(this);
    }

    CategoryChanged() {
        this.setState({
            categoryChanged: "1"
        });
    }
    
    ChooseCategory(index) {
        category = index;
        this.CategoryChanged();
    }

    DisplayCards(col) {
        if (col === 0) {
            if (category === 0) {
                cardSelectedLeft = cardListLeft.slice(0, 5);
                return (<section>
                            {cardSelectedLeft.map((cardSelectedLeft, index) => <CardItem key={index} category={cardSelectedLeft.category} cardName={cardSelectedLeft.cardName} imageSrc={cardSelectedLeft.imageSrc} imageAlt={cardSelectedLeft.imageAlt} index={cardSelectedLeft.index}/>)}
                        </section>
                )
            } else if (category === 1) {
                cardSelectedLeft = cardListLeft.slice(5, 10);
                return (<section>
                            {cardSelectedLeft.map((cardSelectedLeft, index) => <CardItem key={index} category={cardSelectedLeft.category} cardName={cardSelectedLeft.cardName} imageSrc={cardSelectedLeft.imageSrc} imageAlt={cardSelectedLeft.imageAlt} index={cardSelectedLeft.index}/>)}
                        </section>
                )
            } else if (category === 2) {
                cardSelectedLeft = cardListLeft.slice(10, 15);
                return (<section>
                            {cardSelectedLeft.map((cardSelectedLeft, index) => <CardItem key={index} category={cardSelectedLeft.category} cardName={cardSelectedLeft.cardName} imageSrc={cardSelectedLeft.imageSrc} imageAlt={cardSelectedLeft.imageAlt} index={cardSelectedLeft.index}/>)}
                        </section>
                )
            } else if (category === 3) {
                cardSelectedLeft = cardListLeft.slice(15, 20);
                return (<section>
                            {cardSelectedLeft.map((cardSelectedLeft, index) => <CardItem key={index} category={cardSelectedLeft.category} cardName={cardSelectedLeft.cardName} imageSrc={cardSelectedLeft.imageSrc} imageAlt={cardSelectedLeft.imageAlt} index={cardSelectedLeft.index}/>)}
                        </section>
                )
            } else if (category === 4) {
                cardSelectedLeft = cardListLeft.slice(20, 25);
                return (<section>
                            {cardSelectedLeft.map((cardSelectedLeft, index) => <CardItem key={index} category={cardSelectedLeft.category} cardName={cardSelectedLeft.cardName} imageSrc={cardSelectedLeft.imageSrc} imageAlt={cardSelectedLeft.imageAlt} index={cardSelectedLeft.index}/>)}
                        </section>
                )
            }
        } else {
            if (category === 0) {
                cardSelectedRight = cardListRight.slice(0, 5);
                return (<section>
                            {cardSelectedRight.map((cardSelectedRight, index) => <CardItem key={index} category={cardSelectedRight.category} cardName={cardSelectedRight.cardName} imageSrc={cardSelectedRight.imageSrc} imageAlt={cardSelectedRight.imageAlt} index={cardSelectedRight.index}/>)}
                        </section>
                )
            } else if (category === 1) {
                cardSelectedRight = cardListRight.slice(5, 7);
                return (<section>
                            {cardSelectedRight.map((cardSelectedRight, index) => <CardItem key={index} category={cardSelectedRight.category} cardName={cardSelectedRight.cardName} imageSrc={cardSelectedRight.imageSrc} imageAlt={cardSelectedRight.imageAlt} index={cardSelectedRight.index}/>)}
                        </section>
                )
            } else if (category === 2) {
                cardSelectedRight = cardListRight.slice(7, 11);
                return (<section>
                            {cardSelectedRight.map((cardSelectedRight, index) => <CardItem key={index} category={cardSelectedRight.category} cardName={cardSelectedRight.cardName} imageSrc={cardSelectedRight.imageSrc} imageAlt={cardSelectedRight.imageAlt} index={cardSelectedRight.index}/>)}
                        </section>
                )
            } else if (category === 3) {
                cardSelectedRight = cardListRight.slice(11, 16);
                return (<section>
                            {cardSelectedRight.map((cardSelectedRight, index) => <CardItem key={index} category={cardSelectedRight.category} cardName={cardSelectedRight.cardName} imageSrc={cardSelectedRight.imageSrc} imageAlt={cardSelectedRight.imageAlt} index={cardSelectedRight.index}/>)}
                        </section>
                )
            } else if (category === 4) {
                cardSelectedRight = cardListRight.slice(16, 23);
                return (<section>
                            {cardSelectedRight.map((cardSelectedRight, index) => <CardItem key={index} category={cardSelectedRight.category} cardName={cardSelectedRight.cardName} imageSrc={cardSelectedRight.imageSrc} imageAlt={cardSelectedRight.imageAlt} index={cardSelectedRight.index}/>)}
                        </section>
                )
            }
        }
    }
    
    render() {
        return (
            <div className={`col-auto col-md-auto col-xl d-flex ${this.state.button ? "buttonTrue": "buttonFalse"}`}  id="pg2-1">
                <section className="flex2-item-1">
                    <h2>Activity Center</h2>
                    <p>Click the activity cards to add them to "My Activities".</p>
                    <SearchBar />
                    <div className="btn-group btn-group-toggle" data-toggle="buttons" role="button">
                        <button className="menuButton" name="options" id="option1" onClick={() => this.ChooseCategory(0)}>Housekeeping</button>
                        <button className="menuButton" name="options" id="option2" onClick={() => this.ChooseCategory(1)}>Job</button>
                        <button className="menuButton" name="options" id="option3" onClick={() => this.ChooseCategory(2)}>Transportation</button>
                        <button className="menuButton" name="options" id="option4" onClick={() => this.ChooseCategory(3)}>Entertainment</button>
                        <button className="menuButton" name="options" id="option5" onClick={() => this.ChooseCategory(4)}>Miscellaneous</button>
                    </div>
                    <div className="activityList">
                        <div className="list-container">
                            <div className="row" id="allRows">
                                <div className="col-auto d-flex">
                                    {this.DisplayCards(0)}
                                </div>
                                <div className="col-auto d-flex">
                                    <section>
                                    {this.DisplayCards(1)}
                                    </section>
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




