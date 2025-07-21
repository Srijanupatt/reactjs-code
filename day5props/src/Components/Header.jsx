import React from 'react'

// function Header(props) {
//   return (
//     <div>
//     <div>
//       {props.name && <p>welcome {props.name}</p>}
//       {props.number !== undefined && <p>{props.number}</p>}
//     </div>
//     </div>
//   )
// }
function Header(data){
   console.log(data)
  const{name,number}=data;
  return(
    <div>
      <p>{name}</p>
      <p>{number}</p>
 
    </div>
  )


}

export default Header