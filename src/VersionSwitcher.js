import React, { useState } from 'react';
import { useTheme, VERSIONS } from './ThemeContext';
import './VersionSwitcher.css';

const VersionSwitcher = () => {
  const { version, setVersion } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <div className="vs-backdrop" onClick={() => setOpen(false)} />}

      <div className="vs-root">
        {/* Panel */}
        <div className={`vs-panel ${open ? 'vs-panel--open' : ''}`}>
          <p className="vs-panel-title">Mon portfolio</p>
          <div className="vs-timeline">
            {VERSIONS.map((v, i) => (
              <button
                key={v.id}
                className={`vs-item ${version === v.id ? 'vs-item--active' : ''}`}
                onClick={() => { setVersion(v.id); setOpen(false); }}
              >
                <div className="vs-track">
                  <span className="vs-dot" />
                  {i < VERSIONS.length - 1 && <span className="vs-line" />}
                </div>
                <div className="vs-info">
                  <span className="vs-label">{v.label}</span>
                  <span className="vs-years">{v.years}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Toggle strip */}
        <button
          className={`vs-toggle ${open ? 'vs-toggle--open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Changer de version"
        >
          <span className="vs-toggle-dots">
            {VERSIONS.map(v => (
              <span
                key={v.id}
                className={`vs-toggle-pip ${version === v.id ? 'active' : ''}`}
              />
            ))}
          </span>
          <span className="vs-toggle-word">VERSION</span>
        </button>
      </div>
    </>
  );
};

export default VersionSwitcher;
