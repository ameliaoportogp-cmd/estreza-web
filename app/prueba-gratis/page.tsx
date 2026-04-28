"use client";
import { useState } from "react";
import Link from "next/link";
import BrandMosaic from "@/components/BrandMosaic";
import ProfessionalIcon, { IconBadge } from "@/components/ProfessionalIcon";

export default function PruebaGratisPage() {
  const [form, setForm] = useState({ nombre: "", apellido: "", email: "", institucion: "", cargo: "", telefono: "", website: "" });
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  const updateForm = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.website) return;

    const nombre = form.nombre.trim();
    const apellido = form.apellido.trim();
    const email = form.email.trim().toLowerCase();
    const institucion = form.institucion.trim();
    const cargo = form.cargo.trim();
    const telefono = form.telefono.trim();

    if (nombre.length < 2 || apellido.length < 2 || !email || institucion.length < 2) {
      setError("Completa nombre, apellido, correo e institución para crear tu acceso.");
      return;
    }

    if (telefono && !/^[+\d\s()-]{8,20}$/.test(telefono)) {
      setError("Revisa el formato del teléfono para continuar.");
      return;
    }

    setForm({ nombre, apellido, email, institucion, cargo, telefono, website: "" });
    setEnviado(true);
  };

  if (enviado) {
    return (
      <section style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--gray-50)" }}>
        <div style={{ textAlign: "center", maxWidth: 480, padding: "48px 32px" }}>
          <div
            style={{
              width: 92,
              height: 92,
              margin: "0 auto 24px",
              borderRadius: 28,
              background: "linear-gradient(135deg, rgba(212,160,32,0.18) 0%, rgba(46,124,138,0.14) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "var(--shadow-sm)",
              color: "var(--navy)",
            }}
          >
            <ProfessionalIcon name="check" size={34} />
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "var(--navy)", marginBottom: 16 }}>¡Cuenta creada!</h2>
          <p style={{ color: "var(--gray-600)", lineHeight: 1.75, marginBottom: 32 }}>
            Te hemos enviado un correo a <strong>{form.email}</strong> con los datos de acceso a tu cuenta gratuita. Revisa también tu carpeta de spam.
          </p>
          <Link href="/" className="btn-primary" style={{ padding: "14px 36px" }}>Ir al inicio →</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section style={{ background: "linear-gradient(135deg, var(--navy-deep) 0%, var(--navy-light) 100%)", padding: "64px 0", color: "var(--white)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="chip" style={{ marginBottom: 20 }}>Sin tarjeta de crédito</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--white)", marginBottom: 16 }}>
            Prueba Destreza gratis por 30 días
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem", maxWidth: 500, margin: "0 auto", lineHeight: 1.75 }}>
            Accede a nuestras herramientas de cumplimiento, auditoría y capacitación sin ningún compromiso.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div className="conversion-layout">

            {/* Formulario */}
            <div className="card" style={{ padding: "40px" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--navy)", marginBottom: 8 }}>Crea tu cuenta gratuita</h2>
              <p style={{ fontSize: "1rem", color: "var(--gray-600)", lineHeight: 1.7, marginBottom: 32 }}>Completa el formulario y accede en minutos.</p>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="website">Sitio web</label>
                  <input id="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => updateForm("website", e.target.value)} />
                </div>
                <div className="field-grid-2">
                  <Field label="Nombre" id="nombre" value={form.nombre} autoComplete="given-name" minLength={2} onChange={(v) => updateForm("nombre", v)} required />
                  <Field label="Apellido" id="apellido" value={form.apellido} autoComplete="family-name" minLength={2} onChange={(v) => updateForm("apellido", v)} required />
                </div>
                <Field label="Correo electrónico" id="email" type="email" value={form.email} autoComplete="email" onChange={(v) => updateForm("email", v)} required />
                <Field label="Institución" id="institucion" value={form.institucion} autoComplete="organization" minLength={2} onChange={(v) => updateForm("institucion", v)} required />
                <Field label="Cargo" id="cargo" value={form.cargo} autoComplete="organization-title" onChange={(v) => updateForm("cargo", v)} />
                <Field label="Teléfono" id="telefono" type="tel" value={form.telefono} autoComplete="tel" pattern="^[+\\d\\s()-]{8,20}$" onChange={(v) => updateForm("telefono", v)} />

                <div style={{ fontSize: "0.95rem", color: "var(--gray-600)", lineHeight: 1.7 }}>
                  Al registrarte aceptas nuestros <Link href="/terminos" style={{ color: "var(--gold)" }}>Términos de servicio</Link> y{" "}
                  <Link href="/privacidad" style={{ color: "var(--gold)" }}>Política de privacidad</Link>.
                </div>

                {error && <p style={{ color: "#b42318", fontSize: "0.92rem", lineHeight: 1.6 }}>{error}</p>}

                <button type="submit" className="btn-primary" style={{ padding: "14px", justifyContent: "center", fontSize: "0.95rem" }}>
                  Crear cuenta gratis →
                </button>

                <div style={{ textAlign: "center", fontSize: "0.95rem", color: "var(--gray-600)" }}>
                  ¿Ya tienes cuenta? <Link href="/login" style={{ color: "var(--gold)", fontWeight: 600 }}>Iniciar sesión</Link>
                </div>
              </form>
            </div>

            {/* Beneficios */}
            <div>
              <div style={{ marginBottom: 28, display: "flex", justifyContent: "flex-start" }}>
                <BrandMosaic compact />
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--navy)", marginBottom: 32 }}>
                ¿Qué incluye tu cuenta gratuita?
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  ["audit", "Diagnóstico de cumplimiento normativo", "Evalúa el estado de tu institución frente a la regulación SSF/BCR.", "gold"],
                  ["chart", "Simulador de hallazgos regulatorios", "Anticipa qué encontraría la SSF en una visita de supervisión.", "teal"],
                  ["library", "Biblioteca normativa", "Acceso a normativas SSF, BCR y resoluciones vigentes.", "navy"],
                  ["course", "2 cursos introductorios gratuitos", "Cumplimiento normativo básico y gestión de riesgos nivel inicial.", "gold"],
                  ["specialist", "Consulta con especialista (30 min)", "Sesión individual con un experto en regulación financiera.", "teal"],
                ].map(([icon, titulo, desc, tone]) => (
                  <div key={titulo as string} style={{ display: "flex", gap: 16 }}>
                    <IconBadge name={icon as "audit" | "chart" | "library" | "course" | "specialist"} tone={tone as "gold" | "teal" | "navy"} size={18} />
                    <div>
                      <h4 style={{ fontWeight: 600, color: "var(--navy)", fontSize: "0.92rem", marginBottom: 4 }}>{titulo as string}</h4>
                      <p style={{ fontSize: "0.95rem", color: "var(--gray-600)", lineHeight: 1.72 }}>{desc as string}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 40, padding: "24px", background: "var(--navy)", borderRadius: 12, color: "var(--white)" }}>
                <p style={{ fontSize: "0.98rem", color: "rgba(255,255,255,0.76)", lineHeight: 1.78 }}>
                  &ldquo;Destreza nos ayudó a reducir los hallazgos en nuestra última auditoría SSF en un 70%. Su equipo conoce perfectamente la normativa local.&rdquo;
                </p>
                <p style={{ marginTop: 12, fontSize: "0.95rem", fontWeight: 600, color: "var(--gold-light)" }}>— Director de Cumplimiento, Banco Regional</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, id, type = "text", value, onChange, required, autoComplete, minLength, pattern }: { label: string; id: string; type?: string; value: string; onChange: (v: string) => void; required?: boolean; autoComplete?: string; minLength?: number; pattern?: string }) {
  return (
    <div>
      <label htmlFor={id} style={{ display: "block", fontSize: "0.92rem", fontWeight: 600, color: "var(--gray-800)", marginBottom: 8 }}>
        {label}{required && <span style={{ color: "var(--gold)", marginLeft: 2 }}>*</span>}
      </label>
      <input
        id={id} type={type} value={value} required={required} autoComplete={autoComplete} minLength={minLength} pattern={pattern}
        onChange={e => onChange(e.target.value)}
        className="input-base"
      />
    </div>
  );
}
