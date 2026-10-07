# Estores Valencia (estoresvalencia.es)

Sitio web oficial de **Estores Valencia**, especializado en la generación de leads orgánicos de alta conversión (llamadas, WhatsApp y formularios) para servicios de medición, confección e instalación a domicilio de estores y cortinas técnicas en Valencia y su área metropolitana (radio de 30 km).

Construido con **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS** y **SSG (Generación Estática)** para un rendimiento óptimo en Vercel y Core Web Vitals en verde.

---

## 🚀 Características principales

- **Stack Moderno:** Next.js 15 App Router, React 19, TypeScript, Tailwind CSS v4.
- **SSG Total:** Generación estática pura (`output: 'export'`) en todas las páginas y artículos.
- **Arquitectura de Contenido Desacoplada:** Todo el contenido reside en archivos TypeScript estructurados dentro de `/src/content/`, permitiendo editar textos, FAQs, imágenes y metadatos sin tocar componentes de UI.
- **Diseño "Azul Confianza":** Paleta mediterránea con azul marino (#0F3D5E), azul Mediterráneo (#2A7DB8) y amarillo sol (#F2B705).
- **Optimización SEO Local & On-Page:**
  - Metadatos dinámicos con `generateMetadata`.
  - Jerarquía de encabezados estricta (1 `<h1>` por página).
  - Marcado estructurado JSON-LD: `LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList`, `Article`.
  - Breadcrumbs visibles con migas de pan semánticas.
  - Sitemap dinámico (`/sitemap.xml`) y robots.txt.
- **Enfoque de Conversión (CRO > 5%):**
  - Teléfono clicable siempre visible (`686 382 891`).
  - Botón flotante de WhatsApp con mensajes prellenados contextuales según la landing.
  - Barra inferior fija para dispositivos móviles (Llamar, WhatsApp, Presupuesto).
  - Formulario interactivo en 3 pasos con soporte para medidas opcionales y envío de imágenes.
- **Conformidad Legal RGPD & LSSI:** Banner de cookies de doble acción que bloquea Google Analytics 4 hasta obtener el consentimiento explícito del usuario.

---

## 📁 Estructura del proyecto

```
estores-valencia/
├── public/
│   └── images/              # Imágenes SVG fotorrealistas con metadatos AI
│       └── blog/            # Imágenes destacadas de los artículos del blog
├── src/
│   ├── app/                 # Rutas y páginas de Next.js App Router
│   │   ├── blog/            # Índice de blog y artículos dinámicos [slug]
│   │   ├── estores/         # Categoría general y landings de producto [slug]
│   │   ├── cortinas/        # Hub de cortinas técnicas
│   │   ├── cortinas-verticales/
│   │   ├── empresas/        # Landing para oficinas y proyectos ignífugos M1
│   │   ├── inspiracion/     # Galería filtrable de ambientes
│   │   ├── paneles-japoneses/
│   │   ├── persianas-alicantinas/
│   │   ├── presupuesto/     # Formulario de conversión en 3 pasos
│   │   ├── zonas/           # Servicio a domicilio en radio de 30 km
│   │   ├── contacto/        # Datos de contacto y mapa
│   │   ├── sobre-nosotros/  # Filosofía y método de trabajo direct-to-home
│   │   ├── preguntas-frecuentes/ # FAQ general agrupada
│   │   ├── aviso-legal/
│   │   ├── privacidad/
│   │   ├── cookies/
│   │   ├── not-found.tsx    # Página 404 personalizada
│   │   ├── sitemap.ts       # Generador de sitemap XML
│   │   ├── robots.ts        # Generador de robots.txt
│   │   ├── globals.css      # Tokens de diseño y utilidades de estilo
│   │   └── layout.tsx       # Root Layout con fuentes Google Fonts e Injections
│   ├── components/          # Componentes modulares UI
│   │   ├── Header.tsx       # Cabecera fija con desplegable y CTA
│   │   ├── Footer.tsx       # Pie de página completo
│   │   ├── FloatingWhatsApp.tsx # Botón flotante inteligente
│   │   ├── MobileBottomBar.tsx  # Barra inferior fija móvil
│   │   ├── QuoteForm.tsx    # Formulario multi-paso de presupuesto
│   │   ├── FAQAccordion.tsx # Desplegables de preguntas frecuentes
│   │   ├── ZoneMap.tsx      # Mapa estilizado de radio 30 km
│   │   ├── Breadcrumbs.tsx  # Migas de pan semánticas + JSON-LD
│   │   └── SchemaJSONLD.tsx # Inyectores de schemas Schema.org
│   └── content/             # Base de datos estática editable
│       ├── home.ts          # Contenido de la Home Page
│       ├── landings.ts      # Contenido de las 6 landings de producto
│       ├── categories.ts    # Contenido de las páginas de categoría
│       ├── blog.ts          # 8 artículos SEO de más de 1.200 palabras
│       └── pages.ts         # Contenido de páginas de soporte y legales
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## 📝 Cómo editar el contenido y datos de contacto

Todo el texto y la configuración de negocio están desacoplados de los componentes React. Para modificar cualquier información:

### 1. Modificar datos de contacto (Teléfono, Email, Horarios)
- **Header & Footer:** Edita los valores en `src/components/Header.tsx` y `src/components/Footer.tsx`.
- **Formulario & Schemas:** Edita `src/components/SchemaJSONLD.tsx` y `src/content/pages.ts`.

### 2. Editar páginas o añadir productos
- **Home:** Modifica `src/content/home.ts`.
- **Landings de producto (Enrollables, Screen, etc.):** Edita los objetos en `src/content/landings.ts`.
- **Categorías (Paneles Japoneses, Alicantinas, etc.):** Modifica `src/content/categories.ts`.
- **Artículos del Blog:** Edita o añade nuevos artículos en `src/content/blog.ts`.

---

## 🛠️ Comandos de desarrollo y compilación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo en http://localhost:3000
npm run dev

# Compilar producción y generar exportación estática (SSG)
npm run build
```

---

## ☁️ Despliegue en Vercel

El proyecto está configurado para desplegarse sin problemas en **Vercel**:

1. Conecta el repositorio de GitHub/GitLab a tu cuenta de Vercel.
2. Vercel detectará automáticamente Next.js.
3. Haz clic en **Deploy**. El proceso ejecutará `npm run build` y generará la versión de alto rendimiento para el dominio `estoresvalencia.es`.
