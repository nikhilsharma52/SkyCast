import React from 'react'

export default function Nav(props) {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.Heading}</a>
        <ul className="navbar-nav">
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
        </li>
        </ul>
    </div>
    </nav>
    </div>
  )
}
