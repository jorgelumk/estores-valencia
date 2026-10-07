import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { supportPages } from "@/content/pages";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import { ShieldCheck, Heart, Award, CheckCircle2, Phone } from "lucide-react";

const pageContent = supportPages.sobreNosotros;

export const metadata: Metadata = {
  title: pageContent.meta.title,
  description: pageContent.meta.description,
  alternates: {
    canonical: pageContent.meta.canonical
  }
};

export default function SobreNosotrosPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={[{ label: "Sobre nosotros", href: "/sobre-nosotros/" }]} />
      </div>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="badge-brand">Especialistas a Domicilio</div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0F3D5E]">
            {pageContent.title}
          </h1>
          <p className="text-base text-[#4A6378]">
            {pageContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 card-brand p-8 space-y-4">
            <h2 className="font-heading font-bold text-2xl text-[#0F3D5E]">Nuestra forma de trabajar</h2>
            {pageContent.content.map((p, idx) => (
              <p key={idx} className="text-sm text-[#4A6378] leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#DCE8F2] bg-[#E1EEF8]">
            <Image
              src="/images/hero-home.jpg"
              alt="Sobre nosotros estores valencia equipo y medicion a domicilio"
              width={600}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pageContent.values.map((v, idx) => (
            <div key={idx} className="card-brand p-6 space-y-2">
              <CheckCircle2 className="w-6 h-6 text-[#2A7DB8]" />
              <h3 className="font-heading font-bold text-base text-[#0F3D5E]">{v.title}</h3>
              <p className="text-xs text-[#4A6378]">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <h2 className="font-heading font-bold text-2xl text-[#0F3D5E] text-center">
          Solicita tu presupuesto sin compromiso
        </h2>
        <QuoteForm />
      </section>
    </>
  );
}
