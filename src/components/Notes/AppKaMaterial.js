import React from "react";
import NoteList from "./components/Notes/NoteList";
import "../src/components/Notes/Note.css"
import SearchBar from "./components/Notes/SearchBar";
function App() {
  const[searchtext, setSearchText]=React.useState('')
  const[darkMode, setdarkMode]=React.useState('true')
console.log(darkMode)
  return (
    
      <div className={`${darkMode && "dark--mode"}`}>
        <div className="App">
            <SearchBar HandleSearch={setSearchText} HandleToggle={setdarkMode}/>
            <NoteList Searchtext={searchtext}/>
      </div>
      </div>

   
  )
}

export default App;
