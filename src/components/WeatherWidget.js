import React from 'react';

function weatherWidget() {
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Gent&appid=219ad008cb5780d2bae9b88a26e6e42f')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson)
        
    });

    return (
        <div className="weather-widget">
            <div className="weather-widget-header">
                <div className="City"></div>
                <p className="current-date">10:25</p>
            </div>
            <div className="weather-widget-main-content">
                <img src="" alt="" />
                <p className="weather-type">Strong Rain</p>
            </div>
            <div className="weather-widget-footer">
                <div className="weather-widget-footer-extra-info">
                    <div className="widget-data-col">
                        <img src="" alt="" />
                        <p className="widget-data-col-text">11km/h</p>
                    </div>
                    <div className="widget-data-col">
                        <img src="" alt="" />
                        <p className="widget-data-col-text">95%</p>
                    </div>
                    <div className="widget-data-col">
                        <img src="" alt="" />
                        <p className="widget-data-col-text">1.5h</p>
                    </div>
                </div>
                <h1 className="temperature">8°</h1>
            </div>
        </div>
    )
}

export default weatherWidget;