import React from 'react';
import "./Content.css";
export default function Content(props) {
    const NewImage=(pos)=>{
        props.ForChange(pos);
    }
    const ColorOptions=props.Images.map((item,pos)=>{
        // const classArr = [ProductImage]
        return(
            <img key={pos} className="ABC" src={item.imageUrl} alt=
            {item.styleName} onClick={NewImage(pos)}/>
        );
    })
  return (
    <div>
        <div className='for--grid'>
            <div className='for--Images' id="MainImg">
                <img src={props.Photo} alt="Imag"></img>
            </div>
            <div className='for--MainContent'>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <h3>Select Color</h3>
                <div className='for--Color'>
                {ColorOptions}                      
                </div>
                <h3>Features</h3>
                <div className='Buttons'>
                <button className='Time'>Time</button>
                <button className='HeartRate'>Heart Rate</button>
                </div>
                <button className='BuyNow'>Buy Now</button>
            </div>
        </div>
    </div>
  )
}
