import React from "react";

export default function CityInfo({city, weather}){
    return(
        <div className="city-info-container">
            <div className="info">
            
                    <h2>{city ? city : "Enter a city"}</h2>
                    <div> Tuesday 19:22 </div>
            </div>
            <div className="degree">
                <div><img src={weather.icon} alt={weather.description} /></div>
                <div>{weather.temperature !== undefined ? `${Math.round(weather.temperature)}℃` : "Loading..."}</div>
            </div>
            
            
        </div>

    );
}