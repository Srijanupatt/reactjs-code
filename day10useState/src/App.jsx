import React from 'react'
// use useState when you  want to remember and update values over time in your compo nent.
import{useState} from 'react';
function App() {
  // let value=0;

  // const  handleButtonClick=()=>{
  //   value++;
  //   console.log(value);
  // }


const[count,setCount]=useState(0);

const handleButtonClick=()=>{
  setCount(()=>count+10)
}
 return (
    <div>
      <h1>{count}</h1>
      {/* <button onClick={handleButtonClick}>click me</button> */}
      
      {/* types 2*/} 

       <button onClick={handleButtonClick}>click me </button>
    </div>
  )
}

export default App