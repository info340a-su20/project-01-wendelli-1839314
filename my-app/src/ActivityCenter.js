'use strict';
import React from 'react';
import SearchBar from './Components/SearchBar.js';
import MenuButton from './Components/MenuButton.js';
import CardItem from './Components/CardItem.js';

const activityCenter = () => {
    
    let cardListLeft = [
        {category:"housekeeping", cardName:"Check Mailbox", imageSrc:"/icons/mailbox.png", imageAlt:"mailbox"},
        {category:"housekeeping", cardName:"Check Mail Box", imageSrc:"../public/icons/mailbox.png", imageAlt:"mailbox"},
        {category:"housekeeping", cardName:"Check Mail Box", imageSrc:"../public/icons/mailbox.png", imageAlt:"mailbox"}
    ];

    let cardListRight = [
        {category:"housekeeping", cardName:"House Cleaning", imageSrc:"../public/icons/vaccum.png", imageAlt:"vaccum"},
        {category:"housekeeping", cardName:"House Moving", imageSrc:"../public/icons/truck.png", imageAlt:"truck"},
        {category:"housekeeping", cardName:"Yardwork", imageSrc:"../public/icons/lawnmover.png", imageAlt:"lawnmover"}
    ];

    return (
        <div class="col-auto col-md-auto col-xl d-flex" id="pg2">
            <section class="flex2-item-1">
                <h2>Activity Center</h2>
                <p>Click the activity cards to add them to "My Activities".</p>
                <SearchBar />
                <MenuButton />
                <div class="activityList">
                    <div class="list-container">
                        <div class="row" id="allRows">
                            <div class="col-auto d-flex">
                                <section>
                                    <CardItem category="housekeeping" cardName="Check Mailbox" imageSrc="/icons/mailbox.png" imageAlt="mailbox"/>
                                </section>
                            </div>
                            <div class="col-auto d-flex">
                                <section>
                                    <CardItem cardListRight />
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default activityCenter;
