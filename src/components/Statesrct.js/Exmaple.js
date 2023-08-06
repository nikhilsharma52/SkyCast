import React, { useState } from 'react'

export default function Exmaple(props) {

    const HandleUpclick = ()=>{
        console.log("Clicked");
        let text = data.toUpperCase();
        setData(text);
    }
    const handleOnchange = (event)=>{
        console.log("Onchange");
        setData(event.target.value);
    }
    const [data, setData] = useState('Hello this is state');
  return (
    <div>
        <textarea id='inp' value={data} onChange={handleOnchange}>
        </textarea>
        <button id="btn" onClick={HandleUpclick}>
            UpperCase
        </button>
    </div>
  )
}
