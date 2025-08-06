import React from 'react'
import './App.css'
function App() {
 
  const now =new Date();
    const formatDate=now.toLocaleDateString();
    const formateTime=now.toLocaleTimeString();

return (
    <div>
  <h2>{formateTime} {formatDate}</h2>


    </div>
  )
}

export default App