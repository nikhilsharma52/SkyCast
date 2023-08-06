import React, { useEffect } from "react";
import First from '../src/components/Api_calling/First'
const URL = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}`;
function App() {
  const[temp, settemp]=React.useState(0);
  useEffect(()=>{
    const fetchData = async()=>{
      const Result = await fetch(URL)
      Result.json().then(json=>{
        settemp(json.temp)
      })
    }
    fetchData();
  },[])
  return (
      <div >
      <First temp={temp}/>
      </div>
  )
}

export default App;
