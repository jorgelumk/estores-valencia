import React from "react";
import { Metadata } from "next";
import { supportPages } from "@/content/pages";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { QuoteForm } from "@/components/QuoteForm";
import { FAQPageSchema } from "@/components/SchemaJSONLD";

const pageContent = supportPages.preguntasFrecuentes;

export const metadata: Metadata = {
  title: pageContent.meta.title,
  description: pageContent.meta.description,
  alternates: {
    canonical: pageContent.meta.canonical
  }
};

export default function PreguntasFrecuentesPage() {
  const allFaqs = pageContent.categories.flatMap((cat) =>
    cat.questions.map((q) => ({ question: q.q, answer: q.a }))
  );

  return (
    <>
      <FAQPageSchema faqs={allFaqs} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={[{ label: "Preguntas frecuentes", href: "/preguntas-frecuentes/" }]} />
      </div>

      <section className="py-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="badge-brand">Centro de Ayuda</div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0F3D5E]">
            {pageContent.title}
          </h1>
          <p className="text-base text-[#4A6378]">
            {pageContent.subtitle}
          </p>
        </div>

        <div className="space-y-8">
          {pageContent.categories.map((cat, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="font-heading font-bold text-xl text-[#0F3D5E] border-b border-[#DCE8F2] pb-2">
                {cat.name}
              </h2>
              <FAQAccordion
                faqs={cat.questions.map((q) => ({ question: q.q, answer: q.a }))}
                title=""
              />
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <h2 className="font-heading font-bold text-2xl text-[#0F3D5E] text-center">
          ¿Tienes alguna otra duda? Te la resolvemos gratis
        </h2>
        <QuoteForm />
      </section>
    </>
  );
}
