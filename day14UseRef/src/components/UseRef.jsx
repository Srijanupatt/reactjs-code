import React from 'react'
import { useRef } from 'react'
//  it is hook that lets you reference a value that's not needed for renderinmg.
// unlike states it an directly mutuble.
// you can accees value of its using your refcurrent.
function UseRef() {
  const username=useRef(null);
  const password=useRef(null)
 const handleOnSubmit=(e)=>{
  e.preventDefault();//stop default form submission
  console.log(username.current.value,password.current.value);
}
 return (
   <form onSubmit={handleOnSubmit}>
   name:<input type="text" id="username"  ref={username}/>
    <br/>
    password:<input type="text" id="password" ref={password} />
    <button>submit</button>
  </form>
  )
}

export default UseRef