import Link from "next/link";
import ProfessionalIcon, { IconBadge } from "@/components/ProfessionalIcon";

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, var(--navy-deep) 0%, var(--navy-light) 100%)", padding: "72px 0 64px", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-30%", right: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(30,122,136,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-20%", left: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,160,32,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="chip-teal" style={{ marginBottom: 20 }}>Quiénes somos</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", marginBottom: 16 }}>
            Más de 20 años al servicio<br />del sector financiero
          </h1>
          <p style={{ color: "rgba(255,255,255,0.86)", fontSize: "1.14rem", maxWidth: 620, lineHeight: 1.82 }}>
            Consultora salvadoreña especializada en cumplimiento normativo, auditoría de sistemas y capacitación para instituciones del sistema financiero.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="section">
        <div className="container">
          <div className="about-story-grid">
            <div>
              <div className="section-label">Nuestra historia</div>
              <h2 className="section-title">Nacimos de la experiencia en campo</h2>
              <p style={{ color: "var(--gray-600)", lineHeight: 1.85, marginBottom: 18, fontSize: "1rem" }}>
                Destreza nació de la experiencia directa de sus fundadores en la supervisión y auditoría del sistema financiero de El Salvador. Tras años trabajando dentro de instituciones reguladas, identificamos una brecha: muchas entidades no tenían acceso a consultoría especializada en la realidad regulatoria local.
              </p>
              <p style={{ color: "var(--gray-600)", lineHeight: 1.85, marginBottom: 36, fontSize: "1rem" }}>
                Hoy acompañamos a bancos, cooperativas, aseguradoras y financieras con soluciones prácticas, documentadas y alineadas a las exigencias de la SSF, el BCR y las mejores prácticas internacionales.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[["location", "El Salvador", "Presencia en todo el país", "teal"], ["institutions", "Regional", "Experiencia en Centroamérica", "gold"]].map(([icon, t, d, tone]) => (
                  <div key={t} style={{ padding: "20px", background: "var(--gray-50)", borderRadius: 12, borderLeft: "3px solid var(--teal)" }}>
                    <div style={{ marginBottom: 12 }}><IconBadge name={icon as "location" | "institutions"} tone={tone as "teal" | "gold"} size={18} /></div>
                    <div style={{ fontWeight: 700, color: "var(--navy)", fontSize: "1rem" }}>{t}</div>
                  <div style={{ fontSize: "1rem", color: "var(--gray-600)", marginTop: 6, lineHeight: 1.65 }}>{d}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[["20+", "Años de experiencia"], ["150+", "Instituciones atendidas"], ["500+", "Profesionales capacitados"], ["98%", "Satisfacción del cliente"]].map(([n, l], i) => (
                <div key={l} style={{ background: i % 2 === 0 ? "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)" : "linear-gradient(135deg, var(--teal) 0%, #155F6A 100%)", borderRadius: 16, padding: "32px 24px", textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", color: i % 2 === 0 ? "var(--gold)" : "#fff", lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: "1rem", color: "rgba(255,255,255,0.84)", marginTop: 10, lineHeight: 1.55 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label">Nuestro equipo</div>
            <h2 className="section-title">Especialistas con experiencia real</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { emoji: "⚖️", nombre: "Especialistas en Cumplimiento", rol: "Regulación SSF · BCR · SUGEF", exp: "15–25 años de experiencia en auditoría y supervisión del sistema financiero salvadoreño.", color: "var(--gold)" },
              { emoji: "technology", nombre: "Consultores de Tecnología", rol: "Auditoría TI · Core Bancario", exp: "Expertos en evaluación de sistemas Cobis, T24, Flexcube y plataformas de banca digital.", color: "var(--teal)" },
              { emoji: "academy", nombre: "Facilitadores Academia", rol: "Educación Financiera", exp: "Profesionales con experiencia docente y práctica en formación de equipos institucionales.", color: "var(--gold)" },
            ].map(m => (
              <div key={m.nombre} className="card" style={{ textAlign: "center", borderTop: `3px solid ${m.color}` }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: m.color === "var(--gold)" ? "var(--gold-soft)" : "var(--teal-soft)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", color: m.color }}>
                  {"⚖️" === m.emoji ? <ProfessionalIcon name="compliance" size={28} /> : <ProfessionalIcon name={m.emoji as "technology" | "academy"} size={28} />}
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "var(--navy)", marginBottom: 6 }}>{m.nombre}</h3>
                <p style={{ fontSize: "0.98rem", color: m.color, fontWeight: 700, marginBottom: 12 }}>{m.rol}</p>
                <p style={{ fontSize: "1rem", color: "var(--gray-600)", lineHeight: 1.72 }}>{m.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misión / Visión */}
      <section className="section">
        <div className="container">
          <div className="about-mission-grid">
            <div style={{ background: "linear-gradient(145deg, var(--navy) 0%, var(--navy-light) 100%)", borderRadius: 18, padding: "40px 36px", color: "#fff", borderTop: "3px solid var(--gold)" }}>
              <div style={{ width: 58, height: 58, marginBottom: 18, borderRadius: 16, background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gold-light)" }}><ProfessionalIcon name="chart" size={28} /></div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "var(--gold)", marginBottom: 14 }}>Nuestra Misión</h3>
              <p style={{ color: "rgba(255,255,255,0.86)", lineHeight: 1.85, fontSize: "1.04rem" }}>Contribuir al fortalecimiento del sistema financiero salvadoreño brindando servicios de consultoría, auditoría y capacitación que eleven los estándares de cumplimiento y gestión de riesgos.</p>
            </div>
            <div style={{ background: "linear-gradient(145deg, var(--teal) 0%, #155F6A 100%)", borderRadius: 18, padding: "40px 36px", color: "#fff", borderTop: "3px solid var(--gold)" }}>
              <div style={{ width: 58, height: 58, marginBottom: 18, borderRadius: 16, background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}><ProfessionalIcon name="arrow-right" size={28} /></div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "#F0C040", marginBottom: 14 }}>Nuestra Visión</h3>
              <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.85, fontSize: "1rem" }}>Ser la consultora de referencia en El Salvador y Centroamérica para instituciones financieras que buscan transformar el cumplimiento normativo en una ventaja estratégica.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 100%)", padding: "64px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "#fff", marginBottom: 14 }}>¿Quieres trabajar con nosotros?</h2>
          <p style={{ color: "rgba(255,255,255,0.84)", marginBottom: 32, fontSize: "1.06rem", lineHeight: 1.75 }}>Cuéntanos sobre tu institución y tus necesidades.</p>
          <Link href="/contacto" className="btn-primary" style={{ padding: "14px 36px" }}>Contactar ahora →</Link>
        </div>
      </section>
    </>
  );
}
