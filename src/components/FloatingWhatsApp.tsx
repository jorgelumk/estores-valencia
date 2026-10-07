"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const pathname = usePathname();

  let message = "Hola, quiero información y presupuesto de estores en Valencia";

  if (pathname.includes("screen")) {
    message = "Hola, quiero presupuesto de estores screen en Valencia";
  } else if (pathname.includes("enrollables")) {
    message = "Hola, quiero presupuesto de estores enrollables en Valencia";
  } else if (pathname.includes("noche-y-dia")) {
    message = "Hola, quiero presupuesto de estores noche y día en Valencia";
  } else if (pathname.includes("paqueto")) {
    message = "Hola, quiero presupuesto de estores paqueto en Valencia";
  } else if (pathname.includes("opacos")) {
    message = "Hola, quiero presupuesto de estores opacos blackout en Valencia";
  } else if (pathname.includes("motorizados")) {
    message = "Hola, quiero información de estores motorizados domóticos";
  } else if (pathname.includes("paneles-japoneses")) {
    message = "Hola, quiero presupuesto de paneles japoneses en Valencia";
  } else if (pathname.includes("cortinas-verticales")) {
    message = "Hola, quiero presupuesto de cortinas verticales en Valencia";
  } else if (pathname.includes("persianas-alicantinas")) {
    message = "Hola, quiero presupuesto de persianas alicantinas en Valencia";
  } else if (pathname.includes("empresas")) {
    message = "Hola, quiero presupuesto de estores para oficina o empresa en Valencia";
  }

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/34686382891?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-40 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-medium text-xs px-0 group-hover:px-2">
        WhatsApp directo
      </span>
    </a>
  );
}
