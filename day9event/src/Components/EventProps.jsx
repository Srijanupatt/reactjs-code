import React from 'react'
import WelcomeUser from './WelcomeUser'

function EventProps() {

const handleWelcomeUser=(user)=>{
 console.log(`welcome ${user} my house`)
  }

  const handleHover = () => {
    alert('hi bro');
  };
  return (
    <div>
    <WelcomeUser onClick={()=>handleWelcomeUser("vinod")}
      onMouseEnter={handleHover} />


    </div>
  )
}

export default EventProps