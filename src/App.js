
import './App.css';
import SearchEngine from "./searchEngine";
import CityInfo from "./cityInfo";
import CurrentDay from "./currentDay";
import Forecast from "./forecast";



function App() {
  return (
    <div className="App">
      <div className='appContainer'>
        <div className='box-1'>
          <SearchEngine></SearchEngine>
          <CityInfo></CityInfo>
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
