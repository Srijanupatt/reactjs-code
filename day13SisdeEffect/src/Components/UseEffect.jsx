// import React, { useEffect } from 'react'
// import { useState} from 'react'
import './UseEffect.css'
// function UseEffect() {
//   const[count,setCount]=useState(0);
// // wrong
//   // setInterval(()=>{
//   //   setCount(count+1)
//   // },1000) 

//   // setInterval(()=>{
//   //   setCount(count+1)
//   // },1000) wrong 

// //   useEffect(()=>{
// //  setInterval(()=>{
// //   setCount((prev)=>prev+1)
// //   },1000)
// //     },[]
// //   ) increment by 2 

// //  right way
//  useEffect(
//   ()=>{
//  const timer=setInterval(()=>{

//   setCount((prev)=>prev+1)
//   },1000)

// return ()=>cleanInterval(timer)

//     },[]
//   )
  

//   return (
//     <div>
//     <p>{count}</p>

//     </div>
//   )
// }
// export default 
import React, { useState, useEffect } from 'react';

function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Set up the interval once on mount
    const timer = setInterval(() => {
    
      setCount(prev => prev + 1);
    }, 1000);

   
    return () => {
      console.log("Clearing interval!");
      clearInterval(timer);
    };
  }, []); 

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default UseEffect;