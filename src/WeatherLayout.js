import React from 'react';
import CurrentWeather from './CurrentWeather';
import DailyForecast from './DailyForecast';
import Forecast from './Forecast';
import './WeatherLayout.css';

function WeatherLayout({ weatherData }) {
    return (
        <div className="weather-layout">
            <div className="current-weather">
                <CurrentWeather weatherData={weatherData} />

            </div>
            <div className="forecast">
                <Forecast weatherData={weatherData} />
            </div>
            <div className="daily">
                <DailyForecast weatherData={weatherData} />
            </div>
        </div>
    );
}

export default WeatherLayout;