import React , { useState,useEffect, useCallback} from "react";
import axios from 'axios';

export default function SearchEngine({setWeather , city, setCity}){
    const [inputCity, setInputCity] = useState("");
    
    const fetchWeather = useCallback((cityName) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2b6fdad0cbd018949c50c70f72250726&units=metric`;
      axios
        .get(url)
        .then((response) => {
             setWeather({
            temperature: response.data.main.temp,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            description: response.data.weather[0].description, // Add description for the weather icon
          });
          })
        .catch((error) => {
          console.error("Error fetching weather data:", error.message);
          if (error.response) {
            console.error("Status:", error.response.status);
            console.error("Data:", error.response.data);
          }
        });
    },
    [setWeather]
  );
  useEffect(() => {
    fetchWeather(city);
  }, [city, fetchWeather]);

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
   

    
    return(
        <div>
            <form className="searchContainer" onSubmit={handleSubmit}>
                <input type="text" 
                placeholder="Enter a city.." 
                value={inputCity} 
                onChange={handleInputChange}></input>
                <button type="submit"> 🔎 </button>
            </form>
        </div>
    );
}