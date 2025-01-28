import React from "react";
export default function CurrentDay({weather}){
    return(
        <div className="weather-details">
            <ul>
                
                <li>
                   <div> feels like</div> <div>💧</div>
                </li>
                <li>
                   <div> Humidity: 70%</div> <div>💧</div>
                </li>
                <li>
                    <div>Wind: 2.24km/h </div><div>🌪</div>
                </li>
            </ul>
        </div>
    );}