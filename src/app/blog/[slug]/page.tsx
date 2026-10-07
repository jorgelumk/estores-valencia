import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/content/blog";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { QuoteForm } from "@/components/QuoteForm";
import { ArticleSchema, FAQPageSchema } from "@/components/SchemaJSONLD";
import { Calendar, Clock, User, ArrowRight, List, ShieldCheck } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) return {};

  return {
    title: post.meta.title,
    description: post.meta.description,
    alternates: {
      canonical: post.meta.canonical
    },
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      url: post.meta.canonical,
      type: "article",
      publishedTime: post.meta.datePublished,
      modifiedTime: post.meta.dateModified,
      authors: [post.meta.author]
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <ArticleSchema
        title={post.meta.title}
        description={post.meta.description}
        url={post.meta.canonical}
        datePublished={post.meta.datePublished}
        dateModified={post.meta.dateModified}
        author={post.meta.author}
        image={post.hero.image}
      />
      <FAQPageSchema faqs={post.faqs} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs
          items={[
            { label: "Blog", href: "/blog/" },
            { label: post.hero.h1, href: `/blog/${post.slug}/` }
          ]}
        />
      </div>

      <article className="py-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Article Header */}
        <header className="space-y-4">
          <div className="flex items-center gap-4 text-xs text-[#2A7DB8] font-semibold">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.meta.datePublished}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.hero.readingTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.meta.author}
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0F3D5E] leading-tight">
            {post.hero.h1}
          </h1>

          <p className="text-base sm:text-lg text-[#4A6378] leading-relaxed">
            {post.hero.subtitle}
          </p>
        </header>

        {/* Featured Image */}
        <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-[#DCE8F2] bg-[#E1EEF8]">
          <Image
            src={post.hero.image}
            alt={post.hero.imageAlt}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* First Paragraph Direct Answer */}
        <div className="p-6 rounded-2xl bg-[#E1EEF8] border border-[#2A7DB8]/30 text-[#0F3D5E] font-medium leading-relaxed">
          <p dangerouslySetInnerHTML={{ __html: post.firstParagraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
        </div>

        {/* Table of Contents */}
        <div className="card-brand p-6 bg-[#F5F8FB] space-y-3">
          <div className="flex items-center gap-2 font-heading font-bold text-base text-[#0F3D5E]">
            <List className="w-5 h-5 text-[#2A7DB8]" />
            <span>Índice del artículo</span>
          </div>
          <ol className="space-y-2 text-xs font-semibold text-[#2A7DB8] list-decimal pl-5">
            {post.tableOfContents.map((toc) => (
              <li key={toc.id}>
                <a href={`#${toc.id}`} className="hover:underline">
                  {toc.label}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Sections Content */}
        <div className="prose prose-sm max-w-none text-[#4A6378] space-y-8">
          {post.sections.map((sec, idx) => (
            <section key={sec.id} id={sec.id} className="space-y-4 pt-4">
              <h2 className="font-heading font-extrabold text-2xl text-[#0F3D5E] border-b border-[#DCE8F2] pb-2">
                {sec.h2}
              </h2>

              {sec.content.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              ))}

              {/* Optional H3s */}
              {sec.h3s && (
                <div className="space-y-4 pl-4 border-l-2 border-[#2A7DB8] my-4">
                  {sec.h3s.map((h3Item, h3Idx) => (
                    <div key={h3Idx} className="space-y-2">
                      <h3 className="font-heading font-bold text-lg text-[#0F3D5E]">{h3Item.h3}</h3>
                      {h3Item.content.map((h3p, h3pIdx) => (
                        <p key={h3pIdx} className="text-xs text-[#4A6378] leading-relaxed" dangerouslySetInnerHTML={{ __html: h3p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {/* Optional List */}
              {sec.list && (
                <ul className="space-y-2 text-xs text-[#4A6378] list-disc pl-5">
                  {sec.list.map((l, lIdx) => (
                    <li key={lIdx} dangerouslySetInnerHTML={{ __html: l.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  ))}
                </ul>
              )}

              {/* Optional Table */}
              {sec.table && (
                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-[#0F3D5E] text-white">
                        {sec.table.headers.map((h, hIdx) => (
                          <th key={hIdx} className="p-3 font-bold">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#DCE8F2]">
                      {sec.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-[#F5F8FB]"}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="p-3 text-[#4A6378]">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Mid Article CTA */}
        <div className="card-brand p-8 bg-[#E1EEF8] border border-[#2A7DB8]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="badge-brand bg-[#2A7DB8] text-white text-[10px]">Medición gratis en Valencia y alrededores</div>
            <p className="font-heading font-bold text-base text-[#0F3D5E]">
              {post.midArticleCta.text}
            </p>
          </div>
          <Link href={post.midArticleCta.link} className="btn-accent text-xs py-3 px-6 shrink-0 shadow">
            {post.midArticleCta.buttonText}
          </Link>
        </div>

        {/* Internal Links Block */}
        <div className="card-brand p-6 space-y-3 bg-[#F5F8FB]">
          <h3 className="font-heading font-bold text-base text-[#0F3D5E]">
            Enlaces de interés relacionados
          </h3>
          <ul className="space-y-2 text-xs">
            {post.internalLinks.map((link, idx) => (
              <li key={idx}>
                <Link href={link.href} className="text-[#2A7DB8] hover:underline font-semibold flex items-center gap-1">
                  <ArrowRight className="w-3.5 h-3.5" />
                  <span>Ver {link.anchor}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="pt-4">
          <FAQAccordion faqs={post.faqs} title="Preguntas frecuentes sobre este artículo" />
        </div>

        {/* Final CTA & Form */}
        <div id="presupuesto" className="pt-8 space-y-4">
          <div className="card-brand p-8 bg-[#0F3D5E] text-white text-center space-y-3">
            <h2 className="font-heading font-extrabold text-2xl text-white">
              {post.finalCta.title}
            </h2>
            <p className="text-xs text-[#CFE0EE] max-w-xl mx-auto leading-relaxed">
              {post.finalCta.text}
            </p>
          </div>
          <QuoteForm />
        </div>
      </article>
    </>
  );
}
