import React from 'react'

function App() {
   let age=18;
  // let buy="can't buy";
  // if(age>=18) buy="can buy";
 const buy=()=>{
  if(age>=18)
    return "can buy";
     "can't buy";

  }
return (
    <div>
    <img src="image.webp" alt="" width="20%" />  
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, voluptates.</p>
    <div>
      {/* <button>
        // {age>=18 ? "canbuy": "can't buy"}  //ternary 
      </button> */}
      <button>{buy()}</button>
    
    </div>
    </div>
  )
}

export default App