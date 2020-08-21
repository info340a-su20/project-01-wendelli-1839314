import React, {Component} from 'react';
import AnimateBox from './Components/AnimateBox.js';

class Result extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            level: 0
        };
    }

    render() {
        let displayLevel;
        if (this.state.level === 0) {
            displayLevel = (
                <div className="row">
                    <div className="col-sm col-md col-lg">
                        <AnimateBox />
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="contain-result">
                            <section className="flex4-item-2">
                                <p id="result-description">
                                    Your risk level is 'Low'. Great job on practicing social distancing and being responsible for you and others' health. Keep up the good work.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            );
        } else if (this.state.level === 1) {
            displayLevel = (
                <div className="row">
                    <div className="col col-md">
                        <AnimateBox />
                    </div>
                    <div className="col col-md-4">
                        <div className="contain-result">
                            <section className="flex4-item-2">
                                <p id="result-description">
                                    Your risk level is 'Low Moderate'. Nice work! Please keep practicing social distancing and minimizing unnecessary exposure whenever possible. 
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            );
        } else if (this.state.level === 2) {
            displayLevel = (
                <div className="row">
                    <div className="col col-md">
                        <AnimateBox />
                    </div>
                    <div className="col col-md-4">
                        <div className="contain-result">
                            <section className="flex4-item-2">
                                <p id="result-description">
                                    Your risk level is 'Moderate'. Please take extra precautions while being outside, and avoid unnecessary outdoor activities whenever possible.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            );
        } else if (this.state.level === 3) {
            displayLevel = (
                <div className="row">
                    <div className="col col-md">
                        <AnimateBox />
                    </div>
                    <div className="col col-md-4">
                        <div className="contain-result">
                            <section className="flex4-item-2">
                                <p id="result-description">
                                    Your risk level is 'Moderate High'. A number of your daily activities can put your health on a high risk. Please practice social distancing!
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            );
        } else {
            displayLevel = (
                <div className="row">
                    <div className="col-auto col-sm-auto col-md-auto">
                        <AnimateBox />
                    </div>
                    <div className="col-auto col-sm-auto col-md-auto">
                        <div className="contain-result">
                            <section className="flex4-item-2">
                                <p id="result-description">
                                    Your risk level is 'High'. Please try not to put yourself in risky places. Practice social distancing right away! Most importantly, wear a mask!
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="flex-container" id="pg3">
                <div>
                    <h2>Result</h2>
                    <div className="result">
                        {displayLevel}
                    </div>
                </div>
            </div>
        );
    }
}

export default Result;
