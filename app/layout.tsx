import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Destreza Consultores | Cumplimiento Normativo para Instituciones Financieras",
  description: "Más de 20 años auditando sistemas core bancarios, preparando instituciones para supervisiones regulatorias y reduciendo hallazgos en entidades financieras en El Salvador.",
  keywords: "consultoría financiera, cumplimiento normativo, auditoría sistemas bancarios, El Salvador",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
