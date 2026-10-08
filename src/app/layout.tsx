import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { CookieBanner } from "@/components/CookieBanner";
import { LocalBusinessSchema } from "@/components/SchemaJSONLD";

export const metadata: Metadata = {
  metadataBase: new URL("https://estoresvalencia.es"),
  title: {
    default: "Estores en Valencia a Medida | Presupuesto sin Compromiso",
    template: "%s | Estores Valencia"
  },
  description: "Estores a medida en Valencia y alrededores: enrollables, screen, noche y día, opacos y motorizados. Medimos e instalamos a domicilio.",
  authors: [{ name: "Estores Valencia", url: "https://estoresvalencia.es" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://estoresvalencia.es/",
    siteName: "Estores Valencia",
    title: "Estores en Valencia a Medida | Presupuesto sin Compromiso",
    description: "Estores a medida en Valencia y alrededores: enrollables, screen, noche y día, opacos y motorizados. Medimos e instalamos a domicilio."
  },
  twitter: {
    card: "summary_large_image",
    title: "Estores en Valencia a Medida | Presupuesto sin Compromiso",
    description: "Estores a medida en Valencia y alrededores: enrollables, screen, noche y día, opacos y motorizados."
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    apple: "/apple-icon.png"
  },
  verification: {
    google: "e5zX_Lto6eqm7o9ObukQ5Ui9XAa37in1VRv_MmQNq_M"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="google-site-verification" content="e5zX_Lto6eqm7o9ObukQ5Ui9XAa37in1VRv_MmQNq_M" />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WXBSRDDV');`
          }}
        />
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/icon.svg?v=2" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=2" />
        <LocalBusinessSchema />
      </head>
      <body className="min-h-screen flex flex-col font-body bg-[#F5F8FB] text-[#0F3D5E]">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WXBSRDDV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <MobileBottomBar />
        <CookieBanner />
      </body>
    </html>
  );
}
