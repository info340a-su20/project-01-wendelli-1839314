import React, {Component} from 'react';
import ActivityCenter from './ActivityCenter.js';
import MyActivities from './MyActivities.js';

class ActivitiesSection extends Component {
    render() {
        return (
            <div className="flex-container">
                <div className="row">
                    <ActivityCenter />
                    <MyActivities />
                </div>
            </div>
        );
    }
}

export default ActivitiesSection;
