import React from 'react';
import './index.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-wave">
      <svg
        viewBox="0 0 1440 50"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,25 C180,50 360,0 540,25 C720,50 900,0 1080,25 C1260,50 1440,0 1440,25 L1440,50 L0,50 Z"
          fill="#178ca4"
        />
        <path
          d="M0,35 C180,10 360,50 540,35 C720,10 900,50 1080,35 C1260,10 1440,50 1440,35 L1440,50 L0,50 Z"
          fill="#178ca4"
          opacity="0.5"
        />
      </svg>
    </div>
    <div className="footer-content">
      <p className="by-julian">by Julian.</p>
      <p className="rights-reserved">Tout droit réservé</p>
    </div>
  </footer>
);

export default Footer;
