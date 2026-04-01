export type VisitReason = {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

export const visitReasons: VisitReason[] = [
  {
    slug: 'festivales-unicos',
    title: 'Festivales únicos',
    shortDescription:
      'El segundo festival folklórico más antiguo del país se celebra en Monteros cada octubre, con más de 59 ediciones y los mejores artistas nacionales.',
    image: '/img/festival del folclore 2.jpg',
    intro:
      'El Festival "Monteros de la Patria, Fortaleza del Folklore" no es solo un espectáculo: es la expresión más concentrada de la identidad de una ciudad que lleva el folklore en el ADN. Con más de 59 ediciones ininterrumpidas, es el segundo festival folklórico más antiguo de la Argentina, superado únicamente por el Festival de Cosquín.',
    sections: [
      {
        heading: 'Una historia de más de medio siglo',
        body:
          'Desde hace más de 59 años, cada octubre el Escenario Antonio Acosta del Gimnasio Municipal se convierte en el punto de encuentro del folklore nacional. Han pasado por sus tablas el Chaqueño Palavecino, Los Tekis, Sergio Galleguillo, Raly Barrionuevo, Pedro Aznar, Abel Pintos, Luciano Pereyra, Jorge Rojas y La Bersuit Vergarabat, entre muchos otros.',
      },
      {
        heading: 'Más que música: una fiesta popular',
        body:
          'Durante el festival la ciudad entera se transforma: ferias de artesanías, puestos de gastronomía regional, peñas en cada esquina y una convocatoria que reúne a visitantes de toda la provincia y el país. Es la oportunidad perfecta para conocer la Monteros más auténtica y vibrante.',
      },
      {
        heading: 'Consejos para visitantes',
        body:
          'Reservá alojamiento con anticipación porque la demanda es alta. Si podés, combiná el festival con la Fiesta de la Virgen del Rosario (primer domingo de octubre) y recorré los lugares históricos de la ciudad en el mismo viaje.',
      },
    ],
  },
  {
    slug: 'gastronomia-tradicional',
    title: 'Gastronomía tradicional',
    shortDescription:
      'Empanadas tucumanas, locros, humitas y los sabores más auténticos del norte argentino en restaurantes y ferias que celebran los ingredientes de la tierra.',
    image: '/img/gastronomia.jpg',
    intro:
      'La cocina de Monteros tiene la identidad del norte argentino en cada plato: hornos de barro, recetas heredadas de generaciones y productos propios de la tierra tucumana. La caña de azúcar, la frutilla, el limón y las hortalizas de la región son la base de una cocina que no tiene imitación.',
    sections: [
      {
        heading: 'Sabores imperdibles',
        body:
          'Las empanadas tucumanas (con su particular carne picada a cuchillo y huevo duro), los locros invernales, las humitas en chala y la chicha de maíz son los platos que no podés dejar de probar. En temporada también hay dulces de caña, arrope de tuna y conservas artesanales.',
      },
      {
        heading: 'La Feria de Artesanías (julio)',
        body:
          'Cada julio, la Feria de Artesanías reúne a productores locales, artesanos y cocineros en un evento que es tanto gastronómico como cultural. Es el momento ideal para llevar productos regionales de calidad y conocer a las personas que los hacen.',
      },
      {
        heading: 'Cómo vivirlo mejor',
        body:
          'Combiná almuerzos en el centro con visitas a los puestos de la feria. Pedí recomendaciones a los locales: los mejores lugares suelen no tener cartel. Y si visitás en temporada de zafra (mayo a octubre), no te pierdas probar jugo de caña fresco directamente del ingenio.',
      },
    ],
  },
  {
    slug: 'espectaculos-culturales',
    title: 'Historia & Patrimonio',
    shortDescription:
      'Desde la ciudad colonial de Ibatín (1565) hasta la randa declarada patrimonio inmaterial, Monteros guarda capas de historia únicas en Argentina.',
    image: '/img/plaza.jpg',
    intro:
      'Monteros tiene una densidad histórica excepcional: fue el origen de la primera San Miguel de Tucumán (1565), albergó a Manuel Belgrano durante la campaña del norte, posee la Iglesia parroquial más antigua de la región (1780) y es hogar de la randa, artesanía única en el mundo postulada ante la UNESCO.',
    sections: [
      {
        heading: 'Ibatín: donde nació Tucumán',
        body:
          'A pocos kilómetros del centro, el Sitio Arqueológico Ibatín conserva los cimientos de la primera ciudad fundada en 1565. El MACAI (Museo Arqueológico a Cielo Abierto) inaugurado en 2021 permite recorrer ese pasado colonial con visitas guiadas de martes a sábado.',
      },
      {
        heading: 'La Randa: única en el mundo',
        body:
          'En la pequeña localidad de El Cercado, unas 50 randeras mantienen viva una técnica textil traída de los Países Bajos en 1565 que no existe en ningún otro lugar del mundo. La randa es Patrimonio Cultural Inmaterial de Tucumán y está postulada para el Reconocimiento de Excelencia de la UNESCO.',
      },
      {
        heading: 'Dónde empezar',
        body:
          'La Plaza Bernabé Aráoz y la Iglesia del Rosario son el corazón histórico de la ciudad. Desde ahí, cada punto de interés está a poca distancia. Explorá la sección de lugares históricos para conocer la historia completa de cada sitio y descargá los QR para guiarte en la ciudad.',
      },
    ],
  },
];

export function getReasonBySlug(slug: string): VisitReason | undefined {
  return visitReasons.find((r) => r.slug === slug);
}
