import Link from "next/link";
import { notFound } from "next/navigation";

const articulos = {
  "nrp-15-hallazgos": {
    titulo: "Guía NRP-15: Principales hallazgos en auditorías de tecnología",
    categoria: "Cumplimiento",
    fecha: "15 Abr 2026",
    lectura: "8 min",
    resumen: "Los hallazgos más comunes suelen aparecer en accesos, trazabilidad, respaldo documental y monitoreo de cambios.",
    puntos: [
      "Falta de evidencia sobre revisiones periódicas de accesos.",
      "Controles definidos pero no ejecutados con disciplina.",
      "Brechas entre políticas aprobadas y práctica operativa real.",
    ],
  },
  "matriz-riesgos": {
    titulo: "Cómo implementar una matriz de riesgos operacionales efectiva",
    categoria: "Riesgos",
    fecha: "8 Abr 2026",
    lectura: "6 min",
    resumen: "Una matriz útil no solo enumera riesgos: conecta causas, controles, frecuencia, impacto y responsables de seguimiento.",
    puntos: [
      "Usar criterios simples y consistentes para evaluar exposición.",
      "No separar riesgo inherente y residual lleva a decisiones pobres.",
      "La matriz debe vivir dentro de la operación, no solo en auditoría.",
    ],
  },
  "oficial-cumplimiento": {
    titulo: "5 competencias clave del oficial de cumplimiento moderno",
    categoria: "Academia",
    fecha: "1 Abr 2026",
    lectura: "5 min",
    resumen: "El rol exige criterio regulatorio, comunicación transversal, lectura de riesgo y capacidad para convertir normas en práctica.",
    puntos: [
      "Dominio técnico de la normativa y sus implicaciones.",
      "Capacidad de influir en áreas no especializadas.",
      "Enfoque preventivo con evidencia y seguimiento.",
    ],
  },
  "rpa-credito": {
    titulo: "Automatización RPA en procesos de crédito: casos de uso reales",
    categoria: "Tecnología",
    fecha: "22 Mar 2026",
    lectura: "7 min",
    resumen: "Las mejoras más rentables suelen darse en validaciones, digitación repetitiva y consolidación de evidencias de expediente.",
    puntos: [
      "Automatizar tareas fragmentadas antes que procesos completos.",
      "Documentar excepciones evita retrabajos posteriores.",
      "Medir tiempos base permite probar valor rápidamente.",
    ],
  },
  "ssf-2026": {
    titulo: "Cambios regulatorios SSF 2026: lo que debes preparar ya",
    categoria: "Normativa",
    fecha: "15 Mar 2026",
    lectura: "9 min",
    resumen: "Más que reaccionar al cambio, la institución necesita un mecanismo para traducir ajustes regulatorios en tareas concretas.",
    puntos: [
      "Asignar responsables por tema evita interpretaciones sueltas.",
      "Actualizar matrices de cumplimiento ayuda a no perder trazabilidad.",
      "La comunicación temprana con áreas impactadas reduce fricción.",
    ],
  },
  "laft-cooperativas": {
    titulo: "LAFT en cooperativas: particularidades y puntos críticos",
    categoria: "Cumplimiento",
    fecha: "5 Mar 2026",
    lectura: "6 min",
    resumen: "Las cooperativas enfrentan retos particulares por perfil transaccional, cercanía con el cliente y capacidad operativa limitada.",
    puntos: [
      "La segmentación de riesgo suele quedarse demasiado general.",
      "Las alertas deben responder a la realidad del modelo cooperativo.",
      "La capacitación continua es clave para detectar señales tempranas.",
    ],
  },
} as const;

export function generateStaticParams() {
  return Object.keys(articulos).map((slug) => ({ slug }));
}

export default async function RecursoDetallePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const articulo = articulos[slug as keyof typeof articulos];

  if (!articulo) {
    notFound();
  }

  return (
    <>
      <section style={{ background: "linear-gradient(135deg, var(--navy-deep) 0%, var(--navy-light) 100%)", padding: "76px 0 70px", color: "#fff" }}>
        <div className="container" style={{ maxWidth: 980 }}>
          <div className="chip-teal" style={{ marginBottom: 18 }}>{articulo.categoria}</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#fff", marginBottom: 16 }}>{articulo.titulo}</h1>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", color: "rgba(255,255,255,0.72)", fontSize: "0.9rem" }}>
            <span>{articulo.fecha}</span>
            <span>•</span>
            <span>{articulo.lectura} de lectura</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 980 }}>
          <div className="card" style={{ marginBottom: 28 }}>
            <p style={{ fontSize: "1.02rem", color: "var(--gray-600)", lineHeight: 1.9 }}>{articulo.resumen}</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 28, alignItems: "start" }}>
            <article className="card">
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.45rem", color: "var(--navy)", marginBottom: 18 }}>Puntos clave</h2>
              <div style={{ display: "grid", gap: 18 }}>
                {articulo.puntos.map((punto, index) => (
                  <div key={punto} style={{ paddingBottom: 18, borderBottom: index === articulo.puntos.length - 1 ? "none" : "1px solid var(--gray-100)" }}>
                    <div style={{ color: "var(--teal)", fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>
                      Insight {String(index + 1).padStart(2, "0")}
                    </div>
                    <p style={{ color: "var(--gray-600)", lineHeight: 1.85 }}>{punto}</p>
                  </div>
                ))}
              </div>
            </article>

            <aside className="card" style={{ background: "var(--gray-50)" }}>
              <div style={{ color: "var(--gold)", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Aplicación práctica</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "var(--navy)", marginBottom: 12 }}>Qué debería revisar tu equipo</h3>
              <p style={{ color: "var(--gray-600)", lineHeight: 1.8, marginBottom: 18 }}>
                Usa este tema como punto de partida para revisar evidencia, responsables, periodicidad y el nivel real de ejecución dentro de la institución.
              </p>
              <ul style={{ paddingLeft: 20, color: "var(--gray-600)", lineHeight: 1.9 }}>
                <li>Documentación actualizada y accesible.</li>
                <li>Controles ejecutados con evidencia verificable.</li>
                <li>Seguimiento visible a brechas y excepciones.</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg, var(--teal) 0%, #155F6A 100%)", padding: "62px 0" }}>
        <div className="container" style={{ maxWidth: 980, textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.3rem)", color: "#fff", marginBottom: 14 }}>¿Quieres profundizar este tema con tu equipo?</h2>
          <p style={{ color: "rgba(255,255,255,0.72)", maxWidth: 620, margin: "0 auto 28px", lineHeight: 1.8 }}>
            Podemos convertir este contenido en una sesión de trabajo, diagnóstico o plan de acción para tu institución.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contacto" className="btn-primary">Hablar con un especialista</Link>
            <Link href="/recursos" className="btn-outline" style={{ background: "rgba(255,255,255,0.08)", color: "#fff", borderColor: "rgba(255,255,255,0.18)" }}>Volver a recursos</Link>
          </div>
        </div>
      </section>
    </>
  );
}
