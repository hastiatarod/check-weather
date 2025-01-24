
import './App.css';
import React, { useState } from "react";
import SearchEngine from "./searchEngine";
import CityInfo from "./cityInfo";
import CurrentDay from "./currentDay";
import Forecast from "./forecast";



function App() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});
  return (
    <div className="App">
      <div className='appContainer'>
        <div className='box-1'>
          <SearchEngine city={city} setCity={setCity} weather={weather} setWeather={setWeather} ></SearchEngine>
          <CityInfo city={city} weather={weather} ></CityInfo>
        </div>
        <div className='box-2'>
        <CurrentDay></CurrentDay>
        </div>
        <div className='box-3'>
      <Forecast></Forecast>
      </div>
      </div>
    </div>
      
    
  );
}

export default App;
