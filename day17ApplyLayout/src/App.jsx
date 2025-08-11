import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Service'; // Make sure default export exists
function App() {
  return (
    <BrowserRouter> {/* Moved here instead of main.jsx */}
      <Routes>
        <Route path="/" element={<MainLayout />}>

          <Route index element={<Home />} /> 
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
