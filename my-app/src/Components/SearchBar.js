import React from 'react';

const searchBar = () => {
    return (
        <form id="searchBar">
            <input type="text" placeholder="Enter activity name here..." name="search"></input>
            <button type="submit"><i className="fa fa-search"></i></button>
        </form>
    );
}

export default searchBar;