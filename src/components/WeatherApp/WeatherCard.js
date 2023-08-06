import React from 'react'
import './Main.css'
import { useRecoilState } from 'recoil'
import { counterState } from './Store'
import Image4 from "../../weather_day.jpg"
import Image6 from "../../Rainy2.png"
import overcast from "../../overcastclouds.jpg"
import fewClouds from "../../fewclouds.jpg"
import scatteredClouds from "../../ScatterdClouds.jpg"
function WeatherCard(props) {

  const [ImageData, SetImageData] = React.useState('')
  const [count, setData] = useRecoilState(counterState)
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var d = new Date(props.DayandDate * 1000);
  var dayName = days[d.getDay()];

  function Main() {
    HandleChange();
    Handle()
  }

  const HandleChange = () => {
    setData({
      ...count,
      temp: props.temp,
      Pressure: props.Pressure,
      Icon: props.Icon,
      DayandDate: props.DayandDate,
      WindSpeed: props.WindSpeed,
      Humidity: props.Humidity,
    })
  }
  console.log(props.Description)
  React.useEffect(() => {
    if (props.Description === "light rain") {
      SetImageData(Image6);
    } else if (props.Description === "clear sky") {
      SetImageData(Image4)
    } else if (props.Description === "overcast clouds") {
      SetImageData(overcast)
    } else if (props.Description === "few clouds") {
      SetImageData(fewClouds)
    } else if(props.Description === "scattered clouds" ){
      SetImageData(scatteredClouds)
    }
  }, [props.Description])

  const Handle = () => (props.Change(ImageData))

  return (
    <div className='Weather' onClick={Main} >
      <span className='tempData'>{props.temp}<span>&#8451;</span> </span><br></br>
      <img src={`https://openweathermap.org/img/wn/${props.Icon}@2x.png`} alt=""></img><br></br>
      <span className='for-day'>{dayName}</span>
    </div>
  )
}

export default WeatherCard;