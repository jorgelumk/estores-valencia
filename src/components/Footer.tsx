import React from "react";
import Link from "next/link";
import { Phone, Mail, Clock, MapPin, ShieldCheck, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0F3D5E] text-white pt-16 pb-24 lg:pb-12 border-t border-[#1E4968]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1E4968]">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="h-1 bg-[#0F3D5E] rounded-full w-full"></div>
                  <div className="h-1 bg-[#2A7DB8] rounded-full w-full"></div>
                  <div className="h-1 bg-[#F2B705] rounded-full w-3/4"></div>
                </div>
              </div>
              <span className="font-heading font-extrabold text-xl text-white">
                ESTORES <span className="text-[#F2B705]">VALENCIA</span>
              </span>
            </Link>
            <p className="text-sm text-[#CFE0EE] leading-relaxed">
              Especialistas en medición, confección e instalación de estores a medida y cortinas técnicas en Valencia y un radio de 30 km. Servicio a domicilio con presupuesto gratuito.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-sm text-[#CFE0EE]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#F2B705]" />
                <span>3 años de garantía oficial</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#F2B705]" />
                <span>Servicio a domicilio sin tienda física</span>
              </div>
            </div>
          </div>

          {/* Col 2: Category Links */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-base text-[#F2B705] uppercase tracking-wider">
              Productos a Medida
            </h3>
            <ul className="space-y-2 text-sm text-[#CFE0EE]">
              <li>
                <Link href="/estores/enrollables-valencia/" className="hover:text-white transition-colors">
                  Estores enrollables
                </Link>
              </li>
              <li>
                <Link href="/estores/screen-valencia/" className="hover:text-white transition-colors">
                  Estores screen
                </Link>
              </li>
              <li>
                <Link href="/estores/noche-y-dia-valencia/" className="hover:text-white transition-colors">
                  Estores noche y día
                </Link>
              </li>
              <li>
                <Link href="/estores/paqueto-valencia/" className="hover:text-white transition-colors">
                  Estores paqueto
                </Link>
              </li>
              <li>
                <Link href="/estores/opacos-valencia/" className="hover:text-white transition-colors">
                  Estores opacos blackout
                </Link>
              </li>
              <li>
                <Link href="/estores/motorizados-valencia/" className="hover:text-white transition-colors">
                  Estores motorizados
                </Link>
              </li>
              <li>
                <Link href="/paneles-japoneses-valencia/" className="hover:text-white transition-colors">
                  Paneles japoneses
                </Link>
              </li>
              <li>
                <Link href="/cortinas-verticales-valencia/" className="hover:text-white transition-colors">
                  Cortinas verticales
                </Link>
              </li>
              <li>
                <Link href="/persianas-alicantinas-valencia/" className="hover:text-white transition-colors">
                  Persianas alicantinas
                </Link>
              </li>
              <li>
                <Link href="/cortinas-valencia/" className="hover:text-white transition-colors">
                  Cortinas técnicas
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Sections & Blog */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-base text-[#F2B705] uppercase tracking-wider">
              Información y Blog
            </h3>
            <ul className="space-y-2 text-sm text-[#CFE0EE]">
              <li>
                <Link href="/empresas-valencia/" className="hover:text-white transition-colors">
                  Estores para empresas y oficinas
                </Link>
              </li>
              <li>
                <Link href="/zonas/" className="hover:text-white transition-colors">
                  Zonas de servicio (30 km)
                </Link>
              </li>
              <li>
                <Link href="/blog/" className="hover:text-white transition-colors">
                  Blog de consejos y guías
                </Link>
              </li>
              <li>
                <Link href="/blog/estores-sin-taladrar/" className="hover:text-white transition-colors">
                  Guía: Estores sin taladrar
                </Link>
              </li>
              <li>
                <Link href="/blog/como-medir-un-estor/" className="hover:text-white transition-colors">
                  Cómo medir un estor paso a paso
                </Link>
              </li>
              <li>
                <Link href="/blog/precio-estores-a-medida/" className="hover:text-white transition-colors">
                  Factores del precio de estores
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros/" className="hover:text-white transition-colors">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="/preguntas-frecuentes/" className="hover:text-white transition-colors">
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-base text-[#F2B705] uppercase tracking-wider">
              Atención al Cliente
            </h3>
            <div className="space-y-3 text-sm text-[#CFE0EE]">
              <a
                href="tel:+34686382891"
                className="flex items-center gap-2.5 p-3 rounded-lg bg-[#0A2A42] text-white font-semibold hover:bg-[#2A7DB8] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F2B705]" />
                686 382 891
              </a>
              <a
                href="mailto:info@estoresvalencia.es"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#2A7DB8]" />
                info@estoresvalencia.es
              </a>
              <div className="flex items-start gap-2.5 text-xs text-[#CFE0EE]">
                <Clock className="w-4 h-4 text-[#2A7DB8] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-white">Horario de atención:</span>
                  Lunes a Viernes: 09:00 a 19:00 h
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#CFE0EE]">
                <MapPin className="w-4 h-4 text-[#2A7DB8] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-white">Zona de cobertura:</span>
                  Valencia ciudad, L&apos;Horta, Camp de Túria y radio de 30 km.
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link href="/presupuesto/" className="btn-accent w-full text-center text-xs py-2.5">
                Pedir presupuesto gratis
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal links */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#CFE0EE]">
          <p>© {new Date().getFullYear()} Estores Valencia (estoresvalencia.es). Todos los derechos reservados.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/mapa-del-sitio/" className="hover:text-white transition-colors">
              Mapa del sitio
            </Link>
            <Link href="/aviso-legal/" className="hover:text-white transition-colors">
              Aviso legal
            </Link>
            <Link href="/privacidad/" className="hover:text-white transition-colors">
              Política de privacidad
            </Link>
            <Link href="/cookies/" className="hover:text-white transition-colors">
              Política de cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
