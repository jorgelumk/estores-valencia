import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { blogPosts } from "@/content/blog";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog de Estores en Valencia | Guías, Consejos y Tendencias",
  description: "Guías prácticas y consejos de expertos sobre estores a medida, protección solar, medición, instalación y decoración de ventanas en Valencia.",
  alternates: {
    canonical: "https://estoresvalencia.es/blog/"
  }
};

export default function BlogIndexPage() {
  const postsList = Object.values(blogPosts);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={[{ label: "Blog", href: "/blog/" }]} />
      </div>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="badge-brand">Guías y Consejos SEO</div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0F3D5E]">
            Blog de Estores y Cortinas Técnicas en Valencia
          </h1>
          <p className="text-base text-[#4A6378]">
            Resuelve todas tus dudas sobre tejidos técnicos, aislamiento solar del clima mediterráneo, instalación sin taladro y mediciones paso a paso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postsList.map((post) => (
            <article key={post.slug} className="card-brand overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <Link href={`/blog/${post.slug}/`} className="relative h-52 w-full bg-[#E1EEF8] block overflow-hidden">
                <Image
                  src={post.hero.image}
                  alt={post.hero.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-[#2A7DB8] font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.hero.readingTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.meta.datePublished}
                    </span>
                  </div>

                  <h2 className="font-heading font-bold text-lg text-[#0F3D5E] group-hover:text-[#2A7DB8] transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}/`} className="hover:underline">
                      {post.hero.h1}
                    </Link>
                  </h2>

                  <p className="text-xs text-[#4A6378] line-clamp-3 leading-relaxed">
                    {post.firstParagraph}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F5F8FB]">
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="text-xs font-bold text-[#2A7DB8] hover:underline flex items-center justify-between"
                  >
                    <span>Leer artículo completo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
