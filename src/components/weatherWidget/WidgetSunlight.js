import React from 'react';
import sun from '../../images/sun-little.png';

function WidgetSunlight(props) {
    
    return (
        <div className="widget-data-col">
            <img src={sun} alt="" className="little-weather-icon"/>
            <p className="widget-data-col-text">1.5h</p>
        </div>
    )
}

export default WidgetSunlight;