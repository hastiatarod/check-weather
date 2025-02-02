import React from "react";
import feelsLike from "./image/feelsLike.svg";
import humidity from "./image/humidity.svg";
import wind from "./image/wind.svg";

export default function CurrentDay({ weather }) {
    return (
        <div className="weather-details">
            <div className="child">
                <img src={feelsLike} alt="feelsLike" />
                <div>
                    <div className="apparent"> feels like </div>
                    <div className="digit">{Math.round(weather.feelsLike)}<div className="metric">℃</div> </div>
                </div>


            </div>

            <div className="child">
                <img src={humidity} alt="humidity" />
                <div>
                    <div className="apparent"> Humidity </div>
                    <div className="digit">{weather.humidity}<div className="metric">%</div></div>
                </div>

            </div>

            <div className="child">
                <img src={wind} alt="wind" />
                <div className="wind-small">
                    <div className="apparent">Wind </div>
                    <div className="digit">{Math.round(weather.wind)}<div className="metric">km/h</div> </div>
                </div>

            </div>

        </div>
    );
}