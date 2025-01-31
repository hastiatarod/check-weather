import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios';
import icons8Search from "./image/icons8Search.svg";

export default function SearchEngine({ setWeather, city, setCity, setLocalTime, setForecast }) {
  const [inputCity, setInputCity] = useState("");
  const [timezone, setTimezone] = useState();

  const fetchForecast = useCallback((cityName) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=2b6fdad0cbd018949c50c70f72250726&units=metric`;

    axios
      .get(url)
      .then((response) => {
        const dailyForecast = processForecast(response.data.list);
        setForecast(dailyForecast);
      })
      .catch((error) => {
        console.error("Error fetching forecast:", error.message);
      });
  }, [setForecast]);

  const processForecast = (data) => {
    let dailyData = {};
    data.forEach((item) => {
      let date = item.dt_txt.split(" ")[0]; // Extract only the date (YYYY-MM-DD)
      if (!dailyData[date]) {
        dailyData[date] = {
          minTemp: item.main.temp_min,
          maxTemp: item.main.temp_max,
          icon: item.weather[0].icon,
        };
      } else {
        dailyData[date].minTemp = Math.min(dailyData[date].minTemp, item.main.temp_min);
        dailyData[date].maxTemp = Math.max(dailyData[date].maxTemp, item.main.temp_max);
      }
    });
    return Object.keys(dailyData)
      .slice(0, 5)
      .map((date) => ({
        date,
        ...dailyData[date],
      }));
  };



  const fetchWeather = useCallback((cityName) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2b6fdad0cbd018949c50c70f72250726&units=metric`;
    axios
      .get(url)
      .then((response) => {
        setWeather({
          temperature: response.data.main.temp,
          icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
          description: response.data.weather[0].description, // Add description for the weather icon
          timezone: response.data.timezone,
          feelsLike: response.data.main.feels_like,
          humidity: response.data.main.humidity,
          wind: response.data.wind.speed,
        });
        setTimezone(response.data.timezone); // Update the timezone state
        fetchForecast(cityName);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error.message);
      });
  },
    [setWeather, fetchForecast]
  );



  useEffect(() => {
    fetchWeather(city);
  }, [city, fetchWeather]);

  useEffect(() => {
    if (timezone !== undefined) {
      // Update the local time every second
      const interval = setInterval(() => {
        const utcTime = Date.now();
        const localTimeInMilliseconds = utcTime + timezone;
        const localDate = new Date(localTimeInMilliseconds); // Convert to Date object

        // Format the date and time
        const options = {
          weekday: "long",
          hour: "2-digit",
          minute: "2-digit",
        };
        const formattedTime = localDate.toLocaleString("en-US", options);
        setLocalTime(formattedTime); // Update the state
      }, 1000);

      // Cleanup interval on component unmount
      return () => clearInterval(interval);
    }
  }, [timezone, setLocalTime]);

  const capitalizeCity = (name) =>
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();


  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputCity.trim()) {
      const normalizedCity = capitalizeCity(inputCity);
      setCity(normalizedCity);
      fetchWeather(normalizedCity);
      setInputCity("");
    } else {
      console.error("City name cannot be empty.");
    }



  }
  const handleInputChange = (event) => {
    setInputCity(event.target.value);

  }



  return (
    <div>
      <form className="searchContainer" onSubmit={handleSubmit}>
        <input type="text"
          placeholder="Enter a city.."
          value={inputCity}
          onChange={handleInputChange}></input>
        <button type="submit"> <img src={icons8Search} alt="icons8Search" /> </button>
      </form>


    </div>

  );
}