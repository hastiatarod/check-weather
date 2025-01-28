import React from "react";
export default function CurrentDay({weather}){
    return(
        <div className="weather-details">
            <div className="child">
             <div> feels like</div> <div>💧</div>

            </div>
                
            <div className="child">
              <div> Humidity: 70%</div> <div>💧</div>
            </div> 

            <div className="child">
                 <div>Wind: 2.24km/h </div><div>🌪</div>
            </div>
              
        </div>
    );}