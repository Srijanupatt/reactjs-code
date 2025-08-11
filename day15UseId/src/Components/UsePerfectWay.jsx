import React, { useId } from 'react'

function UsePerfectWay() {
const id =useId();
  return (
    <div>
      <form>
          <div>
    <label htmlFor={id + "usernameId"}>useName</label>
    <input type="text" id={id + " usernameId"} name="name"/>
     </div>
    <div>
      <label htmlFor={ id+"emailId"} >Email</label> 
     <input type="text" id={id + "emailId"} name="email"/>
   </div>
   <div>
    <button type="submit">Submit</button>
   </div>
   </form>
     
    </div>
  )
}

export default UsePerfectWay