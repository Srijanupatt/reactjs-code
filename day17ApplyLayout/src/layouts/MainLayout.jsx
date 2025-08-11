import { Outlet, Link } from 'react-router-dom';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="app">
      <nav className="navbar">

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </nav>
     <main className="content">
        <Outlet/> {/* This is where child routes will render */}
     </main>

     <footer className="footer">
        <p>2023 My App</p>
      </footer>
    </div>
  );
};

export default MainLayout;