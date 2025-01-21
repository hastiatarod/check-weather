import React from "react";
export default function CityInfo(){
    return(
        <div className="city-info-container">
            <div className="info">
                <h2>Tehran</h2>
                <div>
                    Tuesday 19:22, clear sky
                    <br></br>
                    Humidity: 70%, Wind: 2.24km/h
                </div>
            </div>
            <div className="degree">
                <div>🥶</div>
                <div>6℃</div>
            </div>
        </div>

    );
}