import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProfessionalIcon from "@/components/ProfessionalIcon";

const servicios = {
  cumplimiento: {
    titulo: "Cumplimiento Normativo",
    color: "var(--gold)",
    icon: "compliance" as const,
    resumen: "Preparamos a tu institución para supervisiones SSF y BCR con documentación, controles y acompañamiento experto.",
    idealPara: "Bancos, cooperativas, financieras y entidades que necesitan fortalecer evidencia regulatoria antes de una revisión.",
    impacto: ["Menos hallazgos críticos", "Mejor trazabilidad documental", "Equipos listos para supervisión"],
    entregables: [
      "Diagnóstico inicial y mapa de brechas regulatorias",
      "Plan de acción con prioridades, responsables y tiempos",
      "Actualización de políticas, manuales y evidencias",
      "Acompañamiento previo y durante visitas de supervisión",
    ],
    proceso: [
      "Levantamos normativa aplicable y situación actual de la institución.",
      "Priorizamos brechas con enfoque en riesgo e impacto supervisor.",
      "Implementamos documentación y controles con tu equipo.",
      "Validamos evidencias y dejamos una hoja de ruta sostenible.",
    ],
  },
  "auditoria-ti": {
    titulo: "Auditoría de Sistemas TI",
    color: "var(--teal)",
    icon: "audit" as const,
    resumen: "Evaluamos plataforma core, infraestructura, accesos y continuidad operativa con criterio técnico y enfoque regulatorio.",
    idealPara: "Instituciones con sistemas core bancarios, plataformas críticas o necesidades de auditoría previa a supervisión.",
    image: "/images/services/auditoria-ti.jpg",
    imageAlt: "Infraestructura tecnológica y servidores para auditoría TI",
    impacto: ["Visibilidad de riesgos tecnológicos", "Informes accionables", "Mayor confianza operativa"],
    entregables: [
      "Revisión de controles tecnológicos críticos",
      "Evaluación de accesos, segregación y trazabilidad",
      "Informe ejecutivo con hallazgos y nivel de riesgo",
      "Hoja de ruta para corrección y seguimiento",
    ],
    proceso: [
      "Definimos el alcance con base en plataformas, procesos y riesgo.",
      "Ejecutamos pruebas documentales y entrevistas con responsables.",
      "Clasificamos hallazgos por criticidad y exposición.",
      "Entregamos recomendaciones claras para auditoría interna o regulatoria.",
    ],
  },
  automatizacion: {
    titulo: "Automatización de Procesos",
    color: "var(--gold)",
    icon: "automation" as const,
    resumen: "Digitalizamos tareas repetitivas para reducir tiempos, errores operativos y dependencia de procesos manuales.",
    idealPara: "Equipos operativos que manejan alta carga transaccional, reprocesos o aprobaciones manuales.",
    image: "/images/services/automatizacion.jpg",
    imageAlt: "Operación tecnológica para automatización de procesos",
    impacto: ["Menos tiempo por operación", "Reducción de errores", "Mejor capacidad del equipo"],
    entregables: [
      "Levantamiento de proceso actual y puntos de fricción",
      "Diseño del flujo optimizado y reglas de negocio",
      "Implementación gradual con métricas de eficiencia",
      "Capacitación para adopción interna",
    ],
    proceso: [
      "Mapeamos el proceso actual con responsables y tiempos reales.",
      "Detectamos tareas repetitivas, cuellos de botella y excepciones.",
      "Diseñamos automatizaciones viables sin romper la operación.",
      "Medimos resultados y ajustamos hasta estabilizar el flujo.",
    ],
  },
  procesos: {
    titulo: "Procesos Operativos",
    color: "var(--teal)",
    icon: "operations" as const,
    resumen: "Ordenamos y documentamos procedimientos clave para dar trazabilidad, consistencia y control a la operación.",
    idealPara: "Áreas de crédito, captación, caja, contabilidad y back office que necesitan estandarización.",
    image: "/images/services/procesos.jpg",
    imageAlt: "Monitoreo de procesos operativos en entorno tecnológico",
    impacto: ["Procesos más claros", "Menor dependencia de personas clave", "Indicadores operativos consistentes"],
    entregables: [
      "Mapeo de punta a punta del proceso",
      "Manuales, formatos y controles estandarizados",
      "Indicadores para monitoreo de desempeño",
      "Recomendaciones de mejora rápida",
    ],
    proceso: [
      "Documentamos el flujo real y no solo el flujo teórico.",
      "Identificamos variaciones, retrabajos y pasos sin control.",
      "Estandarizamos roles, formatos y puntos de validación.",
      "Dejamos métricas simples para seguimiento continuo.",
    ],
  },
  riesgos: {
    titulo: "Gestión de Riesgos",
    color: "var(--gold)",
    icon: "risk" as const,
    resumen: "Diseñamos marcos prácticos para identificar, medir y mitigar riesgos bajo normativa local y mejores prácticas.",
    idealPara: "Instituciones que necesitan fortalecer SARO, matrices de riesgo o reportes para comités y alta dirección.",
    image: "/images/services/riesgos.jpg",
    imageAlt: "Gestión de riesgos y seguridad digital",
    impacto: ["Mejor lectura del riesgo", "Planes de mitigación más claros", "Gobierno más sólido"],
    entregables: [
      "Matrices de riesgos y controles",
      "Metodología de evaluación y seguimiento",
      "Reportes útiles para comité y alta dirección",
      "Priorización de acciones por exposición",
    ],
    proceso: [
      "Alineamos criterios de riesgo con la realidad de la institución.",
      "Construimos matrices prácticas y fáciles de mantener.",
      "Definimos escalas, responsables y periodicidad de revisión.",
      "Conectamos el análisis con decisiones concretas de gestión.",
    ],
  },
} as const;

