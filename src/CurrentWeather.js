import React, { useEffect } from 'react';
import './CurrentWeather.css';
import 'weather-icons/css/weather-icons.css';


function CurrentWeather({ weatherData }) {
    const iconMapping = {
        "snow": "wi wi-snow",
        "rain": "wi wi-rain",
        "fog": "wi wi-fog",
        "wind": "wi wi-strong-wind",
        "cloudy": "wi wi-cloudy",
        "partly-cloudy-day": "wi wi-day-cloudy",
        "partly-cloudy-night": "wi wi-night-cloudy",
        "clear-day": "wi wi-day-sunny",
        "clear-night": "wi wi-night-clear",
    };

    const icon = iconMapping[weatherData.currentConditions.icon] || "wi wi-cloud"; // Default to 'faCloud' if icon is not found

    return (

        <div className="weather-container">
            <h2>{weatherData.resolvedAddress}</h2>
            <div className="weather-icon">
                <i className={icon} style={{ fontSize: '100px', color: 'white' }}></i>
            </div>
            <div className='temp'>{Math.round(weatherData.currentConditions.temp)}°F</div>
            <h1>{weatherData.currentConditions.conditions}</h1>
        </div>
    );
}


export default CurrentWeather;