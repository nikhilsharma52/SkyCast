import React from 'react'
import './Note.css'
export default function SearchBar({HandleSearch, HandleToggle}) {

  function handleSearch(event){
    HandleSearch(event.target.value)
  }
  function HandleToggleMode(){
    HandleToggle((prevMode=>!prevMode))
  }
  return (
    <div className='Searchbar--el'>
        <div className='search--header'>
        <h1 className='Notes--el'>Notes</h1>
        <button className='btn' onClick={HandleToggleMode}>ToggleMode</button>
        </div>
        <div className='search--footer'>
            <input  className='search' placeholder='Search notes here' onChange={handleSearch}>
            </input>
        </div>
    </div>
  )
}
