import React from 'react'
import "./Nav.css"
export default function Nav(props) {
  return (
    <div className="Navbar">
        <p id='title'>{props.title}</p>
    </div>
  )
}

