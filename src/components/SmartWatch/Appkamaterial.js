import React from "react";
import Content from "./components/SmartWatch/Content";
function App() {
  const ProductData = {
    title: 'FitBit 19 - The Smartest Watch',
    description: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
    colorOptions: [
        {
            styleName: 'Black Strap',
            imageUrl: 'https://imgur.com/iOeUBV7.png'
        },
        {
            styleName: 'Red Strap',
            imageUrl: 'https://imgur.com/PTgQlim.png'
        },
        {
            styleName: 'Blue Strap',
            imageUrl: 'https://imgur.com/Mplj1YR.png'
        },
        {
            styleName: 'Purple Strap',
            imageUrl: 'https://imgur.com/xSIK4M8.png'
        },
    ],
    featureList: [
        "Time", "Heart Rate"
    ]
}
const[state,SetState]=React.useState({
    CurrImage:"https://imgur.com/iOeUBV7.png",
})
const HandleChange=(pos)=>{
    const NewImg = ProductData.colorOptions[pos].imageUrl
    SetState({CurrImage: NewImg});
}
  return (
    <>
    <Content Photo={state.CurrImage} title={ProductData.title} description={ProductData.description} Images={ProductData.colorOptions} FeatureList={ProductData.featureList} ForChange={HandleChange}/>
    </>
  )
}

export default App;
