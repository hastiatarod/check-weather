
import './App.css';
import SearchEngine from "./searchEngine";
import CityInfo from "./cityInfo";
import Forecast from "./forecast";


function App() {
  return (
    <div className="App">
      <div className='appContainer'>
      <SearchEngine></SearchEngine>
      <CityInfo></CityInfo>
      <div style={{display: `flex`, justifyContent:`space-evenly`}}>
        <Forecast></Forecast>
        <Forecast></Forecast>
        <Forecast></Forecast>
        <Forecast></Forecast>
      </div>
      
      </div>
      
    </div>
  );
}

export default App;
