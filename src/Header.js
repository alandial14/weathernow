import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';  // Ensure to include your CSS for styling

function Header({ getWeather }) {
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
        <div className="header">
            <h1>Weather<font color="#00796b">Now</font></h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Location"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                />
                <button type="submit">
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </div>
    );
}

export default Header;