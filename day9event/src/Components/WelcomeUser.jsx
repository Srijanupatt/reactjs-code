import React from 'react'
function WelcomeUser(props) {

  return (
    <div>
     <button onClick={props.onClick}>click me</button>

     <button onMouseEnter={props.onMouseEnter}>Hover me</button>
    </div>
  )
}

export default WelcomeUser