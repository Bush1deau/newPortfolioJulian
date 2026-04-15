import React, { useState } from 'react';
import { useTheme, VERSIONS } from './ThemeContext';
import './VersionSwitcher.css';

const VersionSwitcher = () => {
  const { version, setVersion } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className={`version-switcher ${open ? 'open' : ''}`}>
      <button
        className="version-switcher__toggle"
        onClick={() => setOpen(o => !o)}
        aria-label="Changer de version"
      >
        <span className="version-switcher__toggle-icon">
          {open ? '×' : '</>'}
        </span>
        {!open && <span className="version-switcher__toggle-label">Version</span>}
      </button>

      <div className="version-switcher__panel">
        <p className="version-switcher__title">Mon évolution</p>
        <div className="version-switcher__timeline">
          {VERSIONS.map((v, i) => (
            <button
              key={v.id}
              className={`version-switcher__item ${version === v.id ? 'active' : ''}`}
              onClick={() => { setVersion(v.id); setOpen(false); }}
            >
              <span className="version-switcher__dot" />
              {i < VERSIONS.length - 1 && <span className="version-switcher__line" />}
              <div className="version-switcher__info">
                <span className="version-switcher__version-label">{v.label}</span>
                <span className="version-switcher__years">{v.years}</span>
                <span className="version-switcher__desc">{v.description}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VersionSwitcher;
