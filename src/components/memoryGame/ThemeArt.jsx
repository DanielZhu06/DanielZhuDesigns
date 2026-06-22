// Small inline icon shown next to theme labels/titles
export function ThemeIcon({ themeKey, className = "", size = 24 }) {

  if (themeKey === "arctic") {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className={className}
      >
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="19.07" x2="19.07" y2="4.93" />
      </svg>
    );
  }

  if (themeKey === "space") {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="currentColor"
        className={className}
      >
        <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
      </svg>
    );
  }

  // jungle (default)
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
    >
      <path d="M12 2C7 2 3 6 3 12c0 5.2 3.8 9.4 8.8 9.95C12.2 14.6 15 9 21 5c-1.8-1.9-5.4-3-9-3z" />
    </svg>
  );
}


// Full-bleed scattered illustration sitting behind page content
export function ThemeBackdrop({ themeKey }) {
  if (themeKey === "arctic") return <ArcticBackdrop />;
  if (themeKey === "space") return <SpaceBackdrop />;
  return <JungleBackdrop />;
}


function JungleBackdrop() {
  const leaves = [
    { x: 80,  y: 860, rot: -20,  scale: 1.6, color: "#14532d", opacity: 0.45 },
    { x: 230, y: 960, rot: 10,   scale: 1.1, color: "#3f6212", opacity: 0.35 },
    { x: 900, y: 110, rot: 200,  scale: 1.4, color: "#166534", opacity: 0.35 },
    { x: 60,  y: 130, rot: 140,  scale: 0.9, color: "#4d7c0f", opacity: 0.3 },
    { x: 950, y: 890, rot: 60,   scale: 1.3, color: "#365314", opacity: 0.3 },
    { x: 500, y: 980, rot: -10,  scale: 1,   color: "#15803d", opacity: 0.25 }
  ];

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
    >
      {leaves.map((leaf, i) => (
        <path
          key={i}
          d="M0,0 C 50,-70 150,-70 200,0 C 150,70 50,70 0,0 Z"
          fill={leaf.color}
          opacity={leaf.opacity}
          transform={`translate(${leaf.x}, ${leaf.y}) rotate(${leaf.rot}) scale(${leaf.scale})`}
        />
      ))}
    </svg>
  );
}


function ArcticBackdrop() {
  const flakes = [
    { x: 120, y: 150, scale: 1.4, opacity: 0.3 },
    { x: 850, y: 200, scale: 1,   opacity: 0.25 },
    { x: 500, y: 80,  scale: 0.8, opacity: 0.2 },
    { x: 200, y: 400, scale: 1.2, opacity: 0.18 },
    { x: 920, y: 500, scale: 0.9, opacity: 0.22 },
    { x: 650, y: 320, scale: 1.1, opacity: 0.2 }
  ];

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
    >
      <polygon
        points="0,1000 0,750 150,550 280,700 420,500 600,720 760,580 900,750 1000,650 1000,1000"
        fill="#e0f2fe"
        opacity="0.15"
      />
      <polygon
        points="0,1000 0,850 200,680 380,820 560,650 740,830 920,700 1000,800 1000,1000"
        fill="#bae6fd"
        opacity="0.12"
      />

      {flakes.map((f, i) => (
        <g
          key={i}
          stroke="#e0f2fe"
          strokeWidth="3"
          strokeLinecap="round"
          opacity={f.opacity}
          transform={`translate(${f.x}, ${f.y}) scale(${f.scale})`}
        >
          <line x1="0" y1="-30" x2="0" y2="30" />
          <line x1="-26" y1="-15" x2="26" y2="15" />
          <line x1="-26" y1="15" x2="26" y2="-15" />
        </g>
      ))}
    </svg>
  );
}


function SpaceBackdrop() {
  const stars = [
    { x: 60,  y: 80,  r: 2,   opacity: 0.8 },
    { x: 180, y: 200, r: 1.5, opacity: 0.6 },
    { x: 320, y: 60,  r: 2.5, opacity: 0.7 },
    { x: 480, y: 150, r: 1,   opacity: 0.5 },
    { x: 620, y: 90,  r: 2,   opacity: 0.6 },
    { x: 760, y: 220, r: 1.5, opacity: 0.5 },
    { x: 880, y: 70,  r: 2,   opacity: 0.7 },
    { x: 940, y: 300, r: 1,   opacity: 0.4 },
    { x: 100, y: 400, r: 1.5, opacity: 0.4 },
    { x: 260, y: 500, r: 2,   opacity: 0.5 },
    { x: 420, y: 420, r: 1,   opacity: 0.4 },
    { x: 580, y: 480, r: 1.5, opacity: 0.5 },
    { x: 740, y: 560, r: 2,   opacity: 0.5 },
    { x: 900, y: 480, r: 1,   opacity: 0.4 },
    { x: 150, y: 700, r: 1.5, opacity: 0.4 },
    { x: 350, y: 800, r: 2,   opacity: 0.5 },
    { x: 550, y: 720, r: 1,   opacity: 0.4 },
    { x: 750, y: 850, r: 1.5, opacity: 0.4 },
    { x: 920, y: 780, r: 2,   opacity: 0.5 }
  ];

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
    >
      {stars.map((s, i) => (
        <circle
          key={i}
          cx={s.x}
          cy={s.y}
          r={s.r}
          fill="#f5f3ff"
          opacity={s.opacity}
        />
      ))}

      <g transform="translate(850, 850)" opacity="0.5">
        <ellipse
          cx="0"
          cy="0"
          rx="110"
          ry="28"
          fill="none"
          stroke="#c4b5fd"
          strokeWidth="4"
          transform="rotate(-20)"
        />
        <circle cx="0" cy="0" r="70" fill="#7c3aed" />
        <circle cx="-20" cy="-15" r="12" fill="#6d28d9" opacity="0.6" />
        <circle cx="25" cy="10" r="8" fill="#6d28d9" opacity="0.5" />
      </g>
    </svg>
  );
}