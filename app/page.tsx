"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import ProfessionalIcon from "@/components/ProfessionalIcon";

const stats = [
  { numero: "20+",  label: "Años de experiencia",      icon: "experience" as const },
  { numero: "150+", label: "Instituciones atendidas",  icon: "institutions" as const },
  { numero: "500+", label: "Profesionales capacitados",icon: "professionals" as const },
  { numero: "98%",  label: "Clientes satisfechos",     icon: "satisfaction" as const },
];

const servicios = [
  { num: "01", icon: "compliance" as const, titulo: "Cumplimiento Normativo",    desc: "Preparamos tu institución para supervisiones SSF y BCR con controles documentados y personal listo.", href: "/servicios/cumplimiento", accent: "var(--gold)" },
  { num: "02", icon: "audit" as const, titulo: "Auditoría de Sistemas TI",  desc: "Revisión de sistemas core bancarios e infraestructura con informes ejecutivos y planes de acción.", href: "/servicios/auditoria-ti", accent: "var(--teal)" },
  { num: "03", icon: "automation" as const, titulo: "Automatización de Procesos",desc: "Digitalizamos flujos manuales para reducir tiempos de procesamiento hasta un 60%.", href: "/servicios/automatizacion", accent: "var(--gold)" },
  { num: "04", icon: "operations" as const, titulo: "Procesos Operativos",       desc: "Optimizamos procedimientos de captación, colocación y contabilidad con indicadores KPI.", href: "/servicios/procesos", accent: "var(--teal)" },
  { num: "05", icon: "risk" as const, titulo: "Gestión de Riesgos",       desc: "Matrices, SARO y metodologías COSO ERM alineadas a la regulación salvadoreña.", href: "/servicios/riesgos", accent: "var(--gold)" },
  { num: "06", icon: "academy" as const, titulo: "Academia Destreza",         desc: "Cursos y certificaciones para equipos de cumplimiento, TI y operaciones.", href: "/academia", accent: "var(--teal)" },
];

const testimonios = [
  { texto: "Destreza redujo nuestros hallazgos SSF en un 70%. Su conocimiento de la normativa local no tiene comparación.", cargo: "Director de Cumplimiento", empresa: "Banco Regional, El Salvador" },
  { texto: "La auditoría de sistemas fue determinante para corregir brechas críticas antes de la supervisión del BCR. Muy profesionales.", cargo: "Gerente de Tecnología", empresa: "Cooperativa de Ahorro" },
  { texto: "La Academia capacitó a todo nuestro equipo de riesgos en tiempo récord. Los cursos están perfectamente alineados a la realidad local.", cargo: "Jefe de Gestión de Riesgos", empresa: "Financiera Nacional" },
];

const diferenciales = [
  {
    icon: "specialist" as const,
    titulo: "Especialización local real",
    desc: "No trabajamos con marcos genéricos. Adaptamos cada intervención a la normativa y práctica supervisora de El Salvador.",
  },
  {
    icon: "audit" as const,
    titulo: "Visión técnica y regulatoria",
    desc: "Integramos cumplimiento, auditoría TI, procesos y riesgos para que la institución avance con una sola hoja de ruta.",
  },
  {
    icon: "academy" as const,
    titulo: "Transferencia al equipo interno",
    desc: "Nuestro objetivo no es solo entregar informes, sino dejar capacidades instaladas para sostener el cambio.",
  },
];

