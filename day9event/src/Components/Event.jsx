import React from 'react'
// synthetic Base event in react like clicking a button or typing in an input box .react wraps native broswer event in somthing called synthetic Event .

// event when you pass a function like handleclickBitton to an event handler (like onclick) react automatically passed one object  it is called event
 function Event() {
//  const handleClickButton=(event)=>{
//   console.log(event)
// }

 const handleClickButton=(user)=>{
 console.log(`hi ${user} welcome bro`)
}


 return (
    <div>
 {/*<button onClick={handleClickButton}>clickme</button>*/}

{/*function   Comoponents with inline Arrow function*/}
{/* <button onClick={()=>alert("hi bro")}>click me bro </button> */}

{/* passing argument to event handler */}
<button onClick={handleClickButton("vinod bhai")}>click here</button>
</div>
  )
}

export default Event;