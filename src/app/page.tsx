import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { homeContent } from "@/content/home";
import { FAQAccordion } from "@/components/FAQAccordion";
import { QuoteForm } from "@/components/QuoteForm";
import { ZoneMap } from "@/components/ZoneMap";
import { FAQPageSchema } from "@/components/SchemaJSONLD";
import { ShieldCheck, Clock, Award, Phone, ArrowRight, CheckCircle2, Sparkles, Star, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: homeContent.meta.title,
  description: homeContent.meta.description,
  alternates: {
    canonical: homeContent.meta.canonical
  }
};

export default function HomePage() {
  return (
    <>
      <FAQPageSchema faqs={homeContent.faqs} />

      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-[#0F3D5E] via-[#16486E] to-[#0F3D5E] text-white py-12 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#1E4968] border border-[#2A7DB8] px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#F2B705]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Servicio a domicilio en Valencia y 30 km</span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-white">
                {homeContent.hero.h1}
              </h1>

              <p className="text-base sm:text-lg text-[#CFE0EE] leading-relaxed max-w-2xl">
                {homeContent.hero.subtitle}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <Link href="/presupuesto/" className="btn-accent text-base py-3.5 px-8 text-center shadow-lg">
                  {homeContent.hero.ctaPrimary}
                </Link>
                <a
                  href="tel:+34686382891"
                  className="btn-secondary border-white text-white hover:bg-white/10 text-base py-3.5 px-8 text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5 text-[#F2B705]" />
                  {homeContent.hero.ctaSecondary}
                </a>
              </div>

              {/* 3 Seals */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-[#1E4968]">
                {homeContent.hero.seals.map((seal, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#CFE0EE]">
                    <CheckCircle2 className="w-4 h-4 text-[#F2B705] shrink-0" />
                    <span>{seal}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-[#0A2A42]">
                <Image
                  src={homeContent.hero.image}
                  alt={homeContent.hero.imageAlt}
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

      {/* 2. TIPOS DE ESTORES (6 CARDS) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="badge-brand">Catálogo de Estores a Medida</div>
          <h2 className="font-heading font-extrabold text-3xl text-[#0F3D5E]">
            Catálogo completo de estores en Valencia
          </h2>
          <p className="text-sm text-[#4A6378]">
            Confeccionamos cada estor al milímetro para tu ventana con materiales técnicos de alta durabilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeContent.productsGrid.map((item) => (
            <div
              key={item.id}
              className="card-brand overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-52 w-full overflow-hidden bg-[#E1EEF8]">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-xl text-[#0F3D5E] group-hover:text-[#2A7DB8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#4A6378] leading-relaxed">{item.description}</p>
                </div>
                <div className="pt-3 border-t border-[#F5F8FB]">
                  <Link
                    href={item.link}
                    className="text-xs font-bold text-[#2A7DB8] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Ver modelos y detalles de {item.title.toLowerCase()}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OTRAS SOLUCIONES (3 BLOQUES GRANDES) */}
      <section className="py-16 bg-[#E1EEF8]/40 border-y border-[#DCE8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="badge-brand">Otras soluciones textiles</div>
            <h2 className="font-heading font-extrabold text-3xl text-[#0F3D5E]">
              Paneles japoneses, cortinas verticales y persianas alicantinas
            </h2>
            <p className="text-sm text-[#4A6378]">
              Equipamiento técnico integral para grandes ventanales, oficinas y terrazas valencianas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeContent.otherSolutions.map((sol, idx) => (
              <div
                key={idx}
                className="card-brand p-6 space-y-4 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-48 w-full rounded-xl overflow-hidden bg-[#E1EEF8]">
                  <Image
                    src={sol.image}
                    alt={sol.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="font-heading font-bold text-xl text-[#0F3D5E]">{sol.title}</h3>
                  <p className="text-xs text-[#4A6378] leading-relaxed">{sol.description}</p>
                </div>
                <div className="pt-2">
                  <Link href={sol.link} className="btn-secondary w-full text-center text-xs py-2.5">
                    Ver catálogo de {sol.title.toLowerCase()}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CÓMO TRABAJAMOS (4 PASOS) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="badge-brand">Proceso sencillo y cómodo</div>
          <h2 className="font-heading font-extrabold text-3xl text-[#0F3D5E]">
            Cómo trabajamos en 4 sencillos pasos
          </h2>
          <p className="text-sm text-[#4A6378]">
            Sin desplazarte de casa ni perder tiempo. Nos encargamos de todo el proyecto de principio a fin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeContent.howWeWork.map((step, idx) => (
            <div key={idx} className="card-brand p-6 space-y-3 relative overflow-hidden">
              <div className="text-4xl font-extrabold text-[#2A7DB8]/20 font-heading">
                {step.step}
              </div>
              <h3 className="font-heading font-bold text-lg text-[#0F3D5E]">{step.title}</h3>
              <p className="text-xs text-[#4A6378] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. POR QUÉ ELEGIRNOS */}
      <section className="py-16 bg-[#0F3D5E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="badge-brand bg-[#1E4968] text-[#F2B705] border-[#2A7DB8]/30">Ventajas exclusivas</div>
            <h2 className="font-heading font-extrabold text-3xl text-white">
              Por qué elegir Estores Valencia
            </h2>
            <p className="text-sm text-[#CFE0EE]">
              El servicio más recomendado por la tranquilidad de un trabajo bien hecho con garantía oficial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeContent.whyChooseUs.map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-[#0A2A42] border border-[#1E4968] space-y-2">
                <div className="flex items-center gap-2 text-[#F2B705] font-heading font-bold text-lg">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-[#F2B705]" />
                  <h3 className="text-[#F2B705]">{item.title}</h3>
                </div>
                <p className="text-xs text-[#CFE0EE] leading-relaxed pl-7">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.5. VALORACIONES Y OPINIONES DE CLIENTES (4.9 / 5 STAR RATING) */}
      <section className="py-16 bg-[#F5F8FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="badge-brand">Opiniones verificadas</div>
            <h2 className="font-heading font-extrabold text-3xl text-[#0F3D5E]">
              Valoraciones de nuestros clientes en Valencia
            </h2>
            <div className="flex items-center justify-center gap-2 text-sm text-[#0F3D5E] font-bold">
              <div className="flex items-center text-[#F2B705]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span>4.9 / 5.0 basado en más de 250 mediciones instaladas</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeContent.reviews.map((rev, idx) => (
              <div key={idx} className="card-brand p-6 space-y-3 flex flex-col justify-between hover:shadow-lg transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-[#F2B705]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] text-[#4A6378] font-medium">{rev.date}</span>
                  </div>
                  <p className="text-xs text-[#4A6378] italic leading-relaxed">
                    &quot;{rev.comment}&quot;
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F5F8FB] space-y-1">
                  <div className="font-heading font-bold text-xs text-[#0F3D5E] flex items-center justify-between">
                    <span>{rev.name}</span>
                    <span className="text-[10px] font-normal bg-[#E1EEF8] text-[#2A7DB8] px-2 py-0.5 rounded-full">
                      Cliente verificado
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-[#2A7DB8] font-medium">
                    <MapPin className="w-3 h-3 text-[#F2B705]" />
                    <span>{rev.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 7. BLOQUE DE GARANTÍAS */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-brand p-8 bg-gradient-to-r from-[#0F3D5E] to-[#1E4968] text-white space-y-6">
          <div className="space-y-2">
            <div className="badge-brand bg-[#F2B705] text-[#0F3D5E]">Garantía de servicio</div>
            <h2 className="font-heading font-extrabold text-2xl text-white">
              {homeContent.guaranteeBlock.title}
            </h2>
            <p className="text-sm text-[#CFE0EE] leading-relaxed max-w-3xl">
              {homeContent.guaranteeBlock.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#2A7DB8]/40 text-xs">
            {homeContent.guaranteeBlock.items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#F2B705] shrink-0" />
                <span className="text-[#CFE0EE] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TEXTO SEO */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="font-heading font-extrabold text-2xl text-[#0F3D5E]">
          {homeContent.seoContent.h2Title}
        </h2>
        <div className="prose prose-sm text-[#4A6378] space-y-4 leading-relaxed">
          {homeContent.seoContent.paragraphs.map((p, idx) => (
            <p key={idx} dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          ))}
        </div>
      </section>

      {/* 9. ZONAS (MAPA Y MUNICIPIOS) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ZoneMap />
      </section>

      {/* 10. FAQ SECTION */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQAccordion faqs={homeContent.faqs} title="Preguntas frecuentes sobre estores en Valencia" />
      </section>

      {/* 11. CTA FINAL CON FORMULARIO */}
      <section id="presupuesto" className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="font-heading font-extrabold text-3xl text-[#0F3D5E]">
            Solicita tu presupuesto gratis a domicilio
          </h2>
          <p className="text-sm text-[#4A6378]">
            Rellena el formulario o llámanos al 686 382 891. Te atendemos en menos de 24 horas laborables.
          </p>
        </div>
        <QuoteForm />
      </section>
    </>
  );
}
