import Link from "next/link";
import Image from "next/image";
import ProfessionalIcon from "@/components/ProfessionalIcon";

const servicios = [
  { icon: "compliance" as const, titulo: "Cumplimiento Normativo", accentColor: "var(--gold)", href: "/servicios/cumplimiento",
    image: "/images/services/cumplimiento.jpg", imageAlt: "Documentos y reportes para cumplimiento normativo",
    desc: "Preparamos tu institución financiera para enfrentar supervisiones de la SSF y BCR con documentación sólida, controles implementados y personal capacitado.",
    beneficios: ["Reducción de hallazgos regulatorios", "Documentación normativa actualizada", "Planes de acción correctivos", "Acompañamiento en visitas de supervisión"] },
  { icon: "audit" as const, titulo: "Auditoría de Sistemas TI", accentColor: "var(--teal)", href: "/servicios/auditoria-ti",
    image: "/images/services/auditoria-ti.jpg", imageAlt: "Infraestructura tecnológica y centros de datos para auditoría TI",
    desc: "Evaluación integral de sistemas core bancarios, infraestructura tecnológica, controles de acceso y continuidad operativa con metodología supervisora.",
    beneficios: ["Revisión de sistemas core (Cobis, T24, Flex)", "Evaluación de controles de seguridad", "Análisis de continuidad del negocio", "Informes ejecutivos y regulatorios"] },
  { icon: "automation" as const, titulo: "Automatización de Procesos", accentColor: "var(--gold)", href: "/servicios/automatizacion",
    image: "/images/services/automatizacion.jpg", imageAlt: "Procesos tecnológicos y automatización de flujos operativos",
    desc: "Digitalización de flujos operativos manuales para reducir tiempos de procesamiento, errores y costos operativos hasta en un 60%.",
    beneficios: ["Mapeo y optimización de procesos", "Implementación de RPA", "Integración de sistemas", "Indicadores de eficiencia KPI"] },
  { icon: "operations" as const, titulo: "Procesos Operativos", accentColor: "var(--teal)", href: "/servicios/procesos",
    image: "/images/services/procesos.jpg", imageAlt: "Monitoreo y control de procesos operativos en ambientes tecnológicos",
    desc: "Revisión, documentación y mejora de procedimientos de captación, colocación, contabilidad y operaciones financieras.",
    beneficios: ["Manuales de procedimientos actualizados", "Revisión de operaciones de crédito", "Procesos de captación y cuentas", "Indicadores operacionales"] },
  { icon: "risk" as const, titulo: "Gestión de Riesgos", accentColor: "var(--gold)", href: "/servicios/riesgos",
    image: "/images/services/riesgos.jpg", imageAlt: "Seguridad y gestión de riesgos en plataformas digitales",
    desc: "Metodologías para identificar, medir, controlar y mitigar riesgos operacionales, crediticios y de mercado bajo normativa SSF.",
    beneficios: ["Matrices de riesgo operacional", "Modelos de scoring crediticio", "SARO implementado", "Reportes para Alta Dirección"] },
];

export default function ServiciosPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, var(--navy-deep) 0%, var(--navy-light) 100%)", padding: "72px 0 64px", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-20%", right: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(30,122,136,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="chip-teal" style={{ marginBottom: 20 }}>Nuestras soluciones</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", marginBottom: 16 }}>
            Servicios especializados para el sector financiero
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", maxWidth: 560, lineHeight: 1.8 }}>
            Soluciones diseñadas específicamente para la regulación de El Salvador: SSF, BCR, SUGEF y normativas locales.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {servicios.map((s) => (
              <div key={s.href} className="card service-feature-grid" style={{ borderLeft: `4px solid ${s.accentColor}`, padding: "36px 36px" }}>
                <div>
                  <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 18 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 12, background: s.accentColor === "var(--gold)" ? "var(--gold-soft)" : "var(--teal-soft)", border: `1px solid ${s.accentColor === "var(--gold)" ? "rgba(212,160,32,0.25)" : "rgba(46,124,138,0.25)"}`, display: "flex", alignItems: "center", justifyContent: "center", color: s.accentColor }}>
                      <ProfessionalIcon name={s.icon} size={24} />
                    </div>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "var(--navy)" }}>{s.titulo}</h2>
                  </div>
                  <p style={{ color: "var(--gray-600)", lineHeight: 1.8, marginBottom: 24 }}>{s.desc}</p>
                  <Link href="/contacto" className="btn-primary">Solicitar información</Link>
                </div>
                <div style={{ background: "var(--gray-50)", borderRadius: 12, padding: "24px 28px" }}>
                  <div style={{ position: "relative", aspectRatio: "16 / 9", borderRadius: 12, overflow: "hidden", marginBottom: 20, border: "1px solid var(--gray-100)" }}>
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 420px"
                      style={{ objectFit: "cover" }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,34,64,0.08) 0%, rgba(15,34,64,0.18) 100%)" }} />
                  </div>
                  <h4 style={{ fontWeight: 700, color: s.accentColor, marginBottom: 16, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Incluye</h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                    {s.beneficios.map(b => (
                      <li key={b} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: "0.92rem", color: "var(--gray-600)" }}>
                        <span style={{ color: s.accentColor, flexShrink: 0, display: "inline-flex", marginTop: 2 }}><ProfessionalIcon name="check" size={15} /></span>{b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg, var(--teal) 0%, #155F6A 100%)", padding: "64px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "#fff", marginBottom: 14 }}>¿No sabes por dónde empezar?</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 32 }}>Agenda una consulta gratuita y te orientamos.</p>
          <Link href="/contacto" className="btn-primary" style={{ padding: "14px 36px" }}>Consulta gratuita →</Link>
        </div>
      </section>
    </>
  );
}
