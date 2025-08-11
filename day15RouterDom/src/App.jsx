import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
function App() {
  // const router = createBrowserRouter([
  //   {
  //     path:'/',
  //     element: <Home/>,
  //   },
  //   {
  //     path:'/about',
  //     element:<About />,
  //   },
  //   {
  //     path:'/service',
  //     element:<Service/>
  //   }
  // ]);

    const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
      </>
    )
  );

  return <RouterProvider router={router}/>;
}

export default App;
