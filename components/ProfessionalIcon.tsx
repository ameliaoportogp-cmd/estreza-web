type IconName =
  | "compliance"
  | "audit"
  | "automation"
  | "operations"
  | "risk"
  | "academy"
  | "certification"
  | "workshop"
  | "phone"
  | "mail"
  | "clock"
  | "location"
  | "facebook"
  | "instagram"
  | "linkedin"
  | "youtube"
  | "experience"
  | "institutions"
  | "professionals"
  | "satisfaction"
  | "library"
  | "specialist"
  | "course"
  | "chart"
  | "technology"
  | "shield-check"
  | "arrow-right"
  | "check";

export default function ProfessionalIcon({
  name,
  size = 20,
  stroke = 1.8,
}: {
  name: IconName;
  size?: number;
  stroke?: number;
}) {
  const commonProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  switch (name) {
    case "compliance":
      return (
        <svg {...commonProps}>
          <path d="M12 3 5 6v5c0 5 3.2 8.2 7 10 3.8-1.8 7-5 7-10V6l-7-3Z" stroke="currentColor" strokeWidth={stroke} />
          <path d="m9.5 12 1.8 1.8L15 10.2" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "audit":
      return (
        <svg {...commonProps}>
          <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth={stroke} />
          <path d="M16 16 20 20" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
          <path d="M8.5 11h5" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
        </svg>
      );
    case "automation":
      return (
        <svg {...commonProps}>
          <path d="M9 4 5 8l4 4" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
          <path d="m15 20 4-4-4-4" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19 8h-5a4 4 0 0 0-4 4v0a4 4 0 0 1-4 4H5" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "operations":
      return (
        <svg {...commonProps}>
          <rect x="4" y="5" width="16" height="14" rx="2.5" stroke="currentColor" strokeWidth={stroke} />
          <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
        </svg>
      );
    case "risk":
      return (
        <svg {...commonProps}>
          <path d="M12 3 4.5 7.5V12c0 4.8 3 7.8 7.5 9 4.5-1.2 7.5-4.2 7.5-9V7.5L12 3Z" stroke="currentColor" strokeWidth={stroke} />
          <path d="M12 8v4" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
          <circle cx="12" cy="15.5" r="0.9" fill="currentColor" />
        </svg>
      );
    case "academy":
      return (
        <svg {...commonProps}>
          <path d="M3.5 8 12 4l8.5 4L12 12 3.5 8Z" stroke="currentColor" strokeWidth={stroke} strokeLinejoin="round" />
          <path d="M7 10.2V15c0 .9 2.1 2.5 5 2.5s5-1.6 5-2.5v-4.8" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "certification":
      return (
        <svg {...commonProps}>
          <rect x="5" y="4" width="14" height="11" rx="2" stroke="currentColor" strokeWidth={stroke} />
          <path d="m9 19 3-2 3 2v-4H9v4Z" stroke="currentColor" strokeWidth={stroke} strokeLinejoin="round" />
          <path d="M8.5 8.5h7" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
        </svg>
      );
    case "workshop":
      return (
        <svg {...commonProps}>
          <path d="M4 19h16" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
          <path d="M6 19V9l6-4 6 4v10" stroke="currentColor" strokeWidth={stroke} strokeLinejoin="round" />
          <path d="M10 13h4" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
        </svg>
      );
    case "phone":
      return (
        <svg {...commonProps}>
          <path d="M7.7 4.8c.6-.5 1.5-.4 1.9.2l1.4 2c.4.6.3 1.4-.2 1.9l-1.2 1c1 2 2.7 3.7 4.7 4.7l1-1.2c.5-.5 1.3-.6 1.9-.2l2 1.4c.6.4.7 1.3.2 1.9l-1 1.2c-.7.9-1.9 1.3-3 1-6-1.6-10.6-6.2-12.2-12.2-.3-1.1.1-2.3 1-3l1.5-.7Z" stroke="currentColor" strokeWidth={stroke} strokeLinejoin="round" />
        </svg>
      );
    case "mail":
      return (
        <svg {...commonProps}>
          <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth={stroke} />
          <path d="m5 7 7 5 7-5" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "clock":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth={stroke} />
          <path d="M12 8v4l2.8 1.8" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "location":
      return (
        <svg {...commonProps}>
          <path d="M12 20c3.5-3.7 5.5-6.6 5.5-9.3A5.5 5.5 0 1 0 6.5 10.7C6.5 13.4 8.5 16.3 12 20Z" stroke="currentColor" strokeWidth={stroke} />
          <circle cx="12" cy="10.5" r="1.8" stroke="currentColor" strokeWidth={stroke} />
        </svg>
      );
    case "facebook":
      return social("M14 8.2h-1.4c-.7 0-1.1.4-1.1 1.2v1.2H14l-.4 2.4h-2.1V19H8.9v-6h-2V10.6h2V9.2c0-2 1.2-3.2 3.1-3.2H14v2.2Z");
    case "instagram":
      return (
        <svg {...commonProps}>
          <rect x="4.5" y="4.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth={stroke} />
          <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth={stroke} />
          <circle cx="16.6" cy="7.6" r="0.8" fill="currentColor" />
        </svg>
      );
    case "linkedin":
      return social("M7.1 9.4V17M7.1 7.1a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6ZM11 17V9.4h3.3c1.8 0 2.8 1.1 2.8 3.1V17m-6.1-4.2c0-1.8 1.1-3.4 3.2-3.4");
    case "youtube":
      return (
        <svg {...commonProps}>
          <rect x="3.5" y="6.5" width="17" height="11" rx="3" stroke="currentColor" strokeWidth={stroke} />
          <path d="m10 9.5 5 3-5 3v-6Z" fill="currentColor" />
        </svg>
      );
    case "experience":
      return (
        <svg {...commonProps}>
          <path d="m12 4 2 4 4.5.6-3.2 3.1.8 4.3L12 14l-4.1 2.1.8-4.3-3.2-3.1L10 8l2-4Z" stroke="currentColor" strokeWidth={stroke} strokeLinejoin="round" />
        </svg>
      );
    case "institutions":
      return (
        <svg {...commonProps}>
          <path d="M4 9 12 5l8 4v2H4V9Z" stroke="currentColor" strokeWidth={stroke} strokeLinejoin="round" />
          <path d="M6 11v6M10 11v6M14 11v6M18 11v6M4 17h16" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
        </svg>
      );
    case "professionals":
      return (
        <svg {...commonProps}>
          <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth={stroke} />
          <circle cx="16.5" cy="10" r="2" stroke="currentColor" strokeWidth={stroke} />
          <path d="M4.5 18c.5-2.6 2.4-4 4.5-4s4 1.4 4.5 4M13.5 18c.3-1.8 1.7-2.8 3.3-2.8 1.1 0 2.1.4 2.8 1.3" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
        </svg>
      );
    case "satisfaction":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth={stroke} />
          <path d="M9 14.2c.8.7 1.8 1 3 1s2.2-.3 3-1M9 10h.01M15 10h.01" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
        </svg>
      );
    case "library":
      return (
        <svg {...commonProps}>
          <path d="M6 5.5h9a2 2 0 0 1 2 2V18H8a2 2 0 0 0-2 2V5.5Z" stroke="currentColor" strokeWidth={stroke} strokeLinejoin="round" />
          <path d="M8 7.5h8M8 11h8M8 14.5h5" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
        </svg>
      );
    case "specialist":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="8.5" r="3" stroke="currentColor" strokeWidth={stroke} />
          <path d="M6.5 18c.6-2.8 2.7-4.5 5.5-4.5s4.9 1.7 5.5 4.5" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
        </svg>
      );
    case "course":
      return (
        <svg {...commonProps}>
          <path d="M5.5 6.5h8a2 2 0 0 1 2 2v9h-8a2 2 0 0 0-2 2v-13Z" stroke="currentColor" strokeWidth={stroke} strokeLinejoin="round" />
          <path d="M8.5 9.5h5M8.5 12.5h5" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
        </svg>
      );
    case "chart":
      return (
        <svg {...commonProps}>
          <path d="M5 18V9M12 18V6M19 18v-4" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
          <path d="M4 18h16" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
        </svg>
      );
    case "technology":
      return (
        <svg {...commonProps}>
          <rect x="4" y="5" width="16" height="11" rx="2" stroke="currentColor" strokeWidth={stroke} />
          <path d="M9 19h6M12 16v3" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
        </svg>
      );
    case "shield-check":
      return (
        <svg {...commonProps}>
          <path d="M12 3 5 6v5c0 5 3.2 8.2 7 10 3.8-1.8 7-5 7-10V6l-7-3Z" stroke="currentColor" strokeWidth={stroke} />
          <path d="m9.8 12.2 1.5 1.6 3.1-3.3" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...commonProps}>
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "check":
      return (
        <svg {...commonProps}>
          <path d="m5.5 12.5 4 4L18.5 7.5" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

function social(path: string) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d={path} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconBadge({
  name,
  size = 20,
  tone = "gold",
}: {
  name: IconName;
  size?: number;
  tone?: "gold" | "teal" | "navy";
}) {
  const palette = {
    gold: {
      bg: "rgba(212,160,32,0.12)",
      border: "rgba(212,160,32,0.22)",
      color: "var(--gold)",
    },
    teal: {
      bg: "rgba(46,124,138,0.12)",
      border: "rgba(46,124,138,0.22)",
      color: "var(--teal)",
    },
    navy: {
      bg: "rgba(21,45,75,0.08)",
      border: "rgba(21,45,75,0.14)",
      color: "var(--navy)",
    },
  } as const;

  const selected = palette[tone];

  return (
    <span
      style={{
        width: size + 24,
        height: size + 24,
        borderRadius: 14,
        background: selected.bg,
        border: `1px solid ${selected.border}`,
        color: selected.color,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <ProfessionalIcon name={name} size={size} />
    </span>
  );
}
