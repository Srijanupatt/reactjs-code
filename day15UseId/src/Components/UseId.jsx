import React, { useId } from 'react'
import { useId } from 'react';
function UseId() {
  const usernameId=useId();
  const emailId=useId()
  return (
   <form>
    {/* use manual id */}
    {/* <div>
    <label htmlFor="username">useName</label>
    <input type="text" id="username" name="name"/>
     </div>
    <div>
      <label  htmlFor="email" >Email</label>
     <input type="text" id="email" name="email"/>
   </div> */}

 {/*use hook id*/}
      <div>
    <label htmlFor={usernameId}>useName</label>
    <input type="text" id={usernameId} name="name"/>
     </div>
    <div>
      <label  htmlFor={emailId} >Email</label>
     <input type="text" id={emailId} name="email"/>
   </div>
   <div>
    <button type="submit">Submit</button>
   </div>
   </form>



)
}

export default UseId