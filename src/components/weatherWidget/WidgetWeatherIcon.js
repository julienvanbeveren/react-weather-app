import React from 'react';
import sun from '../../images/sun.png';
import rain from '../../images/rain.png';
import cloud from '../../images/cloud.png';

function WidgetWeatherIcon(props) {
    
    let weatherIcon = "sun"
    if (props.title === "Clear") {
        weatherIcon = sun;
    }
    else if (props.title === "Rain") {
        weatherIcon = rain;
    }
    else if (props.title === "Clouds" || "Mist") {
        weatherIcon = cloud;
    }

    return (
        <img src={weatherIcon} alt="" className="weather-image-icon"/>
    )
}

export default WidgetWeatherIcon;