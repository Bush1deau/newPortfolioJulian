import React, { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Stars
    const stars = Array.from({ length: 180 }, () => ({
      x:     Math.random() * canvas.width,
      y:     Math.random() * canvas.height,
      r:     Math.random() * 1.2 + 0.2,
      alpha: Math.random() * 0.6 + 0.2,
      speed: Math.random() * 0.4 + 0.05,
      drift: (Math.random() - 0.5) * 0.15,
    }));

    // Floating orbs
    const orbs = Array.from({ length: 6 }, () => ({
      x:    Math.random() * canvas.width,
      y:    Math.random() * canvas.height,
      r:    Math.random() * 120 + 60,
      vx:   (Math.random() - 0.5) * 0.3,
      vy:   (Math.random() - 0.5) * 0.3,
      hue:  Math.random() > 0.5 ? 42 : 195, // gold or cyan
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Orbs (aurora glow)
      orbs.forEach(o => {
        o.x += o.vx;
        o.y += o.vy;
        if (o.x < -o.r) o.x = canvas.width + o.r;
        if (o.x > canvas.width + o.r) o.x = -o.r;
        if (o.y < -o.r) o.y = canvas.height + o.r;
        if (o.y > canvas.height + o.r) o.y = -o.r;

        const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
        g.addColorStop(0, `hsla(${o.hue}, 80%, 65%, 0.06)`);
        g.addColorStop(1, `hsla(${o.hue}, 80%, 65%, 0)`);
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      });

      // Stars
      stars.forEach(s => {
        s.y -= s.speed;
        s.x += s.drift;
        if (s.y < -2) { s.y = canvas.height + 2; s.x = Math.random() * canvas.width; }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240,230,211,${s.alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticlesBackground;
