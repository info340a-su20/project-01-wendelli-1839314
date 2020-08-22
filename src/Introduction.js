import React from 'react';

const introduction = () => {
    return (
        <div className="row">
            <div className="flex-item-1 col-auto col-md-auto col-xl d-flex">
            <img src="people.png" alt="people" id="people"></img>
            </div>
            <div className="flex-item-2 col-auto col-md-auto col-xl d-flex">
                <p className="app-description">
                    COVID-19 is detrimental to everyone’s health, but its severity is often overlooked by a large number of people in the United States. Our web application is primarily designed to let you calculate your own risk of getting COVID-19. We include a list of daily activities, such as shopping, exercising, or dining out, in "Activity Center". To start off, please click the activities you've completed in a day to add to the "My Activities" box. You will then be asked to input some details related to each of the selected activities to help us generate a more precise result. We base our formula on <a target="_blank" rel="noopener noreferrer" href="https://www.texmed.org/TexasMedicineDetail.aspx?id=53977">Texas Medical Association</a> to calculate your risk of infections.
                </p>
            </div>
        </div>
    );
}

export default introduction;