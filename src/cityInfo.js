import React from "react";

export default function CityInfo({city, weather}){
    return(
        <div className="city-info-container">
            <div className="info">
            
                    <h2>{city}</h2>
                    <div>{weather.description} </div>
                    <div> Tuesday 19:22 </div>
            </div>
            <div className="degree">
                <div>{weather.icon ? (
            <img src={weather.icon} alt={weather.description || "Weather icon"} />
          ) : (
            "Loading icon..."
          )}</div>
                <div>{weather.temperature !== undefined ? `${Math.round(weather.temperature)}℃` : "Loading..."}</div>
            </div>
            
            
        </div>

    );
}