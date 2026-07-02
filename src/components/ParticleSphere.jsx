import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 320;

const DARK_COLORS = [
  [0, 217, 255],   // Electric Cyan
  [124, 58, 237],  // Violet
  [236, 72, 153],  // Hot Pink
  [16, 185, 129],  // Emerald
  [0, 191, 255],   // Deep Sky Blue
  [224, 242, 254],  // Light Slate/Blue-White
];

const LIGHT_COLORS = [
  [0, 102, 204],   // Deep Blue
  [109, 40, 217],  // Violet
  [15, 118, 110],  // Teal
  [219, 39, 119],  // Saturated Pink
  [30, 41, 59],    // Slate-800
];

const CONNECTION_DIST_PX_FACTOR = 0.72; // fraction of R

function lerp(a, b, t) { return a + (b - a) * t; }

function rotatePoint(x, y, z, rx, ry) {
  const y1 = y * Math.cos(rx) - z * Math.sin(rx);
  const z1 = y * Math.sin(rx) + z * Math.cos(rx);
  const x2 = x * Math.cos(ry) + z1 * Math.sin(ry);
  const z2 = -x * Math.sin(ry) + z1 * Math.cos(ry);
  return [x2, y1, z2];
}

export default function ParticleSphere({ heroRef }) {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    mouse: { x: 0, y: 0 },
    smoothMouse: { x: 0, y: 0 },
    particles: [],
    animId: null,
    time: 0,
    autoRotY: 0,
    autoRotX: 0.18,   // axial tilt (radians)
    tiltX: 0,
    tiltY: 0,
    heroRect: null,
    W: 0,
    H: 0,
    R: 0,
    cx: 0,
    cy: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const s = stateRef.current;

    function syncSize() {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const dpr = window.devicePixelRatio || 1;
      s.heroRect = { top: rect.top + scrollY, left: rect.left, width: rect.width, height: rect.height };
      s.W = rect.width;
      s.H = rect.height;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(dpr, dpr);
      s.cx = rect.width / 2;
      s.cy = rect.height * 0.31; // Shifted up to align with text/CTA buttons and keep the stats card clear
      s.R = Math.min(rect.width, rect.height) * 0.35;
      s.mouse.x = s.cx; s.mouse.y = s.cy;
      s.smoothMouse.x = s.cx; s.smoothMouse.y = s.cy;
    }

    syncSize();
    window.addEventListener('resize', syncSize);

    // Theme detection and observer
    let currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const initialPalette = currentTheme === 'light' ? LIGHT_COLORS : DARK_COLORS;

    // Fibonacci sphere for even surface distribution
    s.particles = [];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const t = i / (PARTICLE_COUNT - 1);
      const phi = Math.acos(1 - 2 * t);
      const theta = goldenAngle * i;
      const col = initialPalette[Math.floor(Math.random() * initialPalette.length)];
      s.particles.push({
        phi,
        theta,
        col: [...col],
        targetCol: [...col],
        size: 1.2 + Math.random() * 1.8,
        alpha: 0.5 + Math.random() * 0.5,
        thetaSpeed: (Math.random() - 0.5) * 0.003,
        phiSpeed: (Math.random() - 0.5) * 0.0015,
        breatheAmp: 0.012 + Math.random() * 0.025,
        breatheFreq: 0.4 + Math.random() * 0.5,
        breatheOffset: Math.random() * Math.PI * 2,
      });
    }

    function updateColorsForTheme(theme) {
      const palette = theme === 'light' ? LIGHT_COLORS : DARK_COLORS;
      s.particles.forEach(p => {
        p.targetCol = palette[Math.floor(Math.random() * palette.length)];
      });
    }

    const themeObserver = new MutationObserver(() => {
      const nextTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      if (nextTheme !== currentTheme) {
        currentTheme = nextTheme;
        updateColorsForTheme(nextTheme);
      }
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    function onMouseMove(e) {
      if (!s.heroRect) return;
      s.mouse.x = e.clientX - s.heroRect.left;
      s.mouse.y = e.clientY + window.scrollY - s.heroRect.top;
    }
    window.addEventListener('mousemove', onMouseMove);

    function projectParticle(p, R, cx, cy, autoRotX, autoRotY, tiltX, tiltY) {
      const breathe = 1 + p.breatheAmp * Math.sin(stateRef.current.time * p.breatheFreq + p.breatheOffset);
      const rad = R * breathe;
      const sinPhi = Math.sin(p.phi);
      let x3 = rad * sinPhi * Math.cos(p.theta);
      let y3 = rad * sinPhi * Math.sin(p.theta);
      let z3 = rad * Math.cos(p.phi);
      [x3, y3, z3] = rotatePoint(x3, y3, z3, autoRotX + tiltY * 0.25, autoRotY + tiltX * 0.25);
      const persp = 900 / (900 + z3 * 0.3);
      return { px: cx + x3 * persp, py: cy + y3 * persp * 0.85, z: z3, persp };
    }

    function drawConnections(projected, R) {
      const maxDist = R * CONNECTION_DIST_PX_FACTOR;
      for (let i = 0; i < projected.length; i++) {
        const a = projected[i];
        if (a.z < -R * 0.55) continue;
        for (let j = i + 1; j < projected.length; j++) {
          const b = projected[j];
          if (b.z < -R * 0.55) continue;
          const dx = a.px - b.px, dy = a.py - b.py;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > maxDist) continue;
          const t = 1 - dist / maxDist;
          const depthFade = Math.max(0, (a.z + b.z) / (2 * R) + 0.5);
          const alpha = t * t * depthFade * 0.35; // Increased connection alpha
          if (alpha < 0.01) continue;
          const [r, g, b2] = s.particles[a.idx].col;
          ctx.beginPath();
          ctx.moveTo(a.px, a.py);
          ctx.lineTo(b.px, b.py);
          ctx.strokeStyle = `rgba(${r},${g},${b2},${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    function animate() {
      s.animId = requestAnimationFrame(animate);
      s.time += 0.016;
      s.autoRotY += 0.004;

      s.smoothMouse.x = lerp(s.smoothMouse.x, s.mouse.x, 0.04);
      s.smoothMouse.y = lerp(s.smoothMouse.y, s.mouse.y, 0.04);
      s.tiltX = (s.smoothMouse.x - s.cx) / (s.W * 0.5);
      s.tiltY = (s.smoothMouse.y - s.cy) / (s.H * 0.5);

      ctx.clearRect(0, 0, s.W, s.H);

      const projected = s.particles.map((p, i) => {
        p.theta += p.thetaSpeed;
        p.phi = Math.max(0.05, Math.min(Math.PI - 0.05, p.phi + p.phiSpeed));

        // Smoothly lerp active color to target theme color
        p.col[0] = lerp(p.col[0], p.targetCol[0], 0.05);
        p.col[1] = lerp(p.col[1], p.targetCol[1], 0.05);
        p.col[2] = lerp(p.col[2], p.targetCol[2], 0.05);

        return { ...projectParticle(p, s.R, s.cx, s.cy, s.autoRotX, s.autoRotY, s.tiltX, s.tiltY), idx: i };
      });

      projected.sort((a, b) => a.z - b.z); // painter's algorithm

      drawConnections(projected, s.R);

      for (const pt of projected) {
        const p = s.particles[pt.idx];
        const depthT = (pt.z / s.R + 1) / 2; // 0=back, 1=front
        const depthAlpha = p.alpha * (0.25 + 0.75 * depthT); // Increased base depth alpha
        const depthSize = Math.max(0.3, p.size * (0.35 + 0.65 * depthT) * pt.persp);
        const [r, g, b] = p.col;
        ctx.beginPath();
        ctx.arc(pt.px, pt.py, depthSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${depthAlpha})`;
        ctx.fill();
      }
    }

    animate();

    return () => {
      cancelAnimationFrame(s.animId);
      themeObserver.disconnect(); // Clean up mutation observer
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', syncSize);
    };
  }, [heroRef]);

  return (
    <canvas
      ref={canvasRef}
      className="particle-sphere-canvas"
      style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', zIndex: 0 }}
    />
  );
}