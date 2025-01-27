import React , { useState,useEffect, useCallback} from "react";
import axios from 'axios';

export default function SearchEngine({setWeather, city, setCity, setLocalTime}){
    const [inputCity, setInputCity] = useState("");
    const [timezone, setTimezone] = useState();
    
    
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
          });
          setTimezone(response.data.timezone); // Update the timezone state
          console.log(response);
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

   useEffect(() => {
    if (timezone !== undefined) {
      // Update the local time every second
      const interval = setInterval(() => {
        const utcTime = new Date(); 
        const localTimeInMilliseconds = utcTime + timezone * 1000; 
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
  }, [timezone,setLocalTime]);

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