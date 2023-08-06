import React from 'react'
import './Note.css'
export default function AddNote({handleAddNote}) {
 
    const[textarea, settextarea]=React.useState('') 

    const characterlen=200;

    const handleChange=(event)=>{
        if((characterlen-event.target.value.length)>=0){
            settextarea(event.target.value)
        }
    }
    function handleSave(){
        if(textarea.trim().length>0){
            handleAddNote(textarea)
            settextarea('')
        }
    }
  return (
    <div className='new--note'>
        <textarea rows='8' cols='10' placeholder='type here to save the note' onChange={handleChange}>
        </textarea>
        <div className='footer--new--note'>
            <small> {characterlen-textarea.length} remaining</small>
            <button className='save' onClick={handleSave}>save</button>
        </div>
    </div>
  )
}
