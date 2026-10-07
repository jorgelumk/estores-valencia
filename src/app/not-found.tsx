import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Home, Compass, Phone, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Página no encontrada | Estores Valencia",
  description: "La página que buscas no existe o ha cambiado de dirección. Explora nuestro catálogo de estores a medida en Valencia.",
  robots: {
    index: false,
    follow: true
  }
};

export default function NotFound() {
  const mainCategories = [
    { name: "Estores a Medida", href: "/estores-valencia/", desc: "Catálogo completo" },
    { name: "Estores Screen", href: "/estores/screen-valencia/", desc: "Protección solar" },
    { name: "Estores Enrollables", href: "/estores/enrollables-valencia/", desc: "Versatilidad total" },
    { name: "Estores Noche y Día", href: "/estores/noche-y-dia-valencia/", desc: "Regulación por franjas" },
    { name: "Paneles Japoneses", href: "/paneles-japoneses-valencia/", desc: "Grandes ventanales" },
    { name: "Cortinas Verticales", href: "/cortinas-verticales-valencia/", desc: "Elegancia y luz" },
    { name: "Persianas Alicantinas", href: "/persianas-alicantinas-valencia/", desc: "Estilo mediterráneo" },
    { name: "Cortinas Técnicas", href: "/cortinas-valencia/", desc: "Soluciones a medida" }
  ];

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-12 sm:py-20 px-4 bg-gradient-to-b from-[#F5F8FB] via-[#EBF3FA] to-[#F5F8FB]">
      <div className="max-w-3xl w-full">
        <div className="bg-white rounded-3xl shadow-xl border border-[#DCE8F2] p-6 sm:p-12 text-center space-y-8">
          
          {/* Badge & Icon Header */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-[#0F3D5E] flex items-center justify-center text-[#F2B705] shadow-lg transform -rotate-3 hover:rotate-0 transition-transform">
                <Compass className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <span className="absolute -top-2 -right-2 bg-[#F2B705] text-[#0F3D5E] text-xs font-heading font-extrabold px-3 py-1 rounded-full shadow-sm">
                404
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#0F3D5E] tracking-tight">
                Vaya, ¡parece que esta ventana no tiene estor!
              </h1>
              <p className="text-sm sm:text-base text-[#4A6378] max-w-lg mx-auto leading-relaxed">
                La página que estás buscando no existe, se ha movido o ha cambiado de dirección. No te preocupes, puedes encontrar lo que buscas en nuestras secciones principales:
              </p>
            </div>
          </div>

          {/* Category Cards Grid */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#2A7DB8] uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#F2B705]" />
              Catálogo principal de productos en Valencia
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
              {mainCategories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="p-3.5 rounded-2xl bg-[#F5F8FB] hover:bg-[#0F3D5E] border border-[#DCE8F2] hover:border-[#0F3D5E] transition-all group duration-200"
                >
                  <div className="font-bold text-xs sm:text-sm text-[#0F3D5E] group-hover:text-white transition-colors flex items-center justify-between">
                    <span>{cat.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#2A7DB8] group-hover:text-[#F2B705] transform group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="text-[11px] text-[#4A6378] group-hover:text-[#CFE0EE] transition-colors mt-0.5">
                    {cat.desc}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="pt-4 border-t border-[#F5F8FB] flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="btn-primary w-full sm:w-auto text-xs sm:text-sm py-3 px-6 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <Home className="w-4 h-4 text-[#F2B705]" />
              Volver a la página principal
            </Link>

            <Link
              href="/presupuesto/"
              className="btn-accent w-full sm:w-auto text-xs sm:text-sm py-3 px-6 shadow-md hover:shadow-lg"
            >
              Pedir presupuesto gratis
            </Link>
          </div>

          {/* Assistance Footer */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-[#4A6378]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-[#2A7DB8]" />
              Medición e instalación sin compromiso
            </span>
            <span className="hidden sm:inline">•</span>
            <a
              href="tel:+34686382891"
              className="flex items-center gap-1 font-bold text-[#0F3D5E] hover:text-[#2A7DB8] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F2B705]" />
              Atención telefónica: 686 382 891
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
