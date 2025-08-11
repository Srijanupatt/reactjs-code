import React from 'react';
import { BioProvider } from './Components/BioProvider';
import Home from './Components/Home';
import About from './Components/About'

function App() {
  return (
    // wrapper
    <BioProvider>
      <Home />
      <About/>
    </BioProvider>
  );
}

export default App;
