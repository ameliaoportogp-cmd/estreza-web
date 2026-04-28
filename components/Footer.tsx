"use client";
import Link from "next/link";
import DestrezaLogo from "@/components/DestrezaLogo";
import ProfessionalIcon from "@/components/ProfessionalIcon";

const links = {
  servicios: [
    ["Cumplimiento Normativo",   "/servicios/cumplimiento"],
    ["Auditoría de Sistemas TI", "/servicios/auditoria-ti"],
    ["Automatización",           "/servicios/automatizacion"],
    ["Procesos Operativos",      "/servicios/procesos"],
    ["Gestión de Riesgos",       "/servicios/riesgos"],
  ],
  academia: [
    ["Cursos en Línea",       "/academia/cursos"],
    ["Certificaciones",       "/academia/certificaciones"],
    ["Talleres Presenciales", "/academia/talleres"],
    ["Ver todos los cursos",  "/academia"],
  ],
};

const sociales = [
  { icon: "facebook" as const, href: "https://facebook.com" },
  { icon: "instagram" as const, href: "https://instagram.com" },
  { icon: "linkedin" as const, href: "https://linkedin.com" },
  { icon: "youtube" as const, href: "https://youtube.com" },
];

export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(180deg, var(--navy-deep) 0%, #081628 100%)", color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-body)", borderTop: "1px solid rgba(30,122,136,0.2)" }}>

      {/* ── Banda superior teal ── */}
      <div style={{ height: 3, background: "linear-gradient(90deg, var(--teal) 0%, var(--gold) 50%, var(--teal) 100%)" }} />

      <div className="container" style={{ padding: "68px 24px 30px" }}>
        <div className="responsive-grid-2" style={{ gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr", gap: 48, marginBottom: 48 }}>

          {/* ── Brand ── */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <div style={{ opacity: 0.92 }}>
                <DestrezaLogo variant="white" height={54} showTagline={false} />
              </div>
            </div>
            <p style={{ fontSize: "0.98rem", lineHeight: 1.82, color: "rgba(255,255,255,0.62)", marginBottom: 24, maxWidth: 320 }}>
              Más de 20 años acompañando a instituciones financieras en El Salvador en cumplimiento normativo, auditoría y transformación digital.
            </p>
            {/* Sociales */}
            <div style={{ display: "flex", gap: 10 }}>
              {sociales.map(s => (
                <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ width: 34, height: 34, borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.72rem", fontWeight: 700, color: "rgba(255,255,255,0.4)", transition: "var(--transition)" }}
                  onMouseOver={e => { const el = e.currentTarget; el.style.background = "var(--teal)"; el.style.color = "#fff"; el.style.borderColor = "var(--teal)"; }}
                  onMouseOut={e => { const el = e.currentTarget; el.style.background = "transparent"; el.style.color = "rgba(255,255,255,0.4)"; el.style.borderColor = "rgba(255,255,255,0.1)"; }}>
                  <ProfessionalIcon name={s.icon} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Servicios ── */}
          <div>
            <h4 style={{ color: "var(--teal-light)", fontWeight: 700, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 18 }}>Servicios</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {links.servicios.map(([label, href]) => (
                <li key={href}>
                  <Link href={href}
                    style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.62)", transition: "var(--transition)", display: "flex", alignItems: "center", gap: 6 }}
                    onMouseOver={e => (e.currentTarget.style.color = "var(--gold)")}
                    onMouseOut={e => (e.currentTarget.style.color = "rgba(255,255,255,0.62)")}>
                    <span style={{ color: "var(--teal)", display: "inline-flex" }}><ProfessionalIcon name="arrow-right" size={12} /></span>{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Academia ── */}
          <div>
            <h4 style={{ color: "var(--teal-light)", fontWeight: 700, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 18 }}>Academia</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {links.academia.map(([label, href]) => (
                <li key={href}>
                  <Link href={href}
                    style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.62)", transition: "var(--transition)", display: "flex", alignItems: "center", gap: 6 }}
                    onMouseOver={e => (e.currentTarget.style.color = "var(--gold)")}
                    onMouseOut={e => (e.currentTarget.style.color = "rgba(255,255,255,0.62)")}>
                    <span style={{ color: "var(--teal)", display: "inline-flex" }}><ProfessionalIcon name="arrow-right" size={12} /></span>{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contacto ── */}
          <div>
            <h4 style={{ color: "var(--teal-light)", fontWeight: 700, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 18 }}>Contacto</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 24 }}>
              {[
                ["phone", "+503 7742-5385"],
                ["mail", "info@destrezasv.com"],
                ["location", "Km 7½ Planes de Renderos, San Salvador"],
                ["clock", "Lun–Sáb  8:00 AM – 5:00 PM"],
              ].map(([icon, text]) => (
                <div key={text} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ color: "var(--gold-light)", flexShrink: 0, marginTop: 1 }}><ProfessionalIcon name={icon as "phone" | "mail" | "location" | "clock"} size={16} /></span>
                  <span style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.62)", lineHeight: 1.65 }}>{text}</span>
                </div>
              ))}
            </div>
            <Link href="/prueba-gratis" className="btn-primary" style={{ fontSize: "0.9rem", padding: "11px 20px" }}>
              Prueba Gratis →
            </Link>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.38)" }}>
            © {new Date().getFullYear()} Destreza Formación y Consultoría. Todos los derechos reservados.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {[["Privacidad", "/privacidad"], ["Términos", "/terminos"]].map(([label, href]) => (
              <Link key={href} href={href}
                style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.38)", transition: "var(--transition)" }}
                onMouseOver={e => (e.currentTarget.style.color = "var(--teal-light)")}
                onMouseOut={e => (e.currentTarget.style.color = "rgba(255,255,255,0.38)")}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
