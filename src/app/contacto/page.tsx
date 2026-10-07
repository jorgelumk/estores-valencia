import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { supportPages } from "@/content/pages";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import { ZoneMap } from "@/components/ZoneMap";
import { LocalBusinessSchema } from "@/components/SchemaJSONLD";
import { Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react";

const pageContent = supportPages.contacto;

export const metadata: Metadata = {
  title: pageContent.meta.title,
  description: pageContent.meta.description,
  alternates: {
    canonical: pageContent.meta.canonical
  }
};

export default function ContactoPage() {
  return (
    <>
      <LocalBusinessSchema />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={[{ label: "Contacto", href: "/contacto/" }]} />
      </div>

      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="badge-brand">Atención Directa</div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0F3D5E]">
            Contacta con Estores Valencia
          </h1>
          <p className="text-base text-[#4A6378]">
            {pageContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-brand p-6 space-y-4">
              <h2 className="font-heading font-bold text-xl text-[#0F3D5E]">
                Información de contacto
              </h2>

              <div className="space-y-4 text-sm">
                <a
                  href={pageContent.phoneHref}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#F5F8FB] border border-[#DCE8F2] hover:bg-[#E1EEF8] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#0F3D5E] text-[#F2B705] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#4A6378] block">Teléfono directo</span>
                    <span className="font-bold text-[#0F3D5E] text-base">{pageContent.phone}</span>
                  </div>
                </a>

                <a
                  href={pageContent.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs text-[#4A6378] block">WhatsApp directo</span>
                    <span className="font-bold text-[#0F3D5E] text-base">Enviar mensaje instantáneo</span>
                  </div>
                </a>

                <a
                  href={`mailto:${pageContent.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#F5F8FB] border border-[#DCE8F2] hover:bg-[#E1EEF8] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#2A7DB8] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#4A6378] block">Correo electrónico</span>
                    <span className="font-bold text-[#0F3D5E] text-sm">{pageContent.email}</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="card-brand p-6 space-y-3">
              <div className="flex items-center gap-2 font-heading font-bold text-base text-[#0F3D5E]">
                <Clock className="w-5 h-5 text-[#2A7DB8]" />
                <h3>Horario de atención</h3>
              </div>
              <p className="text-xs text-[#4A6378] leading-relaxed">
                {pageContent.hours}
              </p>
            </div>

            <div className="card-brand p-6 space-y-3">
              <div className="flex items-center gap-2 font-heading font-bold text-base text-[#0F3D5E]">
                <MapPin className="w-5 h-5 text-[#2A7DB8]" />
                <h3>Modalidad de servicio</h3>
              </div>
              <p className="text-xs text-[#4A6378] leading-relaxed">
                {pageContent.coverage}
              </p>
            </div>
          </div>

          {/* Right Form (7 cols) */}
          <div className="lg:col-span-7">
            <QuoteForm compact={true} />
          </div>
        </div>

        {/* Map Radius */}
        <div className="pt-8">
          <ZoneMap />
        </div>
      </section>
    </>
  );
}
