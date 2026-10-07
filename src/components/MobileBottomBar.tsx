"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { usePathname } from "next/navigation";

export function MobileBottomBar() {
  const pathname = usePathname();

  let waMsg = "Hola, quiero información sobre estores a medida en Valencia";
  if (pathname.includes("screen")) waMsg = "Hola, quiero presupuesto de estores screen";
  else if (pathname.includes("enrollables")) waMsg = "Hola, quiero presupuesto de estores enrollables";
  else if (pathname.includes("noche-y-dia")) waMsg = "Hola, quiero presupuesto de estores noche y día";
  else if (pathname.includes("opacos")) waMsg = "Hola, quiero presupuesto de estores opacos";
  else if (pathname.includes("paqueto")) waMsg = "Hola, quiero presupuesto de estores paqueto";
  else if (pathname.includes("motorizados")) waMsg = "Hola, quiero presupuesto de estores motorizados";
  else if (pathname.includes("paneles-japoneses")) waMsg = "Hola, quiero presupuesto de paneles japoneses";

  const waUrl = `https://wa.me/34686382891?text=${encodeURIComponent(waMsg)}`;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0F3D5E] border-t border-[#1E4968] p-2 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        <a
          href="tel:+34686382891"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#0A2A42] text-white text-xs font-semibold hover:bg-[#1E4968] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#F2B705] mb-1" />
          <span>Llamar</span>
        </a>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20ba5a] transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-white mb-1 fill-current" />
          <span>WhatsApp</span>
        </a>

        <Link
          href="/presupuesto/"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#F2B705] text-[#0F3D5E] text-xs font-extrabold hover:bg-[#e0aa00] transition-colors"
        >
          <FileText className="w-4 h-4 text-[#0F3D5E] mb-1" />
          <span>Presupuesto</span>
        </Link>
      </div>
    </div>
  );
}
