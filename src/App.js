
import './App.css';
import React, { useState } from "react";
import SearchEngine from "./searchEngine";
import CityInfo from "./cityInfo";
import CurrentDay from "./currentDay";
import Forecast from "./forecast";



function App() {
  let [city, setCity] = useState("Tehran");
  let [weather, setWeather] = useState({});
  const [localTime, setLocalTime] = useState("");
  const [forecast, setForecast] = useState([]);
  return (
    <div className="App">
      <div className='appContainer'>
        <div className='box-1'>
          <SearchEngine setWeather={setWeather} weather={weather} city={city} setCity={setCity} setLocalTime={setLocalTime} setForecast={setForecast} ></SearchEngine>
          <CityInfo city={city} weather={weather} localTime={localTime}></CityInfo>
        </div>
        <div className='box-2'>
          <CurrentDay weather={weather}></CurrentDay>
        </div>
        <div className='box-3'>
          <Forecast forecast={forecast}></Forecast>
        </div>
      </div>
    </div>


  );
}

export default App;
