import React, { createContext, useContext, useState, useEffect } from 'react';

export const VERSIONS = [
  { id: 'bac2', label: 'BAC+2', years: '2020 — 2022', description: 'Les débuts' },
  { id: 'bac3', label: 'BAC+3', years: '2022 — 2023', description: 'En progression' },
  { id: 'bac5', label: 'BAC+5', years: '2023 — 2024', description: 'Maîtrise' },
  { id: 'current', label: 'Actuellement', years: '2024 — aujourd\'hui', description: 'Excellence' },
];

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [version, setVersion] = useState(() => {
    return localStorage.getItem('portfolioVersion') || 'bac2';
  });

  useEffect(() => {
    localStorage.setItem('portfolioVersion', version);
    document.documentElement.setAttribute('data-theme', version);
  }, [version]);

  return (
    <ThemeContext.Provider value={{ version, setVersion }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
