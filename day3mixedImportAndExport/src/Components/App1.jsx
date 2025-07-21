import React from 'react'

function App1() {
  let rating="8.2";
  return (
    <div>
    
    <img src="image.webp" alt="" width="20%" />  
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, voluptates.</p>
    <div>
      
     <img src="image.webp" alt=""  width="30%"/>
      <p>{rating}</p>
    </div>
  
    </div>
  )
}

export default App1;
export const Header=()=>
{
  return(
  <>
  <div>
    <p>rating:{1+2+3}</p>
  </div>
  </>
  )
}

// export const Footer=()=>{
//   return (
//     <>
//     <div>
//       <img src="image.webp" alt="" width="20%"/>
//     </div>
//     </>

//   );
// }