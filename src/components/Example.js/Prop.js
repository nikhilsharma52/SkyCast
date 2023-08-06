import React from 'react'

export default function Prop(props) {
  return (
    <div>
        <h1>{props.Name}</h1>
        <h2>{props.Gender}</h2>
        <h3>{props.Add}</h3>
        <span>{props.Age}</span>
    </div>
  )
}
