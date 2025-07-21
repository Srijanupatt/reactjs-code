import React from 'react'

function Event() {
//  function handleButtonCLick(){
//   alert("hi")
//  }

// const handleButtonCLick=(event)=>{
//   console.log(event)

//   alert("hi bro")
// }
const handleWelcomeUser=(user)=>{
  console.log(`hey user ${user}welcome`)
}
  return (
    <div>
      {/*<button onClick={handleButtonCLick}>click me</button>*/}
      
      {/*function   Comoponents with inline Arrow function*/}
      {/*<button onClick={()=>alert("hey i am srijanu")}>
        click
      </button> /}

      {/*  */}
   {/* passing argument to event handler */}
   <button onClick={()=>handleWelcomeUser("vinod")}> </button>

  

    </div>
  )
}

export default Event