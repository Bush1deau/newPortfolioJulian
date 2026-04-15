import React from 'react';
import './index.css';

const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
const bubbleCount = isMobile ? 128 : 60;

const Footer = () => {
  return (
    <div className="main">
      <div className="footer">
        <div className="bubbles">
          {Array.from({ length: bubbleCount }).map((_, i) => (
            <div
              key={i}
              className="bubble"
              style={{
                "--size": isMobile
                  ? `${1 + Math.random() * 2}rem`
                  : `${0.2 + Math.random() * 0.4}rem`,
                "--distance": isMobile
                  ? `${2 + Math.random() * 2}rem`
                  : `${0.4 + Math.random() * 0.4}rem`,
                "--position": `${-5 + Math.random() * 110}%`,
                "--time": `${2 + Math.random() * 2}s`,
                "--delay": `${-1 * (2 + Math.random() * 2)}s`,
              }}
            />
          ))}
        </div>
        <div className="content">
          <div className="footer-text">
            <p className="by-julian">by Julian.</p>
            <p className="rights-reserved">Tout droit réservé</p>
          </div>
        </div>
        <svg style={{ position: "fixed", top: "100vh" }}>
          <defs>
            <filter id="blob">
              <feGaussianBlur in="SourceGraphic" stdDeviation={isMobile ? 10 : 5} result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="blob"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Footer;