import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';
import Cv from './Cv';
import Realisations from './Realisations';
import About from './About';
import Contact from './Contact';

const NavLink = ({ to, text, navLinkStyle, navLinkHoverStyle }) => (
  <Link
    to={to}
    style={navLinkStyle}
    onMouseOver={(e) => {
      e.target.style.backgroundColor = navLinkHoverStyle.backgroundColor;
      e.target.style.color = navLinkHoverStyle.color;
    }}
    onFocus={(e) => {
      e.target.style.backgroundColor = navLinkHoverStyle.backgroundColor;
      e.target.style.color = navLinkHoverStyle.color;
    }}
    onMouseOut={(e) => {
      e.target.style.backgroundColor = '';
      e.target.style.color = navLinkStyle.color;
    }}
    onBlur={(e) => {
      e.target.style.backgroundColor = '';
      e.target.style.color = navLinkStyle.color;
    }}
  >
    {text}
  </Link>
);

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyle = {
    textDecoration: 'none',
    color: 'white',
    padding: '10px 15px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s, color 0.3s, transform 0.3s',
  };

  const navLinkHoverStyle = {
    backgroundColor: '#18b7be', // turquoise clair
    color: 'white',
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
          backgroundColor: '#178ca4', // Turquoise
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}>
          <div className="nav-links">
            <NavLink to="/" text="Accueil" navLinkStyle={navLinkStyle} navLinkHoverStyle={navLinkHoverStyle} />
            <NavLink to="/cv" text="Mon CV" navLinkStyle={navLinkStyle} navLinkHoverStyle={navLinkHoverStyle} />
            <NavLink to="/realisations" text="Mes réalisations" navLinkStyle={navLinkStyle} navLinkHoverStyle={navLinkHoverStyle} />
            <NavLink to="/about" text="A propos de moi" navLinkStyle={navLinkStyle} navLinkHoverStyle={navLinkHoverStyle} />
            <NavLink to="/contact" text="Contact" navLinkStyle={navLinkStyle} navLinkHoverStyle={navLinkHoverStyle} />
          </div>
          <button className={`burger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            &#9776;
          </button>
        </nav>

        {/* Burger Menu */}
        <div className={`burger-nav ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" text="Accueil" navLinkStyle={navLinkStyle} navLinkHoverStyle={navLinkHoverStyle} />
          <NavLink to="/cv" text="Mon CV" navLinkStyle={navLinkStyle} navLinkHoverStyle={navLinkHoverStyle} />
          <NavLink to="/realisations" text="Mes réalisations" navLinkStyle={navLinkStyle} navLinkHoverStyle={navLinkHoverStyle} />
          <NavLink to="/about" text="A propos de moi" navLinkStyle={navLinkStyle} navLinkHoverStyle={navLinkHoverStyle} />
          <NavLink to="/contact" text="Contact" navLinkStyle={navLinkStyle} navLinkHoverStyle={navLinkHoverStyle} />
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={
            <div style={{ textAlign: 'center', marginTop: '10%' }}>
              <h1 className="fade-in">Bienvenue sur le portfolio de <br /> Julian LEROY</h1>
              <p style={{
                fontSize: '1.5rem',
                color: '#34495e', // Gris foncé
                marginTop: '10px',
              }}>
                <i>Construisons ensemble l'avenir numérique !</i>
              </p>
            </div>
          } />
          <Route path="/cv" element={<Cv />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;