import React from 'react';
import drop from '../../images/drop.png';

function WidgetRain(props) {
    
    return (
        <div className="widget-data-col">
            <img src={drop} alt="" className="little-weather-icon"/>
            <p className="widget-data-col-text">95%</p>
        </div>
    )
}

export default WidgetRain;