import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import WidgetWindSpeed from './weatherWidget/WidgetWindSpeed';
import WidgetRain from './weatherWidget/WidgetRain';
import WidgetSunlight from './weatherWidget/WidgetSunlight';
import WidgetCity from './weatherWidget/WidgetCity';
import WidgetWeatherIcon from './weatherWidget/WidgetWeatherIcon';

function WeatherWidget(props) {
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=219ad008cb5780d2bae9b88a26e6e42f`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw response;
        })
        .then(data => {
            console.log(data);
            setData(data);
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [])

    if (loading) return "Loading...";
    if (error) return "Error!";

    return (
        <Link to={`/weather?city=${data['name']}`} style={{ textDecoration: 'none', color: 'white' }}>
            <div className="weather-widget">
                <div className="weather-widget-header">
                    <WidgetCity location={data['name']}/>
                    <p className="current-date">10:25</p>
                </div>
                <div className="weather-widget-main-content">
                    <WidgetWeatherIcon title={data['weather'][0]['main']}/>
                    <p className="weather-type">{toCamelCase(data['weather'][0]['description'])}</p>
                </div>
                <div className="weather-widget-footer">
                    <div className="weather-widget-footer-extra-info">
                        <WidgetWindSpeed wind={data['wind']['speed']}/>
                        <WidgetRain />
                        <WidgetSunlight />
                    </div>
                    <h1 className="temperature">{temperatureFormatter(data['main']['temp'])}</h1>
                </div>
            </div>
        </Link>
    )

    function temperatureFormatter(temperature) {
        let newTemperature = temperature - 272.15;
        newTemperature = newTemperature.toString();
        let temperatureParts = newTemperature.split('.');
        let finalTemperature = temperatureParts[0] + '.' + temperatureParts[1][0] + '°';
        return finalTemperature;
    }

    function toCamelCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

export default WeatherWidget;