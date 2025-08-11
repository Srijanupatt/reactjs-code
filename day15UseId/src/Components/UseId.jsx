import React, { useId } from 'react'
import { useId } from 'react';
function UseId() {
  const username=useId();
  const email=useId();

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
    <label htmlFor={username}>useName</label>
    <input type="text" id={username} name="name"/>
     </div>
    <div>
      <label  htmlFor={email}>Email</label>
     <input type="text" id={email} name="email"/>
   </div>
 
</form>



)
}

export default UseId


// in react hook for grneration unique Id. that can be passed accesibility attributes.
// it can helps to ensure that each instance of component gets unique Id which is useful for assciating  labels with input fields and other elements.

// syntax: const id=useId();

// parameter: useiD case  doesnot take any parameter.

//  advantage: when you have many form on the same page and each form same field like use name,password.
// if you give every input the same id the broswer and your code get conused because labels Would not match the right input.





