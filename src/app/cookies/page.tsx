import React from "react";
import { Metadata } from "next";
import { supportPages } from "@/content/pages";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const pageContent = supportPages.cookies;

export const metadata: Metadata = {
  title: pageContent.meta.title,
  description: pageContent.meta.description,
  alternates: {
    canonical: pageContent.meta.canonical
  }
};

export default function CookiesPage() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={[{ label: "Política de cookies", href: "/cookies/" }]} />
      </div>

      <article className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h1 className="font-heading font-extrabold text-3xl text-[#0F3D5E]">
          {pageContent.title}
        </h1>
        <div className="card-brand p-8 space-y-4 text-sm text-[#4A6378] leading-relaxed">
          {pageContent.content.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </article>
    </>
  );
}
