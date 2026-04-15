import React from 'react';
import { useTheme } from './ThemeContext';
import './index.css';

const Footer = () => {
  const { version } = useTheme();

  return (
    <footer className={`footer footer--${version}`}>
      {version === 'bac2' && (
        <>
          <div className="footer-wave">
            <svg
              viewBox="0 0 2880 60"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,40 C360,10 720,60 1080,40 C1440,10 1800,60 2160,40 C2520,10 2880,60 2880,40 L2880,60 L0,60 Z"
                fill="#178ca4"
                opacity="0.4"
              />
              <path
                d="M0,30 C240,55 480,5 720,30 C960,55 1200,5 1440,30 C1680,55 1920,5 2160,30 C2400,55 2640,5 2880,30 L2880,60 L0,60 Z"
                fill="#178ca4"
              />
            </svg>
          </div>
          <div className="footer-content">
            <p className="by-julian">by Julian.</p>
            <p className="rights-reserved">Tout droit réservé</p>
          </div>
        </>
      )}

      {version === 'bac3' && (
        <div className="footer-stage footer-stage--clean">
          <span className="footer-stage__line" />
          <p className="footer-stage__name">Julian Leroy</p>
          <p className="footer-stage__meta">Portfolio évolutif · BAC+3</p>
        </div>
      )}

      {version === 'bac5' && (
        <div className="footer-stage footer-stage--lab">
          <div>
            <p className="footer-stage__eyebrow">Maîtrise</p>
            <p className="footer-stage__name">Julian Leroy</p>
          </div>
          <div className="footer-lab-grid">
            <span>Architecture</span>
            <span>Produit</span>
            <span>Expérience</span>
          </div>
        </div>
      )}

      {version === 'current' && (
        <div className="footer-stage footer-stage--current">
          <div>
            <p className="footer-stage__eyebrow">Actuellement</p>
            <p className="footer-stage__name">Julian Leroy</p>
          </div>
          <div className="footer-current-panel">
            <span>Fullstack</span>
            <span>React</span>
            <span>Node</span>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
