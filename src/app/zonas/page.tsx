import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { categoryPages } from "@/content/categories";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { QuoteForm } from "@/components/QuoteForm";
import { ZoneMap } from "@/components/ZoneMap";
import { FAQPageSchema } from "@/components/SchemaJSONLD";
import { MapPin, Navigation, Phone, ShieldCheck } from "lucide-react";

const pageContent = categoryPages.zonas;

export const metadata: Metadata = {
  title: pageContent.meta.title,
  description: pageContent.meta.description,
  alternates: {
    canonical: pageContent.meta.canonical
  }
};

export default function ZonasPage() {
  return (
    <>
      <FAQPageSchema faqs={pageContent.faqs} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={[{ label: "Zonas de servicio", href: "/zonas/" }]} />
      </div>

      <section className="bg-gradient-to-b from-[#0F3D5E] via-[#16486E] to-[#0F3D5E] text-white py-12 lg:py-16 mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="badge-brand bg-[#1E4968] text-[#F2B705]">Servicio a Domicilio</div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl">
              {pageContent.hero.h1}
            </h1>
            <p className="text-base text-[#CFE0EE] leading-relaxed">
              {pageContent.hero.subtitle}
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link href="#presupuesto" className="btn-accent text-sm py-3.5 px-8">
                {pageContent.hero.ctaPrimary}
              </Link>
              <a href="tel:+34686382891" className="btn-secondary border-white text-white hover:bg-white/10 text-sm py-3.5 px-6 flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F2B705]" />
                686 382 891
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-[#4A6378]">
        {pageContent.bodyParagraphs.map((p, idx) => (
          <p key={idx} className="text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
        ))}
      </section>

      {/* Radius map component with comarca cards */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ZoneMap />
      </section>

      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQAccordion faqs={pageContent.faqs} title="Preguntas frecuentes sobre zonas de servicio" />
      </section>

      <section id="presupuesto" className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <h2 className="font-heading font-bold text-2xl text-[#0F3D5E] text-center">
          Solicita tu visita de medición gratuita en tu municipio
        </h2>
        <QuoteForm />
      </section>
    </>
  );
}
