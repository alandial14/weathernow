import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './Home';
import WeatherPage from './WeatherPage';
import Header from './Header';
import './App.css';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const getWeather = async (city) => {
    const key = process.env.Weather_Key;
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${key}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data && data.address) {
      localStorage.setItem('weatherData', JSON.stringify(data));
      navigate('/weather');
      window.location.reload();
    } else {
      alert('City not found!');
    }
  };
  const weatherData = JSON.parse(localStorage.getItem('weatherData'));



  return (
    <div className="App">
      {location.pathname !== '/' && <Header getWeather={getWeather} />}
      <Routes>
        <Route path="/" element={<Home getWeather={getWeather} />} />
        <Route path="/weather" element={<WeatherPage weatherData={weatherData} />} />
      </Routes>
    </div>
  );
}

export default App;