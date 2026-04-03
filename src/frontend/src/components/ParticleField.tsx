// Pre-computed particle configs to avoid hydration issues
const PARTICLES = [
  { x: 12, y: 18, size: 6, duration: 8.2, delay: 0.4, gold: true },
  { x: 27, y: 62, size: 4, duration: 11.5, delay: 1.8, gold: false },
  { x: 45, y: 25, size: 8, duration: 7.6, delay: 0.0, gold: true },
  { x: 63, y: 73, size: 5, duration: 13.1, delay: 2.9, gold: false },
  { x: 78, y: 15, size: 7, duration: 9.4, delay: 1.2, gold: true },
  { x: 88, y: 50, size: 4, duration: 12.8, delay: 3.5, gold: false },
  { x: 19, y: 80, size: 9, duration: 6.9, delay: 0.7, gold: true },
  { x: 55, y: 45, size: 5, duration: 10.3, delay: 4.1, gold: false },
  { x: 33, y: 38, size: 6, duration: 14.0, delay: 2.0, gold: true },
  { x: 72, y: 32, size: 4, duration: 8.7, delay: 3.0, gold: false },
];

export function ParticleField() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {PARTICLES.map((p, i) => (
        <span
          // biome-ignore lint/suspicious/noArrayIndexKey: static particle list
          key={`particle-${i}`}
          className="particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.gold ? "oklch(0.72 0.15 74)" : "oklch(0.95 0.02 78)",
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
