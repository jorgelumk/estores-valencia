"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, Check, X } from "lucide-react";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("estores_cookie_consent");
    if (!consent) {
      setShowBanner(true);
    } else if (consent === "accepted") {
      loadGA4();
    }
  }, []);

  const loadGA4 = () => {
    // Inject GA4 script tag if tracking ID exists
    const gaId = "G-XXXXXXXXXX"; // Configured via GTM / GA4 env
    if (typeof window !== "undefined" && !(window as any).gaInitialized) {
      (window as any).gaInitialized = true;
      const script1 = document.createElement("script");
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script1);

      const script2 = document.createElement("script");
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}');
      `;
      document.head.appendChild(script2);
    }
  };

  const handleAccept = () => {
    localStorage.setItem("estores_cookie_consent", "accepted");
    setShowBanner(false);
    loadGA4();
  };

  const handleDecline = () => {
    localStorage.setItem("estores_cookie_consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-20 lg:bottom-6 left-4 right-4 lg:left-6 lg:max-w-md z-50 bg-[#0F3D5E] text-white p-5 rounded-2xl shadow-2xl border border-[#2A7DB8] transition-all animate-fade-in">
      <div className="flex items-start gap-3">
        <Cookie className="w-6 h-6 text-[#F2B705] shrink-0 mt-1" />
        <div className="space-y-2 text-xs text-[#CFE0EE]">
          <h3 className="font-heading font-bold text-sm text-white">Uso de Cookies (RGPD y LSSI)</h3>
          <p>
            Utilizamos cookies propias y analíticas para medir el tráfico e interacción de los usuarios en nuestra web. Puedes aceptar o rechazar el seguimiento analítico.
          </p>
          <div className="pt-1">
            <Link href="/cookies/" className="text-[#F2B705] hover:underline font-medium">
              Ver política de cookies completa →
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-end gap-2 pt-3 border-t border-[#1E4968]">
        <button
          onClick={handleDecline}
          className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#CFE0EE] hover:bg-[#1E4968] transition-colors"
        >
          Rechazar
        </button>
        <button
          onClick={handleAccept}
          className="btn-accent text-xs py-1.5 px-4 flex items-center gap-1"
        >
          <Check className="w-3.5 h-3.5" />
          Aceptar cookies
        </button>
      </div>
    </div>
  );
}
