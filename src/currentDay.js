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
                    <div>{Math.round(weather.feelsLike)}℃</div>
                </div>


            </div>

            <div className="child">
                <img src={humidity} alt="humidity" />
                <div>
                    <div className="apparent"> Humidity </div>
                    <div>{weather.humidity}%</div>
                </div>

            </div>

            <div className="child">
                <img src={wind} alt="wind" />
                <div>
                    <div className="apparent">Wind </div>
                    <div>{weather.wind} </div>
                </div>

            </div>

        </div>
    );
}