import { Routes, Route, NavLink } from "react-router-dom";


import "./App.css";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

export default function App() {
  return (
    <>
      {/* Logo Section */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      {/* Navigation Bar */}
      <div className="navbar">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          Contact
        </NavLink>
      </div>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
