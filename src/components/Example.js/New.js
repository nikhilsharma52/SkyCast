import React from 'react'
import Prop from './Prop'
export default function New() {
  const[text, SetText]=React.useState([
    {
        id:1,
        Name:"Raj",
        Age:18,
        Gender:"Male",
        Add:"Rampur",
    },
    {
        id:2,
        Name:"shubham",
        Age:18,
        Gender:"Male",
        Add:"Rampur",
    },
    {
        id:3,
        Name:"Poota",
        Age:18,
        Gender:"Male",
        Add:"Rampur",       
    },
  ])
  const element = text.map((Arr)=>{ return(
    <Prop Name={Arr.Name} Age={Arr.Age} Gender={Arr.Gender} Add={Arr.Add}/>
  )
  })
  return (
    <div>
        {element}
    </div>
  )
}
