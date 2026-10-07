export interface FAQItem {
  question: string;
  answer: string;
}

export interface SectionContent {
  title: string;
  description: string;
}

export const homeContent = {
  meta: {
    title: "Estores en Valencia a medida | Presupuesto sin compromiso",
    description: "Estores a medida en Valencia y alrededores: enrollables, screen, noche y día, opacos y motorizados. Presupuesto sin compromiso, muestras a domicilio e instalación incluida.",
    slug: "",
    canonical: "https://estoresvalencia.es/",
    mainKeyword: "estores valencia"
  },
  hero: {
    h1: "Estores en Valencia a medida, confección e instalación profesionales",
    subtitle: "Soluciones textiles técnicas adaptadas al clima y la luz de Valencia. Presupuesto sin compromiso con tus medidas, verificación a domicilio con muestrario y 3 años de garantía.",
    ctaPrimary: "Pedir presupuesto gratis",
    ctaSecondary: "Llamar al 686 382 891",
    image: "/images/hero-home.jpg",
    imageAlt: "Estores valencia screen en salón luminoso con luz mediterránea",
    seals: [
      "Presupuesto sin compromiso",
      "Muestras y medición tras aceptar",
      "3 años de garantía oficial"
    ]
  },
  productsGrid: [
    {
      id: "enrollables",
      title: "Estores Enrollables",
      description: "La opción más funcional y versátil. Tejidos de alta durabilidad y opción de instalación sin taladrar.",
      link: "/estores/enrollables-valencia/",
      image: "/images/estores-enrollables.jpg",
      imageAlt: "Estores enrollables valencia en ventana de salón"
    },
    {
      id: "screen",
      title: "Estores Screen",
      description: "Filtra la radiación solar y evita el calor en fachadas sur y oeste sin perder la vista del exterior.",
      link: "/estores/screen-valencia/",
      image: "/images/estores-screen.jpg",
      imageAlt: "Estores screen valencia con filtrado solar y visión exterior"
    },
    {
      id: "noche-y-dia",
      title: "Estores Noche y Día",
      description: "Doble franja alterna para regular la entrada de luz de forma milimétrica sin necesidad de subir el estor.",
      link: "/estores/noche-y-dia-valencia/",
      image: "/images/estores-noche-y-dia.jpg",
      imageAlt: "Estores noche y día valencia regulando la luz a contraluz"
    },
    {
      id: "paqueto",
      title: "Estores Paqueto",
      description: "Caída natural en pliegues suaves de lino y algodón. Estilo cálido y decorativo para salones y dormitorios.",
      link: "/estores/paqueto-valencia/",
      image: "/images/estores-paqueto.jpg",
      imageAlt: "Estores paqueto valencia en tejido suave beige"
    },
    {
      id: "opacos",
      title: "Estores Opacos",
      description: "Bloqueo 100% de la luz solar (blackout) para un descanso óptimo en dormitorios sin persianas.",
      link: "/estores/opacos-valencia/",
      image: "/images/estores-opacos.jpg",
      imageAlt: "Estores opacos valencia blackout para oscuridad total"
    },
    {
      id: "motorizados",
      title: "Estores Motorizados",
      description: "Automatizaciones silenciosas compatibles con mando a distancia, smartphone, Alexa y Google Home.",
      link: "/estores/motorizados-valencia/",
      image: "/images/estores-motorizados.jpg",
      imageAlt: "Estores motorizados valencia domótica para el hogar"
    }
  ],
  otherSolutions: [
    {
      title: "Paneles Japoneses",
      description: "Ideal para grandes ventanales, puertas de terraza y división de espacios con rieles de 2 a 5 vías.",
      link: "/paneles-japoneses-valencia/",
      image: "/images/paneles-japoneses.jpg",
      imageAlt: "Paneles japoneses valencia a medida para grandes ventanales"
    },
    {
      title: "Cortinas Verticales",
      description: "Lamas orientables de PVC o tejido técnico de 89mm y 127mm para oficinas, clínicas y hogares modernos.",
      link: "/cortinas-verticales-valencia/",
      image: "/images/cortinas-verticales.jpg",
      imageAlt: "Cortinas verticales valencia con lamas orientables"
    },
    {
      title: "Persianas Alicantinas",
      description: "Protección solar tradicional en madera natural o PVC para balcones y terrazas valencianas.",
      link: "/persianas-alicantinas-valencia/",
      image: "/images/persianas-alicantinas.jpg",
      imageAlt: "Persianas alicantinas valencia de madera y PVC"
    }
  ],
  howWeWork: [
    {
      step: "01",
      title: "Envíanos tus medidas aproximadas",
      description: "Indícanos el tipo de estor que deseas y tus medidas aproximadas a través de nuestra web, WhatsApp o teléfono."
    },
    {
      step: "02",
      title: "Presupuesto sin compromiso",
      description: "Te enviamos una valoración clara, rápida y detallada adaptada a tus ventanas sin ningún compromiso."
    },
    {
      step: "03",
      title: "Muestras y medición a domicilio",
      description: "Una vez aceptado el presupuesto, acudimos a tu casa para mostrarte los muestrarios reales y comprobar las medidas al milímetro."
    },
    {
      step: "04",
      title: "Fabricación e instalación",
      description: "Confeccionamos tus estores a medida e instalamos todo en unas 2 semanas, probando su perfecto funcionamiento."
    }
  ],
  whyChooseUs: [
    {
      title: "Fabricación 100% a medida",
      description: "Cada ventana es única. Adaptamos cada estor al milímetro exacto de tu hueco para un ajuste perfecto."
    },
    {
      title: "Asesoramiento con muestrario en tu casa",
      description: "Tras aceptar el presupuesto, comprueba cómo filtra la luz cada tejido directamente en tus ventanas antes de confeccionar."
    },
    {
      title: "Instalación profesional incluida",
      description: "Sin sorpresas ni trabajos a medias. Nuestro equipo deja tus estores instalados y funcionando."
    },
    {
      title: "Presupuesto cerrado sin compromiso",
      description: "Recibe un desglose claro y transparente antes de iniciar el proceso, sin costes ocultos."
    },
    {
      title: "3 años de garantía oficial",
      description: "Respaldamos la calidad de nuestros tejidos, motores y mecanismos durante 36 meses."
    }
  ],
  gallery: [
    { title: "Salón mediterráneo con Screen 3%", image: "/images/hero-home.jpg", alt: "Estores screen en salón mediterráneo" },
    { title: "Dormitorio principal con Opaco Blackout", image: "/images/estores-opacos.jpg", alt: "Estor opaco blackout en dormitorio" },
    { title: "Cocina abierta con Enrollable lavable", image: "/images/blog/estores-para-cocina.jpg", alt: "Estor enrollable lavable en cocina" },
    { title: "Estudio con Noche y Día a medida", image: "/images/estores-noche-y-dia.jpg", alt: "Estor noche y día en zona de trabajo" },
    { title: "Comedor elegante con Paqueto beige", image: "/images/estores-paqueto.jpg", alt: "Estores paqueto beige en comedor" },
    { title: "Terraza con Paneles Japoneses", image: "/images/paneles-japoneses.jpg", alt: "Paneles japoneses correderos a terraza" }
  ],
  reviews: [
    {
      name: "Carmen Morales",
      location: "Barrio de Ruzafa, Valencia",
      product: "Estores Screen 1%",
      rating: 5,
      date: "Hace 2 semanas",
      comment: "Instalamos estores screen en el salón de orientación oeste y el cambio térmico ha sido increíble. Aceptamos el presupuesto preliminar, vinieron a verificar medidas con las muestras de telas y en 10 días estaban instalados. 100% recomendables."
    },
    {
      name: "Javier Soler",
      location: "Paterna, Valencia",
      product: "Estores Motorizados y Noche y Día",
      rating: 5,
      date: "Hace 1 mes",
      comment: "Muy profesionales. Teníamos ventanales altos y nos asesoraron fenomenal con la motorización. Los estores noche y día del dormitorio filtran la luz a la perfección."
    },
    {
      name: "Amparo Benítez",
      location: "Torrent, Valencia",
      product: "Paneles Japoneses y Alicantinas",
      rating: 5,
      date: "Hace 3 semanas",
      comment: "Servicio impecable. Les enviamos las medidas, nos dieron presupuesto rápido y tras confirmarlo vinieron a casa con el muestrario de alicantinas de madera y paneles japoneses. Todo a medida exacta."
    },
    {
      name: "Enrique Sanchis",
      location: "Alboraya, Valencia",
      product: "Estores Opacos Blackout",
      rating: 5,
      date: "Hace 1 mes",
      comment: "Dormitorio sin persiana exterior arreglado de forma limpia. El estor opaco quita el sol por completo para dormir. Presupuesto sin compromiso y precio muy competitivo."
    }
  ],
  guaranteeBlock: {
    title: "Compromiso de Calidad y Servicio en Valencia",
    description: "Nos dedicamos exclusivamente al equipamiento solar y decoración de ventanas en Valencia y su área metropolitana. Trabajamos con los mejores proveedores de tejidos técnicos y mecanismos domóticos para ofrecer un resultado impecable en cada hogar u oficina.",
    items: [
      "Presupuesto cerrado sin compromiso en 24h laborables",
      "Muestrario físico y medición final en tu domicilio tras aceptar",
      "Garantía de sustitución de 3 años en mecanismos y motores",
      "Atención directa por teléfono y WhatsApp"
    ]
  },
  seoContent: {
    h2Title: "Cómo elegir tus estores en Valencia según la estancia y la orientación solar",
    paragraphs: [
      "Valencia goza de más de 300 días de sol al año y una radiación solar intensa, especialmente durante los meses estivales. Por esta razón, la elección de **estores en Valencia** no es únicamente una decisión estética, sino un factor determinante para el confort térmico, el ahorro energético en aire acondicionado y la protección de los muebles de tu hogar.",
      "Para viviendas orientadas al sur o al oeste en barrios como Ruzafa, el Eixample o Campanar, recomendamos instalar **estores screen**. Su composición de fibra de vidrio y PVC actúa como un auténtico escudo térmico, reduciendo la entrada de calor hasta en un 80% mientras permite conservar la luz natural y las vistas exteriores.",
      "En dormitorios y estancias dedicadas al descanso donde se busca una oscuridad total pero no se dispone de persianas exteriores tradicionales, los **estores opacos a medida** son la solución idónea. Su tejido blackout impide al 100% el paso de la luz, garantizando un sueño reparador en cualquier momento del día.",
      "Si buscas dinamismo para regular la luz en función del momento del día, los **estores noche y día** te permiten alternar franja transparente y franja tupida con un suave movimiento de cadena o motor, aportando privacidad sin restar luminosidad a tu salón o despacho.",
      "¿De qué depende el precio de tus estores en Valencia? El presupuesto exacto varía en función del tipo de tejido elegido (screen, opaco, translúcido, paqueto), las dimensiones de las ventanas y el sistema de accionamiento. En Estores Valencia nos proporcionas tus medidas aproximadas, te entregamos un presupuesto cerrado sin compromiso y, una vez aceptado, acudimos a tu domicilio a mostrarte los muestrarios reales y verificar la medición exacta antes de fabricar."
    ]
  },
  faqs: [
    {
      question: "¿Cómo funciona el servicio de presupuesto y medición en Valencia?",
      answer: "Nuestro proceso es muy sencillo: 1) Nos indicas el tipo de estor y tus medidas aproximadas por formulario, WhatsApp o teléfono. 2) Te entregamos un presupuesto cerrado sin compromiso. 3) Una vez aceptado el presupuesto, acudimos a tu domicilio para enseñarte las muestras de telas físicas y tomar las medidas exactas. 4) Fabricamos e instalamos tus estores a medida."
    },
    {
      question: "¿Cuánto tiempo se tarda en instalar los estores a medida?",
      answer: "El plazo habitual de fabricación e instalación es de aproximadamente 2 semanas desde la confirmación del presupuesto y la verificación de medidas en tu hogar."
    },
    {
      question: "¿Se pueden colocar estores sin necesidad de hacer agujeros o taladrar?",
      answer: "Sí, disponemos de sistemas de fijación Easy Fix con enganches para marco de PVC o adhesivos de alta resistencia ideales para viviendas de alquiler o marcos donde no se desea perforar."
    },
    {
      question: "¿Qué garantía tienen los estores y motores?",
      answer: "Todos nuestros productos cuentan con 3 años de garantía oficial que cubre cualquier defecto en tejidos, mecanismos de recogida y motores."
    },
    {
      question: "¿A qué municipios de la provincia de Valencia acudís a medir y verificar?",
      answer: "Tras la aceptación del presupuesto preliminar, nos desplazamos a Valencia capital y comarcas como L'Horta Nord, L'Horta Oest, L'Horta Sud, Camp de Túria y municipios como Sagunto, Torrent, Paterna, Alzira, Eliana, Bétera, Puçol y Cullera."
    },
    {
      question: "¿Cómo se limpian los estores screen y de tejido técnico?",
      answer: "Los tejidos screen y de PVC se limpian de forma muy sencilla pasando un paño húmedo con agua tibia y jabón neutro, sin necesidad de desmontar la estructura."
    }
  ]
};