export function generateStaticParams() {
  return Object.keys(servicios).map((slug) => ({ slug }));
}

export default async function ServicioDetallePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const servicio = servicios[slug as keyof typeof servicios];

  if (!servicio) {
    notFound();
  }

  return (
    <>
      <section style={{ background: "linear-gradient(135deg, var(--navy-deep) 0%, var(--navy-light) 100%)", padding: "76px 0 70px", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "30px 30px", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: 1100 }}>
          <div className="chip-teal" style={{ marginBottom: 18 }}>Servicio especializado</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.1rem, 4vw, 3.4rem)", color: "#fff", marginBottom: 16 }}>{servicio.titulo}</h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem", lineHeight: 1.85, maxWidth: 720, marginBottom: 30 }}>{servicio.resumen}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {servicio.impacto.map((item) => (
              <span key={item} style={{ padding: "10px 16px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.08)", fontSize: "0.85rem", color: "rgba(255,255,255,0.9)" }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 1100 }}>
          <div className="service-detail-grid">
            <div className="card">
              <div style={{ width: 58, height: 58, borderRadius: 16, background: servicio.color === "var(--gold)" ? "var(--gold-soft)" : "var(--teal-soft)", border: `1px solid ${servicio.color === "var(--gold)" ? "rgba(212,160,32,0.25)" : "rgba(46,124,138,0.25)"}`, color: servicio.color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                <ProfessionalIcon name={servicio.icon} size={26} />
              </div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.55rem", color: "var(--navy)", marginBottom: 12 }}>Qué resolvemos</h2>
              <p style={{ color: "var(--gray-600)", lineHeight: 1.85, marginBottom: 24 }}>{servicio.idealPara}</p>
              <h3 style={{ color: servicio.color, fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>Entregables</h3>
              <ul style={{ listStyle: "none", display: "grid", gap: 12, color: "var(--gray-600)" }}>
                {servicio.entregables.map((item) => (
                  <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start", lineHeight: 1.8 }}>
                    <span style={{ color: servicio.color, flexShrink: 0, display: "inline-flex", marginTop: 3 }}><ProfessionalIcon name="check" size={15} /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card" style={{ background: "linear-gradient(180deg, var(--gray-50) 0%, #fff 100%)" }}>
              {"image" in servicio ? (
                <div style={{ position: "relative", aspectRatio: "16 / 10", borderRadius: 14, overflow: "hidden", marginBottom: 20, border: "1px solid var(--gray-100)" }}>
                  <Image
                    src={servicio.image}
                    alt={servicio.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    style={{ objectFit: "cover" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(11,27,45,0.02) 0%, rgba(11,27,45,0.16) 100%)" }} />
                </div>
              ) : (
                <div
                  style={{
                    marginBottom: 20,
                    borderRadius: 18,
                    padding: "26px 22px",
                    background: "linear-gradient(135deg, var(--navy-deep) 0%, var(--navy-light) 65%, rgba(46,124,138,0.92) 100%)",
                    border: "1px solid rgba(21,45,75,0.08)",
                    color: "var(--white)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <div style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.72)", marginBottom: 14 }}>
                    Preparación regulatoria
                  </div>
                  <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", color: "var(--white)", marginBottom: 12, lineHeight: 1.2 }}>
                    Evidencia clara para una supervisión con mejor control documental.
                  </h4>
                  <p style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7, fontSize: "0.9rem", marginBottom: 18 }}>
                    Diseñado para instituciones que necesitan ordenar políticas, manuales, matrices y soportes antes de una revisión de la SSF o el BCR.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    {["SSF", "BCR", "Políticas", "Evidencias"].map((item) => (
                      <span
                        key={item}
                        style={{
                          padding: "8px 12px",
                          borderRadius: 999,
                          background: "rgba(255,255,255,0.1)",
                          border: "1px solid rgba(255,255,255,0.16)",
                          fontSize: "0.8rem",
                          color: "rgba(255,255,255,0.92)",
                          fontWeight: 600,
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <div style={{ fontSize: "0.8rem", fontWeight: 700, color: servicio.color, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Resultado esperado</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", color: "var(--navy)", marginBottom: 12 }}>Un proyecto claro y accionable</h3>
              <p style={{ color: "var(--gray-600)", lineHeight: 1.8, marginBottom: 20 }}>
                Trabajamos para que el equipo interno pueda sostener el avance después de nuestra intervención, no solo para entregar un informe.
              </p>
              <div style={{ display: "grid", gap: 10 }}>
                {servicio.impacto.map((item) => (
                  <div key={item} style={{ padding: "12px 14px", borderRadius: 10, background: "var(--white)", border: "1px solid var(--gray-100)", color: "var(--gray-800)", fontSize: "0.9rem", fontWeight: 600 }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="section-label">Metodología</div>
            <h2 className="section-title">Cómo trabajamos este servicio</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18 }}>
            {servicio.proceso.map((paso, index) => (
              <div key={paso} className="card" style={{ padding: "26px 22px" }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: servicio.color, color: "var(--navy-deep)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, marginBottom: 16 }}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p style={{ color: "var(--gray-600)", lineHeight: 1.75 }}>{paso}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg, var(--teal) 0%, #155F6A 100%)", padding: "62px 0" }}>
        <div className="container" style={{ maxWidth: 1000, textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#fff", marginBottom: 14 }}>¿Quieres evaluar si este servicio aplica para tu institución?</h2>
          <p style={{ color: "rgba(255,255,255,0.72)", maxWidth: 620, margin: "0 auto 28px", lineHeight: 1.8 }}>
            Podemos revisar tu situación actual y orientarte sobre el mejor punto de entrada sin compromiso.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contacto" className="btn-primary">Solicitar información</Link>
            <Link href="/servicios" className="btn-outline" style={{ background: "rgba(255,255,255,0.08)", color: "#fff", borderColor: "rgba(255,255,255,0.18)" }}>Ver todos los servicios</Link>
          </div>
        </div>
      </section>
    </>
  );
}
