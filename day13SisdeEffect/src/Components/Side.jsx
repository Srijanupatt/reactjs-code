import React, { useEffect, useState } from 'react'
function Side() {
  const[count,setCount]=useState(0);

  useEffect(
    ()=>{
console.log("count value") 
    },[count])
return (
  <div>
   <p>count value{count}</p>
   <button onClick={()=>setCount(count+1)}>click me</button>
</div>
  )
}

export default Side