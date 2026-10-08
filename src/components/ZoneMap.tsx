import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Navigation, ArrowRight } from "lucide-react";

export function ZoneMap() {
  const zones = [
    {
      comarca: "Valencia Ciudad",
      municipalities: "Ciutat Vella, Ruzafa, Eixample, Benimaclet, Campanar, Patraix, Malilla, Cabanyal, Algirós, Benicalap"
    },
    {
      comarca: "L'Horta Nord",
      municipalities: "Alboraya, Burjassot, Godella, Rocafort, Moncada, Meliana, Puçol, El Puig, Massamagrell, Tavernes Blanques"
    },
    {
      comarca: "L'Horta Oest",
      municipalities: "Paterna, Manises, Quart de Poblet, Mislata, Xirivella, Aldaia, Alaquàs, Torrent, Picanya, Paiporta"
    },
    {
      comarca: "L'Horta Sud",
      municipalities: "Catarroja, Massanassa, Alfafar, Sedaví, Benetússer, Silla, Picassent, Alcàsser"
    },
    {
      comarca: "Camp de Túria",
      municipalities: "Bétera, L'Eliana, La Pobla de Vallbona, Ribarroja, San Antonio de Benagéber, Llíria"
    },
    {
      comarca: "Otras zonas de cobertura",
      municipalities: "Sagunto y Puerto de Sagunto, Almussafes, Sollana, Cheste, Chiva"
    }
  ];

  return (
    <div className="card-brand p-6 sm:p-8 space-y-8">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Radius Circle Map Graphic */}
        <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden border border-[#DCE8F2] bg-[#E1EEF8]">
          <Image
            src="/images/mapa-zonas-valencia.jpg"
            alt="Mapa radio 30 km servicio estores valencia"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Info */}
        <div className="w-full lg:w-1/2 space-y-4">
          <div className="badge-brand">
            <Navigation className="w-3.5 h-3.5" />
            Servicio a Domicilio (Sin Tienda Física)
          </div>
          <h2 className="font-heading font-bold text-2xl text-[#0F3D5E]">
            Servicio a domicilio e instalación en Valencia y 30 km a la redonda
          </h2>
          <p className="text-sm text-[#4A6378] leading-relaxed">
            Prescindimos de tienda física para ofrecerte el mejor precio y el servicio más cómodo: nos envías tus medidas aproximadas, te damos presupuesto sin compromiso y, tras aceptarlo, acudimos a tu hogar con los muestrarios para verificar las medidas finales.
          </p>
          <div className="pt-2">
            <Link href="/zonas/" className="text-sm font-bold text-[#2A7DB8] hover:underline flex items-center gap-1">
              Ver todas las comarcas y municipios de cobertura →
            </Link>
          </div>
        </div>
      </div>

      {/* Municipalities Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-[#DCE8F2]">
        {zones.map((item, idx) => (
          <div key={idx} className="p-4 rounded-xl bg-[#F5F8FB] border border-[#DCE8F2] space-y-2">
            <div className="flex items-center gap-2 font-heading font-bold text-sm text-[#0F3D5E]">
              <MapPin className="w-4 h-4 text-[#2A7DB8]" />
              <span>{item.comarca}</span>
            </div>
            <p className="text-xs text-[#4A6378] leading-normal">{item.municipalities}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
