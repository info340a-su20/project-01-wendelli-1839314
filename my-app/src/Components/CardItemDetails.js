import React, {Component} from 'react';

class CardItemDetails extends Component {
    render() {
        return (
            <div className="flex-my-activity-item" role="form">
                <div className="row">
                    <div>
                        <div className="close" role="button" aria-label="Close">
                            ×
                        </div>
                    </div>
                    <div className="col-1 icon">
                        <img src={this.props.imageSrc} alt={this.props.imageAlt} className="activityIcon"></img>
                    </div>
                    <div className="col">
                        <h3>{this.props.cardName}</h3>
                    </div>
                </div>
                <form>
                    <div className="card-radio-button">
                        <label>Wear Mask?</label>
                        <input type="radio" value="mask-yes" name="yes_no"/> Yes
                        <input type="radio" value="mask-no" name="yes_no"/> No
                    </div>
                </form>
                <div className="card-select-box">
                    <label>Duration?</label>
                    <select name="duration">
                        <option value="0-1h">0-1 hour</option>
                        <option value="1-2h">1-2 hours</option>
                        <option value="2-3h">2-3 hours</option>
                        <option value="3-4h">3-4 hours</option>
                        <option value="4-5h">4-5 hours</option>
                        <option value="5-6h">5-6 hours</option>
                        <option value="6h+">6+ hours</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default CardItemDetails;