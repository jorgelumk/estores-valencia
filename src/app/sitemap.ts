import { MetadataRoute } from "next";
import { productLandings } from "@/content/landings";
import { blogPosts } from "@/content/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://estoresvalencia.es";

  const staticRoutes = [
    "",
    "/estores-valencia/",
    "/paneles-japoneses-valencia/",
    "/cortinas-verticales-valencia/",
    "/persianas-alicantinas-valencia/",
    "/cortinas-valencia/",
    "/empresas-valencia/",
    "/zonas/",
    "/presupuesto/",
    "/blog/",
    "/sobre-nosotros/",
    "/preguntas-frecuentes/",
    "/contacto/",
    "/mapa-del-sitio/",
    "/aviso-legal/",
    "/privacidad/",
    "/cookies/"
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : route.includes("/presupuesto/") ? 0.9 : 0.8
  }));

  const landingEntries = Object.keys(productLandings).map((slug) => ({
    url: `${baseUrl}/estores/${slug.endsWith("-valencia") ? slug : `${slug}-valencia`}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9
  }));

  const blogEntries = Object.keys(blogPosts).map((slug) => ({
    url: `${baseUrl}/blog/${slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...staticEntries, ...landingEntries, ...blogEntries];
}
