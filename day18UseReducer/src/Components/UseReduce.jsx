import React, { useReducer } from 'react'

function UseReduce() {

  const reducer=(state,action)=>{
    if(action.type==="increment"){
      return state+1
    }
    
     if(action.type==="decrement"){
      return state-1;
   }
  const [count,dispatch]=useReducer(reducer,0);
  return (
    <div>
    <h1>{count}</h1>
    <button onClick={()=>dispatch({type:"increment"})}>increment</button>
    <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
    </div>
  )
}
}
export default UseReduce