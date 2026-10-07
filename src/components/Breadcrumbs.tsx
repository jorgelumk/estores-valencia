import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://estoresvalencia.es/"
    },
    ...items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: item.label,
      item: `https://estoresvalencia.es${item.href}`
    }))
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: schemaItems
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-0">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#4A6378]">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-[#2A7DB8] transition-colors"
            >
              <Home className="w-3.5 h-3.5 text-[#2A7DB8]" />
              <span>Inicio</span>
            </Link>
          </li>
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-[#DCE8F2]" />
                {isLast ? (
                  <span className="font-semibold text-[#0F3D5E]" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-[#2A7DB8] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
