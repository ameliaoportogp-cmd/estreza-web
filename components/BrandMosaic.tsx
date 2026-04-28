export default function BrandMosaic({
  compact = false,
}: {
  compact?: boolean;
}) {
  const tiles = compact
    ? [
        { x: 94, y: 42, fill: "#152D4B", opacity: 1, scale: 1.08 },
        { x: 64, y: 76, fill: "#D4A020", opacity: 0.98, scale: 0.95 },
        { x: 34, y: 110, fill: "#B9872C", opacity: 0.92, scale: 0.86 },
        { x: 65, y: 110, fill: "#2E7C8A", opacity: 1, scale: 0.95 },
      ]
    : [
        { x: 128, y: 42, fill: "#152D4B", opacity: 1, scale: 1.18 },
        { x: 82, y: 92, fill: "#D4A020", opacity: 0.98, scale: 1 },
        { x: 36, y: 142, fill: "#B9872C", opacity: 0.92, scale: 0.88 },
        { x: 84, y: 142, fill: "#2E7C8A", opacity: 1, scale: 1 },
        { x: 132, y: 142, fill: "#214F5C", opacity: 0.88, scale: 0.9 },
      ];

  return (
    <svg
      width={compact ? 170 : 250}
      height={compact ? 150 : 200}
      viewBox={compact ? "0 0 170 150" : "0 0 250 200"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="10" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="100%" height="100%" rx="28" fill="url(#mosaicBg)" />
      <rect x="1" y="1" width={compact ? 168 : 248} height={compact ? 148 : 198} rx="27" stroke="rgba(255,255,255,0.16)" />

      {tiles.map((tile, index) => (
        <g
          key={`${tile.x}-${tile.y}-${index}`}
          transform={`translate(${tile.x} ${tile.y}) scale(${tile.scale})`}
          opacity={tile.opacity}
          filter="url(#softGlow)"
        >
          <polygon
            points="0,-22 19,-11 19,11 0,22 -19,11 -19,-11"
            fill={tile.fill}
          />
        </g>
      ))}

      <g opacity="0.14">
        <path d="M24 36h74" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 52h52" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 126h86" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 142h62" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      </g>

      <defs>
        <linearGradient id="mosaicBg" x1="20" y1="20" x2="220" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0B1B2D" />
          <stop offset="0.52" stopColor="#152D4B" />
          <stop offset="1" stopColor="#214F5C" />
        </linearGradient>
      </defs>
    </svg>
  );
}
