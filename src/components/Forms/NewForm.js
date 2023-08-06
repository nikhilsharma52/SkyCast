import React from 'react'

export default function NewForm() {
    const [data, setData]=React.useState(
        {
        firstName:"",
        Lastname:"",
        employment:"",
        favColor: ""
     }
    )
    function handleClick(event){
        const {name, value, type, checked} = event.target
        setData(Prevdata=>{
            return{
                ...Prevdata,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    function handleSubmit(event){
        event.preventDefault()
        console.log(data)
    }
  return (
    <form onSubmit={handleSubmit}>
        <input  
        type="text" 
        value={data.firstName} 
        onChange={handleClick} 
        name='firstName'
        placeholder='FirstName'
        />
        <input 
        type="text" 
        value={data.lastname} 
        onChange={handleClick} 
        name='LastName'
        placeholder='LastName'
        />
        <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={data.employment === "unemployed"}
                    onChange={handleClick}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={data.employment === "part-time"}
                    onChange={handleClick}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={data.employment === "full-time"}
                    onChange={handleClick}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id="favColor"
                value={data.favColor}
                onChange={handleClick}
                name="favColor"
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br/>
            <button>Submit</button>
    </form>
  )
}
