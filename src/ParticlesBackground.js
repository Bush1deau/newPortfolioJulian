import React, { useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext';

/* ─── Light gradient mesh (Actuellement) ────────────────────── */
const GradientMesh = ({ canvasRef }) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let t = 0;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);

    const orbs = [
      { cx: 0.15, cy: 0.20, r: 0.35, color: [139, 92, 246],  speed: 0.0004 },  // violet
      { cx: 0.75, cy: 0.15, r: 0.30, color: [59, 130, 246],   speed: 0.0006 },  // blue
      { cx: 0.50, cy: 0.80, r: 0.40, color: [16, 185, 129],   speed: 0.0003 },  // emerald
      { cx: 0.85, cy: 0.65, r: 0.28, color: [236, 72, 153],   speed: 0.0005 },  // pink
    ];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 1;

      orbs.forEach((o, i) => {
        const angle = t * o.speed + i * 1.3;
        const cx = (o.cx + Math.sin(angle) * 0.08) * canvas.width;
        const cy = (o.cy + Math.cos(angle * 0.7) * 0.06) * canvas.height;
        const r  = o.r * Math.min(canvas.width, canvas.height);

        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        g.addColorStop(0,   `rgba(${o.color.join(',')},0.10)`);
        g.addColorStop(0.5, `rgba(${o.color.join(',')},0.05)`);
        g.addColorStop(1,   `rgba(${o.color.join(',')},0)`);

        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, [canvasRef]);
  return null;
};

/* ─── Main component ─────────────────────────────────────────── */
const ParticlesBackground = () => {
  const { version } = useTheme();
  const canvasRef = useRef(null);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
      />
      {version === 'current' && <GradientMesh canvasRef={canvasRef} />}
    </>
  );
};

export default ParticlesBackground;
