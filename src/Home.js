import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';  // Ensure to include your CSS for styling

function Home({ getWeather }) {
    const [city, setCity] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            getWeather(city);
            setCity('');
            navigate('/weather');
        }
    };

    return (
        <div className="container">
            <h1>Weather<font color="#8FBC8F">Now</font></h1>
            {/* #00796b */}
            <form id="weather-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="city-input"
                    placeholder="Enter Location"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                />
                <button type="submit" className="button1">
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </div>
    );
}

export default Home;