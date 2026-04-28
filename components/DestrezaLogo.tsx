interface DestrezaLogoProps {
  variant?: "full" | "icon" | "white";
  height?: number;
  showTagline?: boolean;
}

/* Colores exactos del logo */
const NAVY   = "#152D4B";
const GOLD   = "#D4A020";
const BRONZE = "#9B6714";
const TEAL   = "#1E7A8A";

/**
 * Logo SVG de Destreza — 4 hexágonos en honeycomb + texto
 * variant="full"   → hexágonos + "DESTREZA" + tagline opcional
 * variant="icon"   → solo hexágonos
 * variant="white"  → todo en blanco (para fondos oscuros)
 */
export default function DestrezaLogo({
  variant = "full",
  height = 44,
  showTagline = false,
}: DestrezaLogoProps) {

  /* Dimensiones del ícono de hexágonos */
  const iconW = 55;
  const iconH = 56;

  /* Radio del hexágono (punta arriba) */
  const r = 13;
  const dx = r * 0.866; // 11.26
  const dy = r * 0.5;   // 6.5

  /* Función para generar puntos de polígono */
  const hex = (cx: number, cy: number) =>
    `${cx},${cy - r} ${cx + dx},${cy - dy} ${cx + dx},${cy + dy} ${cx},${cy + r} ${cx - dx},${cy + dy} ${cx - dx},${cy - dy}`;

  /* Centros de los 4 hexágonos */
  const navyPos   = { cx: 37,   cy: 13 };
  const goldPos   = { cx: 24.5, cy: 26 };
  const bronzePos = { cx: 12,   cy: 39 };
  const tealPos   = { cx: 34.5, cy: 39 };

  /* En variante white, todo blanco con transparencias */
  const isWhite = variant === "white";
  const navyFill   = isWhite ? "rgba(255,255,255,0.9)" : NAVY;
  const goldFill   = isWhite ? "rgba(255,255,255,0.7)" : GOLD;
  const bronzeFill = isWhite ? "rgba(255,255,255,0.5)" : BRONZE;
  const tealFill   = isWhite ? "rgba(255,255,255,0.6)" : TEAL;
  const textColor  = isWhite ? "#ffffff" : "#0D0D0D";
  const tagColor   = isWhite ? "rgba(255,255,255,0.55)" : "#666";

  /* ── Solo ícono ── */
  if (variant === "icon") {
    const scale = height / iconH;
    return (
      <svg
        viewBox={`0 0 ${iconW} ${iconH}`}
        width={iconW * scale}
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Destreza Consultores"
      >
        <polygon points={hex(navyPos.cx,   navyPos.cy)}   fill={navyFill} />
        <polygon points={hex(goldPos.cx,   goldPos.cy)}   fill={goldFill} />
        <polygon points={hex(bronzePos.cx, bronzePos.cy)} fill={bronzeFill} />
        <polygon points={hex(tealPos.cx,   tealPos.cy)}   fill={tealFill} />
      </svg>
    );
  }

  /* ── Full logo ── */
  /* Cálculo de tamaños de texto según height */
  const brandSize   = height * 0.36;
  const taglineSize = height * 0.155;
  const textX       = iconW + 6;
  const brandY      = showTagline ? height * 0.46 : height * 0.6;
  const taglineY    = brandY + brandSize * 0.3 + taglineSize + 2;
  const totalW      = iconW + 6 + brandSize * 5.8; // aproximado

  const scale = height / iconH;

  return (
    <svg
      viewBox={`0 0 ${totalW} ${iconH}`}
      width={totalW * scale}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Destreza Formación y Consultoría"
    >
      {/* Hexágonos */}
      <polygon points={hex(navyPos.cx,   navyPos.cy)}   fill={navyFill} />
      <polygon points={hex(goldPos.cx,   goldPos.cy)}   fill={goldFill} />
      <polygon points={hex(bronzePos.cx, bronzePos.cy)} fill={bronzeFill} />
      <polygon points={hex(tealPos.cx,   tealPos.cy)}   fill={tealFill} />

      {/* DESTREZA */}
      <text
        x={textX}
        y={brandY}
        fill={textColor}
        fontSize={brandSize}
        fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
        fontWeight="700"
        letterSpacing="1.5"
      >
        DESTREZA
      </text>

      {/* Tagline opcional */}
      {showTagline && (
        <text
          x={textX}
          y={taglineY}
          fill={tagColor}
          fontSize={taglineSize}
          fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
          fontWeight="500"
          letterSpacing="2.5"
        >
          FORMACION Y CONSULTORIA
        </text>
      )}
    </svg>
  );
}
