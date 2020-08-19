import React, {Component} from 'react';
import AnimateBox from './Components/AnimateBox.js';

class Result extends Component {
    render() {
        return (
            <div className="flex-container" id="pg3">
                <div>
                    <h2>Result</h2>
                    <div className="result">
                        <div className="row">
                            <div className="col col-md">
                                <AnimateBox />
                            </div>
                            <div className="col col-md-4">
                                <div className="contain-result">
                                    <section className="flex4-item-2">
                                        <p id="result-description">
                                            Your risk level is 'Moderate High'. We recommend you to take precautions while being outside. And void unnecessary activities if possible.
                                        </p>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Result;