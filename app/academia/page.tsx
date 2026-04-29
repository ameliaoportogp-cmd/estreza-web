import Link from "next/link";
import ProfessionalIcon from "@/components/ProfessionalIcon";

const cursos = [
  { icon: "chart" as const, titulo: "Cumplimiento Normativo SSF",          nivel: "Intermedio", horas: "16h", precio: "$120", categoria: "Cumplimiento", publico: "Oficiales de cumplimiento y auditores internos", desc: "Marco normativo vigente, NRP-15, NRP-16, NPSBCR y su aplicación práctica.",           levelColor: "#D4A020" },
  { icon: "technology" as const, titulo: "Auditoría de Sistemas Core Bancarios", nivel: "Avanzado",   horas: "24h", precio: "$180", categoria: "TI", publico: "Auditoría TI, tecnología y seguridad", desc: "Técnicas de auditoría a sistemas Cobis, T24, Flexcube y otras plataformas.",        levelColor: "#A53A2A" },
  { icon: "risk" as const, titulo: "Gestión de Riesgos Operacionales",    nivel: "Básico",      horas: "12h", precio: "$90",  categoria: "Riesgos", publico: "Riesgos, operaciones y control interno", desc: "Metodología COSO ERM, identificación y mapeo de riesgos, matrices y planes.",       levelColor: "#1E7A88" },
  { icon: "certification" as const, titulo: "LAFT: Prevención de Lavado de Dinero", nivel: "Intermedio", horas: "20h", precio: "$150", categoria: "Cumplimiento", publico: "Cumplimiento, agencias y cajas", desc: "Ley ALD, tipologías, señales de alerta y programa de cumplimiento.",                 levelColor: "#D4A020" },
  { icon: "automation" as const, titulo: "Automatización con Power Automate",   nivel: "Básico",      horas: "10h", precio: "$80",  categoria: "Tecnología", publico: "Equipos operativos y de mejora continua", desc: "Diseña flujos automáticos para procesos bancarios sin programación.",               levelColor: "#1E7A88" },
  { icon: "operations" as const, titulo: "Manuales y Políticas Institucionales", nivel: "Básico",      horas: "8h",  precio: "$70",  categoria: "Operaciones", publico: "Áreas de procesos, calidad y cumplimiento", desc: "Redacción, estructura y gestión documental de políticas y procedimientos.",        levelColor: "#A07814" },
];

export default function AcademiaPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, var(--navy-deep) 0%, var(--navy-light) 100%)", padding: "72px 0 64px", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-20%", right: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,160,32,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="chip" style={{ marginBottom: 20 }}>Academia Destreza</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", marginBottom: 16 }}>
            Capacitación especializada<br />para el sector financiero
          </h1>
          <p style={{ color: "rgba(255,255,255,0.84)", fontSize: "1.1rem", maxWidth: 620, lineHeight: 1.82 }}>
            Cursos diseñados por especialistas con experiencia real en instituciones financieras salvadoreñas.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}>
            <Link href="/prueba-gratis" className="btn-primary">Inscribirse ahora</Link>
            <a href="#cursos" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.82)", fontSize: "0.98rem", fontWeight: 600 }}>Ver catálogo ↓</a>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section style={{ background: "linear-gradient(135deg, var(--teal) 0%, #155F6A 100%)", padding: "44px 0" }}>
        <div className="container">
          <div className="academy-benefit-grid">
            {[
              ["academy", "Instructores con +20 años de experiencia"],
              ["technology", "Acceso en línea desde cualquier dispositivo"],
              ["certification", "Certificado con validez institucional"],
              ["specialist", "Grupos reducidos · soporte personalizado"],
            ].map(([icon, label], i) => (
              <div key={label as string} style={{ textAlign: "center", padding: "20px 16px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.15)" : "none" }}>
                <div style={{ width: 52, height: 52, margin: "0 auto 12px", borderRadius: 14, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <ProfessionalIcon name={icon as "academy" | "technology" | "certification" | "specialist"} size={22} />
                </div>
                <p style={{ fontSize: "0.98rem", color: "rgba(255,255,255,0.92)", lineHeight: 1.68 }}>{label as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catálogo */}
      <section id="cursos" className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label">Catálogo</div>
            <h2 className="section-title">Nuestros cursos</h2>
            <p className="section-desc" style={{ margin: "0 auto", maxWidth: 700 }}>
              Programas pensados para que tu equipo aplique lo aprendido en cumplimiento, tecnología, riesgos y operaciones desde la primera semana.
            </p>
          </div>
          <div className="responsive-grid-3">
            {cursos.map(c => (
              <div key={c.titulo} className="card" style={{ borderTop: `3px solid ${c.levelColor}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                  <span style={{ width: 46, height: 46, borderRadius: 12, display: "inline-flex", alignItems: "center", justifyContent: "center", background: `${c.levelColor}18`, color: c.levelColor }}>
                    <ProfessionalIcon name={c.icon} size={22} />
                  </span>
                  <span style={{ fontSize: "0.86rem", fontWeight: 700, padding: "5px 12px", borderRadius: 100, background: `${c.levelColor}18`, color: c.levelColor }}>{c.nivel}</span>
                </div>
                <span style={{ fontSize: "0.86rem", fontWeight: 700, color: "var(--teal)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10, display: "block" }}>{c.categoria}</span>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "var(--navy)", marginBottom: 10, lineHeight: 1.35 }}>{c.titulo}</h3>
                <p style={{ fontSize: "0.98rem", color: "var(--gray-600)", lineHeight: 1.72, marginBottom: 14 }}>{c.desc}</p>
                <p style={{ fontSize: "0.96rem", color: "var(--navy)", lineHeight: 1.65, marginBottom: 20, fontWeight: 600 }}>
                  Ideal para: {c.publico}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--gray-100)", paddingTop: 16 }}>
                  <div>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "var(--navy)" }}>{c.precio}</span>
                    <span style={{ fontSize: "0.9rem", color: "var(--gray-600)", marginLeft: 8 }}>· {c.horas}</span>
                  </div>
                  <Link href="/prueba-gratis" className="btn-primary" style={{ padding: "10px 20px", fontSize: "0.96rem" }}>Inscribirme</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--gold-soft)", padding: "64px 0", borderTop: "1px solid rgba(212,160,32,0.2)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "var(--navy)", marginBottom: 14 }}>¿Capacitación para tu equipo?</h2>
          <p style={{ color: "var(--gray-600)", marginBottom: 32, maxWidth: 460, margin: "0 auto 32px" }}>
            Ofrecemos formatos in-company y personalizados para tu institución.
          </p>
          <Link href="/contacto" className="btn-primary" style={{ padding: "14px 36px" }}>Solicitar capacitación grupal</Link>
        </div>
      </section>
    </>
  );
}
