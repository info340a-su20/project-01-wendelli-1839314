import React from 'react';

const header = () => {
    return (
        <div id="header">
            <div id="logo">
                <h1>COVID-19 Risk Calculator</h1>
            </div>
            <div id="menu">
                <ul>
                    <li className="current_page_item"><a href="index.html">Calculator</a></li>
                    <li><a href="about.html">About Us</a></li>
                </ul>
            </div>
        </div>
    );
}

export default header;