import React from "react";

export default function CityInfo({ city, weather, localTime }) {
    return (
        <div className="city-info-container">
            <div className="info">

                <h2>{city}</h2>
                <div className="weather-description">{weather.description} </div>
                <div className="local-time"> {localTime || "Loading..."}</div>
            </div>
            <div className="degree">
                <div className="icon" >{weather.icon ? (
                    <img src={weather.icon} alt={weather.description || "Weather icon"} />
                ) : (
                    "Loading icon..."
                )}</div>
                <div className="digit">{weather.temperature !== undefined ? `${Math.round(weather.temperature)}℃` : "Loading..."}</div>
            </div>


        </div>

    );
}