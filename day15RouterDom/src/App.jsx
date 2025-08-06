import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
  ]);

  // FIXED return statement
  return (
    <RouterProvider router={router} />
  );
}

export default App;
