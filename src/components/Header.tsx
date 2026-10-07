"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown, ShieldCheck, Clock, Sparkles } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [estoresDropdownOpen, setEstoresDropdownOpen] = useState(false);
  const pathname = usePathname();

  const estoresItems = [
    { name: "Estores Enrollables", href: "/estores/enrollables-valencia/", desc: "La opción más versátil" },
    { name: "Estores Screen", href: "/estores/screen-valencia/", desc: "Filtra el sol conservando vistas" },
    { name: "Estores Noche y Día", href: "/estores/noche-y-dia-valencia/", desc: "Regulación por franjas alternas" },
    { name: "Estores Paqueto", href: "/estores/paqueto-valencia/", desc: "Pliegues suaves en telas de lino" },
    { name: "Estores Opacos", href: "/estores/opacos-valencia/", desc: "Oscuridad 100% blackout sin persiana" },
    { name: "Estores Motorizados", href: "/estores/motorizados-valencia/", desc: "Control por mando o domótica" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0F3D5E] text-white shadow-md border-b border-[#1E4968]/50">
      {/* Top Banner Notice */}
      <div className="bg-[#0A2A42] text-xs py-1.5 px-4 border-b border-[#1E4968]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2 text-[#CFE0EE]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F2B705]" />
              Presupuesto sin compromiso e instalación en Valencia (30 km)
            </span>
            <span className="hidden md:flex items-center gap-1 text-[#CFE0EE]">
              <Clock className="w-3.5 h-3.5 text-[#F2B705]" />
              Garantía oficial de 3 años
            </span>
          </div>
          <div className="flex items-center gap-3 font-semibold">
            <a
              href="tel:+34686382891"
              className="flex items-center gap-1.5 text-[#F2B705] hover:text-white transition-colors bg-[#0F3D5E]/60 px-2.5 py-0.5 rounded-full"
            >
              <Phone className="w-3.5 h-3.5" />
              686 382 891
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2 xl:gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-xl flex items-center justify-center p-2 shadow-sm group-hover:scale-105 transition-transform">
              <div className="w-full h-full flex flex-col justify-between">
                <div className="h-1 bg-[#0F3D5E] rounded-full w-full"></div>
                <div className="h-1 bg-[#2A7DB8] rounded-full w-full"></div>
                <div className="h-1 bg-[#F2B705] rounded-full w-3/4"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-white leading-none">
                ESTORES <span className="text-[#F2B705]">VALENCIA</span>
              </span>
              <span className="text-[9px] sm:text-[10px] text-[#CFE0EE] tracking-widest uppercase font-semibold mt-0.5">
                estoresvalencia.es
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Menu (Single Line, Perfectly Centered Baseline) */}
          <nav className="hidden lg:flex items-center justify-center gap-2.5 xl:gap-4 text-xs xl:text-sm font-semibold whitespace-nowrap">
            {/* Estores Dropdown */}
            <div
              className="relative group flex items-center h-20"
              onMouseEnter={() => setEstoresDropdownOpen(true)}
              onMouseLeave={() => setEstoresDropdownOpen(false)}
            >
              <Link
                href="/estores-valencia/"
                className={`inline-flex items-center gap-1 py-1 transition-colors whitespace-nowrap ${
                  isActive("/estores") ? "text-[#F2B705]" : "text-white hover:text-[#F2B705]"
                }`}
              >
                Estores
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 text-[#F2B705]" />
              </Link>

              {/* Dropdown Menu */}
              {estoresDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-[#DCE8F2] py-3 z-50 text-[#0F3D5E] animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-1.5 border-b border-[#F5F8FB] text-[11px] font-bold text-[#2A7DB8] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#F2B705]" />
                    Catálogo de Estores a Medida
                  </div>
                  <div className="p-1.5 space-y-0.5">
                    {estoresItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-3.5 py-2 rounded-xl hover:bg-[#F5F8FB] transition-colors group/item"
                      >
                        <div className="font-bold text-sm text-[#0F3D5E] group-hover/item:text-[#2A7DB8] transition-colors">
                          {item.name}
                        </div>
                        <div className="text-xs text-[#4A6378] font-normal">{item.desc}</div>
                      </Link>
                    ))}
                  </div>
                  <div className="p-2.5 border-t border-[#F5F8FB] bg-[#F5F8FB] rounded-b-2xl">
                    <Link
                      href="/estores-valencia/"
                      className="block text-center text-xs font-bold text-[#2A7DB8] hover:text-[#0F3D5E] transition-colors"
                    >
                      Ver todas las colecciones de estores →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/paneles-japoneses-valencia/"
              className={`inline-flex items-center py-1 transition-colors whitespace-nowrap ${
                isActive("/paneles-japoneses") ? "text-[#F2B705]" : "text-white hover:text-[#F2B705]"
              }`}
            >
              Paneles japoneses
            </Link>

            <Link
              href="/cortinas-verticales-valencia/"
              className={`inline-flex items-center py-1 transition-colors whitespace-nowrap ${
                isActive("/cortinas-verticales") ? "text-[#F2B705]" : "text-white hover:text-[#F2B705]"
              }`}
            >
              Cortinas verticales
            </Link>

            <Link
              href="/persianas-alicantinas-valencia/"
              className={`inline-flex items-center py-1 transition-colors whitespace-nowrap ${
                isActive("/persianas-alicantinas") ? "text-[#F2B705]" : "text-white hover:text-[#F2B705]"
              }`}
            >
              Persianas alicantinas
            </Link>

            <Link
              href="/cortinas-valencia/"
              className={`inline-flex items-center py-1 transition-colors whitespace-nowrap ${
                isActive("/cortinas") ? "text-[#F2B705]" : "text-white hover:text-[#F2B705]"
              }`}
            >
              Cortinas
            </Link>

            <Link
              href="/blog/"
              className={`inline-flex items-center py-1 transition-colors whitespace-nowrap ${
                isActive("/blog") ? "text-[#F2B705]" : "text-white hover:text-[#F2B705]"
              }`}
            >
              Blog
            </Link>

            <Link
              href="/zonas/"
              className={`inline-flex items-center py-1 transition-colors whitespace-nowrap ${
                isActive("/zonas") ? "text-[#F2B705]" : "text-white hover:text-[#F2B705]"
              }`}
            >
              Zonas
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              href="/presupuesto/"
              className="btn-accent text-xs xl:text-sm py-2 px-3.5 xl:px-5 shrink-0 whitespace-nowrap shadow-md hover:shadow-lg"
            >
              Presupuesto gratis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:+34686382891"
              className="p-2 text-[#F2B705] rounded-full bg-[#0A2A42]"
              aria-label="Llamar por teléfono"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white rounded-lg hover:bg-[#1E4968] focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A2A42] border-t border-[#1E4968] px-4 pt-4 pb-6 space-y-3">
          <div className="space-y-1">
            <div className="font-semibold text-xs text-[#F2B705] uppercase tracking-wider px-3 py-1">
              Catálogo principal
            </div>
            <Link
              href="/estores-valencia/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-white hover:bg-[#0F3D5E] rounded-md"
            >
              Estores en Valencia (Ver catálogo)
            </Link>
            <div className="pl-4 space-y-1 border-l-2 border-[#2A7DB8] my-1">
              {estoresItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-1.5 text-sm text-[#CFE0EE] hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Link
              href="/paneles-japoneses-valencia/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-white hover:bg-[#0F3D5E] rounded-md"
            >
              Paneles japoneses en Valencia
            </Link>
            <Link
              href="/cortinas-verticales-valencia/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-white hover:bg-[#0F3D5E] rounded-md"
            >
              Cortinas verticales en Valencia
            </Link>
            <Link
              href="/persianas-alicantinas-valencia/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-white hover:bg-[#0F3D5E] rounded-md"
            >
              Persianas alicantinas en Valencia
            </Link>
            <Link
              href="/cortinas-valencia/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-white hover:bg-[#0F3D5E] rounded-md"
            >
              Cortinas en Valencia
            </Link>
          </div>

          <div className="pt-2 border-t border-[#1E4968] space-y-1">
            <div className="font-semibold text-xs text-[#F2B705] uppercase tracking-wider px-3 py-1">
              Información
            </div>
            <Link
              href="/blog/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-[#CFE0EE] hover:text-white"
            >
              Blog
            </Link>
            <Link
              href="/empresas-valencia/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-[#CFE0EE] hover:text-white"
            >
              Estores para empresas y oficinas
            </Link>
            <Link
              href="/zonas/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-[#CFE0EE] hover:text-white"
            >
              Zonas de servicio (30 km)
            </Link>
            <Link
              href="/sobre-nosotros/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-[#CFE0EE] hover:text-white"
            >
              Sobre nosotros
            </Link>
            <Link
              href="/preguntas-frecuentes/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-[#CFE0EE] hover:text-white"
            >
              Preguntas frecuentes
            </Link>
            <Link
              href="/contacto/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-[#CFE0EE] hover:text-white"
            >
              Contacto
            </Link>
          </div>

          <div className="pt-4 flex flex-col gap-2">
            <Link
              href="/presupuesto/"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-accent w-full text-center py-3"
            >
              Presupuesto gratis
            </Link>
            <a
              href="tel:+34686382891"
              className="btn-secondary w-full text-center py-3 text-white border-white hover:bg-[#0F3D5E]"
            >
              Llamar al 686 382 891
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