export default function HomePage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>

      {/* ════════════════════════════
          HERO
      ════════════════════════════ */}
      <section style={{
        background: "linear-gradient(135deg, #0B1B2D 0%, #152D4B 55%, #214F5C 100%)",
        position: "relative", overflow: "hidden", padding: "108px 0 96px",
      }}>
        {/* Patrón puntitos */}
        <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)", backgroundSize:"28px 28px", pointerEvents:"none" }} />
        {/* Glow teal izquierda */}
        <div style={{ position:"absolute", top:"10%", left:"-5%", width:480, height:480, borderRadius:"50%", background:"radial-gradient(circle, rgba(30,122,136,0.22) 0%, transparent 70%)", pointerEvents:"none" }} />
        {/* Glow gold derecha */}
        <div style={{ position:"absolute", bottom:"5%", right:"5%", width:360, height:360, borderRadius:"50%", background:"radial-gradient(circle, rgba(212,160,32,0.14) 0%, transparent 70%)", pointerEvents:"none" }} />

        <div className="container" style={{ position:"relative", zIndex:1 }}>
          <div className="split-layout" style={{ gridTemplateColumns:"minmax(0, 1fr) minmax(320px, 420px)", alignItems:"center" }}>

            {/* ── Left ── */}
            <motion.div variants={staggerContainer} initial="hidden" animate="show">
              <motion.div variants={fadeInUp(prefersReducedMotion)} style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(30,122,136,0.15)", border:"1px solid rgba(30,122,136,0.4)", borderRadius:100, padding:"6px 18px", marginBottom:28 }}>
                <span style={{ width:7, height:7, borderRadius:"50%", background:"var(--teal-light)", display:"inline-block" }} />
                <span style={{ fontSize:"0.77rem", fontWeight:700, color:"var(--teal-light)", letterSpacing:"0.1em", textTransform:"uppercase" }}>El Salvador · Sector Financiero</span>
              </motion.div>

              <motion.h1 variants={fadeInUp(prefersReducedMotion, 0.08)} style={{ fontFamily:"var(--font-display)", fontSize:"clamp(2.55rem,4.5vw,4.15rem)", color:"#fff", lineHeight:1.05, marginBottom:24, letterSpacing:"-0.02em" }}>
                Convierte el cumplimiento normativo en tu{" "}
                <span style={{ background:"linear-gradient(90deg, var(--gold) 0%, var(--gold-light) 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                  ventaja competitiva
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp(prefersReducedMotion, 0.14)} style={{ fontSize:"1.08rem", color:"rgba(255,255,255,0.82)", lineHeight:1.85, marginBottom:40, maxWidth:570 }}>
                Más de <strong style={{ color:"#fff" }}>20 años</strong> auditando sistemas core bancarios y preparando instituciones financieras para supervisiones de la <strong style={{ color:"var(--gold-light)" }}>SSF y el BCR</strong> en El Salvador.
              </motion.p>

              <motion.div variants={fadeInUp(prefersReducedMotion, 0.2)} style={{ display:"flex", gap:14, flexWrap:"wrap", marginBottom:48 }}>
                <Link href="/prueba-gratis" className="btn-primary" style={{ padding:"15px 36px", fontSize:"1rem" }}>
                  Empieza gratis →
                </Link>
                <Link href="/servicios" style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"15px 32px", fontSize:"1rem", fontWeight:600, color:"rgba(255,255,255,0.9)", border:"1.5px solid rgba(255,255,255,0.22)", borderRadius:9, transition:"var(--transition)" }}>
                  Ver servicios
                </Link>
              </motion.div>

              {/* Regulators */}
              <motion.div variants={fadeInUp(prefersReducedMotion, 0.26)} style={{ display:"flex", alignItems:"center", gap:12, flexWrap:"wrap" }}>
                <span style={{ fontSize:"0.84rem", color:"rgba(255,255,255,0.62)", textTransform:"uppercase", letterSpacing:"0.1em" }}>Conocemos la regulación de</span>
                {["SSF","BCR","SUGEF"].map(r => (
                  <span key={r} style={{ fontSize:"0.94rem", fontWeight:700, color:"rgba(255,255,255,0.88)", padding:"6px 13px", border:"1px solid rgba(255,255,255,0.18)", borderRadius:6, letterSpacing:"0.05em" }}>{r}</span>
                ))}
              </motion.div>
            </motion.div>

            {/* ── Right card ── */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 30, y: 24, rotate: 1.5 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0, y: [0, -10, 0], rotate: 0 }}
              transition={prefersReducedMotion ? { duration: 0.2 } : { opacity: { duration: 0.55 }, x: { duration: 0.55 }, rotate: { duration: 0.55 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 } }}
              style={{ background:"linear-gradient(180deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.05) 100%)", border:"1px solid rgba(255,255,255,0.14)", borderRadius:20, padding:"36px 32px", backdropFilter:"blur(12px)", boxShadow:"0 24px 64px rgba(0,0,0,0.25)" }}
            >
              <div style={{ fontSize:"0.86rem", fontWeight:700, color:"var(--gold-light)", textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:22 }}>Acceso Gratuito 30 días</div>
              <motion.div variants={staggerContainer} initial="hidden" animate="show" style={{ display:"flex", flexDirection:"column", gap:14, marginBottom:28 }}>
                {[
                  ["audit","Diagnóstico de cumplimiento normativo"],
                  ["chart","Simulador de hallazgos regulatorios"],
                  ["library","Biblioteca SSF · BCR actualizada"],
                  ["course","2 cursos introductorios gratuitos"],
                  ["specialist","Consulta con especialista (30 min)"],
                ].map(([icon, label]) => (
                  <motion.div key={label as string} variants={fadeInUp(prefersReducedMotion)} style={{ display:"flex", alignItems:"center", gap:12 }}>
                    <div style={{ width:34, height:34, borderRadius:8, background:"rgba(46,124,138,0.16)", border:"1px solid rgba(65,150,164,0.35)", display:"flex", alignItems:"center", justifyContent:"center", color:"var(--teal-light)", flexShrink:0 }}><ProfessionalIcon name={icon as "audit" | "chart" | "library" | "course" | "specialist"} size={17} /></div>
                    <span style={{ fontSize:"0.98rem", color:"rgba(255,255,255,0.92)", lineHeight:1.6 }}>{label as string}</span>
                  </motion.div>
                ))}
              </motion.div>
              <Link href="/prueba-gratis" className="btn-primary" style={{ width:"100%", justifyContent:"center", padding:"14px" }}>
                Crear cuenta gratis
              </Link>
              <p style={{ textAlign:"center", marginTop:12, fontSize:"0.94rem", color:"rgba(255,255,255,0.76)", lineHeight: 1.6 }}>Sin tarjeta de crédito · Cancela cuando quieras</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════
          STATS
      ════════════════════════════ */}
      <section style={{ background:"linear-gradient(90deg, var(--navy) 0%, var(--navy-light) 100%)", padding:"44px 0", borderBottom:"1px solid rgba(30,122,136,0.2)" }}>
        <div className="container">
          <div className="stats-grid">
            {stats.map((s,i) => (
              <Reveal key={s.numero} delay={i * 0.06}>
                <motion.div whileHover={prefersReducedMotion ? undefined : { y: -6, scale: 1.02 }} style={{ textAlign:"center", padding:"0 8px", borderRight: i<3 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                <div style={{ width:50, height:50, margin:"0 auto 10px", borderRadius:14, background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)", color:"var(--gold-light)", display:"flex", alignItems:"center", justifyContent:"center" }}><ProfessionalIcon name={s.icon} size={24} /></div>
                <div style={{ fontFamily:"var(--font-display)", fontSize:"2.6rem", background:"linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", lineHeight:1, marginBottom:6 }}>{s.numero}</div>
                <div style={{ fontSize:"0.98rem", color:"rgba(255,255,255,0.82)", lineHeight:1.55 }}>{s.label}</div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--white)", padding: "30px 0 26px", borderBottom: "1px solid var(--gray-100)" }}>
        <div className="container" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 18 }}>
          <div style={{ fontSize: "0.96rem", color: "var(--gray-600)", fontWeight: 600 }}>
            Equipos a los que acompañamos con más frecuencia
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {["Bancos", "Cooperativas", "Financieras", "Seguros", "Oficiales de Cumplimiento", "Auditoría TI"].map((item) => (
              <span
                key={item}
                style={{
                  padding: "9px 14px",
                  borderRadius: 999,
                  border: "1px solid var(--gray-100)",
                  background: "var(--gray-50)",
                  color: "var(--navy)",
                  fontSize: "0.96rem",
                  fontWeight: 600,
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          PROBLEMA / SOLUCIÓN
      ════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div className="split-layout" style={{ gap:72, alignItems:"center" }}>
            <Reveal>
            <div>
              <div className="section-label">El problema que resolvemos</div>
              <h2 className="section-title">Las supervisiones regulatorias no esperan</h2>
              <p style={{ color:"var(--gray-600)", lineHeight:1.85, marginBottom:28, fontSize:"1.02rem" }}>
                Muchas instituciones llegan a las visitas de la SSF sin documentación actualizada, controles débiles y personal sin capacitación. El resultado: observaciones, planes de acción obligatorios y pérdida de reputación.
              </p>
              <div style={{ display:"flex", flexDirection:"column", gap:12, marginBottom:36 }}>
                {[
                  "Hallazgos evitables por falta de preparación",
                  "Normativas que cambian sin que el equipo se actualice",
                  "Sistemas tecnológicos sin controles formales",
                  "Escasez de especialistas en regulación local",
                ].map(item => (
                  <div key={item} style={{ display:"flex", gap:12, alignItems:"flex-start" }}>
                    <span style={{ color:"#e53e3e", fontWeight:700, flexShrink:0, fontSize:"1rem", marginTop:1 }}>✗</span>
                    <span style={{ fontSize:"1rem", color:"var(--gray-600)", lineHeight:1.68 }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/servicios" className="btn-primary">Cómo lo resolvemos →</Link>
            </div>
            </Reveal>

            <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
              {[
                { icon:"shield-check" as const, color:"var(--gold)", bg:"rgba(212,160,32,0.1)", border:"rgba(212,160,32,0.25)", titulo:"Cumplimiento antes de la visita", desc:"Cerramos brechas regulatorias antes de que el supervisor las encuentre." },
                { icon:"audit" as const, color:"var(--teal-light)", bg:"rgba(46,124,138,0.1)", border:"rgba(46,124,138,0.25)", titulo:"Auditoría con estándares supervisores", desc:"Evaluamos como lo haría la SSF: mismos criterios, mismas herramientas." },
                { icon:"academy" as const, color:"var(--gold)", bg:"rgba(212,160,32,0.1)", border:"rgba(212,160,32,0.25)", titulo:"Equipos capacitados y actualizados", desc:"Tu personal aprende con casos reales del sistema financiero salvadoreño." },
              ].map((item, index) => (
                <Reveal key={item.titulo} delay={index * 0.08}>
                <motion.div whileHover={prefersReducedMotion ? undefined : { x: 8 }} style={{ background:"var(--navy-deep)", borderRadius:14, padding:"24px 24px", display:"flex", gap:18, alignItems:"flex-start", border:"1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ width:46, height:46, background:item.bg, border:`1px solid ${item.border}`, borderRadius:11, display:"flex", alignItems:"center", justifyContent:"center", color:item.color, flexShrink:0 }}><ProfessionalIcon name={item.icon} size={21} /></div>
                  <div>
                    <h4 style={{ fontWeight:700, color:"#fff", marginBottom:5, fontSize:"1rem" }}>{item.titulo}</h4>
                    <p style={{ fontSize:"1rem", color:"rgba(255,255,255,0.84)", lineHeight:1.72 }}>{item.desc}</p>
                  </div>
                </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label">Por qué Destreza</div>
            <h2 className="section-title" style={{ margin: "0 auto 12px" }}>Más que consultoría: claridad para decidir y ejecutar</h2>
            <p className="section-desc" style={{ margin: "0 auto", maxWidth: 700 }}>
              Trabajamos para que la Alta Dirección entienda prioridades, el área técnica sepa qué hacer y el equipo operativo pueda sostener los cambios.
            </p>
          </div>
          <div className="responsive-grid-3">
            {diferenciales.map((item) => (
              <div key={item.titulo} className="card" style={{ padding: "32px 28px", borderTop: "3px solid var(--teal)" }}>
                <div style={{ width: 50, height: 50, borderRadius: 14, background: "var(--teal-soft)", border: "1px solid rgba(46,124,138,0.2)", color: "var(--teal)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <ProfessionalIcon name={item.icon} size={22} />
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--navy)", marginBottom: 10, lineHeight: 1.3 }}>
                  {item.titulo}
                </h3>
                <p style={{ fontSize: "1rem", color: "var(--gray-600)", lineHeight: 1.75 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          SERVICIOS GRID
      ════════════════════════════ */}
      <section className="section" style={{ background:"var(--gray-50)" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:60 }}>
            <div className="section-label">Soluciones</div>
            <h2 className="section-title" style={{ margin:"0 auto 12px" }}>Todo lo que tu institución necesita</h2>
            <p className="section-desc" style={{ margin:"0 auto" }}>Diseñado para la regulación de El Salvador. No soluciones genéricas.</p>
          </div>
          <div className="service-grid">
            {servicios.map((s,i) => (
              <Reveal key={s.href} delay={i * 0.05}>
              <motion.div whileHover={prefersReducedMotion ? undefined : { y: -8 }} style={{ height:"100%" }}>
              <Link href={s.href} className="service-grid-item" style={{
                display:"block", padding:"36px 30px", textDecoration:"none",
                borderTop: i < 3 ? "none" : "1px solid var(--gray-100)",
                borderRight: (i+1)%3 !== 0 ? "1px solid var(--gray-100)" : "none",
                borderBottom:"1px solid var(--gray-100)", borderLeft:"none",
                position:"relative", overflow:"hidden",
              }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:20 }}>
                  <span className="svc-num" style={{ fontSize:"0.7rem", fontWeight:700, color:"var(--gray-200)", fontFamily:"var(--font-display)", letterSpacing:"0.04em", transition:"var(--transition)" }}>{s.num}</span>
                  <div style={{ width:40, height:40, borderRadius:10, background:`${s.accent === "var(--gold)" ? "rgba(212,160,32,0.1)" : "rgba(46,124,138,0.1)"}`, border:`1px solid ${s.accent === "var(--gold)" ? "rgba(212,160,32,0.2)" : "rgba(46,124,138,0.2)"}`, display:"flex", alignItems:"center", justifyContent:"center", color:s.accent }}>{<ProfessionalIcon name={s.icon} size={19} />}</div>
                </div>
                <h3 className="svc-title" style={{ fontFamily:"var(--font-display)", fontSize:"1.05rem", color:"var(--navy)", marginBottom:10, transition:"var(--transition)", lineHeight:1.35 }}>{s.titulo}</h3>
                <p className="svc-desc" style={{ fontSize:"0.97rem", color:"var(--gray-600)", lineHeight:1.78, transition:"var(--transition)" }}>{s.desc}</p>
                <div className="svc-arrow" style={{ marginTop:18, fontSize:"0.9rem", fontWeight:700, color:s.accent, transition:"var(--transition)" }}>Conocer más →</div>
              </Link>
              </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          FRANJA TEAL — a quiénes servimos
      ════════════════════════════ */}
      <section style={{ background:"linear-gradient(135deg, var(--teal) 0%, #155F6A 100%)", padding:"64px 0" }}>
        <div className="container" style={{ textAlign:"center" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.12)", border:"1px solid rgba(255,255,255,0.2)", borderRadius:100, padding:"5px 16px", marginBottom:20 }}>
            <span style={{ fontSize:"0.84rem", fontWeight:700, color:"rgba(255,255,255,0.94)", textTransform:"uppercase", letterSpacing:"0.1em" }}>Nuestros Clientes</span>
          </div>
          <h2 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.8rem,3vw,2.4rem)", color:"#fff", marginBottom:14 }}>
            Trabajamos con todo el sistema financiero
          </h2>
          <p style={{ color:"rgba(255,255,255,0.84)", marginBottom:44, maxWidth:520, margin:"0 auto 44px", fontSize:"1.02rem" }}>
            Desde grandes bancos hasta microfinancieras. Cualquier entidad bajo supervisión de la SSF o el BCR.
          </p>
          <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:12 }}>
            {["Bancos Comerciales","Cooperativas de Ahorro","Sociedades de Seguros","Casas de Cambio","Emisores de Valores","Financieras y Microfinancieras"].map(c => (
              <div key={c} style={{ padding:"12px 22px", border:"1.5px solid rgba(255,255,255,0.25)", borderRadius:100, fontSize:"1rem", color:"rgba(255,255,255,0.94)", background:"rgba(255,255,255,0.08)", fontWeight:500 }}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          TESTIMONIOS
      ════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <div className="section-label">Testimonios</div>
            <h2 className="section-title" style={{ margin:"0 auto" }}>Lo que dicen nuestros clientes</h2>
          </div>
          <div className="testimonial-grid">
            {testimonios.map((t,i) => (
              <Reveal key={i} delay={i * 0.08}>
              <motion.div whileHover={prefersReducedMotion ? undefined : { y: -8, scale: 1.01 }} style={{
                background: i===1 ? "linear-gradient(145deg, var(--navy) 0%, var(--navy-light) 100%)" : "var(--gray-50)",
                borderRadius:18, padding:"36px 30px",
                border: i===1 ? "1px solid rgba(30,122,136,0.3)" : "1px solid var(--gray-100)",
                boxShadow: i===1 ? "var(--shadow-teal)" : "var(--shadow-sm)",
                position:"relative",
              }}>
                {i===1 && <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:"linear-gradient(90deg, var(--teal) 0%, var(--gold) 100%)", borderRadius:"18px 18px 0 0" }} />}
                <div style={{ fontSize:"2.8rem", fontFamily:"Georgia,serif", lineHeight:1, color: i===1 ? "var(--gold)" : "var(--gray-200)", marginBottom:18, marginTop:-6 }}>&ldquo;</div>
                <p style={{ fontSize:"1rem", color: i===1 ? "rgba(255,255,255,0.88)" : "var(--gray-600)", lineHeight:1.8, marginBottom:24, fontStyle:"italic" }}>{t.texto}</p>
                <div style={{ borderTop:`1px solid ${i===1 ? "rgba(255,255,255,0.1)" : "var(--gray-200)"}`, paddingTop:18 }}>
                  <div style={{ fontWeight:700, fontSize:"1rem", color: i===1 ? "#fff" : "var(--navy)" }}>{t.cargo}</div>
                  <div style={{ fontSize:"0.96rem", color: i===1 ? "rgba(255,255,255,0.84)" : "var(--gray-600)", marginTop:4, lineHeight:1.55 }}>{t.empresa}</div>
                </div>
              </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          PASOS / PRUEBA GRATIS
      ════════════════════════════ */}
      <section className="section" style={{ background:"var(--gray-50)" }}>
        <div className="container">
          <div className="split-layout" style={{ gap:72, alignItems:"center" }}>
            <Reveal>
            <div>
              <div className="section-label">Proceso</div>
              <h2 className="section-title">Empieza en 3 pasos simples</h2>
              <p className="section-desc" style={{ marginBottom:44 }}>Sin contratos largos. Sin procesos engorrosos. Accede hoy mismo.</p>
              {[
                { num:"01", titulo:"Crea tu cuenta gratis", desc:"Regístrate en 2 minutos, sin tarjeta de crédito ni compromiso." },
                { num:"02", titulo:"Explora las herramientas", desc:"Diagnóstico de cumplimiento, biblioteca normativa y cursos iniciales." },
                { num:"03", titulo:"Habla con un especialista", desc:"Sesión de 30 minutos con un experto en regulación financiera salvadoreña." },
              ].map((p,i,arr) => (
                <div key={p.num} style={{ display:"flex", gap:22, position:"relative" }}>
                  {i < arr.length-1 && <div style={{ position:"absolute", left:21, top:52, width:2, height:"calc(100% - 16px)", background:"linear-gradient(to bottom, var(--teal), transparent)", zIndex:0 }} />}
                  <div style={{ flexShrink:0, width:44, height:44, borderRadius:12, background:"linear-gradient(135deg, var(--teal) 0%, var(--navy) 100%)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"var(--font-display)", fontSize:"0.88rem", color:"#fff", fontWeight:700, zIndex:1, boxShadow:"var(--shadow-teal)" }}>{p.num}</div>
                  <div style={{ paddingBottom: i < arr.length-1 ? 32 : 0 }}>
                    <h4 style={{ fontWeight:700, color:"var(--navy)", marginBottom:5, fontSize:"1rem" }}>{p.titulo}</h4>
                    <p style={{ fontSize:"0.98rem", color:"var(--gray-600)", lineHeight:1.65 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
              <Link href="/prueba-gratis" className="btn-teal" style={{ marginTop:36 }}>Crear cuenta gratis →</Link>
            </div>
            </Reveal>

            <Reveal delay={0.1}>
            <motion.div whileHover={prefersReducedMotion ? undefined : { y: -10, rotate: -1 }} style={{ background:"linear-gradient(145deg, var(--navy-deep) 0%, var(--navy-light) 100%)", borderRadius:22, padding:"44px 38px", color:"#fff", position:"relative", overflow:"hidden", boxShadow:"var(--shadow-lg)" }}>
              <div style={{ position:"absolute", top:-50, right:-50, width:200, height:200, borderRadius:"50%", background:"radial-gradient(circle, rgba(212,160,32,0.12) 0%, transparent 70%)", pointerEvents:"none" }} />
              <div style={{ position:"absolute", bottom:-30, left:-30, width:160, height:160, borderRadius:"50%", background:"radial-gradient(circle, rgba(30,122,136,0.12) 0%, transparent 70%)", pointerEvents:"none" }} />
              {/* Barra top */}
              <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:"linear-gradient(90deg, var(--teal) 0%, var(--gold) 100%)", borderRadius:"22px 22px 0 0" }} />
              <div style={{ position:"relative", zIndex:1 }}>
                <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(30,122,136,0.15)", border:"1px solid rgba(30,122,136,0.35)", borderRadius:100, padding:"5px 14px", marginBottom:22 }}>
                  <span style={{ width:6, height:6, borderRadius:"50%", background:"#22c55e", display:"inline-block" }} />
                  <span style={{ fontSize:"0.82rem", fontWeight:700, color:"var(--teal-light)", letterSpacing:"0.1em" }}>ACCESO INMEDIATO</span>
                </div>
                <h3 style={{ fontFamily:"var(--font-display)", fontSize:"1.65rem", marginBottom:10, lineHeight:1.3 }}>30 días de acceso gratuito</h3>
                <p style={{ color:"rgba(255,255,255,0.82)", fontSize:"1rem", marginBottom:30, lineHeight:1.75 }}>
                  Explora herramientas de cumplimiento, auditoría y capacitación sin compromiso.
                </p>
                <div style={{ display:"flex", flexDirection:"column", gap:12, marginBottom:32 }}>
                  {["Sin tarjeta de crédito requerida","Cancela en cualquier momento","Soporte incluido","Normativas SSF/BCR actualizadas"].map(item => (
                    <div key={item} style={{ display:"flex", gap:10, alignItems:"center", fontSize:"0.96rem", color:"rgba(255,255,255,0.84)" }}>
                      <span style={{ color:"var(--gold-light)", display:"inline-flex" }}><ProfessionalIcon name="check" size={15} /></span>{item}
                    </div>
                  ))}
                </div>
                <Link href="/prueba-gratis" className="btn-primary" style={{ width:"100%", justifyContent:"center" }}>Empezar ahora →</Link>
              </div>
            </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          ACADEMIA PREVIEW
      ════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", flexWrap:"wrap", gap:24, marginBottom:48 }}>
            <div>
              <div className="section-label">Academia Destreza</div>
              <h2 className="section-title" style={{ marginBottom:6 }}>Capacita a tu equipo hoy</h2>
              <p className="section-desc">Cursos con instructores que conocen la regulación de El Salvador desde adentro.</p>
            </div>
            <Link href="/academia" className="btn-outline">Ver catálogo completo →</Link>
          </div>
          <div className="responsive-grid-3">
            {[
              { icon:"chart" as const, titulo:"Cumplimiento Normativo SSF", nivel:"Intermedio", horas:"16h", precio:"$120", levelColor:"#D4A020" },
              { icon:"technology" as const, titulo:"Auditoría de Sistemas Core", nivel:"Avanzado",    horas:"24h", precio:"$180", levelColor:"#A53A2A" },
              { icon:"risk" as const, titulo:"Gestión de Riesgos Operacionales", nivel:"Básico", horas:"12h", precio:"$90", levelColor:"#2E7C8A" },
            ].map((c, index) => (
              <Reveal key={c.titulo} delay={index * 0.08}>
              <motion.div whileHover={prefersReducedMotion ? undefined : { y: -8 }} className="card" style={{ borderTop:`3px solid ${c.levelColor}` }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:18 }}>
                  <span style={{ width:46, height:46, borderRadius:12, display:"inline-flex", alignItems:"center", justifyContent:"center", background:`${c.levelColor}18`, color:c.levelColor }}><ProfessionalIcon name={c.icon} size={22} /></span>
                  <span style={{ fontSize:"0.82rem", fontWeight:700, padding:"4px 12px", borderRadius:100, background:`${c.levelColor}18`, color:c.levelColor }}>{c.nivel}</span>
                </div>
                <h3 style={{ fontFamily:"var(--font-display)", fontSize:"1.05rem", color:"var(--navy)", marginBottom:20, lineHeight:1.35 }}>{c.titulo}</h3>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", borderTop:"1px solid var(--gray-100)", paddingTop:18 }}>
                  <div>
                    <span style={{ fontFamily:"var(--font-display)", fontSize:"1.5rem", color:"var(--navy)" }}>{c.precio}</span>
                    <span style={{ fontSize:"0.9rem", color:"var(--gray-600)", marginLeft:6 }}>· {c.horas}</span>
                  </div>
                  <Link href="/prueba-gratis" className="btn-primary" style={{ padding:"10px 18px", fontSize:"0.92rem" }}>Inscribirse</Link>
                </div>
              </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          CTA FINAL
      ════════════════════════════ */}
      <section style={{ background:"linear-gradient(135deg, var(--navy-deep) 0%, #1A3A5C 50%, #0F2E4A 100%)", padding:"96px 0", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize:"28px 28px", pointerEvents:"none" }} />
        <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:700, height:350, background:"radial-gradient(ellipse, rgba(30,122,136,0.12) 0%, transparent 60%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:0, right:0, width:400, height:400, background:"radial-gradient(ellipse, rgba(212,160,32,0.08) 0%, transparent 70%)", pointerEvents:"none" }} />
        <motion.div
          className="container"
          style={{ position:"relative", zIndex:1, textAlign:"center" }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp(prefersReducedMotion)} style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(30,122,136,0.15)", border:"1px solid rgba(30,122,136,0.35)", borderRadius:100, padding:"6px 18px", marginBottom:24 }}>
            <span style={{ width:7, height:7, borderRadius:"50%", background:"#22c55e", display:"inline-block" }} />
            <span style={{ fontSize:"0.75rem", fontWeight:700, color:"var(--teal-light)", letterSpacing:"0.1em" }}>CONSULTA GRATUITA DISPONIBLE</span>
          </motion.div>
          <motion.h2 variants={fadeInUp(prefersReducedMotion, 0.06)} style={{ fontFamily:"var(--font-display)", fontSize:"clamp(2rem,4vw,3.2rem)", color:"#fff", marginBottom:18, lineHeight:1.2 }}>
            ¿Tu institución está lista para <br />la próxima supervisión?
          </motion.h2>
          <motion.p variants={fadeInUp(prefersReducedMotion, 0.12)} style={{ color:"rgba(255,255,255,0.84)", fontSize:"1.1rem", maxWidth:560, margin:"0 auto 44px", lineHeight:1.85 }}>
            Agenda 30 minutos con un especialista. Identificamos tus brechas y te decimos exactamente qué hacer.
          </motion.p>
          <motion.div variants={fadeInUp(prefersReducedMotion, 0.18)} style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
            <Link href="/prueba-gratis" className="btn-primary" style={{ padding:"16px 40px", fontSize:"1rem" }}>
              Empezar gratis →
            </Link>
            <Link href="/contacto" style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"16px 36px", fontSize:"1rem", fontWeight:600, color:"rgba(255,255,255,0.92)", border:"1.5px solid rgba(255,255,255,0.2)", borderRadius:9 }}>
              Hablar con un especialista
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </>
  );
}

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function fadeInUp(reducedMotion: boolean | null, delay = 0): Variants {
  return {
    hidden: reducedMotion ? { opacity: 1 } : { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0.15 : 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay,
      },
    },
  };
}

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp(prefersReducedMotion, delay)}
    >
      {children}
    </motion.div>
  );
}
