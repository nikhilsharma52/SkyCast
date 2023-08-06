import React,{useEffect,useState} from 'react'
import { RecoilRoot } from 'recoil'
import WeatherCard from '../src/components/WeatherApp/WeatherCard'
import '../src/components/WeatherApp/Main.css'
import MainCard from './components/WeatherApp/MainCard'
import MainImage from '../src/thunderstorm-3625405__480.jpg'
import MapsProject from './components/WeatherApp/MapsProject'
import Temp from './components/WeatherApp/TempHour'
import Search from './Search-icon.png'

export default function Home() {
  const [weatherData,setweatherData]=useState(null)
  const [city,setcity]=useState("Kharar")
  const [coords,setcoords]=useState()
  const [forImage,SetImage]=React.useState('')
  let ele

  useEffect(()=>{
    async function fetchData(){
      await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=131447ea2faede865b94951f1fc0e7a8`)
        .then(response=>response.json())
        .then(response=>setcoords(response[0]))
        .catch(err => console.error(err));
    }
    fetchData()
  },[city])
  
  useEffect(() => {
    async function fetchWeatherData() {
      if (coords) {
        await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=ddc9c9c68551495c367368b0843a7252&units=metric`)
          .then(response => response.json())
          .then(response=>setweatherData(response))
          .catch(err => console.error(err));
      }
    }
    fetchWeatherData();
  }, [coords]);

 function OnChange(data1){
  getData(data1)
 }

  if(weatherData){
    ele=weatherData.daily.map((item)=>{
      return (
        <WeatherCard 
        Change={OnChange}
        temp={item.temp.day}
        MinTemp={item.temp.min}
        MaxTemp={item.temp.max}
        Icon={item.weather[0].icon}
        Description={item.weather[0].description}
        Pressure={item.pressure}
        Humidity={item.humidity}
        WindSpeed={item.wind_speed}
        DayandDate={item.dt}
        Sunrise={item.sunrise}
        Sunset={item.sunset}
        />
      )
    })

  }
  var getData=(data)=>{
    SetImage(data)
  }
  return (
    
    <div className='main_div' style={{
      backgroundImage:forImage?`url(${forImage})`: `url(${MainImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '1000px',
    }}>
      <div className="search-container">
        <label className="Label-Icon" htmlFor="search-input">
          <img className='Search-icons' src={Search} alt="Search Icon" />
        </label>
        <input className="search-input" type="text" placeholder="Location Search...." value={city} onChange={(e) => setcity(e.target.value)} />
      </div>

    <RecoilRoot>
      <div className='Main-div'>
      <MainCard />
      <div className='for_ele'>
        {ele}
      </div>
      <div className='for-map'>
      <MapsProject latandlong={coords?coords:27.1767}/>
      </div>
      <div className='Chart'>
      <Temp className="for-HourData" data={weatherData?weatherData:1}/>
      </div>
      </div>
    </RecoilRoot>
    </div>
  )
}