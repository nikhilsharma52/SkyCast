import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { counterState } from './Store';
import './Main.css';

export default function MainCard(props) {
  const count = useRecoilValue(counterState);
  const [currData, setCurrData] = useState(null);
  const [long, setLong] = useState(null);
  const [lat, setLat] = useState(null);
  const [abtohoja, setAbtohoja] = useState({
    CurrTemp: 0,
    CurrHumidity: 0,
  });

  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var d = new Date(count.DayandDate * 1000);
  var s = new Date(count.DayandDate*1000).toLocaleDateString("en-US")
  var dayName = days[d.getDay()];
  let date = new Date().toLocaleDateString();
  if(s==='Invalid Date'){
    s=date
  }

  var CurrDate = Math.floor(Date.now() / 1000)
  var d2 = new Date(CurrDate*1000);
  var dayName2 = days[(d2.getDay())]


  useEffect(() => {
    function initGeolocation() {
      navigator.geolocation.getCurrentPosition(success, fail);
    }

    function success(position) {
      setLong(position.coords.longitude);
      setLat(position.coords.latitude);
    }

    function fail() {
      console.log('Failed to get location');
    }

    initGeolocation();
  }, []);

  useEffect(() => {
    async function fetchWeatherData() {
      if (lat && long) {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=ddc9c9c68551495c367368b0843a7252&units=metric`
          );
          const data = await response.json();
          setCurrData(data);
        } catch (error) {
          console.error(error);
        }
      }
    }
    fetchWeatherData();
  }, [lat, long]);

  useEffect(() => {
    if (currData && currData.current) {
      setAbtohoja({
        CurrTemp: currData.current.temp,
        CurrHumidity: currData.current.humidity,
        CurrWindSpeed: currData.current.WindSpeed
      });
    }
  }, [currData]);

  return (
    <div className="MainCardData" id="Data">
      <div className='for-shifting'>
      <h3 className="data">
        Temperature: {count.temp ? count.temp : abtohoja.CurrTemp}&deg;C
      </h3>
      <h3 className="data2">
        Humidity: {count.Humidity ? count.Humidity : abtohoja.CurrHumidity}%
      </h3>
      <h3>Day: {dayName?dayName:dayName2}</h3>
      </div>
      <div className='for-shifting2'>
        <h3>
        WindSpeed: {count.WindSpeed ? count.WindSpeed : 8.03}
        </h3>
        <h3>
          Date: {s}
        </h3>
      </div>
    </div>
  );
}
