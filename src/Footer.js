import React from 'react';
import './index.css';

const Footer = () => (
  <footer className="footer">
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
  </footer>
);

export default Footer;
