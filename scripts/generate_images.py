import os

os.makedirs("public/images/blog", exist_ok=True)

images = [
    {
        "path": "public/images/hero-home.svg",
        "title": "Estores Screen en Salón de Valencia",
        "subtitle": "Luz natural tamizada y protección solar en Valencia",
        "color1": "#0F3D5E",
        "color2": "#2A7DB8",
        "accent": "#F2B705",
        "prompt": "Professional interior photography, screen blinds installed on a window in a bright Mediterranean apartment in Valencia, Spain. Natural afternoon light, white walls, light oak floor, linen sofa, warm white, light oak and soft blue tones, plants."
    },
    {
        "path": "public/images/estores-enrollables.svg",
        "title": "Estores Enrollables a Medida",
        "subtitle": "Diseño limpio y funcionalidad en lino gris claro",
        "color1": "#1E4968",
        "color2": "#3A8EC7",
        "accent": "#E1EEF8",
        "prompt": "Professional interior photography, light gray linen roller blind half drawn on a tall window in a modern Valencia living room. Natural light, oak floor, minimalist design."
    },
    {
        "path": "public/images/estores-screen.svg",
        "title": "Estores Screen Valencia",
        "subtitle": "Visibilidad exterior sin deslumbramiento ni calor",
        "color1": "#0F3D5E",
        "color2": "#2A7DB8",
        "accent": "#F2B705",
        "prompt": "Professional interior photography, screen blind in an penthouse office overviewing Valencia rooftops. Transparent weave letting light through."
    },
    {
        "path": "public/images/estores-noche-y-dia.svg",
        "title": "Estores Noche y Día",
        "subtitle": "Regulación milimétrica de bandas opacas y traslúcidas",
        "color1": "#1C354D",
        "color2": "#2C6B99",
        "accent": "#E1EEF8",
        "prompt": "Professional interior photography, night and day blinds in bedroom showing alternating opaque and sheer bands against soft sunlight."
    },
    {
        "path": "public/images/estores-paqueto.svg",
        "title": "Estores Paqueto Elegantes",
        "subtitle": "Pliegues suaves en tejido beige natural sin varillas",
        "color1": "#2B4863",
        "color2": "#4A82AD",
        "accent": "#F5F8FB",
        "prompt": "Professional interior photography, beige paqueto blind with soft fabric folds on a bedroom window, cozy Mediterranean interior."
    },
    {
        "path": "public/images/estores-opacos.svg",
        "title": "Estores Opacos Blackout",
        "subtitle": "Oscuridad total y aislamiento térmico para el descanso",
        "color1": "#0A2438",
        "color2": "#1E4E75",
        "accent": "#F2B705",
        "prompt": "Professional interior photography, blackout blind in dark bedroom with a subtle ray of daylight along the side edge."
    },
    {
        "path": "public/images/estores-motorizados.svg",
        "title": "Estores Motorizados y Domótica",
        "subtitle": "Control mediante mando, smartphone o asistentes de voz",
        "color1": "#0F3D5E",
        "color2": "#2572AA",
        "accent": "#F2B705",
        "prompt": "Professional interior photography, modern motorized blind with remote control on oak coffee table in bright living room."
    },
    {
        "path": "public/images/paneles-japoneses.svg",
        "title": "Paneles Japoneses a Medida",
        "subtitle": "Elegancia para grandes ventanales y separación de espacios",
        "color1": "#184061",
        "color2": "#3284BE",
        "accent": "#E1EEF8",
        "prompt": "Professional interior photography, Japanese sliding panels on floor-to-ceiling balcony windows leading to a sunny terrace."
    },
    {
        "path": "public/images/cortinas-verticales.svg",
        "title": "Cortinas Verticales",
        "subtitle": "Lamas orientables para oficinas y ventanales amplios",
        "color1": "#0F3D5E",
        "color2": "#2A7DB8",
        "accent": "#DCE8F2",
        "prompt": "Professional interior photography, white vertical blind louvers in bright office interior with direct soft sunlight."
    },
    {
        "path": "public/images/persianas-alicantinas.svg",
        "title": "Persianas Alicantinas Tradicionales",
        "subtitle": "Protección solar artesanal en madera o PVC para balcón",
        "color1": "#5C3A21",
        "color2": "#2A7DB8",
        "accent": "#F2B705",
        "prompt": "Professional interior photography, traditional wooden alicantina shutter installed on a historic Valencia wrought-iron balcony."
    },
    {
        "path": "public/images/cortinas-tecnicas.svg",
        "title": "Cortinas Técnicas en Valencia",
        "subtitle": "Soluciones modernas a medida para cada estancia",
        "color1": "#0F3D5E",
        "color2": "#2A7DB8",
        "accent": "#F2B705",
        "prompt": "Professional interior photography, technical roller blinds collection in Mediterranean home."
    },
    {
        "path": "public/images/empresas-oficina.svg",
        "title": "Estores para Empresas y Oficinas",
        "subtitle": "Tejidos ignífugos M1 y protección solar profesional",
        "color1": "#0F3D5E",
        "color2": "#2A7DB8",
        "accent": "#F2B705",
        "prompt": "Professional interior photography, corporate office space with large screen roller blinds, conference room view."
    },
    {
        "path": "public/images/mapa-zonas-valencia.svg",
        "title": "Servicio a Domicilio: Valencia y 30 km",
        "subtitle": "Medición e instalación gratuita en Valencia ciudad y comarcas",
        "color1": "#0F3D5E",
        "color2": "#2A7DB8",
        "accent": "#F2B705",
        "prompt": "Vector map of Valencia region with 30km radius coverage circle highlighting L'Horta, Camp de Turia, and coastal areas."
    },
    # Blog post images
    {
        "path": "public/images/blog/estores-sin-taladrar.svg",
        "title": "Estores Sin Taladrar",
        "subtitle": "Instalación Easy Fix con enganches o adhesivos de alta resistencia",
        "color1": "#0F3D5E",
        "color2": "#2A7DB8",
        "accent": "#F2B705",
        "prompt": "Detail photograph of no-drill blind bracket mounted on PVC window frame without screws."
    },
    {
        "path": "public/images/blog/estores-para-cocina.svg",
        "title": "Estores para la Cocina",
        "subtitle": "Tejidos lavables de PVC y Screen ignífugos resistentes a grasa",
        "color1": "#0F3D5E",
        "color2": "#2A7DB8",
        "accent": "#F2B705",
        "prompt": "Bright Mediterranean kitchen with screen roller blind over sink window, olive oil, and herbs."
    },
    {
        "path": "public/images/blog/estores-para-el-salon.svg",
        "title": "Estores para el Salón",
        "subtitle": "Ideas de decoración y control de luz para salones valencianos",
        "color1": "#0F3D5E",
        "color2": "#2A7DB8",
        "accent": "#F2B705",
        "prompt": "Spacious living room with large windows fitted with neutral screen blinds."
    },
    {
        "path": "public/images/blog/estores-para-dormitorio.svg",
        "title": "Estores para el Dormitorio",
        "subtitle": "Combinación de opacos, paqueto y noche y día para el descanso",
        "color1": "#0F3D5E",
        "color2": "#2A7DB8",
        "accent": "#F2B705",
        "prompt": "Cozy bedroom with blackout blind and linen accent textiles."
    },
    {
        "path": "public/images/blog/estores-screen-o-noche-y-dia.svg",
        "title": "Screen vs Noche y Día",
        "subtitle": "Comparativa de filtrado solar, visibilidad y privacidad",
        "color1": "#0F3D5E",
        "color2": "#2A7DB8",
        "accent": "#F2B705",
        "prompt": "Side by side visual comparison of screen fabric texture and zebra night-and-day blind weave."
    },
    {
        "path": "public/images/blog/precio-estores-a-medida.svg",
        "title": "Precio de Estores a Medida",
        "subtitle": "Factores que determinan el presupuesto: tejido, medidas y motor",
        "color1": "#0F3D5E",
        "color2": "#2A7DB8",
        "accent": "#F2B705",
        "prompt": "Measuring tape, fabric samples, and blind mechanism close up on wooden table."
    },
    {
        "path": "public/images/blog/como-medir-un-estor.svg",
        "title": "Cómo Medir un Estor Paso a Paso",
        "subtitle": "Guía sencilla para medir dentro y fuera del hueco de la ventana",
        "color1": "#0F3D5E",
        "color2": "#2A7DB8",
        "accent": "#F2B705",
        "prompt": "Close up hands taking precise measurement with metal tape measure on window frame."
    },
    {
        "path": "public/images/blog/persianas-alicantinas-madera-o-pvc.svg",
        "title": "Alicantinas: Madera o PVC",
        "subtitle": "Resistencia a la humedad de la costa y estética tradicional",
        "color1": "#5C3A21",
        "color2": "#2A7DB8",
        "accent": "#F2B705",
        "prompt": "Comparison between natural wood alicantina slats and durable white PVC slats."
    }
]

