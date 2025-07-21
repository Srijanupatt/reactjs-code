import React from 'react'

import Movie1 from "./Components/Movie";
function App() {
  return (
    <div>

      {/* <div>
        <img src={seriesData[0].img} 
        width="40%"
        height="20%"/>
      </div> */}
      {/* This line renders a paragraph (<p>) containing the description property of the first object in the seriesData array.
    */}
       {/* <h2>name:{seriesData[0].name}</h2>
      <h3>rating:{seriesData[0].rating}</h3>
    <p>{seriesData[0].description}</p>
    <p>{seriesData[0].genre}</p>
    <p>{seriesData[0].cast}</p>
   <button onClick={() => window.open(seriesData[0].watch_url, '_blank')}>Watch Now</button>
    <button>watch now</button> */}
     <Movie1/>

    </div>
  )
}

export default App;