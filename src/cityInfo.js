import React from "react";

export default function CityInfo({ city, weather, localTime }) {
    return (
        <div className="city-info-container">
            <div className="info">

                <h2>{city}</h2>
                <div className="local-time"> {localTime || "Loading..."}</div>
                <div className="main">
                    <div className="weather-description">{weather.description} </div>
                    <div className="degree">
                        <div className="icon" >{weather.icon ? (
                            <img src={weather.icon} alt={weather.description || "Weather icon"} />
                        ) : (
                            "Loading icon..."
                        )}</div>

                        <div className="digit">
                            {weather.temperature !== undefined ? (
                                <>
                                    <span className="temp">
                                        {Math.round(weather.temperature)}
                                    </span>
                                    <span className="unit">℃</span>
                                </>
                            ) : ("Loading..."
                            )}

                        </div>

                    </div>
                </div>
            </div>



        </div>

    );
}