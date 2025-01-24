import React , {useState} from "react";
import axios from 'axios';

export default function SearchEngine({ city, setCity,setWeather }){

    
    let [loaded, setLoaded] = useState(false);


    function showResult(response){
        setLoaded(true);
        setWeather({
            temperature: response.data.main.temp,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        });
    }
    function handleSubmit(event){
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2b6fdad0cbd018949c50c70f72250726&units=metric`;
        event.preventDefault();
        axios.get(url).then(showResult);

    }
    function handleCity(event){
        setCity(event.target.value)

    }
    
    return(
        <div>
            <form className="searchContainer" onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter a city.." onChange={handleCity}></input>
                <button type="submit"> 🔎 </button>
            </form>
        </div>
    );
}