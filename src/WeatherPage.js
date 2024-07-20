import React from 'react';
import './WeatherPage.css';

function WeatherPage({ weatherData }) {
    if (!weatherData) {
        return <div></div>;
    }


    return (
        <div className="weather-container">
            <h2>{weatherData.resolvedAddress}</h2>
            <p>Temperature: {weatherData.currentConditions.temp}°F</p>
            <p>Condition: {weatherData.currentConditions.conditions}</p>
        </div>
    );
}


export default WeatherPage;