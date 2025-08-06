// import React from 'react'
// // const user=[{name:"alice",age:12},
// // {name:"jordan" ,age:23},
// // {name:"mohan",age:45}
// // ]
// import {useState} from 'react'
// const[user,setUser]=useState([{name:"alice",age:12},
// {name:"jordan" ,age:23},
// {name:"mohan",age:45}
// ])
// const userCount=user.length;
// const Average = user.reduce((accum, currElem) => accum + currElem.age, 0) / userCount;
// function App() {

//   return (
//     <div>
//     <ul>
//       {user.map((currElem,index)=>{
//         return(
//           <li key={index}>
//             {currElem.name} -- {currElem.age} years old
//         </li>
//         )

//       })}
//     </ul>
//     <p>{userCount}</p>
//     <p>{Average}</p>

//     </div>
//   )
// }
// export default App;
import React, { useState } from 'react';
//derived state in any state that can be computed based on other state or props.

function App() {
  const [user, setUser] = useState([
    { name: "alice", age: 12 },
    { name: "jordan", age: 23 },
    { name: "mohan", age: 45 }
  ]);

  const userCount = user.length;//derived state
  const averageAge = user.reduce((accum, currElem) => accum + currElem.age, 0) / userCount;

  return (
    <div>
      <ul>
        {user.map((currElem, index) => (
          <li key={index}>
            {currElem.name}  -- {currElem.age} years old
          </li>
        ))}
      </ul>
      <p>User Count: {userCount}</p>
      <p>Average Age: {averageAge}</p>
    </div>
  );
}

export default App;
