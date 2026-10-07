import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { categoryPages } from "@/content/categories";
import { productLandings } from "@/content/landings";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { QuoteForm } from "@/components/QuoteForm";
import { ServiceSchema, FAQPageSchema } from "@/components/SchemaJSONLD";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ArrowRight, Phone } from "lucide-react";

const pageContent = categoryPages.estores;

export const metadata: Metadata = {
  title: pageContent.meta.title,
  description: pageContent.meta.description,
  alternates: {
    canonical: pageContent.meta.canonical
  }
};

export default function EstoresCategoryPage() {
  const comparisonRows = [
    { feature: "Entrada de Luz", valA: "Regulable según tejido", valB: "Filtrado con visibilidad exterior" },
    { feature: "Protección Térmica", valA: "Media", valB: "Máxima (88% bloqueo solar)" },
    { feature: "Oscuridad Total", valA: "No (salvo opaco)", valB: "No" },
    { feature: "Instalación sin taladrar", valA: "Sí (Easy Fix)", valB: "Sí" },
    { feature: "Limpieza", valA: "Paño húmedo", valB: "Agua y jabón neutro" }
  ];

  return (
    <>
      <ServiceSchema
        name="Estores a Medida en Valencia"
        description={pageContent.meta.description}
        url={pageContent.meta.canonical}
      />
      <FAQPageSchema faqs={pageContent.faqs} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={[{ label: "Estores", href: "/estores-valencia/" }]} />
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0F3D5E] to-[#16486E] text-white py-12 lg:py-16 mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="badge-brand bg-[#1E4968] text-[#F2B705]">Catálogo de Estores</div>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl">
                {pageContent.hero.h1}
              </h1>
              <p className="text-base text-[#CFE0EE] leading-relaxed">
                {pageContent.hero.subtitle}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link href="/presupuesto/" className="btn-accent text-sm py-3 px-6">
                  {pageContent.hero.ctaPrimary}
                </Link>
                <a href="tel:+34686382891" className="btn-secondary border-white text-white hover:bg-white/10 text-sm py-3 px-6 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#F2B705]" />
                  686 382 891
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl bg-[#0A2A42]">
                <Image
                  src={pageContent.hero.image}
                  alt={pageContent.hero.imageAlt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Body */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-[#4A6378]">
        {pageContent.bodyParagraphs.map((p, idx) => (
          <p key={idx} className="text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
        ))}
      </section>

      {/* 6 Landings Cards Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="font-heading font-extrabold text-2xl text-[#0F3D5E] text-center">
          Explora los 6 tipos de estores a medida en Valencia
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.values(productLandings).map((p) => (
            <div key={p.slug} className="card-brand overflow-hidden group flex flex-col justify-between">
              <div className="relative h-48 w-full bg-[#E1EEF8]">
                <Image src={p.hero.image} alt={p.hero.imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#0F3D5E] group-hover:text-[#2A7DB8] transition-colors">
                    {p.hero.h1}
                  </h3>
                  <p className="text-xs text-[#4A6378] mt-1 line-clamp-3">{p.introParagraphs[0]}</p>
                </div>
                <div className="pt-2 border-t border-[#F5F8FB]">
                  <Link href={`/estores/${p.slug}-valencia/`} className="text-xs font-bold text-[#2A7DB8] hover:underline flex items-center justify-between">
                    <span>Ver modelos de {p.slug}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advisory Banner Block */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-brand p-8 bg-[#E1EEF8] border border-[#2A7DB8]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-heading font-bold text-2xl text-[#0F3D5E]">
              ¿No sabes cuál elegir? Te asesoramos en casa gratis
            </h3>
            <p className="text-sm text-[#4A6378] max-w-2xl">
              Llevamos los muestrarios físicos de telas (screen, opacos, noche y día, lino) a tu casa en Valencia para comprobar la luz real en tus ventanas.
            </p>
          </div>
          <Link href="/presupuesto/" className="btn-accent text-sm py-3 px-6 shrink-0 shadow">
            Pedir visita técnica gratis
          </Link>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ComparisonTable
          title="Tabla Comparativa: Características de Estores"
          typeA="Estor Enrollables"
          typeB="Estor Screen"
          rows={comparisonRows}
        />
      </section>

      {/* FAQs */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQAccordion faqs={pageContent.faqs} title="Preguntas frecuentes sobre estores a medida" />
      </section>

      {/* Form */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <h2 className="font-heading font-bold text-2xl text-[#0F3D5E] text-center">
          Pide presupuesto gratis de estores en Valencia
        </h2>
        <QuoteForm />
      </section>
    </>
  );
}
