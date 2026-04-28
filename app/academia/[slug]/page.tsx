import Link from "next/link";
import { notFound } from "next/navigation";
import ProfessionalIcon from "@/components/ProfessionalIcon";

const categorias = {
  cursos: {
    titulo: "Cursos en Línea",
    color: "var(--gold)",
    icon: "academy" as const,
    descripcion: "Capacitación flexible para equipos que necesitan actualizarse sin salir de su operación diaria.",
    enfoque: "Ideal para profesionales que necesitan aplicar de inmediato lo aprendido en cumplimiento, riesgos, TI y operaciones.",
    ventajas: ["Acceso flexible", "Casos reales", "Material descargable"],
    incluye: [
      "Clases estructuradas por módulos cortos",
      "Recursos de apoyo y plantillas prácticas",
      "Evaluaciones por unidad y seguimiento",
      "Constancia digital al completar el curso",
    ],
  },
  certificaciones: {
    titulo: "Certificaciones",
    color: "var(--teal)",
    icon: "certification" as const,
    descripcion: "Programas con evaluación y constancia para fortalecer perfiles clave dentro de la institución.",
    enfoque: "Pensado para roles críticos que deben demostrar conocimiento técnico y criterio de aplicación dentro de la entidad.",
    ventajas: ["Mayor respaldo profesional", "Rutas de aprendizaje claras", "Evaluación estructurada"],
    incluye: [
      "Ruta de estudio por competencias",
      "Instrumentos de evaluación y retroalimentación",
      "Constancia formal para expediente institucional",
      "Recomendaciones para plan de desarrollo del colaborador",
    ],
  },
  talleres: {
    titulo: "Talleres Presenciales",
    color: "var(--gold)",
    icon: "workshop" as const,
    descripcion: "Sesiones prácticas para alinear equipos, resolver casos reales y acelerar la implementación.",
    enfoque: "Útil cuando la institución necesita mover a varias áreas al mismo tiempo y aterrizar decisiones en una sola jornada de trabajo.",
    ventajas: ["Trabajo colaborativo", "Alta aplicabilidad", "Avance rápido por equipo"],
    incluye: [
      "Diseño del taller según objetivo institucional",
      "Dinámicas con casos y ejercicios guiados",
      "Material de apoyo para seguimiento",
      "Resumen de acuerdos y próximos pasos",
    ],
  },
} as const;

export function generateStaticParams() {
  return Object.keys(categorias).map((slug) => ({ slug }));
}

export default async function AcademiaDetallePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const categoria = categorias[slug as keyof typeof categorias];

  if (!categoria) {
    notFound();
  }

  return (
    <>
      <section style={{ background: "linear-gradient(135deg, var(--navy-deep) 0%, var(--navy-light) 100%)", padding: "76px 0 70px", color: "#fff" }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <div className="chip" style={{ marginBottom: 18 }}>Academia Destreza</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#fff", marginBottom: 16 }}>{categoria.titulo}</h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem", lineHeight: 1.85, maxWidth: 720, marginBottom: 26 }}>{categoria.descripcion}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {categoria.ventajas.map((item) => (
              <span key={item} style={{ padding: "10px 16px", borderRadius: 999, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", color: "rgba(255,255,255,0.9)", fontSize: "0.85rem" }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 1100 }}>
          <div className="academy-detail-grid">
            <div className="card">
              <div style={{ width: 58, height: 58, borderRadius: 16, background: categoria.color === "var(--gold)" ? "var(--gold-soft)" : "var(--teal-soft)", border: `1px solid ${categoria.color === "var(--gold)" ? "rgba(212,160,32,0.25)" : "rgba(46,124,138,0.25)"}`, color: categoria.color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                <ProfessionalIcon name={categoria.icon} size={26} />
              </div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--navy)", marginBottom: 14 }}>Enfoque de esta modalidad</h2>
              <p style={{ color: "var(--gray-600)", lineHeight: 1.85 }}>{categoria.enfoque}</p>
            </div>
            <div className="card" style={{ borderTop: `3px solid ${categoria.color}` }}>
              <div style={{ color: categoria.color, fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Qué incluye</div>
              <ul style={{ listStyle: "none", display: "grid", gap: 12, color: "var(--gray-600)" }}>
                {categoria.incluye.map((item) => (
                  <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start", lineHeight: 1.8 }}>
                    <span style={{ color: categoria.color, display: "inline-flex", flexShrink: 0, marginTop: 3 }}><ProfessionalIcon name="check" size={15} /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="section-label">Ruta de trabajo</div>
            <h2 className="section-title">Cómo avanzamos con tu equipo</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18 }}>
            {[
              "Definimos objetivo, audiencia y nivel esperado.",
              "Seleccionamos contenidos y ejemplos adaptados al sector financiero.",
              "Ejecutamos la capacitación con material práctico.",
              "Cerramos con recomendaciones y próximos pasos.",
            ].map((paso, index) => (
              <div key={paso} className="card" style={{ padding: "26px 22px" }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: categoria.color, color: "var(--navy-deep)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, marginBottom: 16 }}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p style={{ color: "var(--gray-600)", lineHeight: 1.75 }}>{paso}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--gold-soft)", padding: "62px 0", borderTop: "1px solid rgba(212,160,32,0.2)" }}>
        <div className="container" style={{ maxWidth: 980, textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.3rem)", color: "var(--navy)", marginBottom: 14 }}>¿Quieres una propuesta para tu institución?</h2>
          <p style={{ color: "var(--gray-600)", lineHeight: 1.8, maxWidth: 620, margin: "0 auto 28px" }}>
            Podemos ayudarte a definir el formato, duración y enfoque más adecuado según el perfil de tu equipo.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contacto" className="btn-primary">Solicitar información</Link>
            <Link href="/academia" className="btn-outline">Volver a academia</Link>
          </div>
        </div>
      </section>
    </>
  );
}
