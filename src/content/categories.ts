export interface CategoryPageContent {
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
  bodyParagraphs: string[];
  featuresList?: { title: string; desc: string }[];
  sections?: { h2: string; text: string[]; items?: string[] }[];
  faqs: { question: string; answer: string }[];
}

export const categoryPages: Record<string, CategoryPageContent> = {
  estores: {
    slug: "estores",
    meta: {
      title: "Estores a Medida en Valencia | Guía Completa y Tipos",
      description: "Descubre el catálogo completo de estores a medida en Valencia: enrollables, screen, noche y día, paqueto, opacos y motorizados. Presupuesto sin compromiso e instalación incluida.",
      canonical: "https://estoresvalencia.es/estores-valencia/",
      mainKeyword: "estores a medida valencia",
      secondaryKeywords: ["estores a medida", "tipos de estores", "comprar estores valencia"]
    },
    hero: {
      h1: "Estores a Medida en Valencia",
      subtitle: "Guía completa para elegir el estor idóneo según la luz de tu estancia, la orientación de tu ventana y tu estilo decorativo.",
      ctaPrimary: "Pedir presupuesto gratis",
      ctaSecondary: "Llamar al 686 382 891",
      image: "/images/estores-enrollables.jpg",
      imageAlt: "Estores a medida valencia catálogo de soluciones para el hogar"
    },
    bodyParagraphs: [
      "Elegir **estores a medida en Valencia** es la decisión más acertada para optimizar la entrada de luz natural, controlar la temperatura ambiente de tu vivienda y preservar tu intimidad sin renunciar al diseño decorativo.",
      "En nuestro catálogo especializado disponemos de seis soluciones de estores confeccionados al milímetro exacto de tu ventana: enrollables versátiles, screen de alta eficiencia térmica, noche y día de regulación por bandas, paqueto de caída suave en lino, opacos blackout para dormitorios sin persiana y sistemas motorizados domóticos silenciosos.",
      "Cada tipo de estor ofrece propiedades ópticas y mecánicas diferenciadas. Nos facilitas tus medidas aproximadas, te entregamos presupuesto sin compromiso y, tras aceptarlo, nuestro equipo acude a tu domicilio a mostrarte las telas físicas y verificar la medición final."
    ],
    sections: [
      {
        h2: "¿Qué tipo de estor necesitas según la orientación solar de tu ventana en Valencia?",
        text: [
          "Orientación Sur y Oeste (Sol directo de tarde): Es la orientación más calurosa en la Comunidad Valenciana. Recomendamos firmemente instalar estores screen con factor de apertura del 1% al 3% para rechazar hasta un 88% del calor infrared y evitar el uso excesivo de climatizadores.",
          "Orientación Norte y Este (Sol suave matutino): Requiere maximizar la luminosidad sin deslumbrar. Los estores enrollables translúcidos o los estores paqueto de lino tamizan la luz con un resultado muy cálido.",
          "Dormitorios sin persianas exteriores: La solución idónea es el estor opaco blackout con o sin guías laterales, que garantiza oscuridad absoluta para dormir plácidamente."
        ]
      }
    ],
    faqs: [
      {
        question: "¿Cuál es el precio medio de fabricar un estor a medida en Valencia?",
        answer: "El presupuesto exacto depende de las medidas de la ventana, la colección de tejido elegida y si se incluye motorización. Te enviamos un presupuesto sin compromiso con tus medidas y, tras aceptarlo, verificamos las medidas finales en tu domicilio."
      },
      {
        question: "¿Incluís la instalación en el servicio?",
        answer: "Sí, nuestro servicio abarca todo el proceso: presupuesto inicial, verificación a domicilio con muestras reales, fabricación a medida e instalación profesional terminada."
      },
      {
        question: "¿Cuánto dura la garantía de los estores?",
        answer: "Ofrecemos 3 años de garantía oficial en todos los tejidos, rieles, contrapesos y sistemas motorizados."
      }
    ]
  },
  "paneles-japoneses": {
    slug: "paneles-japoneses",
    meta: {
      title: "Paneles Japoneses en Valencia a Medida | Grandes Ventanales",
      description: "Paneles japoneses en Valencia a medida: la solución idónea para ventanales de terraza y separación de ambientes. Presupuesto sin compromiso e instalación incluida.",
      canonical: "https://estoresvalencia.es/paneles-japoneses-valencia/",
      mainKeyword: "paneles japoneses valencia",
      secondaryKeywords: ["paneles japoneses", "paneles japoneses a medida", "paneles correderos valencia"]
    },
    hero: {
      h1: "Paneles Japoneses en Valencia",
      subtitle: "Elegancia minimalista y funcionalidad para vestir grandes ventanales de salón, puertas correderas de terraza y separación de ambientes.",
      ctaPrimary: "Pedir presupuesto gratis",
      ctaSecondary: "Llamar al 686 382 891",
      image: "/images/paneles-japoneses.jpg",
      imageAlt: "Paneles japoneses valencia a medida en ventanal de terraza"
    },
    bodyParagraphs: [
      "Los **paneles japoneses en Valencia** son la alternativa más elegante y limpia para cubrir ventanales de suelo a techo, puertas de acceso a terrazas y balcones, o para dividir visualmente estancias polivalentes en hogares y oficinas.",
      "Inspirados en los tradicionales paneles correderos de la arquitectura nipona, se componen de paños verticales de tejido independiente que se desplazan horizontalmente a lo largo de un riel de vías múltiples (de 2 a 5 vías). Al abrir el panel, los paños se solapan entre sí ocupando un espacio mínimo.",
      "Confeccionamos paneles japoneses a medida en tejidos screen, opacos, translúcidos o linos bordados, ofreciendo combinaciones cromáticas alternas entre paños para crear composiciones únicas."
    ],
    sections: [
      {
        h2: "Guía de distribución: ¿Cuántos paneles necesitas según el ancho de tu hueco?",
        text: [
          "Para un acabado estético equilibrado, la anchura ideal de cada paño individual oscila entre los 50 cm y los 80 cm. Según el ancho total de tu ventanal:",
          "• Ancho de 1,20 m a 2,00 m: Riel de 2 o 3 vías con 2 o 3 paneles.",
          "• Ancho de 2,00 m a 3,20 m: Riel de 4 vías con 4 paneles (recogida a ambos lados o a un lateral).",
          "• Ancho de 3,20 m a 4,50 m: Riel de 5 vías con 5 paneles para ventanales de grandes dimensiones."
        ]
      },
      {
        h2: "Usos principales en viviendas valencianas",
        text: [
          "1. Puertas de terraza de salón y comedor: Desplazamiento cómodo sin obstaculizar el paso frecuente al exterior.",
          "2. Separador de ambientes: Divide zonas de estar y comedores o crea despachos provisionales en salones amplios.",
          "3. Vestidores y armarios empotrados: Sustituye puertas abatibles por paños correderos textiles ligeros."
        ]
      }
    ],
    faqs: [
      {
        question: "¿Cuántos paneles japoneses necesito para un ventanal de 3 metros?",
        answer: "Para 3 metros de anchura recomendamos montar un riel de 4 o 5 vías con 4 o 5 paños de aproximadamente 65-70 cm cada uno, logrando un solape impecable."
      },
      {
        question: "¿Se pueden desmontar los paños individuales para lavarlos?",
        answer: "Sí, los paños se sujetan a la pletina del riel mediante una tira de velcro de alta adherencia, lo que permite quitar y poner cada paño fácilmente."
      },
      {
        question: "¿Es posible combinar diferentes colores de tela en el mismo panel japonés?",
        answer: "Por supuesto. Es muy habitual alternar paños de color neutro con paños centrales de tono acento o estampados para añadir dinamismo a la estancia."
      },
      {
        question: "¿Disponen de motorización para paneles japoneses?",
        answer: "Sí, disponemos de rieles motorizados silenciosos para paneles japoneses accionables con mando a distancia o app móvil."
      }
    ]
  },
  "cortinas-verticales": {
    slug: "cortinas-verticales",
    meta: {
      title: "Cortinas Verticales en Valencia a Medida | Lamas Orientables",
      description: "Cortinas verticales en Valencia a medida: lamas de PVC o tejido técnico orientables 180° para salas, oficinas y ventanales. Presupuesto gratis.",
      canonical: "https://estoresvalencia.es/cortinas-verticales-valencia/",
      mainKeyword: "cortinas verticales valencia",
      secondaryKeywords: ["cortinas verticales", "lamas verticales valencia", "estores verticales valencia"]
    },
    hero: {
      h1: "Cortinas Verticales en Valencia",
      subtitle: "Control solar preciso mediante lamas orientables 180° de PVC lavable o tejido técnico para despachos, clínicas y viviendas vanguardistas.",
      ctaPrimary: "Pedir presupuesto gratis",
      ctaSecondary: "Llamar al 686 382 891",
      image: "/images/cortinas-verticales.jpg",
      imageAlt: "Cortinas verticales valencia lamas blancas orientables"
    },
    bodyParagraphs: [
      "Las **cortinas verticales en Valencia** son la solución preferida para regular la luz con máxima precisión en grandes paños acristalados, despachos profesionales, consultas médicas y salones de estética arquitectónica contemporánea.",
      "Su mecanismo principal permite girar las lamas verticales 180° sobre su eje longitudinal para orientar los rayos de sol según la posición cambiante del sol a lo largo de la jornada, además de permitir la recogida lateral completa para despejar la vista exterior.",
      "Fabricamos cortinas verticales a medida en anchos de lama de 89 mm y 127 mm en una variada gama de materiales: desde lamas de tejido screen e ignífugas hasta lamas rígidas de PVC antibacteriano ideales para cocinas y centros sanitarios."
    ],
    sections: [
      {
        h2: "Ventajas clave de las cortinas de lamas verticales",
        text: [
          "• Orientación Solar 180°: Redirecciona la luz del sol al techo o hacia un lateral evitando el deslumbramiento directo.",
          "• Apta para Ventanas Inclinadas y Enormes: El riel superior se adapta a techos abuhardillados o en pendiente.",
          "• Sustitución de lamas individuales: Si una lama se daña o mancha accidentalmente, se puede reemplazar individualmente sin cambiar toda la cortina."
        ]
      }
    ],
    faqs: [
      {
        question: "¿Se pueden cambiar lamas sueltas si se estropea una cortina vertical?",
        answer: "Sí, es una de sus principales ventajas. En caso de rotura o mancha en una lama concreta, fabricamos y reponemos esa lama suelta exactamente con la misma medida y color."
      },
      {
        question: "¿Qué ancho de lama es mejor: 89mm o 127mm?",
        answer: "La lama de 89 mm es idónea para ventanas intermedias y espacios residenciales. La lama de 127 mm luce espectacular en ventanales muy grandes y ambientes de oficina."
      },
      {
        question: "¿Cómo se límpian las cortinas verticales de PVC?",
        answer: "Las lamas de PVC rígido o técnico se limpian rápidamente pasando una bayeta húmeda con detergente neutro sin necesidad de descolgarlas del riel."
      }
    ]
  },
  "persianas-alicantinas": {
    slug: "persianas-alicantinas",
    meta: {
      title: "Persianas Alicantinas en Valencia | Madera y PVC a Medida",
      description: "Persianas alicantinas en Valencia a medida: tradición y protección solar artesanal en madera de pino o PVC para balcones y terrazas. Medición a domicilio.",
      canonical: "https://estoresvalencia.es/persianas-alicantinas-valencia/",
      mainKeyword: "persianas alicantinas valencia",
      secondaryKeywords: ["persianas alicantinas", "persianas alicantinas a medida", "persiana alicantina madera valencia"]
    },
    hero: {
      h1: "Persianas Alicantinas en Valencia",
      subtitle: "Protección solar tradicional mediterránea en madera natural o PVC para balcones del centro histórico, terrazas y casas de pueblo.",
      ctaPrimary: "Pedir presupuesto gratis",
      ctaSecondary: "Llamar al 686 382 891",
      image: "/images/persianas-alicantinas.jpg",
      imageAlt: "Persianas alicantinas valencia de madera en balcón de forja"
    },
    bodyParagraphs: [
      "Las **persianas alicantinas en Valencia** constituyen un elemento emblemático de la arquitectura popular mediterránea, fundamentales para resguardar del sol veraniego balcones, ventanas exteriores y terrazas en barrios como Ciutat Vella, Ruzafa, Cabanyal o casas de pueblo de L'Horta Nord y Sud.",
      "Formadas por lamas engarzadas horizontalmente con ganchos de alambre galvanizado, se recogen enrollándose sobre sí mismas mediante una cuerda central conectada a una polea con freno.",
      "Fabricamos persianas alicantinas a medida en dos materiales principales: madera de pino de primera calidad barnizada o pintada (máxima autenticidad y encanto artesanal) y PVC extruido (alta resistencia a la intemperie, lluvia y humedad de costa sin mantenimiento)."
    ],
    sections: [
      {
        h2: "Comparativa: Alicantinas de Madera vs Alicantinas de PVC",
        text: [
          "Alicantinas de Madera Natural: Fabricadas en pino tratado con pintura o barniz protector UV. Aportan un aislamiento térmico superior al no calentarse el material y mantienen el encanto histórico exigido en fachadas protegidas de Valencia.",
          "Alicantinas de PVC: Impermeables al 100%, ligeras de peso y disponibles en tonos madera imitación, blanco, verde o nogal. Resisten la salinidad marina de la costa sin descascarillarse."
        ]
      }
    ],
    faqs: [
      {
        question: "¿Qué aguanta mejor el sol y la lluvia en Valencia: madera o PVC?",
        answer: "El PVC aguanta la lluvia y la humedad de costa sin ningún mantenimiento. La madera barnizada ofrece un aislamiento del calor excelente y máxima estética tradicional, requiriendo un sencillo barnizado cada varios años si le da el agua directa."
      },
      {
        question: "¿Se pueden instalar las persianas alicantinas por fuera en balcones?",
        answer: "Sí, es su ubicación natural. Se anclan mediante cáncamos y hembrillas a la parte superior del marco de madera o al techo del balcón."
      },
      {
        question: "¿Cómo medir una persiana alicantina para un balcón?",
        answer: "Para medir dentro del hueco del balcón, resta 1 cm al ancho total para asegurar que deslice suavemente. En medición a domicilio nos encargamos de tomar el tamaño exacto."
      }
    ]
  },
  cortinas: {
    slug: "cortinas",
    meta: {
      title: "Cortinas en Valencia a Medida | Tienda de Cortinas Técnicas",
      description: "Cortinas en Valencia a medida: enrollables, noche y día, opacas, paneles japoneses y cortinas verticales. Soluciones técnicas que superan a la cortina tradicional.",
      canonical: "https://estoresvalencia.es/cortinas-valencia/",
      mainKeyword: "cortinas valencia",
      secondaryKeywords: ["cortinas a medida valencia", "tienda de cortinas valencia", "cortinas técnicas valencia"]
    },
    hero: {
      h1: "Cortinas en Valencia a Medida",
      subtitle: "Especialistas en cortinas técnicas modernas: enrollables, noche y día, opacas, paneles japoneses y cortinas verticales adaptadas a tu hogar.",
      ctaPrimary: "Pedir presupuesto gratis",
      ctaSecondary: "Llamar al 686 382 891",
      image: "/images/cortinas-tecnicas.jpg",
      imageAlt: "Cortinas valencia a medida soluciones técnicas para el hogar"
    },
    bodyParagraphs: [
      "Si estás buscando una **tienda de cortinas en Valencia** que te ofrezca soluciones modernas, duraderas y de fácil limpieza, las cortinas técnicas a medida son la alternativa superior a la confección textil clásica.",
      "Frente a las aparatosas cortinas tradicionales de riel con fruncidos o barras con anillas que acumulan polvo, reducen el espacio útil y requieren costosos lavados en tintorería, nuestras cortinas técnicas (enrollables, screen, noche y día, paneles japoneses y verticales) aportan un control preciso del sol, líneas limpias y un mantenimiento sencillo.",
      "En Estores Valencia diseñamos e instalamos tus cortinas a medida directamente en tu domicilio, garantizando el ajuste perfecto para cada ventana."
    ],
    sections: [
      {
        h2: "¿Por qué las cortinas técnicas superan a la cortina tradicional?",
        text: [
          "1. Facilidad de Limpieza: Tejidos Screen y PVC antiestáticos que se limpian con una pasada de paño húmedo sin desmontar.",
          "2. Ahorro de Espacio: Mecanismos compactos pegados a la ventana que dejan libres las esquinas y los radiadores.",
          "3. Control Solar Térmico: Protección real contra el calor estival valenciano gracias a fibras refractarias."
        ]
      }
    ],
    faqs: [
      {
        question: "¿Hacéis cortinas tradicionales de barra con visillos confeccionados?",
        answer: "Nos especializamos exclusivamente en cortinas técnicas de alta gama (enrollables, screen, noche y día, paqueto, paneles japoneses y verticales) por ser las soluciones más eficientes, funcionales y duraderas del mercado actual."
      },
      {
        question: "¿Cómo solicitar presupuesto de cortinas en Valencia?",
        answer: "Puedes llamarnos al 686 382 891 o rellenar el formulario web con tus medidas aproximadas. Te damos presupuesto sin compromiso y, tras aceptarlo, acudimos a tu casa con el muestrario para verificar las medidas."
      }
    ]
  },
  empresas: {
    slug: "empresas",
    meta: {
      title: "Estores para Oficinas y Empresas en Valencia | Tejidos Ignífugos",
      description: "Estores para oficinas y empresas en Valencia: screen ignífugo M1, motorización y control solar para locales, hoteles y clínicas. Factura y plazos cerrados.",
      canonical: "https://estoresvalencia.es/empresas-valencia/",
      mainKeyword: "estores para oficinas valencia",
      secondaryKeywords: ["estores para oficinas", "estores empresas valencia", "estores ignífugos M1 valencia"]
    },
    hero: {
      h1: "Estores para Oficinas y Empresas en Valencia",
      subtitle: "Soluciones de protección solar profesional, tejidos ignífugos M1 y automatización para oficinas, hoteles, clínicas y locales comerciales.",
      ctaPrimary: "Pedir presupuesto para empresa",
      ctaSecondary: "Llamar al 686 382 891",
      image: "/images/empresas-oficina.jpg",
      imageAlt: "Estores para oficinas valencia en sala de reuniones corporativa"
    },
    bodyParagraphs: [
      "En Estores Valencia ofrecemos un servicio integral de equipamiento solar con **estores para oficinas en Valencia**, despachos corporativos, hoteles, restaurantes, clínicas y centros educativos de toda la provincia.",
      "Comprendemos las exigencias normativas del sector corporativo: suministramos tejidos técnicos con certificación ignífuga clase M1 / NFPA 701, propiedades antibacterianas y elevados coeficientes de reflexión solar para cumplir con los estándares de prevención de riesgos laborales y eficiencia energética.",
      "Trabajamos con plazos de entrega e instalación estrictamente cerrados y emitimos factura detallada para empresas y autónomos."
    ],
    sections: [
      {
        h2: "Servicios corporativos destacados",
        text: [
          "• Asesoramiento Técnico In Situ: Medición técnica en instalaciones u oficinas comerciales sin interrumpir la actividad laboral.",
          "• Motorización y Domótica Centralizada: Integración con sistemas de gestión de edificios (BMS) y pulsadores de pared.",
          "• Tejidos Técnicos Certificados: Certificaciones ignífugas M1, libres de PVC o composiciones ecológicas OEKO-TEX."
        ]
      }
    ],
    faqs: [
      {
        question: "¿Hacéis proyectos para empresas con factura oficial y plazos cerrados?",
        answer: "Sí, trabajamos habitualmente con empresas, estudios de arquitectura e interiorismo. Entregamos factura detallada con I.V.A. desglosado y respetamos los plazos de instalación acordados."
      },
      {
        question: "¿Disponéis de tejidos ignífugos certificados M1 exigidos por normativa?",
        answer: "Sí, todos nuestros tejidos screen para colectividades cuentan con certificado ignífugo de Clase M1 / B-s1,d0 necesario para licencias de actividad en locales públicos."
      }
    ]
  },
  zonas: {
    slug: "zonas",
    meta: {
      title: "Estores en Valencia y Alrededores | Servicio a Domicilio 30 km",
      description: "Servicio de medición e instalación de estores a domicilio en Valencia ciudad, L'Horta, Camp de Túria y municipios a 30 km de distancia. Sin tienda física.",
      canonical: "https://estoresvalencia.es/zonas/",
      mainKeyword: "estores valencia y alrededores",
      secondaryKeywords: ["estores a domicilio valencia", "instalador de estores valencia", "estores torrent paterna alboraya"]
    },
    hero: {
      h1: "Estores en Valencia y Alrededores",
      subtitle: "Servicio a domicilio sin intermediarios ni tienda física. Muestras reales y verificación a domicilio tras aceptar el presupuesto en un radio de 30 km alrededor de Valencia.",
      ctaPrimary: "Pedir visita a domicilio",
      ctaSecondary: "Llamar al 686 382 891",
      image: "/images/mapa-zonas-valencia.jpg",
      imageAlt: "Mapa de cobertura de servicio de estores en Valencia y 30km"
    },
    bodyParagraphs: [
      "En Estores Valencia operamos mediante un modelo direct-to-home eficiente: **prescindimos de tienda física** para eliminar costes fijos superfluos y trasladar ese ahorro a nuestros clientes en forma de precios competitivos y atención 100% personalizada en tu propia vivienda.",
      "Tras aceptar tu presupuesto inicial elaborado con tus medidas aproximadas, un técnico especializado acude a tu hogar u oficina equipado con catálogos físicos completos de tejidos, colores y muestras de mecanismos, permitiéndote comprobar la caída y transparencia del tejido directamente en la ventana antes de fabricar.",
      "Cubrimos Valencia capital y todas las comarcas comprendidas en un radio de 30 kilómetros."
    ],
    faqs: [
      {
        question: "¿Tiene algún coste el desplazamiento para verificar medidas en un municipio fuera de Valencia capital?",
        answer: "No, la entrega del presupuesto inicial es totalmente sin compromiso y la verificación técnica a domicilio tras la aceptación del presupuesto no tiene coste adicional en todo nuestro radio de cobertura de 30 km."
      },
      {
        question: "¿Hay tienda física para ir a ver los estores?",
        answer: "No disponemos de tienda física. Prestamos un servicio cómodo a domicilio donde, una vez aceptado el presupuesto, llevamos el muestrario completo a tu casa para que veas las telas con la luz real de tus ventanas."
      }
    ]
  },
  presupuesto: {
    slug: "presupuesto",
    meta: {
      title: "Presupuesto de Estores en Valencia | Sin Compromiso",
      description: "Pide presupuesto sin compromiso para tus estores a medida en Valencia con tus medidas aproximadas. Muestras a domicilio e instalación incluida.",
      canonical: "https://estoresvalencia.es/presupuesto/",
      mainKeyword: "presupuesto estores valencia",
      secondaryKeywords: ["presupuesto estores valencia", "presupuesto cortinas valencia", "precio estores valencia"]
    },
    hero: {
      h1: "Presupuesto de Estores en Valencia sin Compromiso",
      subtitle: "Rellena el formulario en 3 sencillos pasos o escríbenos por WhatsApp al 686 382 891. Te respondemos en menos de 24 horas laborables.",
      ctaPrimary: "Empezar formulario",
      ctaSecondary: "WhatsApp directo",
      image: "/images/hero-home.jpg",
      imageAlt: "Solicitar presupuesto gratis estores valencia"
    },
    bodyParagraphs: [
      "Solicitar tu **presupuesto de estores en Valencia** es rápido, transparente y totalmente sin compromiso. Con nuestro formulario en 3 pasos podrás indicarnos el producto que necesitas, las medidas aproximadas y tus datos de contacto.",
      "Una vez recibida tu solicitud, nos pondremos en contacto contigo en menos de 24 horas laborables con una propuesta valorada a medida.",
      "Tras aceptar el presupuesto preliminar, acudiremos a tu vivienda a mostrarte los muestrarios reales de telas y verificar las medidas milimétricas finales de cada ventana antes de iniciar la fabricación."
    ],
    faqs: [
      {
        question: "¿Qué ocurre después de enviar el formulario?",
        answer: "Te contactaremos por teléfono o WhatsApp para entregarte el presupuesto sin compromiso. Tras aceptarlo, agendaremos la visita a domicilio para mostrarte las muestras físicas y verificar las medidas definitivas."
      },
      {
        question: "¿Qué pasa si no sé las medidas exactas de mis ventanas?",
        answer: "No te preocupes. Con indicarnos una medida aproximada es suficiente para darte la valoración. Nuestro técnico tomará las medidas milimétricas definitivas durante la visita posterior a la aceptación del presupuesto."
      }
    ]
  }
};
