"use client";
import { useState } from "react";
import BrandMosaic from "@/components/BrandMosaic";
import ProfessionalIcon, { IconBadge } from "@/components/ProfessionalIcon";

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", institucion: "", mensaje: "", website: "" });
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
    const email = form.email.trim().toLowerCase();
    const telefono = form.telefono.trim();
    const institucion = form.institucion.trim();
    const mensaje = form.mensaje.trim();

    if (nombre.length < 3 || !email || mensaje.length < 20) {
      setError("Completa nombre, correo y un mensaje con un poco más de detalle.");
      return;
    }

    if (telefono && !/^[+\d\s()-]{8,20}$/.test(telefono)) {
      setError("Revisa el formato del teléfono para que podamos contactarte.");
      return;
    }

    setForm({ nombre, email, telefono, institucion, mensaje, website: "" });
    setEnviado(true);
  };

  return (
    <>
      <section style={{ background: "linear-gradient(135deg, var(--navy-deep) 0%, var(--navy-light) 100%)", padding: "72px 0 64px", color: "var(--white)" }}>
        <div className="container">
          <div className="chip" style={{ marginBottom: 20 }}>Hablemos</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--white)", marginBottom: 16 }}>
            Contáctanos
          </h1>
          <p style={{ color: "rgba(255,255,255,0.84)", fontSize: "1.1rem", maxWidth: 560, lineHeight: 1.78 }}>
            Cuéntanos sobre tu institución y te orientamos sin compromiso.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div className="conversion-layout" style={{ gridTemplateColumns: "0.92fr 1.08fr" }}>

            {/* Info */}
            <div>
              <div style={{ marginBottom: 28, display: "flex", justifyContent: "flex-start" }}>
                <BrandMosaic compact />
              </div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "var(--navy)", marginBottom: 32 }}>Información de contacto</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 40 }}>
                {[
                  ["phone", "Teléfono", "+503 7742-5385", "gold"],
                  ["mail", "Correo", "info@destrezasv.com", "teal"],
                  ["location", "Dirección", "Km 7½ Planes de Renderos, San Salvador, El Salvador", "navy"],
                  ["clock", "Horario", "Lunes a Sábado, 8:00 AM – 5:00 PM", "gold"],
                ].map(([icon, label, value, tone]) => (
                  <div key={label as string} style={{ display: "flex", gap: 16 }}>
                    <div style={{ flexShrink: 0 }}>
                      <IconBadge
                        name={icon as "phone" | "mail" | "location" | "clock"}
                        tone={tone as "gold" | "teal" | "navy"}
                        size={18}
                      />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--gray-600)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{label as string}</div>
                      <div style={{ fontSize: "1rem", color: "var(--gray-800)", lineHeight: 1.7 }}>{value as string}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: "var(--navy)", borderRadius: 14, padding: "28px 24px", color: "var(--white)" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--gold)", marginBottom: 12 }}>Consulta gratuita</h3>
                <p style={{ fontSize: "1.02rem", color: "rgba(255,255,255,0.84)", lineHeight: 1.78 }}>
                  Agenda una sesión de 30 minutos con uno de nuestros especialistas. Sin costo y sin compromiso.
                </p>
              </div>
            </div>

            {/* Formulario */}
            <div className="card" style={{ padding: "40px" }}>
              {enviado ? (
                <div style={{ textAlign: "center", padding: "32px 0" }}>
                  <div
                    style={{
                      width: 82,
                      height: 82,
                      margin: "0 auto 20px",
                      borderRadius: 24,
                      background: "linear-gradient(135deg, rgba(212,160,32,0.18) 0%, rgba(46,124,138,0.14) 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "var(--shadow-sm)",
                      color: "var(--navy)",
                    }}
                  >
                    <ProfessionalIcon name="check" size={28} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--navy)", marginBottom: 12 }}>¡Mensaje enviado!</h3>
                  <p style={{ color: "var(--gray-600)" }}>Te contactaremos en menos de 24 horas.</p>
                </div>
              ) : (
                <>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "var(--navy)", marginBottom: 28 }}>Envíanos un mensaje</h2>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <div className="sr-only" aria-hidden="true">
                      <label htmlFor="website">Sitio web</label>
                      <input id="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => updateForm("website", e.target.value)} />
                    </div>
                    <div className="field-grid-2">
                      <ContactField label="Nombre completo" id="nombre" value={form.nombre} autoComplete="name" minLength={3} onChange={(v) => updateForm("nombre", v)} required />
                      <ContactField label="Correo electrónico" id="email" type="email" value={form.email} autoComplete="email" onChange={(v) => updateForm("email", v)} required />
                    </div>
                    <div className="field-grid-2">
                      <ContactField label="Teléfono" id="telefono" type="tel" value={form.telefono} autoComplete="tel" pattern="^[+\\d\\s()-]{8,20}$" onChange={(v) => updateForm("telefono", v)} />
                      <ContactField label="Institución" id="institucion" value={form.institucion} autoComplete="organization" onChange={(v) => updateForm("institucion", v)} />
                    </div>
                    <div>
                      <label htmlFor="mensaje" style={{ display: "block", fontSize: "0.98rem", fontWeight: 600, color: "var(--gray-800)", marginBottom: 8 }}>
                        Mensaje <span style={{ color: "var(--gold)" }}>*</span>
                      </label>
                      <textarea
                        id="mensaje" rows={5} required minLength={20} value={form.mensaje}
                        onChange={e => updateForm("mensaje", e.target.value)}
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                        className="textarea-base"
                      />
                    </div>
                    {error && <p style={{ color: "#b42318", fontSize: "0.98rem", lineHeight: 1.6 }}>{error}</p>}
                    <button type="submit" className="btn-primary" style={{ padding: "15px", justifyContent: "center", fontSize: "1rem" }}>
                      Enviar mensaje →
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactField({ label, id, type = "text", value, onChange, required, autoComplete, minLength, pattern }: { label: string; id: string; type?: string; value: string; onChange: (v: string) => void; required?: boolean; autoComplete?: string; minLength?: number; pattern?: string }) {
  return (
    <div>
      <label htmlFor={id} style={{ display: "block", fontSize: "0.98rem", fontWeight: 600, color: "var(--gray-800)", marginBottom: 8 }}>
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
