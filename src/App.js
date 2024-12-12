import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import './index.css';
import Cv from './Cv';
import Realisations from './Realisations';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const NavLink = ({ to, text, navLinkStyle, navLinkHoverStyle, onClick }) => (
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
    onClick={onClick} // Ferme le menu au clic
  >
    {text}
  </Link>
);

const Navigation = ({ menuOpen, setMenuOpen }) => {
  const location = useLocation(); // Hook utilisé ici

  useEffect(() => {
    setMenuOpen(false); // Ferme le menu lors d'une navigation
  }, [location, setMenuOpen]);

  const navLinkStyle = {
    textDecoration: 'none',
    color: 'white',
    padding: '10px 15px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s, color 0.3s, transform 0.3s',
  };

  const navLinkHoverStyle = {
    backgroundColor: '#0f5c6b', // turquoise clair
    color: 'white',
  };

  return (
    <>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#178ca4', // Turquoise
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      }}>
        <div className="nav-links ">
          <NavLink to="/" text="Accueil" navLinkStyle={navLinkStyle} navLinkHoverStyle={navLinkHoverStyle} />
          <NavLink to="/cv" text="Mon CV" navLinkStyle={navLinkStyle} navLinkHoverStyle={navLinkHoverStyle} />
          <NavLink to="/realisations" text="Mes réalisations" navLinkStyle={navLinkStyle} navLinkHoverStyle={navLinkHoverStyle} />
          <NavLink to="/about" text="A propos de moi" navLinkStyle={navLinkStyle} navLinkHoverStyle={navLinkHoverStyle} />
          <NavLink to="/contact" text="Contact" navLinkStyle={navLinkStyle} navLinkHoverStyle={navLinkHoverStyle} />
        </div>
        <button className={`burger-menu ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </button>
      </nav>

      {/* Burger Menu */}
      <div className={`burger-nav ${menuOpen ? 'open' : ''}` } >
        <NavLink to="/" text="Accueil" navLinkStyle={navLinkStyle} navLinkHoverStyle={navLinkHoverStyle} onClick={() => setMenuOpen(false)} />
        <NavLink to="/cv" text="Mon CV" navLinkStyle={navLinkStyle} navLinkHoverStyle={navLinkHoverStyle} onClick={() => setMenuOpen(false)} />
        <NavLink to="/realisations" text="Mes réalisations" navLinkStyle={navLinkStyle} navLinkHoverStyle={navLinkHoverStyle} onClick={() => setMenuOpen(false)} />
        <NavLink to="/about" text="A propos de moi" navLinkStyle={navLinkStyle} navLinkHoverStyle={navLinkHoverStyle} onClick={() => setMenuOpen(false)} />
        <NavLink to="/contact" text="Contact" navLinkStyle={navLinkStyle} navLinkHoverStyle={navLinkHoverStyle} onClick={() => setMenuOpen(false)} />
      </div>
    </>
  );
};

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  ;

  return (
    <Router>
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Routes>
        <Route path="/" element={
          <div className="home">
            <div className="content">
              <h1 id='autotext'>Julian LEROY, développeur Fullstack</h1>
              <p className="fade-in slogan">
                <i>Construisons ensemble l'avenir numérique !</i>
              </p>
              <div className="cta-buttons">
                <Link to="/cv" className="cta-button">Voir mon CV</Link>
                <Link to="/realisations" className="cta-button">Voir mes réalisations</Link>
              </div>
            </div>
            </div>
            
                  } 
                  
        />
        
        <Route path="/cv" element={<Cv />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;