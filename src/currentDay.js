import React from "react";
export default function CurrentDay({weather}){
    return(
        <div className="weather-details">
            <div className="child">
             <div>🌡</div>
             <div> feels like </div>
             <div>{Math.round(weather.feelsLike)}℃</div>

            </div>
                
            <div className="child">
                <div>💧</div>
              <div> Humidity </div> 
              <div>{weather.humidity}%</div>
            </div> 

            <div className="child">
                <div>🌪</div>
                 <div>Wind </div>
                 <div>{weather.wind} </div>
            </div>
              
        </div>
    );}