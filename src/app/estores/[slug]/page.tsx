import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { productLandings } from "@/content/landings";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { QuoteForm } from "@/components/QuoteForm";
import { ServiceSchema, FAQPageSchema } from "@/components/SchemaJSONLD";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CheckCircle2, Phone, ShieldCheck, Sun, Sliders, ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const baseSlugs = Object.keys(productLandings);
  const valenciaSlugs = baseSlugs.map((s) => (s.endsWith("-valencia") ? s : `${s}-valencia`));
  const allSlugs = Array.from(new Set([...baseSlugs, ...valenciaSlugs]));
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const normalizedSlug = slug.replace(/-valencia$/, "");
  const landing = productLandings[slug] || productLandings[normalizedSlug];
  if (!landing) return {};

  return {
    title: landing.meta.title,
    description: landing.meta.description,
    alternates: {
      canonical: landing.meta.canonical
    },
    openGraph: {
      title: landing.meta.title,
      description: landing.meta.description,
      url: landing.meta.canonical
    }
  };
}

export default async function ProductLandingPage({ params }: Props) {
  const { slug } = await params;
  const normalizedSlug = slug.replace(/-valencia$/, "");
  const landing = productLandings[slug] || productLandings[normalizedSlug];

  if (!landing) {
    notFound();
  }

  return (
    <>
      <ServiceSchema
        name={landing.hero.h1}
        description={landing.meta.description}
        url={landing.meta.canonical}
      />
      <FAQPageSchema faqs={landing.faqs} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs
          items={[
            { label: "Estores", href: "/estores-valencia/" },
            { label: landing.hero.h1, href: `/estores/${landing.slug.endsWith("-valencia") ? landing.slug : `${landing.slug}-valencia`}/` }
          ]}
        />
      </div>

      {/* 1. HERO */}
      <section className="bg-gradient-to-b from-[#0F3D5E] via-[#16486E] to-[#0F3D5E] text-white py-12 lg:py-16 mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="badge-brand bg-[#1E4968] text-[#F2B705]">
                {landing.hero.h1}
              </div>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
                {landing.hero.h1}
              </h1>
              <p className="text-base sm:text-lg text-[#CFE0EE] leading-relaxed">
                {landing.hero.subtitle}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link href="#presupuesto" className="btn-accent text-sm py-3.5 px-8 shadow-lg">
                  {landing.hero.ctaPrimary}
                </Link>
                <a
                  href="tel:+34686382891"
                  className="btn-secondary border-white text-white hover:bg-white/10 text-sm py-3.5 px-6 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#F2B705]" />
                  {landing.hero.ctaSecondary}
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-[#0A2A42]">
                <Image
                  src={landing.hero.image}
                  alt={landing.hero.imageAlt}
                  width={600}
                  height={450}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUÉ ES Y PARA QUÉ SIRVE */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-[#4A6378]">
        <h2 className="font-heading font-extrabold text-2xl text-[#0F3D5E]">
          ¿Qué son los {landing.hero.h1.toLowerCase()} y para qué sirven?
        </h2>
        {landing.introParagraphs.map((p, idx) => (
          <p
            key={idx}
            className="text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
          />
        ))}
      </section>

      {/* 3. VENTAJAS (4-6 ICONOS) */}
      <section className="py-12 bg-[#E1EEF8]/40 border-y border-[#DCE8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-heading font-extrabold text-2xl text-[#0F3D5E]">
              Principales ventajas de los {landing.hero.h1.toLowerCase()}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {landing.advantages.map((adv, idx) => (
              <div key={idx} className="card-brand p-6 space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#E1EEF8] text-[#2A7DB8] flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2A7DB8]" />
                </div>
                <h3 className="font-heading font-bold text-base text-[#0F3D5E]">{adv.title}</h3>
                <p className="text-xs text-[#4A6378] leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TEJIDOS, COLORES Y ACABADOS & 5. ESTANCIAS RECOMENDADAS */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Fabrics */}
        <div className="card-brand p-6 sm:p-8 space-y-4">
          <h2 className="font-heading font-bold text-xl text-[#0F3D5E]">
            Tejidos, colores y acabados a medida
          </h2>
          <div className="space-y-4">
            {landing.fabricsAndFinishes.map((f, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#F5F8FB] border border-[#DCE8F2] space-y-1">
                <h3 className="font-heading font-bold text-sm text-[#0F3D5E]">{f.title}</h3>
                <p className="text-xs text-[#4A6378]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rooms */}
        <div className="card-brand p-6 sm:p-8 space-y-4">
          <h2 className="font-heading font-bold text-xl text-[#0F3D5E]">
            Estancias recomendadas en el hogar
          </h2>
          <div className="space-y-4">
            {landing.recommendedRooms.map((room, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#F5F8FB] border border-[#DCE8F2] space-y-1">
                <h3 className="font-heading font-bold text-sm text-[#2A7DB8]">{room.name}</h3>
                <p className="text-xs text-[#4A6378]">{room.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ACCIONAMIENTO */}
      <section className="py-12 bg-[#0F3D5E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-heading font-extrabold text-2xl text-white">
              Sistemas de accionamiento disponibles
            </h2>
            <p className="text-sm text-[#CFE0EE]">
              Elige el método de recogida que mejor se adapte a tu comodidad diaria.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {landing.mechanisms.map((mech, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-[#0A2A42] border border-[#1E4968] space-y-2">
                <h3 className="font-heading font-bold text-lg text-[#F2B705]">{mech.type}</h3>
                <p className="text-xs text-[#CFE0EE] leading-relaxed">{mech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FACTORES DE PRECIO (SIN CIFRAS) */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-brand p-8 space-y-4">
          <h2 className="font-heading font-extrabold text-2xl text-[#0F3D5E]">
            {landing.priceFactors.title}
          </h2>
          <div className="space-y-3 text-sm text-[#4A6378]">
            {landing.priceFactors.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
          <div className="pt-2">
            <Link href="#presupuesto" className="btn-accent text-xs py-3 px-6">
              Pedir presupuesto gratis a domicilio
            </Link>
          </div>
        </div>
      </section>

      {/* 8. GALERÍA DE 4 AMBIENTES */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="font-heading font-extrabold text-2xl text-[#0F3D5E] text-center">
          Galería de ejemplos para {landing.hero.h1.toLowerCase()}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {landing.gallery.map((g, idx) => (
            <div key={idx} className="card-brand overflow-hidden group">
              <div className="relative h-48 w-full bg-[#E1EEF8]">
                <Image src={g.image} alt={g.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-3 text-center font-heading font-semibold text-xs text-[#0F3D5E]">
                {g.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. COMPARATIVA */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ComparisonTable
          title={landing.comparison.title}
          typeA={landing.comparison.typeA}
          typeB={landing.comparison.typeB}
          rows={landing.comparison.rows}
        />
      </section>

      {/* 10. FAQ ESPECÍFICA */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQAccordion faqs={landing.faqs} title={`Preguntas frecuentes sobre ${landing.hero.h1.toLowerCase()}`} />
      </section>

      {/* 11. SISTERS & FINAL CTA FORM */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Sister Landings */}
        <div className="space-y-4">
          <h3 className="font-heading font-bold text-xl text-[#0F3D5E] text-center">
            Otras soluciones relacionadas que te pueden interesar
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {landing.sisterLandings.map((sister, idx) => (
              <div key={idx} className="card-brand p-6 space-y-2 flex flex-col justify-between">
                <div>
                  <h4 className="font-heading font-bold text-lg text-[#0F3D5E]">{sister.name}</h4>
                  <p className="text-xs text-[#4A6378] mt-1">{sister.desc}</p>
                </div>
                <div className="pt-2">
                  <Link href={sister.href} className="text-xs font-bold text-[#2A7DB8] hover:underline flex items-center gap-1">
                    <span>Ver {sister.name.toLowerCase()}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Form */}
        <div id="presupuesto" className="max-w-4xl mx-auto space-y-4">
          <h2 className="font-heading font-extrabold text-3xl text-[#0F3D5E] text-center">
            Pide presupuesto gratis para {landing.hero.h1.toLowerCase()}
          </h2>
          <QuoteForm initialProduct={landing.slug} />
        </div>
      </section>
    </>
  );
}
