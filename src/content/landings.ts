export interface ProductLanding {
  slug: string;
  meta: {
    title: string;
    description: string;
    canonical: string;
    mainKeyword: string;
    secondaryKeywords: string[];
  };
  hero: {
    h1: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    image: string;
    imageAlt: string;
  };
  introParagraphs: string[];
  advantages: { title: string; desc: string; icon: string }[];
  fabricsAndFinishes: { title: string; desc: string }[];
  recommendedRooms: { name: string; desc: string }[];
  mechanisms: { type: string; desc: string }[];
  priceFactors: {
    title: string;
    paragraphs: string[];
  };
  gallery: { title: string; image: string; alt: string }[];
  comparison: {
    title: string;
    typeA: string;
    typeB: string;
    rows: { feature: string; valA: string; valB: string }[];
  };
  faqs: { question: string; answer: string }[];
  sisterLandings: { name: string; href: string; desc: string }[];
}

export const productLandings: Record<string, ProductLanding> = {
  enrollables: {
    slug: "enrollables",
    meta: {
      title: "Estores Enrollables en Valencia a Medida | Instalación Gratis",
      description: "Estores enrollables en Valencia a medida: la solución más versátil para tu hogar. Opción de montaje sin taladrar. Medición e instalación a domicilio.",
      canonical: "https://estoresvalencia.es/estores/enrollables-valencia/",
      mainKeyword: "estores enrollables valencia",
      secondaryKeywords: ["estores enrollables", "estores enrollables a medida", "cortinas enrollables valencia"]
    },
    hero: {
      h1: "Estores Enrollables en Valencia",
      subtitle: "La solución más limpia, práctica y versátil para controlar la luz en tu hogar u oficina con fabricación 100% a medida.",
      ctaPrimary: "Pedir presupuesto gratis",
      ctaSecondary: "Llamar al 686 382 891",
      image: "/images/estores-enrollables.jpg",
      imageAlt: "Estores enrollables valencia instalados en salón moderno"
    },
    introParagraphs: [
      "Los **estores enrollables en Valencia** representan el sistema de protección solar más demandado por su diseño contemporáneo, máxima funcionalidad y mínima ocupación de espacio. Su tubo superior de recogida permite enrollar el tejido suavemente mediante cadena, muelle o motor eléctrico, dejando el hueco de la ventana totalmente despejado cuando lo requieras.",
      "En Valencia, donde la luminosidad mediterránea es constante durante todo el año, instalar cortinas enrollables a medida permite adaptar con precisión la intensidad de luz que ingresa a cada habitación. Gracias a nuestra amplia gama de tejidos translúcidos, ignífugos y decorativos, garantizamos un ajuste perfecto tanto en ventanales modernos como en ventanas tradicionales de piso o chalét.",
      "Además, para quienes viven en pisos de alquiler o desean proteger la perfilería de sus ventanas de PVC o aluminio, ofrecemos modelos de estores enrollables sin taladrar con fijación Easy Fix directa a la hoja."
    ],
    advantages: [
      { title: "Versatilidad total", desc: "Adaptables a cualquier tamaño de ventana, desde huecos estrechos hasta grandes paños de luz.", icon: "Check" },
      { title: "Opción sin taladrar", desc: "Sistemas de sujeción por engache o cinta técnica de alta adherencia sin perforar.", icon: "ShieldCheck" },
      { title: "Mantenimiento mínimo", desc: "Tejidos antipolvo y repelentes a la suciedad que se limpian fácilmente con un paño húmedo.", icon: "Sparkles" },
      { title: "Mapeo de luz a medida", desc: "Elige entre grados de transparencia desde el 1% hasta telas totalmente tupidas.", icon: "Sun" }
    ],
    fabricsAndFinishes: [
      { title: "Tejido Screen Poliéster / PVC", desc: "Máxima durabilidad, resistencia a la radiación UV e ignífugo de clase M1." },
      { title: "Tejidos Translúcidos Poliéster", desc: "Tamizan la luz de manera suave aportando tonos cálidos y confort visual." },
      { title: "Terminaciones de Contrapeso", desc: "Oculto bajo el dobladillo o visto en aluminio anodizado blanco, plata o negro." }
    ],
    recommendedRooms: [
      { name: "Salones y comedores", desc: "Proporciona privacidad diurna sin restar claridad al espacio de convivencia." },
      { name: "Cocinas y galerías", desc: "Resistentes a la humedad ambiental y a las salpicaduras de grasa." },
      { name: "Despachos y dormitorios", desc: "Fácil regulación del brillo sobre pantallas de ordenador y zonas de descanso." }
    ],
    mechanisms: [
      { type: "Cadena continua de PVC o metálica", desc: "Suave accionamiento manual con desmultiplicador de esfuerzo." },
      { type: "Muelle autorregulable", desc: "Tirador central ideal para habitaciones infantiles sin cadenas ni hilos." },
      { type: "Motor integrado (batería o cable)", desc: "Accionamiento mediante mando a distancia o domótica inalámbrica." }
    ],
    priceFactors: {
      title: "De qué depende el precio de tus estores enrollables",
      paragraphs: [
        "El presupuesto de tus estores enrollables a medida depende de tres factores fundamentales: las dimensiones del tubo y del tejido, el tipo de tela seleccionada (translúcida básica vs screen ignífugo técnico) y el tipo de accionamiento escogido (manual por cadena frente a motorización silenciosa).",
        "En Estores Valencia acudimos a tu vivienda en Valencia o municipios de los alrededores sin ningún coste para tomar mediciones milimétricas, enseñarte el muestrario físico de telas y dejarte un presupuesto cerrado en el acto."
      ]
    },
    gallery: [
      { title: "Enrollable lino gris en ventanal", image: "/images/estores-enrollables.jpg", alt: "Estor enrollable lino gris" },
      { title: "Enrollable translúcido en cocina", image: "/images/blog/estores-para-cocina.jpg", alt: "Estor enrollable en cocina blanca" },
      { title: "Enrollable en estudio de trabajo", image: "/images/hero-home.jpg", alt: "Estor enrollable en estudio" },
      { title: "Mecanismo de enrollable detalle", image: "/images/blog/estores-sin-taladrar.jpg", alt: "Detalle de mecanismo enrollable" }
    ],
    comparison: {
      title: "Comparativa: Estores Enrollables vs Estores Screen",
      typeA: "Enrollables Estándar",
      typeB: "Estores Screen",
      rows: [
        { feature: "Tejido principal", valA: "Poliéster translúcido decorativo", valB: "Fibra de vidrio + PVC técnico" },
        { feature: "Protección térmica", valA: "Media", valB: "Alta (bloquea hasta 80% de calor)" },
        { feature: "Visión hacia el exterior", valA: "Difusa", valB: "Nítida sin ser visto desde fuera" },
        { feature: "Facilidad de limpieza", valA: "Paño seco o ligeramente húmedo", valB: "Lavable con agua y jabón neutro" }
      ]
    },
    faqs: [
      {
        question: "¿Se pueden poner estores enrollables sin taladrar en ventanas de PVC?",
        answer: "Sí, disponemos de soportes Easy Fix universales que se fijan a la parte superior de la hoja sin perforar la profilatería, ideales para ventanas oscilobatientes."
      },
      {
        question: "¿Cuál es el ancho máximo que se puede fabricar en un estor enrollable?",
        answer: "Fabricamos estores enrollables a medida de hasta 3 metros de ancho de una sola pieza gracias a tubos reforzados que evitan que el tejido pandee."
      },
      {
        question: "¿Es complicado instalar un estor enrollable por mi cuenta?",
        answer: "Con Estores Valencia no tendrás que preocuparte por nada: la instalación profesional a domicilio está totalmente incluida en nuestro servicio."
      },
      {
        question: "¿Qué distancia debe sobresalir el estor respecto a la ventana?",
        answer: "Recomendamos añadir entre 5 y 10 cm a cada lado del marco para cubrir adecuadamente la luz lateral cuando la ventana esté bajada."
      }
    ],
    sisterLandings: [
      { name: "Estores Screen", href: "/estores/screen-valencia/", desc: "Descubre el tejido técnico que filtra el sol de Valencia conservando las vistas al exterior." },
      { name: "Estores Noche y Día", href: "/estores/noche-y-dia-valencia/", desc: "Regula la intensidad de la luz mediante bandas horizontales alternas." }
    ]
  },
  screen: {
    slug: "screen",
    meta: {
      title: "Estores Screen en Valencia a Medida | Protección Solar Eficiente",
      description: "Estores screen en Valencia a medida: filtra el sol mediterráneo y mantén las vistas al exterior sin pasar calor. Medición e instalación gratuita.",
      canonical: "https://estoresvalencia.es/estores/screen-valencia/",
      mainKeyword: "estores screen valencia",
      secondaryKeywords: ["estores screen", "estores screen a medida", "tejido screen valencia"]
    },
    hero: {
      h1: "Estores Screen en Valencia",
      subtitle: "El tejido de alta tecnología diseñado para aislar del calor del verano valenciano sin oscurecer la vivienda ni perder la visión exterior.",
      ctaPrimary: "Pedir presupuesto gratis",
      ctaSecondary: "Llamar al 686 382 891",
      image: "/images/estores-screen.jpg",
      imageAlt: "Estores screen valencia en salón luminoso con vista a tejados"
    },
    introParagraphs: [
      "Los **estores screen en Valencia** se han consolidado como la alternativa técnica por excelencia en la arquitectura de interiores mediterránea. Fabricados con microfilamentos de fibra de vidrio o poliéster recubiertos de PVC, estos estores absorben y reflejan la energía solar antes de que penetre en la estancia, manteniendo el interior fresco y protegido.",
      "En viviendas con orientaciones expuestas a muchas horas de insolación diaria en zonas como la Avenida de Francia, Benicalap o Malilla, un estor screen a medida reduce considerablemente la temperatura interior y el consumo de aire acondicionado. Al mismo tiempo, elimina los molestos reflejos en pantallas de televisión y ordenadores.",
      "Su trama microporosa actúa como un espejo unidireccional durante el día: permite ver nítidamente la luz y el paisaje exterior mientras impide que desde la calle se observe el interior de tu hogar."
    ],
    advantages: [
      { title: "Aislamiento térmico superior", desc: "Retiene entre el 75% y el 88% de la radiación solar entrante.", icon: "Thermometer" },
      { title: "Visibilidad exterior", desc: "Disfruta de la vista de la ciudad o jardín sin perder tu intimidad diurna.", icon: "Eye" },
      { title: "Resistencia ignífuga M1", desc: "Tejidos no inflamables certificados para máxima seguridad en el hogar.", icon: "Shield" },
      { title: "Inalterable a la humedad", desc: "No se deforma, decolora ni amarillea por la acción de los rayos ultravioleta.", icon: "SunMedium" }
    ],
    fabricsAndFinishes: [
      { title: "Factor de apertura 1%", desc: "Máxima protección solar y oscuridad sutil. Recomendado para fachadas muy expuestas." },
      { title: "Factor de apertura 3%", desc: "Equilibrio ideal entre visibilidad del exterior, filtrado solar y paso de luz." },
      { title: "Factor de apertura 5%", desc: "Mayor entrada de luminosidad manteniendo el aislamiento térmico y la privacidad." }
    ],
    recommendedRooms: [
      { name: "Salones orientación Sur / Oeste", desc: "Protege muebles y suelos de madera de la decoloración solar." },
      { name: "Despachos y teletrabajo", desc: "Sin reflejos molestos en monitores manteniendo luz natural óptima." },
      { name: "Terrazas acristaladas", desc: "Evita el efecto invernadero en cerramientos de aluminio y cristal." }
    ],
    mechanisms: [
      { type: "Cadena desmultiplicada", desc: "Manejo extremadamente suave incluso en estores de grandes dimensiones." },
      { type: "Motorización Somfy / Tuya", desc: "Control domótico desde el móvil con programación por horarios o radiación." }
    ],
    priceFactors: {
      title: "Factores que influyen en el coste del estor screen",
      paragraphs: [
        "El precio de un estor screen a medida depende principalmente de la composición del entramado (la fibra de vidrio ofrece un aislamiento superior al poliéster), del factor de apertura seleccionado y de los acabados decorativos del contrapeso y la perfilería.",
        "Te asesoramos en tu domicilio en Valencia para seleccionar la densidad de trama idónea según la orientación exacta de tus ventanas."
      ]
    },
    gallery: [
      { title: "Screen 3% en salón de ático", image: "/images/estores-screen.jpg", alt: "Estor screen en salón de ático" },
      { title: "Screen en terraza acristalada", image: "/images/hero-home.jpg", alt: "Screen en cerramiento de terraza" },
      { title: "Muestrario de factores de apertura", image: "/images/blog/estores-screen-o-noche-y-dia.jpg", alt: "Muestrario de tejidos screen" },
      { title: "Screen 1% en despacho", image: "/images/empresas-oficina.jpg", alt: "Screen en despacho de oficina" }
    ],
    comparison: {
      title: "Comparativa de Factores de Apertura Screen",
      typeA: "Screen 1% (Trama Tupida)",
      typeB: "Screen 5% (Trama Abierta)",
      rows: [
        { feature: "Entrada de luz", valA: "Tamizada y reducida", valB: "Abundante y luminosa" },
        { feature: "Protección del calor", valA: "Máxima (88% bloqueo)", valB: "Alta (75% bloqueo)" },
        { feature: "Visión del paisaje", valA: "Siluetas perfiladas", valB: "Visión nítida exterior" },
        { feature: "Privacidad de noche", valA: "Mayor", valB: "Se perciben sombras con luz interior" }
      ]
    },
    faqs: [
      {
        question: "¿Qué factor de apertura de estor screen elijo para mi casa en Valencia?",
        answer: "Para salones con mucho sol o terraza orientados al mediodía recomendamos el 3% o 1%. Para estancias donde quieras primar la entrada de luz sin encender lámparas, el 5% es perfecto."
      },
      {
        question: "¿Se ve desde fuera de noche cuando enciendo la luz?",
        answer: "De noche, al encender la luz en el interior, el efecto de visión se invierte ligeramente en tejidos screen con apertura superior al 3%. Si buscas intimidad total nocturna sin persiana exterior, te sugerimos combinarlo con opaco o elegir una trama del 1%."
      },
      {
        question: "¿Es mejor screen de fibra de vidrio o de poliéster?",
        answer: "La fibra de vidrio aporta mayor estabilidad dimensional frente a cambios bruscos de temperatura y tiene un coeficiente de aislamiento térmico ligeramente superior."
      },
      {
        question: "¿Cómo se eliminan las manchas en un estor screen?",
        answer: "Es sumamente sencillo: al ser un material plastificado no poroso, basta con frotar suavemente la mancha con una esponja tibia con jabón neutro y aclarar con agua."
      }
    ],
    sisterLandings: [
      { name: "Estores Enrollables", href: "/estores/enrollables-valencia/", desc: "Conoce todas las variantes en tejidos translúcidos y decorativos." },
      { name: "Estores Motorizados", href: "/estores/motorizados-valencia/", desc: "Automatiza tus estores screen para un confort solar inteligente." }
    ]
  },
  "noche-y-dia": {
    slug: "noche-y-dia",
    meta: {
      title: "Estores Noche y Día en Valencia a Medida | Regulación de Luz",
      description: "Estores noche y día en Valencia a medida: franja opaca y transparente para regular la luz a tu gusto sin subir la cortina. Presupuesto gratis.",
      canonical: "https://estoresvalencia.es/estores/noche-y-dia-valencia/",
      mainKeyword: "estores noche y día valencia",
      secondaryKeywords: ["estores noche y día", "estores noche y día a medida", "estor duolight valencia"]
    },
    hero: {
      h1: "Estores Noche y Día en Valencia",
      subtitle: "Control milimétrico de la intimidad y la luminosidad en una sola cortina mediante la superposición de bandas horizontales túpida y transparente.",
      ctaPrimary: "Pedir presupuesto gratis",
      ctaSecondary: "Llamar al 686 382 891",
      image: "/images/estores-noche-y-dia.jpg",
      imageAlt: "Estores noche y día valencia regulando franjas de luz en dormitorio"
    },
    introParagraphs: [
      "Los **estores noche y día en Valencia** combinan el diseño sofisticado de las persianas venecianas con la practicidad y suavidad textil del estor enrollable. Su tejido técnico dispone de bandas horizontales alternas: una franja opaca o semitraslúcida y otra franja de rejilla transparente que desliza en doble caída.",
      "Con un sutil movimiento de la cadena o el control motorizado, las bandas de ambas capas se alinean para permitir el paso directo de la brisa y la luz exterior (posición día) o se solapan para crear una barrera visual tupida que garantiza plena privacidad (posición noche), todo ello sin necesidad de recoger o subir el estor.",
      "Son la elección favorita en decoraciones modernas de pisos en Ruzafa, Eixample o Alboraya donde se desea una estética visual dinámica con una presencia elegante en la ventana."
    ],
    advantages: [
      { title: "Doble función en un estor", desc: "Pasa de máxima luminosidad a oscuridad moderada en un solo gesto.", icon: "Layers" },
      { title: "Estética decorativa", desc: "Aporta un toque vanguardista y estructurado a cualquier estancia.", icon: "Sparkles" },
      { title: "Sin necesidad de subirlo", desc: "Regula la visibilidad sin dejar al descubierto la ventana o el marco.", icon: "Sliders" },
      { title: "Cajón protector superior", desc: "Incluye de serie cajón de aluminio de ocultación para preservar el mecanismo.", icon: "Box" }
    ],
    fabricsAndFinishes: [
      { title: "Gama Colores Neutros", desc: "Blancos, beiges, marfil y grises suave que encajan con cualquier mobiliario." },
      { title: "Gama Texturizados y Madera", desc: "Efectos veteados y acabados textiles de alta calidad decorativa." },
      { title: "Cajón y Galería", desc: "Perfil superior cerrado en aluminio anodizado blanco, plata o antracita." }
    ],
    recommendedRooms: [
      { name: "Salones y comedores", desc: "Permite cambiar el ambiente de la estancia según avanza el sol." },
      { name: "Dormitorios principales", desc: "Aporta privacidad de noche sin sacrificar claridad matutina." },
      { name: "Despachos y salitas", desc: "Control fino del deslumbramiento durante reuniones o lectura." }
    ],
    mechanisms: [
      { type: "Cadena desmultiplicada con freno", desc: "Regulación precisa al milímetro en cualquier posición de franja." },
      { type: "Motorización vía radio", desc: "Sincroniza varias ventanas para mover las franjas al unísono." }
    ],
    priceFactors: {
      title: "De qué depende el presupuesto de un estor noche y día",
      paragraphs: [
        "Debido a que el estor noche y día emplea el doble de metros de tejido que un estor enrollable estándar más el cajón perfilado protector, su fabricación requiere una precisión extrema.",
        "El coste final dependerá de la anchura total de la ventana, la colección de tejido elegida y el acabado del cajón. Te mostramos muestras reales en tu hogar sin coste."
      ]
    },
    gallery: [
      { title: "Noche y día posición día", image: "/images/estores-noche-y-dia.jpg", alt: "Estor noche y día franja abierta" },
      { title: "Noche y día posición noche", image: "/images/blog/estores-screen-o-noche-y-dia.jpg", alt: "Estor noche y día franja cerrada" },
      { title: "Detalle de tejido y cajón", image: "/images/estores-enrollables.jpg", alt: "Detalle de franjas noche y día" },
      { title: "Noche y día en dormitorio", image: "/images/estores-paqueto.jpg", alt: "Noche y día en dormitorio" }
    ],
    comparison: {
      title: "Comparativa: Noche y Día vs Estor Enrollable Convencional",
      typeA: "Estor Noche y Día",
      typeB: "Estor Enrollable Estándar",
      rows: [
        { feature: "Regulación de luz", valA: "Milimétrica en cualquier altura", valB: "Solo subiendo o bajando la cortina" },
        { feature: "Doble capa textil", valA: "Sí, bandas alternas móviles", valB: "No, paño único continuo" },
        { feature: "Estética visual", valA: "Moderna y estructurada", valB: "Minimalista y lisa" },
        { feature: "Cajón superior", valA: "Incluido de serie", valB: "Opcional" }
      ]
    },
    faqs: [
      {
        question: "¿Los estores noche y día oscurecen del todo la habitación?",
        answer: "No atenúan la luz al 100% como un estor opaco blackout. Al solaparse las franjas tupidas crean una atmósfera de penumbra muy confortable, idónea para dormitorios que ya cuentan con persianas exteriores o buscan un oscurecimiento suave."
      },
      {
        question: "¿Cómo se limpian las franjas de un estor noche y día?",
        answer: "Se limpian pasando un plumero antiestático o un aspirador a baja potencia con cepillo suave. Las manchas puntuales se eliminan con una toallita húmeda."
      },
      {
        question: "¿Es posible instalarlos en el techo o en la pared?",
        answer: "Sí, incluyen soportes universales de clip rápido tanto para anclaje a techo como a pared con escuadras de distanciamiento."
      },
      {
        question: "¿Se pueden hacer noche y día para ventanas muy anchas?",
        answer: "Fabricamos estores noche y día de hasta 2,60 metros de ancho, asegurando el alineamiento horizontal perfecto de las franjas."
      }
    ],
    sisterLandings: [
      { name: "Estores Paqueto", href: "/estores/paqueto-valencia/", desc: "Conoce el tejido natural con pliegues sin varillas para ambientes cálidos." },
      { name: "Estores Opacos", href: "/estores/opacos-valencia/", desc: "Consigue oscuridad 100% sin persiana exterior." }
    ]
  },
  paqueto: {
    slug: "paqueto",
    meta: {
      title: "Estores Paqueto en Valencia a Medida | Elegancia y Textil Natural",
      description: "Estores paqueto en Valencia a medida: pliegues suaves sin varillas en telas de lino y algodón. Aportan calidez y distinción. Medición a domicilio gratis.",
      canonical: "https://estoresvalencia.es/estores/paqueto-valencia/",
      mainKeyword: "estores paqueto valencia",
      secondaryKeywords: ["estores paqueto", "estores plegables sin varillas valencia", "estor paqueto lino"]
    },
    hero: {
      h1: "Estores Paqueto en Valencia",
      subtitle: "La calidez del visillo tradicional con la practicidad del estor plegable de caída natural en lino y algodón.",
      ctaPrimary: "Pedir presupuesto gratis",
      ctaSecondary: "Llamar al 686 382 891",
      image: "/images/estores-paqueto.jpg",
      imageAlt: "Estores paqueto valencia en tejido suave beige en salón clásico"
    },
    introParagraphs: [
      "Los **estores paqueto en Valencia** son la elección perfecta para quienes aman el tacto orgánico de las telas naturales y la estética de una cortina acogedora, pero desean prescindir del volumen de las cortinas pesadas tradicionales.",
      "A diferencia de los estores plegables con varillas rígidas, el estor paqueto se recoge mediante un sistema de cintas verticales traseras que fruncen la tela de forma progresiva de abajo hacia arriba, creando ondas horizontales de pliegues suaves y desembarazados.",
      "Confeccionados en composiciones de lino natural, visillos de algodón o mezclas de poliéster de fácil lavado, vestirán las ventanas de tu casa en Valencia con un aire refinado y contemporáneo."
    ],
    advantages: [
      { title: "Caída orgánica natural", desc: "Pliegues sueltos sin varillas metálicas ni rigidez visual.", icon: "Wind" },
      { title: "Tejidos lavables en lavadora", desc: "Fácil desmonte mediante cinta de velcro para lavar en casa.", icon: "RefreshCw" },
      { title: "Luz cálida y tamizada", desc: "Permite el paso de claridad filtrada aportando mucha calidez al hogar.", icon: "Sun" },
      { title: "Combinables con caídas", desc: "Encajan a la perfección solos o coordinados con caídas laterales.", icon: "Palette" }
    ],
    fabricsAndFinishes: [
      { title: "Lino 100% y Mezcla Lino-Algodón", desc: "Textura rústica chic de máxima elegancia y transpirabilidad." },
      { title: "Visillos Poliéster Efecto Lino", desc: "No se arrugan al lavar y mantienen la forma con el paso de los años." },
      { title: "Riel Compacto de Colección", desc: "Perfil superior de aluminio blanco con mando por cadena o cordón." }
    ],
    recommendedRooms: [
      { name: "Dormitorios principales y juveniles", desc: "Aporta un ambiente relajante y acogedor para el descanso." },
      { name: "Salones de estilo mediterráneo", desc: "Combina idealmente con suelos de parquet, microcemento o hidráulicos." },
      { name: "Comedores y zonas de estar", desc: "Tamiza la luz solar creando sombras suaves y amables." }
    ],
    mechanisms: [
      { type: "Riel de cadena desmultiplicado", desc: "Manejo sin esfuerzo que mantiene la cortina retenida a cualquier altura." },
      { type: "Fijación por Velcro textil", desc: "Permite retirar la tela del riel en segundos para su mantenimiento." }
    ],
    priceFactors: {
      title: "Factores de precio en estores paqueto a medida",
      paragraphs: [
        "La confección a medida de un estor paqueto requiere horas de confección artesanal para coser las cintas guías y los dobladillos con exactitud. El coste varía según la riqueza de la tela (lino natural vs poliéster lavable) y el ancho del riel.",
        "Te visitamos en tu hogar para medir la ventana y mostrarte nuestro muestrario textil táctil sin compromiso."
      ]
    },
    gallery: [
      { title: "Paqueto lino beige en dormitorio", image: "/images/estores-paqueto.jpg", alt: "Estor paqueto lino beige" },
      { title: "Detalle de pliegues fruncidos", image: "/images/blog/estores-para-dormitorio.jpg", alt: "Detalle pliegues estor paqueto" },
      { title: "Paqueto en salón luminoso", image: "/images/hero-home.jpg", alt: "Estor paqueto en salón" },
      { title: "Muestrario de telas de lino", image: "/images/blog/estores-para-el-salon.jpg", alt: "Muestrario telas de lino" }
    ],
    comparison: {
      title: "Comparativa: Estor Paqueto vs Estor Plegable con Varillas",
      typeA: "Estor Paqueto (Sin varillas)",
      typeB: "Estor Plegable (Con varillas)",
      rows: [
        { feature: "Tipo de pliegue", valA: "Fruncido suave y curvilíneo", valB: "Recto y geométrico" },
        { feature: "Lavado en casa", valA: "Muy fácil, quitar del velcro y a la lavadora", valB: "Requiere extraer las varillas metálicas" },
        { feature: "Estilo decorativo", valA: "Cálido, natural y clásico-contemporáneo", valB: "Moderno y sobrio" },
        { feature: "Tejidos recomendados", valA: "Linos, algodonosos y visillos ligeros", valB: "Lonetas y telas firmes" }
      ]
    },
    faqs: [
      {
        question: "¿Se pueden lavar los estores paqueto en la lavadora de casa?",
        answer: "Sí, las telas de visillo y poliéster se pueden lavar en programa delicado a 30°C con detergente suave y centrifugado corto. Se cuelgan directamente húmedos en el riel para que sequen sin necesidad de planchar."
      },
      {
        question: "¿Qué diferencia hay entre un estor paqueto y una cortina tradicional?",
        answer: "El estor paqueto se recoge verticalmente hacia el techo, aprovechando mejor el espacio lateral de las paredes y evitando que la tela arrastre por el suelo."
      },
      {
        question: "¿Deja pasar suficiente luz el tejido de lino en un estor paqueto?",
        answer: "Los tejidos de trama abierta o visillos tamizan la luz del sol aportando una gran claridad interior sin deslumbramientos."
      },
      {
        question: "¿Se pueden motorizar los estores paqueto?",
        answer: "Sí, instalamos rieles motorizados silenciosos accionados con mando a distancia o smartphone para estores paqueto."
      }
    ],
    sisterLandings: [
      { name: "Estores Noche y Día", href: "/estores/noche-y-dia-valencia/", desc: "Alternativa moderna con bandas orientables." },
      { name: "Cortinas Técnicas", href: "/cortinas-valencia/", desc: "Descubre nuestra selección de cortinas a medida para el hogar." }
    ]
  },
  opacos: {
    slug: "opacos",
    meta: {
      title: "Estores Opacos en Valencia a Medida | Oscuridad Blackout 100%",
      description: "Estores opacos en Valencia a medida: bloqueo total de la luz y aislamiento térmico para dormitorios sin persiana. Medición gratis a domicilio.",
      canonical: "https://estoresvalencia.es/estores/opacos-valencia/",
      mainKeyword: "estores opacos valencia",
      secondaryKeywords: ["estores opacos", "estores blackout valencia", "cortinas blackout valencia"]
    },
    hero: {
      h1: "Estores Opacos en Valencia",
      subtitle: "Oscuridad 100% garantizada y aislamiento térmico para dormitorios, salas de proyecciones y estancias que carecen de persianas exteriores.",
      ctaPrimary: "Pedir presupuesto gratis",
      ctaSecondary: "Llamar al 686 382 891",
      image: "/images/estores-opacos.jpg",
      imageAlt: "Estores opacos valencia blackout con oscuridad total en dormitorio"
    },
    introParagraphs: [
      "Los **estores opacos en Valencia** son la solución definitiva cuando se necesita bloquear de forma absoluta la entrada de luz solar o farolas nocturnas en dormitorios, cuartos de bebés o salas de conferencias sin necesidad de realizar obras para instalar persianas exteriores.",
      "Fabricados con tejidos opacos multicapa de tipo Blackout con reverso recubierto en goma de acrilato o fibra sellada, impiden el paso del 100% de la luz visible e infrarroja. Además, actúan como barrera aislante del calor estival y del frío invernal.",
      "Para un bloqueo lumínico total sin filtraciones laterales, ofrecemos sistemas de guiado por canales metálicos o cofre con felpudo perimetral."
    ],
    advantages: [
      { title: "Oscuridad 100% Blackout", desc: "Cero filtraciones a través del tejido para un descanso ininterrumpido.", icon: "Moon" },
      { title: "Aislamiento térmico extra", desc: "Protege la habitación del abrasador sol del verano valenciano.", icon: "ShieldAlert" },
      { title: "Privacidad nocturna total", desc: "Nadie podrá percibir sombras ni siluetas desde el exterior con la luz encendida.", icon: "EyeOff" },
      { title: "Protección UV de mobiliario", desc: "Evita el deterioro de suelos de madera y tapicerías.", icon: "SunOff" }
    ],
    fabricsAndFinishes: [
      { title: "Blackout Texturizado", desc: "Aspecto frontal textil de alta elegancia con reverso técnico aislate." },
      { title: "Blackout Ignífugo Clase M1", desc: "Certificado para hoteles, clínicas y espacios públicos." },
      { title: "Guiado Lateral y Cofre", desc: "Perfiles de aluminio blanco o negro que sellan los márgenes laterales." }
    ],
    recommendedRooms: [
      { name: "Dormitorios principales y juveniles", desc: "Esencial para descansar a cualquier hora del día o noche." },
      { name: "Habitaciones infantiles", desc: "Ayuda a conciliar el sueño en siestas diurnas de los más pequeños." },
      { name: "Salas de cine y proyectores", desc: "Consigue la penumbra necesaria para disfrutar de pantallas gigantes." }
    ],
    mechanisms: [
      { type: "Cadena metálica reforzada", desc: "Manejo resistente adecuado para el peso de tejidos opacos densos." },
      { type: "Motorización vía radio", desc: "Baja tus estores blackout desde la cama con solo pulsar un botón." }
    ],
    priceFactors: {
      title: "Cómo se calcula el precio de un estor opaco blackout",
      paragraphs: [
        "El importe final de un estor opaco a medida varía en función de si se instala un modelo enrollable simple o se añade estructura con guías laterales anti-luz y cofre superior.",
        "Te asesoramos en tu vivienda en Valencia para evaluar el tipo de ventana y recomendarte la opción perfecta."
      ]
    },
    gallery: [
      { title: "Estor opaco en dormitorio principal", image: "/images/estores-opacos.jpg", alt: "Estor opaco blackout en dormitorio" },
      { title: "Detalle de filtración cero", image: "/images/blog/estores-para-dormitorio.jpg", alt: "Filtración cero estor blackout" },
      { title: "Opaco con guiado lateral", image: "/images/estores-enrollables.jpg", alt: "Estor opaco con guías laterales" },
      { title: "Ambiente nocturno descansado", image: "/images/hero-home.jpg", alt: "Ambiente nocturno estor opaco" }
    ],
    comparison: {
      title: "Diferencias entre Tejido Opaco (Blackout) y Translúcido (Dimout)",
      typeA: "Estor Opaco (Blackout)",
      typeB: "Estor Translúcido (Dimout)",
      rows: [
        { feature: "Paso de luz", valA: "0% (Bloqueo absoluto)", valB: "20% - 40% (Luz suave tamizada)" },
        { feature: "Uso recomendado", valA: "Dormitorios y cine en casa", valB: "Salones y cocinas" },
        { feature: "Privacidad nocturna", valA: "Absoluta", valB: "Alta, aunque se distinguen sombras" },
        { feature: "Capa trasera", valA: "Aislamiento sellado blanco o neutro", valB: "Mismo acabado en ambas caras" }
      ]
    },
    faqs: [
      {
        question: "¿Cuál es la diferencia entre un estor opaco blackout y uno dimout?",
        answer: "El tejido blackout frena el 100% de la luz por completo a través de la tela. El tejido dimout atenúa la luz fuertemente pero permite el paso de una tenue claridad difusa."
      },
      {
        question: "¿Entra luz por los laterales de un estor opaco?",
        answer: "En un estor enrollable opaco estándar quedan unos pequeños márgenes de 1.5 cm a cada lado por donde pasa una rendija de luz. Si deseas oscuridad completa de pared a pared, instalamos perfilería de guías laterales con cepillo."
      },
      {
        question: "¿Los estores opacos ayudan a reducir el calor en verano en Valencia?",
        answer: "Sí, al repeler la radiación infrarroja evitan que el cristal de la ventana caliente el aire del interior de la habitación."
      },
      {
        question: "¿Se pueden limpiar con facilidad?",
        answer: "Sí, la capa recubierta de los estores opacos se limpia fácilmente pasando una bayeta húmeda."
      }
    ],
    sisterLandings: [
      { name: "Estores Motorizados", href: "/estores/motorizados-valencia/", desc: "Combina tus estores blackout con motores silenciosos." },
      { name: "Estores Enrollables", href: "/estores/enrollables-valencia/", desc: "Revisa la gama de tejidos translúcidos y decorativos." }
    ]
  },
  motorizados: {
    slug: "motorizados",
    meta: {
      title: "Estores Motorizados en Valencia a Medida | Domótica y Confort",
      description: "Estores motorizados en Valencia a medida: control silencioso por mando, móvil o asistentes de voz (Alexa, Google). Medición e instalación gratis.",
      canonical: "https://estoresvalencia.es/estores/motorizados-valencia/",
      mainKeyword: "estores motorizados valencia",
      secondaryKeywords: ["estores eléctricos valencia", "estores domótica valencia", "motores estores somfy valencia"]
    },
    hero: {
      h1: "Estores Motorizados en Valencia",
      subtitle: "Disfruta del máximo confort y modernidad automatizando tus estores con motores silenciosos accionados por mando, smartphone o control por voz.",
      ctaPrimary: "Pedir presupuesto gratis",
      ctaSecondary: "Llamar al 686 382 891",
      image: "/images/estores-motorizados.jpg",
      imageAlt: "Estores motorizados valencia domótica con mando a distancia"
    },
    introParagraphs: [
      "Los **estores motorizados en Valencia** transforman por completo la experiencia de interactuar con las ventanas de tu hogar. Ya no es necesario accionar cadenas manualmente ventana por ventana: con un solo toque en un mando a distancia o una orden de voz a tu asistente inteligente, todos tus estores se posicionarán exactamente a la altura deseada.",
      "En viviendas con techos altos, grandes ventanales de terraza o ventanas de difícil acceso, el motor eléctrico es una necesidad práctica que además alarga considerablemente la vida útil del tejido al eliminar tirones desiguales.",
      "Trabajamos con motores de última tecnología con batería recargable por USB (sin necesidad de rozas ni cables) o motores tubulares a red de 230V con integración total en sistemas Somfy, Tuya, Alexa, Google Home y Apple HomeKit."
    ],
    advantages: [
      { title: "Control remoto multifunción", desc: "Maneja individualmente o en grupo hasta 15 estores con un único mando.", icon: "Smartphone" },
      { title: "Instalación sin obras", desc: "Motores a batería de litio de alta duración sin cables ni enchufes cercanos.", icon: "Zap" },
      { title: "Programación horaria", desc: "Sincroniza la apertura al amanecer y el cierre al anochecer de forma automática.", icon: "Clock" },
      { title: "Seguridad infantil total", desc: "100% libre de cadenas o cordones colgantes para tranquilidad de la familia.", icon: "ShieldCheck" }
    ],
    fabricsAndFinishes: [
      { title: "Compatibilidad con todos los tejidos", desc: "Motorizamos estores screen, opacos, noche y día, paqueto y cortinas verticales." },
      { title: "Motores a Batería de Litio", desc: "Autonomía de 6 a 12 meses con una sola carga por puerto USB-C estándar." },
      { title: "Motores a Red 230V", desc: "Ideal para reformas o obra nueva con punto de luz junto a la ventana." }
    ],
    recommendedRooms: [
      { name: "Salones con ventanales grandes", desc: "Acciona grandes tramos de cortina sin ningún esfuerzo físico." },
      { name: "Dormitorios principales", desc: "Baja los estores blackout desde la cama sin levantarte." },
      { name: "Ventanas de doble altura o difícil acceso", desc: "La única solución cómoda para ventanas altas en buhardillas y escaleras." }
    ],
    mechanisms: [
      { type: "Motor Vía Radio 433 MHz", desc: "Conexión estable con mando a distancia multicanal ergonómico." },
      { type: "Hub Gateway WiFi / Zigbee", desc: "Enlace inteligente con app para móvil y asistentes Alexa/Google." }
    ],
    priceFactors: {
      title: "Factores de coste en la motorización de estores",
      paragraphs: [
        "El importe de motorizar un estor depende del tipo de motor seleccionado (batería recargable vs cableado a red), el par de fuerza necesario según los metros cuadrados de tela y la inclusión del puente de conexión domótica WiFi.",
        "Nuestros técnicos evalúan en tu casa la mejor opción sin coste y te proporcionan un presupuesto transparente."
      ]
    },
    gallery: [
      { title: "Mando a distancia en salón", image: "/images/estores-motorizados.jpg", alt: "Mando estor motorizado" },
      { title: "Estores motorizados en ventanal", image: "/images/hero-home.jpg", alt: "Estores motorizados ventanal" },
      { title: "App smartphone de control domótico", image: "/images/blog/estores-para-el-salon.jpg", alt: "App domótica estores" },
      { title: "Motor tubular de litio detalle", image: "/images/estores-screen.jpg", alt: "Detalle motor tubular" }
    ],
    comparison: {
      title: "Comparativa: Motores a Batería Recargable vs Motores Cableados a Red",
      typeA: "Motor a Batería de Litio",
      typeB: "Motor Cableado 230V",
      rows: [
        { feature: "Necesidad de rozas/enchufes", valA: "Ninguna (100% inalámbrico)", valB: "Requiere punto de corriente cercano" },
        { feature: "Autonomía", valA: "6 a 12 meses por carga USB-C", valB: "Alimentación ininterrumpida" },
        { feature: "Complejidad de instalación", valA: "Rápida y sin obras", valB: "Requiere pequeña conexión eléctrica" },
        { feature: "Fuerza de elevación", valA: "Excelente (hasta 10 kg de peso)", valB: "Máxima para estores industriales" }
      ]
    },
    faqs: [
      {
        question: "¿Hace falta hacer rozas u obras en la pared para motorizar un estor?",
        answer: "No, con nuestros motores tubulares alimentados por batería de litio integrada no se requiere ningún trabajo de albañilería ni electricidad. Se instalan exactamente igual que un estor manual."
      },
      {
        question: "¿Cuánto dura la batería de un estor motorizado antes de recargar?",
        answer: "La batería de litio de alta capacidad dura entre 6 y 12 meses con un uso medio de subida y bajada diaria. Se recarga en 3 horas con un cable estándar USB-C."
      },
      {
        question: "¿Se pueden controlar con Alexa o Google Home?",
        answer: "Sí, añadiendo un pequeño puente WiFi o Gateway podrás controlar todos los estores de la casa mediante comandos de voz o programar rutinas automatizadas."
      },
      {
        question: "¿Qué pasa si se va la luz en casa?",
        answer: "Si utilizas motores con batería inalámbrica, tus estores seguirán funcionando con total normalidad mediante el mando a distancia aunque haya un corte de luz eléctrica en el edificio."
      }
    ],
    sisterLandings: [
      { name: "Estores Screen", href: "/estores/screen-valencia/", desc: "Combina motorización con la mejor protección solar mediterránea." },
      { name: "Estores Opacos", href: "/estores/opacos-valencia/", desc: "Motoriza tus estores blackout para un confort total." }
    ]
  }
};
