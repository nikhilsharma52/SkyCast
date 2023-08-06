import React from 'react'
import Note from './Note'
import {nanoid} from 'nanoid'
import "./Note.css"
import AddNote from './AddNote'

export default function NoteList({Searchtext}) {
  const[arr, setarr]=React.useState([
    {
    id:nanoid(),
    text:"This is my first note",
    date:"22/12/2022"
  },
    {
    id:nanoid(),
    text:"This is my second note",
    date:"23/12/2022"
  }
])

function addNote(text){
   const date = new Date();
   const newNote={
    id:nanoid(),
    date : date.toLocaleDateString(),
    text: text
   }
   const newNotes=[...arr,newNote]
   setarr(newNotes)
}

React.useEffect(()=>{
  const savedNotes = JSON.parse(
    localStorage.getItem('Notes--data')
    );
  if(savedNotes){
    setarr(savedNotes)
  }
},[]);

React.useEffect(()=>{
  localStorage.setItem('Notes--data',JSON.stringify(arr))
},[arr]);


function deleteNode(id){
    const newNotee = arr.filter((arr)=>arr.id!==id);
    setarr(newNotee);
}

  const element =  (!Searchtext)?arr.map((Arr)=>(
    <Note Id={Arr.id} Text={Arr.text} Date={Arr.date} handleDeleteNode={deleteNode}/>
  )):(arr.filter((arr)=>arr.text.toLowerCase().includes(Searchtext))).map((Arr)=>(
    <Note Id={Arr.id} Text={Arr.text} Date={Arr.date} handleDeleteNode={deleteNode}/>
  ))
return (
  <div className='Note--list'>
       {element}
       <AddNote handleAddNote={addNote} />
    </div>
  )
}
