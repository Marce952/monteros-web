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
      'Experimentá la auténtica cultura tucumana en nuestros festivales de folclore que reúnen a los mejores artistas del país.',
    image: '/img/festival del folclore 2.jpg',
    intro:
      'El folclore no es un espectáculo aislado en Monteros: es parte del calendario, de las plazas y de la identidad local. Los festivales concentran música en vivo, danzas tradicionales y una convocatoria que mezcla a la ciudad con visitantes de toda la región.',
    sections: [
      {
        heading: 'Qué vas a encontrar',
        body:
          'Escenarios al aire libre, artistas locales y figuras reconocidas del cancionero norteño, ferias de artesanías y gastronomía típica. Cada edición suele incluir espacios familiares y horarios que permiten recorrer el centro y el entorno natural en el mismo viaje.',
      },
      {
        heading: 'Consejos para visitantes',
        body:
          'Consultá fechas con anticipación, reservá alojamiento con margen en temporada alta y llevá calzado cómodo para moverte entre el casco urbano y los puntos de interés cercanos. Si podés, quedate unos días extra para combinar el festival con otras experiencias de la ciudad.',
      },
    ],
  },
  {
    slug: 'gastronomia-tradicional',
    title: 'Gastronomía tradicional',
    shortDescription:
      'Degustá los sabores más auténticos del norte argentino, desde empanadas tucumanas hasta dulces regionales.',
    image: '/img/gastronomia.jpg',
    intro:
      'La cocina de Tucumán tiene identidad propia: hornos de barro, recetas heredadas y productos de la tierra que se transforman en platos cotidianos y en motivo de encuentro. En Monteros podés probar lo esencial del norte sin renunciar a la calidez de los lugares de barrio.',
    sections: [
      {
        heading: 'Sabores imperdibles',
        body:
          'Empanadas tucumanas, locros, humitas y postres regionales acompañan infusiones y bebidas típicas. Muchos establecimientos trabajan con ingredientes locales y temporales, así que vale preguntar qué hay de temporada en tu visita.',
      },
      {
        heading: 'Cómo vivirlo mejor',
        body:
          'Combiná almuerzos en el centro con meriendas en plazas o ferias. Si visitás en fechas de eventos, suele haber más puestos y propuestas gastronómicas al paso. Pedí recomendaciones locales: suelen ser las mejores guías.',
      },
    ],
  },
  {
    slug: 'espectaculos-culturales',
    title: 'Espectáculos culturales',
    shortDescription:
      'Disfrutá de espectáculos de danza folclórica, música en vivo y presentaciones artísticas durante todo el año.',
    image: '/img/plaza.jpg',
    intro:
      'La agenda cultural de Monteros combina tradición y nuevas propuestas: peñas, presentaciones en espacios públicos, encuentros artísticos y actividades que mantienen viva la memoria colectiva. La plaza y otros puntos de la ciudad se convierten en escenario cotidiano.',
    sections: [
      {
        heading: 'Experiencias para todos los gustos',
        body:
          'Desde música regional hasta propuestas que fusionan ritmos y lenguajes contemporáneos, hay opciones para distintas edades. Muchos eventos son gratuitos o de acceso popular, lo que facilita sumarse sin planificar meses antes.',
      },
      {
        heading: 'Sugerencias prácticas',
        body:
          'Revisá redes y cartelería municipal cerca de tu fecha de viaje. Llevá algo abrigo liviano para la noche según la época del año, y aprovechá para recorrer a pie el entorno del centro después de un espectáculo.',
      },
    ],
  },
];

export function getReasonBySlug(slug: string): VisitReason | undefined {
  return visitReasons.find((r) => r.slug === slug);
}
