import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { categoryPages } from "@/content/categories";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { QuoteForm } from "@/components/QuoteForm";
import { FAQPageSchema } from "@/components/SchemaJSONLD";
import { CheckCircle2, ShieldCheck, Clock, Phone, Ruler } from "lucide-react";

const pageContent = categoryPages.presupuesto;

export const metadata: Metadata = {
  title: pageContent.meta.title,
  description: pageContent.meta.description,
  alternates: {
    canonical: pageContent.meta.canonical
  }
};

export default function PresupuestoPage() {
  return (
    <>
      <FAQPageSchema faqs={pageContent.faqs} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={[{ label: "Presupuesto gratis", href: "/presupuesto/" }]} />
      </div>

      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="badge-brand">Presupuesto sin compromiso</div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0F3D5E]">
            {pageContent.hero.h1}
          </h1>
          <p className="text-base text-[#4A6378] leading-relaxed">
            {pageContent.hero.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Form (8 cols) */}
          <div className="lg:col-span-8">
            <QuoteForm />
          </div>

          {/* Sidebar Info & Quick Measuring Guide (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="card-brand p-6 space-y-4 bg-gradient-to-br from-[#0F3D5E] to-[#16486E] text-white">
              <h3 className="font-heading font-bold text-lg text-white">
                Garantías de nuestro servicio
              </h3>
              <ul className="space-y-3 text-xs text-[#CFE0EE]">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#F2B705] shrink-0 mt-0.5" />
                  <span><strong>Medición a domicilio gratuita:</strong> Nos desplazamos sin coste en Valencia y 30 km.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#F2B705] shrink-0 mt-0.5" />
                  <span><strong>Respuesta en menos de 24h:</strong> Te llamamos para confirmar día y hora.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F2B705] shrink-0 mt-0.5" />
                  <span><strong>3 años de garantía:</strong> Cobertura oficial en tejidos, rieles y motores.</span>
                </li>
              </ul>
              <div className="pt-2">
                <a
                  href="tel:+34686382891"
                  className="btn-accent text-xs py-2.5 px-4 w-full flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#0F3D5E]" />
                  Llamar ahora: 686 382 891
                </a>
              </div>
            </div>

            {/* Quick Measuring Guide Box */}
            <div className="card-brand p-6 space-y-3">
              <div className="flex items-center gap-2 font-heading font-bold text-base text-[#0F3D5E]">
                <Ruler className="w-5 h-5 text-[#2A7DB8]" />
                <h3>Guía rápida para medir</h3>
              </div>
              <p className="text-xs text-[#4A6378] leading-relaxed">
                Si deseas indicarnos medidas aproximadas en el formulario:
              </p>
              <ul className="text-xs text-[#4A6378] space-y-1.5 list-disc pl-4">
                <li>Mide el ancho del hueco de la ventana y suma 10-15 cm a cada lado.</li>
                <li>Mide el alto desde la pared o techo hasta 10-15 cm por debajo del marco.</li>
                <li>No te preocupes si no es exacta: la medida milimétrica final la tomamos nosotros gratis.</li>
              </ul>
              <div className="pt-1">
                <Link href="/blog/como-medir-un-estor/" className="text-xs font-bold text-[#2A7DB8] hover:underline">
                  Ver guía detallada de medición paso a paso →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQAccordion faqs={pageContent.faqs} title="Preguntas frecuentes sobre el presupuesto" />
      </section>
    </>
  );
}
