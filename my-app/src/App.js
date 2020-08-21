import React, { Component } from "react";
import './App.css';
import Header from './Header.js';
import Introduction from './Introduction.js';
import ActivitiesSection from './ActivitiesSection.js';
import Result from './Result.js';
import AboutUs from './AboutUs.js';
import Footer from './Footer.js';

class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            page: 0
        };
    }

    currentPage = (index) => {
        this.setState({
            page: index
        });
    };

    render() {
        let displaySection;
        if (this.state.page === 0) {
            displaySection = (
                <div>
                    <Introduction />
                    <ActivitiesSection />
                    <Result />
                </div>
            );
        } else {
            displaySection = (<AboutUs />);
        }    

        return (
            <div>
                <Header onAboutClicked={this.currentPage}/>
                {displaySection}
                <Footer />
            </div>
        );
    }
}

export default App;
// onAboutClicked={this.choosePage}