// import React, {Component} from 'react';
// import ProfessLine from ''/Components/ProgressLine.js';

// class AnimateBox extends Component {
//     render() {
//         return (
//             <div className="contain-result">
//                 <section className="flex4-item-1">
//                     <h3 id="risk-level-title">Risk Level:</h3>
//                     <h3 id="risk-level-h">Moderate High</h3>
//                     <div className="progress-bar-container">
//                     <ProgressLine 
//                         label="Full progressbar"
//                         visualParts={[
//                             {
//                                 percentage: "100%",
//                                 color: "tan"
//                             }
//                         ]}
//                     />
//                     </div>
//                     <div className="arrow-up" aria-label="arrow up"></div>
//                 </section>
//             </div>
//         );
//     }
// }

// export default AnimateBox;


import React, {Component} from 'react';

class AnimateBox extends Component {
    render() {
        return (
            <div className="contain-result">
                <section className="flex4-item-1">
                    <h3 id="risk-level-title">Risk Level:</h3>
                    <h3 id="risk-level-h">Moderate High</h3>
                    <div className="progress-bar-container">
                        <div className="progress">
                            <div id="low" className="progress-bar bg-success" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">Low</div>
                            <div id="low-moderate" className="progress-bar bg-warning" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">Low moderate</div>
                            <div id="moderate" className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">Moderate</div>
                            <div id="moderate-high" className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">Moderate High</div>
                            <div id="high" className="progress-bar bg-danger" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">High</div>
                        </div>
                    </div>
                    <div className="arrow-up" aria-label="arrow up"></div>
                </section>
            </div>
        );
    }
}

export default AnimateBox;