import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import './index.css';

/* ── canvas helper ─────────────────────────────────── */
function syncCanvas(canvas) {
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.offsetWidth;
  const h = canvas.offsetHeight;
  if (!w || !h) return null;
  canvas.width  = w * dpr;
  canvas.height = h * dpr;
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return ctx;
}

/* ══════════════════════════════════════════════════════
   BAC+3 — looping waves + cursor amplitude
   Identical wave rhythm to BAC+2, but cursor amplifies
   the crests where it hovers.
══════════════════════════════════════════════════════ */
function WaveBac3({ mouseRef }) {
  const cvs = useRef(null);

  useEffect(() => {
    let ctx = syncCanvas(cvs.current);
    let t = 0, raf;

    function onResize() { ctx = syncCanvas(cvs.current) || ctx; }
    window.addEventListener('resize', onResize);

    (function loop() {
      if (!ctx) { ctx = syncCanvas(cvs.current); raf = requestAnimationFrame(loop); return; }
      const W = cvs.current.offsetWidth;
      const H = cvs.current.offsetHeight;
      if (!W || !H) { raf = requestAnimationFrame(loop); return; }
      ctx.clearRect(0, 0, W, H); // CSS background handles the dark fill

      const mouse = mouseRef.current;
      for (const [yFrac, amp, freq, phase, alpha] of [
        [0.15, 18, 0.010, 0.0, 0.25],
        [0.32, 12, 0.017, 1.9, 0.90],
      ]) {
        ctx.beginPath();
        ctx.moveTo(0, H);
        for (let x = 0; x <= W; x++) {
          let a = amp;
          if (mouse.on) {
            const d = Math.abs(x - mouse.x);
            a += Math.max(0, 1 - d / 200) * amp * 2.5;
          }
          ctx.lineTo(x, H * yFrac + Math.sin(x * freq + t + phase) * a);
        }
        ctx.lineTo(W, H);
        ctx.closePath();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = '#3b82f6';
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      t += 0.036;
      raf = requestAnimationFrame(loop);
    })();

    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <canvas ref={cvs} className="footer-wave-canvas" />;
}

/* ══════════════════════════════════════════════════════
   BAC+5 — BAC+3 + 3-layer depth parallax + particles
   A third background layer moves at a different speed,
   giving depth. Particles rise from wave crests near
   the cursor.
══════════════════════════════════════════════════════ */
function WaveBac5({ mouseRef }) {
  const cvs  = useRef(null);
  const pts  = useRef([]);

  useEffect(() => {
    let ctx = syncCanvas(cvs.current);
    let t = 0, raf;

    function onResize() { ctx = syncCanvas(cvs.current) || ctx; }
    window.addEventListener('resize', onResize);

    (function loop() {
      if (!ctx) { ctx = syncCanvas(cvs.current); raf = requestAnimationFrame(loop); return; }
      const W = cvs.current.offsetWidth;
      const H = cvs.current.offsetHeight;
      if (!W || !H) { raf = requestAnimationFrame(loop); return; }
      ctx.clearRect(0, 0, W, H); // CSS background handles the dark fill

      const mouse = mouseRef.current;

      // Three depth layers: back (subtle wash like bac3) → mid → front
      for (const [yFrac, amp, freq, phase, color, alpha] of [
        [0.15, 18, 0.007, 3.5, '#7c3aed', 0.18],  // subtle top wash
        [0.30, 12, 0.010, 0.8, '#7c3aed', 0.50],  // depth mid
        [0.44, 8,  0.017, 1.9, '#7c3aed', 0.90],  // solid front
      ]) {
        ctx.beginPath();
        ctx.moveTo(0, H);
        for (let x = 0; x <= W; x++) {
          let a = amp;
          if (mouse.on) {
            const d = Math.abs(x - mouse.x);
            a += Math.max(0, 1 - d / 200) * amp * 2.5;
          }
          ctx.lineTo(x, H * yFrac + Math.sin(x * freq + t + phase) * a);
        }
        ctx.lineTo(W, H);
        ctx.closePath();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = color;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // Spawn particles at front-wave crest near cursor
      if (mouse.on && Math.random() < 0.35) {
        const px = mouse.x + (Math.random() - 0.5) * 80;
        const wy = H * 0.44 + Math.sin(px * 0.017 + t + 1.9) * 8;
        pts.current.push({
          x: px, y: wy,
          vx: (Math.random() - 0.5) * 0.7,
          vy: -(Math.random() * 1.3 + 0.3),
          life: 1,
          decay: 0.014 + Math.random() * 0.012,
          r: Math.random() * 2.5 + 0.6,
          hue: Math.random() > 0.5 ? 270 : 172,
        });
      }

      // Update → filter dead → draw (prevents negative arc radius crash)
      for (const p of pts.current) { p.x += p.vx; p.y += p.vy; p.life -= p.decay; }
      pts.current = pts.current.filter(p => p.life > 0);
      for (const p of pts.current) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * p.life, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${p.hue},90%,70%)`;
        ctx.globalAlpha = p.life * 0.7;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      t += 0.036;
      raf = requestAnimationFrame(loop);
    })();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      pts.current = [];
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <canvas ref={cvs} className="footer-wave-canvas" />;
}

/* ══════════════════════════════════════════════════════
   Actuellement — BAC+5 + aurora gradient + crest glow
   Wave colors shift slowly over time AND with cursor X
   (aurora hue swing). The front wave emits a glowing
   stroke along its crest (canvas shadow).
══════════════════════════════════════════════════════ */
function WaveCurrent({ mouseRef }) {
  const cvs = useRef(null);
  const pts = useRef([]);

  useEffect(() => {
    let ctx = syncCanvas(cvs.current);
    let t = 0, raf;

    function onResize() { ctx = syncCanvas(cvs.current) || ctx; }
    window.addEventListener('resize', onResize);

    (function loop() {
      if (!ctx) { ctx = syncCanvas(cvs.current); raf = requestAnimationFrame(loop); return; }
      const W = cvs.current.offsetWidth;
      const H = cvs.current.offsetHeight;
      if (!W || !H) { raf = requestAnimationFrame(loop); return; }
      ctx.clearRect(0, 0, W, H); // CSS gradient background handles the dark fill

      const mouse = mouseRef.current;
      const prog = mouse.on ? mouse.x / W : 0.5;
      // Slow oscillating shimmer in lightness only (stays on JL navy hue 225°)
      const lightShift = Math.sin(t * 0.18) * 3 + prog * 5;

      function navyGrad(baseL) {
        const g = ctx.createLinearGradient(0, 0, W, 0);
        g.addColorStop(0,   `hsl(225, 100%, ${baseL + lightShift}%)`);
        g.addColorStop(0.5, `hsl(225, 100%, ${baseL + 8 + lightShift}%)`);
        g.addColorStop(1,   `hsl(225, 100%, ${baseL + lightShift}%)`);
        return g;
      }

      // Lighter navy waves visible against the solid navy footer background
      const gradA = navyGrad(42); // mid layer
      const gradB = navyGrad(50); // front layer (brighter blue)

      // Background layers — pure JL navy, no other hues
      for (const [yFrac, amp, freq, phase, fill, alpha] of [
        [0.10, 18, 0.006, 4.0, '#0030B8', 0.55],  // medium navy wash starts near top
        [0.28, 12, 0.010, 0.6, gradA,     0.75],  // navy mid
      ]) {
        ctx.beginPath();
        ctx.moveTo(0, H);
        for (let x = 0; x <= W; x++) {
          let a = amp;
          if (mouse.on) {
            const d = Math.abs(x - mouse.x);
            a += Math.max(0, 1 - d / 200) * amp * 2.5;
          }
          ctx.lineTo(x, H * yFrac + Math.sin(x * freq + t + phase) * a);
        }
        ctx.lineTo(W, H);
        ctx.closePath();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = fill;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // Front wave — collect crest points for the glow stroke
      {
        const yFrac = 0.42, amp = 8, freq = 0.016, phase = 1.9;
        const cX = [], cY = [];
        ctx.beginPath();
        ctx.moveTo(0, H);
        for (let x = 0; x <= W; x++) {
          let a = amp;
          if (mouse.on) {
            const d = Math.abs(x - mouse.x);
            a += Math.max(0, 1 - d / 200) * amp * 2.5;
          }
          const y = H * yFrac + Math.sin(x * freq + t + phase) * a;
          ctx.lineTo(x, y);
          if (x % 3 === 0) { cX.push(x); cY.push(y); }
        }
        ctx.lineTo(W, H);
        ctx.closePath();
        ctx.globalAlpha = 0.90;
        ctx.fillStyle = gradB;
        ctx.fill();
        ctx.globalAlpha = 1;

        // Glowing crest line — JL orange highlight
        if (cX.length) {
          ctx.beginPath();
          ctx.moveTo(cX[0], cY[0]);
          for (let i = 1; i < cX.length; i++) ctx.lineTo(cX[i], cY[i]);
          ctx.strokeStyle = '#FF8500';
          ctx.lineWidth = 1.8;
          ctx.shadowBlur = 18;
          ctx.shadowColor = '#FF8500';
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      }

      // Particles — only JL navy & orange, no in-between hues
      if (mouse.on && Math.random() < 0.35) {
        const px = mouse.x + (Math.random() - 0.5) * 80;
        const wy = H * 0.44 + Math.sin(px * 0.016 + t + 1.9) * 8;
        pts.current.push({
          x: px, y: wy,
          vx: (Math.random() - 0.5) * 0.7,
          vy: -(Math.random() * 1.3 + 0.3),
          life: 1,
          decay: 0.013 + Math.random() * 0.010,
          r: Math.random() * 2.8 + 0.6,
          color: Math.random() > 0.45 ? '#4D8CFF' : '#FF8500',
        });
      }
      // Update → filter dead → draw (prevents negative arc radius crash)
      for (const p of pts.current) { p.x += p.vx; p.y += p.vy; p.life -= p.decay; }
      pts.current = pts.current.filter(p => p.life > 0);
      for (const p of pts.current) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * p.life, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life * 0.75;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      t += 0.036;
      raf = requestAnimationFrame(loop);
    })();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      pts.current = [];
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <canvas ref={cvs} className="footer-wave-canvas" />;
}

/* ══════════════════════════════════════════════════════
   Main Footer
══════════════════════════════════════════════════════ */
const Footer = () => {
  const { version } = useTheme();
  const mouseRef = useRef({ x: -1, on: false });

  const onMove  = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mouseRef.current = { x: e.clientX - r.left, on: true };
  };
  const onLeave = () => { mouseRef.current = { ...mouseRef.current, on: false }; };

  return (
    <footer
      className={`footer footer--${version}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* ── BAC+2 ────────────────────────────────────── */}
      {version === 'bac2' && (
        <>
          <div className="footer-wave">
            <svg viewBox="0 0 2880 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,40 C360,10 720,60 1080,40 C1440,10 1800,60 2160,40 C2520,10 2880,60 2880,40 L2880,60 L0,60 Z" fill="#178ca4" opacity="0.4" />
              <path d="M0,30 C240,55 480,5 720,30 C960,55 1200,5 1440,30 C1680,55 1920,5 2160,30 C2400,55 2640,5 2880,30 L2880,60 L0,60 Z" fill="#178ca4" />
            </svg>
          </div>
          <div className="footer-content">
            <p className="by-julian">by Julian.</p>
            <p className="rights-reserved">Tout droit réservé</p>
          </div>
        </>
      )}

      {/* ── BAC+3 ────────────────────────────────────── */}
      {version === 'bac3' && (
        <>
          <WaveBac3 mouseRef={mouseRef} />
          <div className="footer-stage footer-stage--clean footer-stage--over">
            <p className="footer-stage__name">by Julian.</p>
          </div>
        </>
      )}

      {/* ── BAC+5 ────────────────────────────────────── */}
      {version === 'bac5' && (
        <>
          <WaveBac5 mouseRef={mouseRef} />
          <div className="footer-stage footer-stage--lab footer-stage--over">
            <p className="footer-stage__name">by Julian.</p>
            <Link to="/contact" className="footer-cta footer-cta--bac5">
              Me contacter
            </Link>
          </div>
        </>
      )}

      {/* ── Actuellement ─────────────────────────────── */}
      {version === 'current' && (
        <>
          <WaveCurrent mouseRef={mouseRef} />
          <div className="footer-stage footer-stage--current footer-stage--over">
            <p className="footer-stage__name">by Julian.</p>
            <Link to="/contact" className="footer-cta footer-cta--current">
              Me contacter
            </Link>
          </div>
        </>
      )}
    </footer>
  );
};

export default Footer;
