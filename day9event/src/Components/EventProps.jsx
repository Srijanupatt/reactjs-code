import React from 'react'
import WelcomeUser from './WelcomeUser'
// this is my parents  component
function EventProps() {
const handleWelcomeUser=(user)=>{
  console.log(`welcome ${user} my bhai`)
}
const hadleHover=()=>{
  alert("hi vinod")
}

  return (
    <div>
     <WelcomeUser onClick={()=>handleWelcomeUser("vinod bhai")}
      onMouseEnter={hadleHover}/>

    </div>
  )
}

export default EventProps