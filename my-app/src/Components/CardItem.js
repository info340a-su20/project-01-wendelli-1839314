'use strict';
import React from 'react';

const CardItem = (props) => {
    return (
        <div className={`flex-activity-item ${props.category}`} role="button" onclick={`addCard('${props.cardName}')`}>
            <div tabindex="0" class="row">
                <div class="col-1 icon">
                    <img src={props.imageSrc} alt={props.imageAlt} className="activityIcon"></img>
                </div>
                <div className="col">
                    <h3>{props.cardName}</h3>
                </div>
            </div>
        </div>
    )
}

export default CardItem;