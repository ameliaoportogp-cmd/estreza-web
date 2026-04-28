"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProfessionalIcon from "@/components/ProfessionalIcon";

const servicios = [
  { label: "Cumplimiento Normativo", href: "/servicios/cumplimiento", icon: "compliance" as const },
  { label: "Auditoría de Sistemas TI", href: "/servicios/auditoria-ti", icon: "audit" as const },
  { label: "Automatización de Procesos", href: "/servicios/automatizacion", icon: "automation" as const },
  { label: "Procesos Operativos", href: "/servicios/procesos", icon: "operations" as const },
  { label: "Gestión de Riesgos", href: "/servicios/riesgos", icon: "risk" as const },
];

const academia = [
  { label: "Cursos en Línea", href: "/academia/cursos", icon: "academy" as const },
  { label: "Certificaciones", href: "/academia/certificaciones", icon: "certification" as const },
  { label: "Talleres Presenciales", href: "/academia/talleres", icon: "workshop" as const },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeMenus = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      {/* Top bar */}
      <div style={{ background: "#10243B", color: "rgba(255,255,255,0.82)", fontSize: "0.8rem", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><ProfessionalIcon name="phone" size={15} /> +503 7742-5385</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><ProfessionalIcon name="mail" size={15} /> info@destrezasv.com</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><ProfessionalIcon name="clock" size={15} /> Lun–Sáb 8:00–17:00</span>
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            {[
              { href: "https://facebook.com", icon: "facebook" as const },
              { href: "https://instagram.com", icon: "instagram" as const },
              { href: "https://linkedin.com", icon: "linkedin" as const },
              { href: "https://youtube.com", icon: "youtube" as const },
            ].map((item) => (
              <a key={item.icon} href={item.href} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.58)", transition: "var(--transition)" }}
                 onMouseOver={e => (e.currentTarget.style.color = "var(--gold-light)")}
                 onMouseOut={e => (e.currentTarget.style.color = "rgba(255,255,255,0.58)")}>
                <ProfessionalIcon name={item.icon} size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        ref={dropdownRef}
        style={{
          background: "var(--white)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          transition: "var(--transition)",
          borderBottom: scrolled ? "1px solid var(--gray-100)" : "1px solid transparent",
          boxShadow: scrolled ? "var(--shadow-sm)" : "none",
        }}
      >
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 24px" }}>
          {/* Logo */}
          <Link href="/" onClick={closeMenus} style={{ display: "flex", alignItems: "center" }}>
            <Image src="/logo.png" alt="Destreza Formación y Consultoría" width={180} height={44} priority style={{ height: 44, width: "auto", objectFit: "contain" }} />
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden-mobile">
            <NavItem href="/" label="Inicio" active={pathname === "/"} onNavigate={closeMenus} />

            {/* Servicios dropdown */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setActiveDropdown(activeDropdown === "servicios" ? null : "servicios")}
                style={{
                  display: "flex", alignItems: "center", gap: 4,
                  padding: "8px 14px", borderRadius: 8, border: "none", background: "transparent",
                  fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 500,
                  color: isActive("/servicios") ? "var(--gold)" : "var(--gray-800)",
                  cursor: "pointer", transition: "var(--transition)"
                }}
              >
                Servicios
                <span style={{ fontSize: "0.7rem", transition: "var(--transition)", transform: activeDropdown === "servicios" ? "rotate(180deg)" : "none" }}>▾</span>
              </button>
              {activeDropdown === "servicios" && (
                <Dropdown items={servicios} onClose={() => setActiveDropdown(null)} />
              )}
            </div>

            {/* Academia dropdown */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setActiveDropdown(activeDropdown === "academia" ? null : "academia")}
                style={{
                  display: "flex", alignItems: "center", gap: 4,
                  padding: "8px 14px", borderRadius: 8, border: "none", background: "transparent",
                  fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 500,
                  color: isActive("/academia") ? "var(--gold)" : "var(--gray-800)",
                  cursor: "pointer", transition: "var(--transition)"
                }}
              >
                Academia
                <span style={{ fontSize: "0.7rem", transition: "var(--transition)", transform: activeDropdown === "academia" ? "rotate(180deg)" : "none" }}>▾</span>
              </button>
              {activeDropdown === "academia" && (
                <Dropdown items={academia} onClose={() => setActiveDropdown(null)} />
              )}
            </div>

            <NavItem href="/recursos" label="Recursos" active={isActive("/recursos")} onNavigate={closeMenus} />
            <NavItem href="/nosotros" label="Nosotros" active={isActive("/nosotros")} onNavigate={closeMenus} />
            <NavItem href="/contacto" label="Contacto" active={isActive("/contacto")} onNavigate={closeMenus} />
          </nav>

          {/* CTA buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }} className="hidden-mobile">
            <Link href="/login" onClick={closeMenus} className="btn-outline" style={{ padding: "9px 20px", fontSize: "0.85rem" }}>
              Iniciar Sesión
            </Link>
            <Link href="/prueba-gratis" onClick={closeMenus} className="btn-primary" style={{ padding: "9px 20px", fontSize: "0.85rem" }}>
              Prueba Gratis
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="show-mobile"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}
          >
            <div style={{ width: 24, height: 2, background: "var(--navy)", marginBottom: 5, transition: "var(--transition)" }} />
            <div style={{ width: 24, height: 2, background: "var(--navy)", marginBottom: 5 }} />
            <div style={{ width: 24, height: 2, background: "var(--navy)" }} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{ background: "var(--white)", borderTop: "1px solid var(--gray-100)", padding: "16px 24px 24px" }}>
            <MobileLink href="/" label="Inicio" onNavigate={closeMenus} />
            <MobileSection label="Servicios" items={servicios} onNavigate={closeMenus} />
            <MobileSection label="Academia" items={academia} onNavigate={closeMenus} />
            <MobileLink href="/recursos" label="Recursos" onNavigate={closeMenus} />
            <MobileLink href="/nosotros" label="Nosotros" onNavigate={closeMenus} />
            <MobileLink href="/contacto" label="Contacto" onNavigate={closeMenus} />
            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
              <Link href="/login" onClick={closeMenus} className="btn-outline" style={{ textAlign: "center", justifyContent: "center" }}>Iniciar Sesión</Link>
              <Link href="/prueba-gratis" onClick={closeMenus} className="btn-primary" style={{ textAlign: "center", justifyContent: "center" }}>Prueba Gratis</Link>
            </div>
          </div>
        )}
      </header>

      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </>
  );
}

function NavItem({ href, label, active, onNavigate }: { href: string; label: string; active: boolean; onNavigate: () => void }) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      style={{
        padding: "8px 14px", borderRadius: 8,
        fontSize: "0.9rem", fontWeight: 600,
        color: active ? "var(--teal)" : "var(--gray-600)",
        transition: "var(--transition)",
        background: active ? "var(--teal-soft)" : "transparent",
        borderBottom: active ? "2px solid var(--teal)" : "2px solid transparent",
      }}
      onMouseOver={e => { if (!active) { e.currentTarget.style.color = "var(--teal)"; e.currentTarget.style.background = "var(--teal-soft)"; }}}
      onMouseOut={e => { if (!active) { e.currentTarget.style.color = "var(--gray-600)"; e.currentTarget.style.background = "transparent"; }}}
    >
      {label}
    </Link>
  );
}

function Dropdown({ items, onClose }: { items: { label: string; href: string; icon: "compliance" | "audit" | "automation" | "operations" | "risk" | "academy" | "certification" | "workshop" }[]; onClose: () => void }) {
  return (
    <div style={{
      position: "absolute", top: "calc(100% + 8px)", left: 0,
      background: "var(--white)", borderRadius: 12,
      border: "1px solid var(--gray-100)", boxShadow: "var(--shadow-lg)",
      minWidth: 240, padding: "8px", zIndex: 999,
    }}>
      {items.map(item => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          style={{
            display: "flex", alignItems: "center", gap: 10,
            padding: "10px 14px", borderRadius: 8,
            fontSize: "0.88rem", fontWeight: 500, color: "var(--gray-800)",
            transition: "var(--transition)",
          }}
          onMouseOver={e => { e.currentTarget.style.background = "var(--gray-50)"; e.currentTarget.style.color = "var(--navy)"; }}
          onMouseOut={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gray-800)"; }}
        >
          <span style={{ color: "var(--teal)" }}><ProfessionalIcon name={item.icon} size={16} /></span>
          {item.label}
        </Link>
      ))}
    </div>
  );
}

function MobileLink({ href, label, onNavigate }: { href: string; label: string; onNavigate: () => void }) {
  return (
    <Link href={href} onClick={onNavigate} style={{ display: "block", padding: "10px 0", fontSize: "0.95rem", fontWeight: 500, color: "var(--gray-800)", borderBottom: "1px solid var(--gray-100)" }}>
      {label}
    </Link>
  );
}

function MobileSection({ label, items, onNavigate }: { label: string; items: { label: string; href: string; icon: "compliance" | "audit" | "automation" | "operations" | "risk" | "academy" | "certification" | "workshop" }[]; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid var(--gray-100)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", fontSize: "0.95rem", fontWeight: 500, color: "var(--gray-800)", background: "none", border: "none", cursor: "pointer" }}
      >
        {label} <span style={{ fontSize: "0.75rem" }}>{open ? "▲" : "▾"}</span>
      </button>
      {open && (
        <div style={{ paddingBottom: 8, paddingLeft: 12 }}>
          {items.map(item => (
            <Link key={item.href} href={item.href} onClick={onNavigate} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", fontSize: "0.88rem", color: "var(--gray-600)" }}>
              <span style={{ color: "var(--teal)" }}><ProfessionalIcon name={item.icon} size={16} /></span>{item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
