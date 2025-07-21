
// // import './App.css';
// import React from "react";
//   export  const App=()=> {
//    return ([<App1 key="1"/>,<App1 key="2"/>] );
//     <div>
//       <App1/> 
//       <App1/>
//       <App1/>
//    </div>
//     return(
//       <React.Fragment>
//         <App1/>

        
//         </React.Fragment>

//  );

// // };
//  export const App = () => {
//   return (
//     <div>
//       <App1 />
//       <App1 />
//       <App1 />
//     </div>
//   );
// };

// // export default App;

// function App1(){
//   return(   
//      <div>
//        <h1>hello</h1>
//      </div>
//   );
// };
//  -------------------------------------------------------------------------------------------------------------------------------------
// conditional : 



function App() {
  let age = 18;
  // let travel = "not available"; 
//   if (age >= 18) travel = "available";

//--------------------------
const canwatch= ()=>{
  if(age>=18 )
    return "watch_now";
   "not Available";
}

  let summary = "Bullet training, often associated with tactical firearms drills, focuses on enhancing speed, accuracy, and decision-making under pressure. It involves high-intensity shooting exercises that include rapid target acquisition, movement while firing, and simulating real-world combat scenarios. Commonly used by military, police, and security personnel, bullet training develops muscle memory, reflexes, and situational awareness. Safety, weapon handling, and control are critical components. Sessions may also incorporate physical stress to mimic battlefield fatigue, making the training both mentally and physically demanding.";

  return (
    <div>
      <h1>App</h1>
      <div>
        <img src="bullet train.jpg" alt="Bullet Train" width="20%" />
        <p>{summary}</p>
       {/* <button disabled={age < 18}>
        {age >= 18 ? 'Watch Now' : 'Not Available'}
      </button>
      <button>{travel}</button> */}
       <button>{canwatch()}</button>
  

      </div>
    </div>
  );
}

 export default App;



// import React from 'react'

// function App() {
//   const genre = ()=>{
//     const name="gujrat";
//     return name;
//   }
//   return (
//     <div>
//       <p>{genre()}</p>
//     </div>
//   )
// }

// export default App



// import React from 'react'

// function App() {
// const name="React";
// const rating = "8.2";
// const App1=()=>{
//   const name1="ram and laxman";
//   return name1;
// };
// return ( 
// <div>
// <p>{name}</p>
// <p>{1+2+3}</p>
// <p>{rating}</p>
// <p>{App1()}</p>
// </div>
//  );
//  }
// export default App

