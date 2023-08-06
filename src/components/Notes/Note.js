import React from 'react'
import './Note.css';
// import { MdDelete } from "react-icons/md";
export default function Note(props) {
  
  return (
    <div className='notes--div'>
        <span>{props.Text}</span>
        <div className='Note--footer'>
          <small>{props.Date}</small>
          <img className='img' src='../../../public/Images/pngfind.com-trash-icon-png-2681876.png' alt='Delete' 
          onClick={()=>props.handleDeleteNode(props.Id)}/>
        </div>
    </div>
  )
}


