import React from 'react';
import wind from '../../images/wind.png';

function WidgetWindSpeed(props) {
    
    return (
        <div className="widget-data-col">
            <img src={wind} alt="" className="little-weather-icon"/>
            <p className="widget-data-col-text">{windSpeedCalculator(props.wind)}</p>
        </div>
    )

    function windSpeedCalculator(speed) {
        let newSpeed = (speed*3.6).toString();
        let speedParts = newSpeed.split('.');
        return speedParts[0] + " km/h";
    }
}

export default WidgetWindSpeed;