def generate_svg(item):
    svg_content = f'''<!-- AI Prompt: {item['prompt']} -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <linearGradient id="bg-grad-{hash(item['path']) % 10000}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{item['color1']}" />
      <stop offset="100%" stop-color="{item['color2']}" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="1200" height="675" fill="url(#bg-grad-{hash(item['path']) % 10000})" />
  <rect width="1200" height="675" fill="url(#grid)" />

  <!-- Soft architectural lighting overlay -->
  <circle cx="950" cy="150" r="450" fill="rgba(255,255,255,0.08)" />
  <circle cx="200" cy="550" r="350" fill="rgba(242,183,5,0.06)" />

  <!-- Window Blind Illustration Frame -->
  <g transform="translate(150, 80)" filter="drop-shadow(0px 10px 25px rgba(0,0,0,0.25))">
    <!-- Outer Window Frame -->
    <rect x="0" y="0" width="900" height="420" rx="16" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.25)" stroke-width="2" />
    
    <!-- Blind Roll Top Holder -->
    <rect x="20" y="15" width="860" height="24" rx="6" fill="{item['accent']}" opacity="0.9" />
    
    <!-- Blind Fabric Slices / Slats -->
    <rect x="30" y="45" width="840" height="220" rx="4" fill="rgba(255,255,255,0.92)" />
    
    <!-- Fabric Texture Lines -->
    <path d="M 30 75 L 870 75 M 30 105 L 870 105 M 30 135 L 870 135 M 30 165 L 870 165 M 30 195 L 870 195 M 30 225 L 870 225 M 30 255 L 870 255" stroke="{item['color1']}" stroke-width="1" opacity="0.15" />

    <!-- Bottom Counterweight Rail -->
    <rect x="25" y="265" width="850" height="14" rx="4" fill="{item['color1']}" opacity="0.8" />

    <!-- Soft Light Rays -->
    <polygon points="30,279 870,279 900,410 0,410" fill="rgba(255,255,255,0.12)" />
  </g>

  <!-- Content Banner Card -->
  <g transform="translate(100, 480)">
    <rect x="0" y="0" width="1000" height="140" rx="16" fill="#0F3D5E" opacity="0.92" stroke="rgba(255,255,255,0.15)" stroke-width="1" />
    <rect x="30" y="28" width="10" height="84" rx="5" fill="{item['accent']}" />
    <text x="55" y="62" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="32" fill="#FFFFFF">{item['title']}</text>
    <text x="55" y="98" font-family="'Inter', sans-serif" font-weight="400" font-size="20" fill="#CFE0EE">{item['subtitle']}</text>

    <!-- Badge -->
    <rect x="750" y="48" width="210" height="44" rx="22" fill="{item['accent']}" />
    <text x="855" y="76" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="15" fill="#0F3D5E" text-anchor="middle">ESTORES VALENCIA</text>
  </g>
</svg>'''
    with open(item['path'], 'w', encoding='utf-8') as f:
        f.write(svg_content)

for img in images:
    generate_svg(img)

print(f"Successfully generated {len(images)} high quality SVG image assets with prompts and metadata.")
