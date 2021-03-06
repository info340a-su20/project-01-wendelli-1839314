import React, { Component } from "react";

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            calActive :true,
            aboutActive: false
        };
    }

    handleClick = (event) => {
        if (event === 0) {
            this.setState({
                calActive :true,
                aboutActive: false
            })
        } else {
            this.setState({
                calActive :false,
                aboutActive: true
            })
        }

    }
    //background-image: url({`${process.env.PUBLIC_URL}/Calculator-bg.jpg`});
    render() {
        const { onAboutClicked } = this.props;
        const {calActive, aboutActive} = this.state;
        return (
            <div id="header" style={{ background: `url(${process.env.PUBLIC_URL}/Calculator-bg.jpg`}}>
                <div id="logo">
                    <h1>COVID-19 Risk Calculator</h1>
                </div>
                <div id="menu">
                    <ul>
                        <li onClick = {() => { onAboutClicked(0); this.handleClick(0)}} style={{ backgroundColor: calActive ? "#202d45" : "" }}>Calculator</li>
                        <li onClick = {() => { onAboutClicked(1); this.handleClick(1)}} style={{ backgroundColor: aboutActive ? "#202d45" : "" }}>About Us</li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Header;
