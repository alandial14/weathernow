import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faSun, faCloud, faCloudRain, faSnowflake, faWind, faSmog, faCloudSun, faCloudMoon, faMoon } from '@fortawesome/free-solid-svg-icons';
import 'weather-icons/css/weather-icons.css';
import './Forecast.css'


function Forecast({ weatherData }) {
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
    const currHour = parseInt(weatherData.currentConditions.datetime.split(':')[0]);
    console.log(currHour);
    const hourNum = 24;
    const nextHours = [];
    for (let i = currHour; i < 24 && nextHours.length < hourNum; i++) {
        nextHours.push(weatherData.days[0].hours[i]);
    }
    let i = 0;
    while (nextHours.length < hourNum) {
        nextHours.push(weatherData.days[1].hours[i]);
        i += 1;
    }
    console.log(nextHours);
    return (
        <div className="forecast-container">
            <div className="forecast-header">
                <h2>Hourly Forecast</h2>
            </div>
            <div className="forecast-scroll">
                <ul className="forecast-list">
                    {nextHours.map((hour, index) => (
                        <li key={index} className="forecast-item">
                            <div>{new Date(weatherData.days[0].datetime + 'T' + hour.datetime).toLocaleTimeString([], { hour: 'numeric' })}</div>
                            <i className={iconMapping[hour.icon] || 'wi wi-na'} style={{ fontSize: '2em' }}></i>
                            <div>{Math.round(hour.temp)}°F</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

}

export default Forecast;