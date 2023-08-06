import React from 'react'

export default function Example() {
    const [data, setdata]= React.useState(0);
    console.log("Render")
    React.useEffect(function(){
    console.log("Inside useEffect")
    return(()=>{
        console.log("Return from useEffect")
    })
    },[data])
  return (
    <div>
        <h1>Using useEffect for {data}</h1>
        <button onClick={()=>{setdata(data+1)}}>Press</button>
    </div>
  )
}
