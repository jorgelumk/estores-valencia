import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { categoryPages } from "@/content/categories";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { QuoteForm } from "@/components/QuoteForm";
import { ServiceSchema, FAQPageSchema } from "@/components/SchemaJSONLD";
import { Phone } from "lucide-react";

const pageContent = categoryPages.empresas;

export const metadata: Metadata = {
  title: pageContent.meta.title,
  description: pageContent.meta.description,
  alternates: {
    canonical: pageContent.meta.canonical
  }
};

export default function EmpresasPage() {
  return (
    <>
      <ServiceSchema
        name={pageContent.hero.h1}
        description={pageContent.meta.description}
        url={pageContent.meta.canonical}
      />
      <FAQPageSchema faqs={pageContent.faqs} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={[{ label: "Empresas", href: "/empresas-valencia/" }]} />
      </div>

      <section className="bg-gradient-to-b from-[#0F3D5E] via-[#16486E] to-[#0F3D5E] text-white py-12 lg:py-16 mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="badge-brand bg-[#1E4968] text-[#F2B705]">Proyectos Corporativos</div>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
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
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl bg-[#0A2A42]">
                <Image
                  src={pageContent.hero.image}
                  alt={pageContent.hero.imageAlt}
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-[#4A6378]">
        {pageContent.bodyParagraphs.map((p, idx) => (
          <p key={idx} className="text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
        ))}
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {pageContent.sections?.map((sec, idx) => (
          <div key={idx} className="card-brand p-8 space-y-4">
            <h2 className="font-heading font-bold text-2xl text-[#0F3D5E]">{sec.h2}</h2>
            <div className="space-y-3 text-sm text-[#4A6378]">
              {sec.text.map((t, tIdx) => (
                <p key={tIdx} className="leading-relaxed">{t}</p>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQAccordion faqs={pageContent.faqs} title="Preguntas frecuentes para empresas y oficinas" />
      </section>

      <section id="presupuesto" className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <h2 className="font-heading font-bold text-2xl text-[#0F3D5E] text-center">
          Solicita presupuesto para tu empresa u oficina
        </h2>
        <QuoteForm initialProduct="empresas" />
      </section>
    </>
  );
}
