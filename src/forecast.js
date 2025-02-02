import React from "react";
export default function Forecast({ forecast }) {
    return (
        <div className="forecastBox">

            {forecast.length > 0 ? (
                forecast.map((day, index) => (
                    <div key={index} className="forecast-day">
                        <div className="day">{new Date(day.date).toLocaleDateString("en-US", { weekday: "long" })}</div>
                        <img src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`} alt="weather icon" />
                        <div className="min-max">
                            <div>
                                <strong className="min-max-digit">{Math.round(day.maxTemp)}<div className="metric">°C</div></strong>
                            </div>
                            <div className="min-max-digit">{Math.round(day.minTemp)}<div className="metric">°C</div></div>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading forecast...</p>
            )}

        </div>

    );
}
