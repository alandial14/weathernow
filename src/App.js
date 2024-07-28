//import React from 'react';
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import './App.css';
import WeatherLayout from './WeatherLayout';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const getWeather = async (city) => {
    const key = process.env.REACT_APP_WEATHER_KEY;
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${key}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data) {
      localStorage.setItem('weatherData', JSON.stringify(data));
      navigate('/weather');
      window.location.reload();
    } else {
      alert('City not found!');
    }
  };
  const weatherData = JSON.parse(localStorage.getItem('weatherData'));
  console.log(weatherData);

  useEffect(() => {
    document.body.style.removeProperty('background-image');
    if (weatherData) {
      const body = document.body;
      const backgroundClass = weatherData.currentConditions.icon || 'default';
      body.className = backgroundClass; // Set the body class to the background class
    }
  }, [weatherData]);


  return (
    <div className="App">
      {location.pathname !== '/' && <Header getWeather={getWeather} />}
      <Routes>
        <Route path="/" element={<Home getWeather={getWeather} />} />
        <Route path="/weather" element={<WeatherLayout weatherData={weatherData} />} />
        {/* <Route path="/weather" element={<CurrentWeather weatherData={weatherData} />} /> */}
      </Routes>
    </div>
  );
}

export default App;