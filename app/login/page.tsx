"use client";
import { useState } from "react";
import Link from "next/link";
import BrandMosaic from "@/components/BrandMosaic";
import DestrezaLogo from "@/components/DestrezaLogo";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  return (
    <section style={{ minHeight: "80vh", background: "var(--gray-50)", padding: "64px 24px" }}>
      <div className="container">
        <div className="conversion-layout" style={{ alignItems: "center" }}>
          <div>
            <div style={{ marginBottom: 24 }}>
              <BrandMosaic />
            </div>
            <div className="chip-teal" style={{ marginBottom: 18 }}>Acceso de clientes</div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "var(--navy)", marginBottom: 18, lineHeight: 1.15 }}>
              Accede a tu plataforma de cumplimiento con total claridad.
            </h1>
            <p style={{ fontSize: "1rem", color: "var(--gray-600)", lineHeight: 1.8, maxWidth: 540, marginBottom: 32 }}>
              Ingresa para consultar evidencias, seguimiento regulatorio, recursos formativos y paneles preparados para instituciones financieras.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                "Seguimiento centralizado de hallazgos y planes de acción.",
                "Acceso a recursos y formación alineados a la normativa local.",
                "Acompañamiento especializado para equipos de cumplimiento y auditoría.",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 9, height: 9, borderRadius: 999, background: "var(--gold)", marginTop: 9, flexShrink: 0 }} />
                  <p style={{ color: "var(--gray-600)", lineHeight: 1.7 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ width: "100%", maxWidth: 460, justifySelf: "end" }}>
            <div style={{ textAlign: "center", marginBottom: 36 }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
                <DestrezaLogo variant="full" height={48} showTagline={false} />
              </div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", color: "var(--navy)", marginBottom: 8 }}>Bienvenido de vuelta</h2>
              <p style={{ fontSize: "1rem", color: "var(--gray-600)", lineHeight: 1.7 }}>Ingresa a tu cuenta de Destreza</p>
            </div>

            <div className="card" style={{ padding: "40px" }}>
              <form style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <label htmlFor="email" style={{ display: "block", fontSize: "0.92rem", fontWeight: 600, color: "var(--gray-800)", marginBottom: 8 }}>
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="tu@correo.com"
                    autoComplete="email"
                    className="input-base"
                  />
                </div>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <label htmlFor="password" style={{ fontSize: "0.92rem", fontWeight: 600, color: "var(--gray-800)" }}>Contraseña</label>
                    <a href="#" style={{ fontSize: "0.9rem", color: "var(--teal)", fontWeight: 600 }}>¿Olvidaste tu contraseña?</a>
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    className="input-base"
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ padding: "14px", justifyContent: "center", fontSize: "0.95rem" }}>
                  Iniciar sesión
                </button>
              </form>

              <div style={{ marginTop: 24, textAlign: "center", fontSize: "0.95rem", color: "var(--gray-600)" }}>
                ¿No tienes cuenta?{" "}
                <Link href="/prueba-gratis" style={{ color: "var(--gold)", fontWeight: 600 }}>Regístrate gratis</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
