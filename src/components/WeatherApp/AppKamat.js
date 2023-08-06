import React,{useEffect,useState} from 'react'
import { RecoilRoot } from 'recoil'
import WeatherCard from '../src/components/WeatherApp/WeatherCard'
import '../src/components/WeatherApp/Main.css'
import MainCard from './components/WeatherApp/MainCard'
export default function Home() {
  const [weatherData,setweatherData]=useState(null)
  const [city,setcity]=useState("Delhi")
  const [coords,setcoords]=useState(null)
  let ele=[]

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

  if(weatherData){
    ele=weatherData.daily.map((item)=>{
      return (
        <WeatherCard 
        temp={item.temp.day}
        MinTemp={item.temp.min}
        MaxTemp={item.temp.max}
        Icon={item.weather[0].icon}
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
  else{
    console.log("data not found")
  }

  return (
    <RecoilRoot>
    <div className='main_div'>
      <input 
      className='input_field'
      type="text"
      value={city}
      onChange={
        (e)=>setcity(e.target.value)
      }
      />
      <MainCard />
      <div className='for_ele'>
        {ele}
      </div>
    </div>
    </RecoilRoot>
  )
}
