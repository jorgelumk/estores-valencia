import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { productLandings } from "@/content/landings";
import { blogPosts } from "@/content/blog";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import {
  Layers,
  ShoppingBag,
  FileText,
  MapPin,
  Info,
  ShieldCheck,
  ChevronRight,
  Phone,
  HelpCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mapa del Sitio | Estores Valencia",
  description:
    "Mapa del sitio web de Estores Valencia. Encuentra de forma rápida todas nuestras categorías de estores a medida, productos, guías del blog y zonas de servicio.",
  alternates: {
    canonical: "https://estoresvalencia.es/mapa-del-sitio/"
  }
};

export default function MapaDelSitioPage() {
  const mainProducts = [
    { name: "Inicio", href: "/", desc: "Página principal de Estores Valencia" },
    { name: "Estores a Medida", href: "/estores/", desc: "Catálogo general de estores para hogar y oficina" },
    { name: "Paneles Japoneses", href: "/paneles-japoneses-valencia/", desc: "Elegancia minimalista para grandes ventanales y terrazas" },
    { name: "Cortinas Verticales", href: "/cortinas-verticales-valencia/", desc: "Control de luz preciso para salones y oficinas" },
    { name: "Persianas Alicantinas", href: "/persianas-alicantinas-valencia/", desc: "Persianas tradicionales de madera y PVC para balcón" },
    { name: "Cortinas Técnicas", href: "/cortinas-valencia/", desc: "Confección técnica a medida para cualquier tipo de ventana" },
    { name: "Empresas y Oficinas", href: "/empresas-valencia/", desc: "Soluciones de protección solar ignífugas para negocios" }
  ];

  const specificLandings = Object.values(productLandings).map((landing) => ({
    name: landing.hero.h1,
    href: `/estores/${landing.slug}-valencia/`,
    desc: landing.hero.subtitle
  }));

  const blogList = Object.values(blogPosts).map((post) => ({
    name: post.hero.h1,
    href: `/blog/${post.slug}/`,
    desc: post.meta.description
  }));

  const companyPages = [
    { name: "Sobre Nosotros", href: "/sobre-nosotros/", desc: "Especialistas en medición e instalación a domicilio" },
    { name: "Zonas de Servicio (30 km)", href: "/zonas/", desc: "Valencia ciudad, L'Horta, Camp de Túria y alrededores" },
    { name: "Preguntas Frecuentes", href: "/preguntas-frecuentes/", desc: "Respuestas a dudas sobre medición, garantía y plazos" },
    { name: "Contacto", href: "/contacto/", desc: "Atención telefónica, WhatsApp y correo electrónico" },
    { name: "Pedir Presupuesto Gratis", href: "/presupuesto/", desc: "Solicita tu visita de medición gratuita sin compromiso" }
  ];

  const legalPages = [
    { name: "Aviso Legal", href: "/aviso-legal/", desc: "Condiciones de uso e información corporativa" },
    { name: "Política de Privacidad", href: "/privacidad/", desc: "Tratamiento de datos personales conforme al RGPD" },
    { name: "Política de Cookies", href: "/cookies/", desc: "Información sobre cookies técnicas y analíticas" }
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={[{ label: "Mapa del sitio", href: "/mapa-del-sitio/" }]} />
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#0F3D5E] via-[#16486E] to-[#0F3D5E] text-white py-12 lg:py-16 mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="badge-brand bg-[#1E4968] text-[#F2B705]">Navegación General</div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
              Mapa del Sitio Web
            </h1>
            <p className="text-base sm:text-lg text-[#CFE0EE] leading-relaxed">
              Explora de un vistazo todas las páginas, productos a medida, guías especializadas, artículos del blog y zonas de cobertura de Estores Valencia.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section 1: Productos Principales */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 border-b border-[#DCE8F2] pb-3">
            <ShoppingBag className="w-6 h-6 text-[#2A7DB8]" />
            <h2 className="font-heading font-bold text-2xl text-[#0F3D5E]">
              Categorías Principales de Productos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mainProducts.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="card-brand p-5 flex flex-col justify-between hover:border-[#2A7DB8] transition-all group"
              >
                <div className="space-y-1">
                  <div className="font-heading font-bold text-base text-[#0F3D5E] group-hover:text-[#2A7DB8] flex items-center justify-between">
                    <span>{item.name}</span>
                    <ChevronRight className="w-4 h-4 text-[#2A7DB8] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-[#4A6378]">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Section 2: Modelos Específicos de Estores */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 border-b border-[#DCE8F2] pb-3">
            <Layers className="w-6 h-6 text-[#2A7DB8]" />
            <h2 className="font-heading font-bold text-2xl text-[#0F3D5E]">
              Tipos de Estores a Medida
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {specificLandings.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="card-brand p-5 flex flex-col justify-between hover:border-[#2A7DB8] transition-all group"
              >
                <div className="space-y-1">
                  <div className="font-heading font-bold text-base text-[#0F3D5E] group-hover:text-[#2A7DB8] flex items-center justify-between">
                    <span>{item.name}</span>
                    <ChevronRight className="w-4 h-4 text-[#2A7DB8] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-[#4A6378] line-clamp-2">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Section 3: Blog y Guías */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 border-b border-[#DCE8F2] pb-3">
            <FileText className="w-6 h-6 text-[#2A7DB8]" />
            <h2 className="font-heading font-bold text-2xl text-[#0F3D5E]">
              Blog y Guías Paso a Paso
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/blog/"
              className="card-brand p-5 bg-[#E1EEF8]/50 border-[#2A7DB8] flex items-center justify-between hover:bg-[#E1EEF8] transition-all md:col-span-2 group"
            >
              <div>
                <span className="font-heading font-bold text-lg text-[#0F3D5E] group-hover:text-[#2A7DB8]">
                  Ir al Blog Principal de Estores Valencia
                </span>
                <p className="text-xs text-[#4A6378]">Consejos de decoración, guías de limpieza y comparación de tejidos.</p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#2A7DB8]" />
            </Link>
            {blogList.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="card-brand p-5 flex flex-col justify-between hover:border-[#2A7DB8] transition-all group"
              >
                <div className="space-y-1">
                  <div className="font-heading font-bold text-sm text-[#0F3D5E] group-hover:text-[#2A7DB8] flex items-center justify-between">
                    <span>{item.name}</span>
                    <ChevronRight className="w-4 h-4 text-[#2A7DB8] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </div>
                  <p className="text-xs text-[#4A6378] line-clamp-2">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Section 5 & 6: Información de Empresa y Páginas Legales */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Empresa */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-[#DCE8F2] pb-3">
              <Info className="w-6 h-6 text-[#2A7DB8]" />
              <h2 className="font-heading font-bold text-2xl text-[#0F3D5E]">
                Información y Contacto
              </h2>
            </div>
            <div className="space-y-3">
              {companyPages.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="card-brand p-4 flex items-center justify-between hover:border-[#2A7DB8] transition-all group"
                >
                  <div>
                    <span className="font-heading font-bold text-sm text-[#0F3D5E] group-hover:text-[#2A7DB8] block">
                      {item.name}
                    </span>
                    <span className="text-xs text-[#4A6378]">{item.desc}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#2A7DB8] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Legales */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-[#DCE8F2] pb-3">
              <ShieldCheck className="w-6 h-6 text-[#2A7DB8]" />
              <h2 className="font-heading font-bold text-2xl text-[#0F3D5E]">
                Páginas Legales y Privacidad
              </h2>
            </div>
            <div className="space-y-3">
              {legalPages.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="card-brand p-4 flex items-center justify-between hover:border-[#2A7DB8] transition-all group"
                >
                  <div>
                    <span className="font-heading font-bold text-sm text-[#0F3D5E] group-hover:text-[#2A7DB8] block">
                      {item.name}
                    </span>
                    <span className="text-xs text-[#4A6378]">{item.desc}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#2A7DB8] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="presupuesto" className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <h2 className="font-heading font-bold text-2xl text-[#0F3D5E] text-center">
          ¿Buscas un estor o cortina a medida en Valencia? Te asesoramos gratis
        </h2>
        <QuoteForm />
      </section>
    </>
  );
}
