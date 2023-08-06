import React from 'react'
import "./Location.css"
export default function (props) {
  return (
    <div id='location'>
        <div>
            <h3>Image, lagaenge</h3>
        </div>
        <div>
          <div className='cont'>
            <p className='con'>{props.Desh}</p>
            <a className='anch' href={props.a}>This is the link</a>
          </div>
            <h1 className='Plc'>{props.Jagah}</h1>
            <p className='dt'>{props.Tareek}</p>
            <p className='ds'>{props.Kbaarem}</p>
        </div>
    </div>
  )
}
