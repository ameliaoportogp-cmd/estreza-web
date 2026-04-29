import Link from "next/link";
import ProfessionalIcon from "@/components/ProfessionalIcon";

const articulos = [
  { categoria: "Cumplimiento", titulo: "Guía NRP-15: Principales hallazgos en auditorías de tecnología",        fecha: "15 Abr 2026", lectura: "8 min", desc: "Análisis de los hallazgos más frecuentes en revisiones de sistemas tecnológicos ante la SSF.", href: "/recursos/nrp-15-hallazgos",   color: "#D4A020" },
  { categoria: "Riesgos",      titulo: "Cómo implementar una matriz de riesgos operacionales efectiva",         fecha: "8 Abr 2026",  lectura: "6 min", desc: "Guía paso a paso para diseñar y gestionar una matriz de riesgos que cumpla con el regulador.",  href: "/recursos/matriz-riesgos",      color: "#e53e3e" },
  { categoria: "Academia",     titulo: "5 competencias clave del oficial de cumplimiento moderno",              fecha: "1 Abr 2026",  lectura: "5 min", desc: "Las habilidades técnicas y blandas que marcan la diferencia en el oficial de cumplimiento.",    href: "/recursos/oficial-cumplimiento",color: "#1E7A88" },
  { categoria: "Tecnología",   titulo: "Automatización RPA en procesos de crédito: casos de uso reales",        fecha: "22 Mar 2026", lectura: "7 min", desc: "Tres casos donde la automatización redujo tiempos de procesamiento de crédito en más del 60%.", href: "/recursos/rpa-credito",         color: "#1E7A88" },
  { categoria: "Normativa",    titulo: "Cambios regulatorios SSF 2026: lo que debes preparar ya",               fecha: "15 Mar 2026", lectura: "9 min", desc: "Resumen ejecutivo de las nuevas disposiciones emitidas por la SSF para este año.",             href: "/recursos/ssf-2026",            color: "#22c55e" },
  { categoria: "Cumplimiento", titulo: "LAFT en cooperativas: particularidades y puntos críticos",              fecha: "5 Mar 2026",  lectura: "6 min", desc: "Las cooperativas tienen retos específicos en ALD/CFT. Identificamos los puntos de mayor riesgo.", href: "/recursos/laft-cooperativas",  color: "#D4A020" },
];

export default function RecursosPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, var(--navy-deep) 0%, var(--navy-light) 100%)", padding: "72px 0 64px", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-20%", right: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(30,122,136,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="chip-teal" style={{ marginBottom: 20 }}>Recursos gratuitos</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", marginBottom: 16 }}>
            Conocimiento para el sector financiero
          </h1>
          <p style={{ color: "rgba(255,255,255,0.86)", fontSize: "1.14rem", maxWidth: 560, lineHeight: 1.82 }}>
            Artículos, guías y análisis sobre normativa, tecnología y operaciones del sistema financiero salvadoreño.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="resource-grid">
            {articulos.map(a => (
              <Link key={a.href} href={a.href} className="card" style={{ display: "flex", flexDirection: "column", borderTop: `3px solid ${a.color}` }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 14 }}>
                  <span style={{ fontSize: "0.88rem", fontWeight: 700, padding: "6px 12px", borderRadius: 100, background: `${a.color}18`, color: a.color }}>{a.categoria}</span>
                  <span style={{ fontSize: "0.95rem", color: "var(--gray-600)", display: "inline-flex", alignItems: "center", gap: 6 }}><ProfessionalIcon name="course" size={14} /> {a.lectura}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "var(--navy)", lineHeight: 1.4, marginBottom: 10, flex: 1 }}>{a.titulo}</h3>
                <p style={{ fontSize: "1.01rem", color: "var(--gray-600)", lineHeight: 1.72, marginBottom: 20 }}>{a.desc}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--gray-100)", paddingTop: 16 }}>
                  <span style={{ fontSize: "0.96rem", color: "var(--gray-600)" }}>{a.fecha}</span>
                  <span style={{ fontSize: "0.98rem", fontWeight: 700, color: a.color }}>Leer →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)", padding: "64px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="chip" style={{ marginBottom: 20 }}>Newsletter</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "#fff", marginBottom: 12 }}>Recibe artículos en tu correo</h2>
          <p style={{ color: "rgba(255,255,255,0.84)", marginBottom: 32, fontSize: "1.06rem", lineHeight: 1.75 }}>Únete a más de 500 profesionales del sector financiero.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", maxWidth: 480, margin: "0 auto" }}>
            <input type="email" placeholder="tu@correo.com" style={{ flex: 1, minWidth: 220, padding: "13px 18px", borderRadius: 10, border: "1.5px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.08)", color: "#fff", fontSize: "1rem", outline: "none" }} />
            <button className="btn-teal">Suscribirme</button>
          </div>
        </div>
      </section>
    </>
  );
}
