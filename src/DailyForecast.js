import React from 'react';
import 'weather-icons/css/weather-icons.css';
import './DailyForecast.css';


function DailyForecast({ weatherData }) {
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
    const dayNum = 7;
    const dailyData = weatherData.days.slice(1, dayNum);
    console.log(dailyData);

    return (
        <div className="daily-container">
            <div className="daily-header">
                <h2>Upcoming</h2>
            </div>
            <div className="daily-scroll">
                <ul className="daily-list">
                    {dailyData.map((day, index) => (
                        <li key={index} className="daily-item">
                            <div className="date">{new Date(day.datetime + 'T00:00:00').toLocaleDateString("en-US", { weekday: 'short' })}</div>
                            <div className="info">
                                <i className={iconMapping[day.icon] || 'wi wi-na'} style={{ fontSize: '2em' }}></i>
                            </div>
                            <div className="minMax">
                                <div>H:{Math.round(day.tempmax)}°F</div>
                                <div>L:{Math.round(day.tempmin)}°F</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

}

export default DailyForecast;