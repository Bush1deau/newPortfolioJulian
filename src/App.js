import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { ThemeProvider, useTheme } from './ThemeContext';
import VersionSwitcher from './VersionSwitcher';
import ParticlesBackground from './ParticlesBackground';
import './index.css';
import Cv from './Cv';
import Realisations from './Realisations';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

/* ─── Nav link ──────────────────────────────────────────────── */
const NavLink = ({ to, text, onClick }) => {
  const { version } = useTheme();

  const base = {
    textDecoration: 'none',
    color: 'var(--color-nav-text)',
    padding: '10px 15px',
    fontWeight: '600',
    transition: 'background-color 0.3s, color 0.3s',
    fontFamily: 'var(--font-body)',
    letterSpacing: version === 'current' ? '0.06em' : undefined,
    fontSize:      version === 'current' ? '0.85rem' : undefined,
    textTransform: version === 'current' ? 'uppercase' : undefined,
  };

  return (
    <Link
      to={to}
      style={base}
      onMouseOver={e => { e.target.style.opacity = '0.7'; }}
      onMouseOut={e  => { e.target.style.opacity = '1'; }}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

/* ─── Navigation ────────────────────────────────────────────── */
const Navigation = ({ menuOpen, setMenuOpen }) => {
  const location = useLocation();

  React.useEffect(() => { setMenuOpen(false); }, [location, setMenuOpen]);

  const links = [
    { to: '/',            text: 'Accueil' },
    { to: '/cv',          text: 'Mon CV' },
    { to: '/realisations',text: 'Mes réalisations' },
    { to: '/about',       text: 'A propos de moi' },
    { to: '/contact',     text: 'Contact' },
  ];

  return (
    <>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        boxShadow: '0 2px 8px var(--color-shadow)',
      }}>
        <div className="nav-links">
          {links.map(l => <NavLink key={l.to} {...l} />)}
        </div>
        <button
          className={`burger-menu ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          style={{ color: 'var(--color-nav-text)' }}
        >
          &#9776;
        </button>
      </nav>

      <div className={`burger-nav ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <NavLink key={l.to} {...l} onClick={() => setMenuOpen(false)} />
        ))}
      </div>
    </>
  );
};

/* ─── App content ───────────────────────────────────────────── */
const AppContent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { version } = useTheme();
  const isHome = location.pathname === '/';

  return (
    <div className="app-wrapper">
      {version === 'current' && <ParticlesBackground />}

      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main className="main-content">
        <Routes>
          <Route path="/" element={
            <div className="home-page">
              <div className="home">
                <div className={`home-content ${version === 'current' ? 'home-content--current' : ''}`}>
                  <div className="hero-copy">
                    {version === 'current' && <p className="hero-kicker">Portfolio 2025 / Fullstack</p>}
                    <h1 id="autotext">Julian LEROY, développeur Fullstack</h1>
                    <p className="fade-in slogan">
                      <i>Construisons ensemble l'avenir numérique !</i>
                    </p>
                    <div className="cta-buttons">
                      <Link to="/cv"           className="cta-button">Voir mon CV</Link>
                      <Link to="/realisations" className="cta-button">Voir mes réalisations</Link>
                    </div>
                  </div>
                  {version === 'current' && (
                    <div className="hero-dashboard" aria-hidden="true">
                      <div className="hero-dashboard__top">
                        <span>Disponibilité</span>
                        <strong>Actif</strong>
                      </div>
                      <div className="hero-dashboard__grid">
                        <span>React</span>
                        <span>Node</span>
                        <span>UX</span>
                        <span>API</span>
                      </div>
                      <div className="hero-dashboard__meter">
                        <span />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <Footer />
            </div>
          } />
          <Route path="/cv"           element={<Cv />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/about"        element={<About />} />
          <Route path="/contact"      element={<Contact />} />
        </Routes>
      </main>

      {!isHome && <Footer />}

      <VersionSwitcher />
    </div>
  );
};

/* ─── Root ──────────────────────────────────────────────────── */
const App = () => (
  <ThemeProvider>
    <Router>
      <AppContent />
    </Router>
  </ThemeProvider>
);

export default App;
