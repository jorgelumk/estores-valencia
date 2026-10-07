import React from "react";

interface FAQSchemaProps {
  faqs: { question: string; answer: string }[];
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
}

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  author: string;
  image: string;
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Estores Valencia",
    url: "https://estoresvalencia.es/",
    telephone: "+34686382891",
    email: "info@estoresvalencia.es",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00"
      }
    ],
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 39.4699,
          longitude: -0.3763
        },
        geoRadius: "30000"
      },
      "Valencia",
      "Alboraya",
      "Burjassot",
      "Godella",
      "Rocafort",
      "Moncada",
      "Meliana",
      "Puçol",
      "El Puig",
      "Massamagrell",
      "Paterna",
      "Manises",
      "Quart de Poblet",
      "Mislata",
      "Xirivella",
      "Aldaia",
      "Alaquàs",
      "Torrent",
      "Picanya",
      "Paiporta",
      "Catarroja",
      "Massanassa",
      "Alfafar",
      "Sedaví",
      "Benetússer",
      "Silla",
      "Picassent",
      "Alcàsser",
      "Bétera",
      "L'Eliana",
      "La Pobla de Vallbona",
      "Ribarroja",
      "San Antonio de Benagéber",
      "Llíria",
      "Sagunto",
      "Puerto de Sagunto",
      "Almussafes",
      "Sollana",
      "Cheste",
      "Chiva"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({ name, description, url }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    provider: {
      "@type": "LocalBusiness",
      name: "Estores Valencia",
      telephone: "+34686382891",
      email: "info@estoresvalencia.es"
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Provincia de Valencia"
    },
    description: description,
    url: url
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQPageSchema({ faqs }: FAQSchemaProps) {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author,
  image
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      "@type": "Person",
      name: author
    },
    publisher: {
      "@type": "Organization",
      name: "Estores Valencia",
      url: "https://estoresvalencia.es/"
    },
    image: `https://estoresvalencia.es${image}`
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
