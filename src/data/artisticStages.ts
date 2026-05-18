export type ArtisticStage = {
  id: string;
  name: string;
  period: string;
  color: string;
  textColor: string;
  plaqueStyle: 'dark' | 'light';
  description: string;
  images: { src: string; alt: string }[];
};

export const artisticStages: ArtisticStage[] = [
  {
    id: 'crisalida-formacion',
    name: 'Crisálida formación',
    period: '1970 — 1991',
    color: '#F2E4A8',
    textColor: '#1a1a1a',
    plaqueStyle: 'dark',
    description:
      'Rodolfo Bulacio nació en Monteros en 1970. Estudió en la escuela secundaria Normal Julio A. Roca desde el jardín de infantes; en el nivel primario su madre Olga Jiménez de Bulacio era maestra y, cuando cursó la secundaria, fue incentivado por su profesor de artes Rodríguez Vicente, quien reconoció su talento y lo incentivó a realizar láminas escolares y pintar murales, uno de ellos aún se conserva en la institución escolar: huella de una sensibilidad temprana que comenzaba a desplegarse. En su ciudad natal, durante sus tiempos libres, participó del ámbito cultural. Incursionó en música, teatro y literatura, publicando textos e ilustraciones en revistas culturales y libros; también en esta época realizó un mural en el cielo raso del hall de entrada del Cine Teatro Marconi, que más tarde fue censurado por la inclusión de figuras humanas desnudas. Ese gesto marcó su vocación por una estética libre, sensible y provocadora. Imágenes que conformarían su repertorio visual iconográfico y que fue perfeccionando al ingresar a la FAUNT (Facultad de Artes de la UNT), consolidando un lenguaje propio atravesado por lo íntimo y lo social. Estudios interrumpidos por un período de residencia artística en São Paulo, Brasil, que expandieron su mirada y su universo creativo.',
    images: [
      { src: '/img/rodo/rodo-nino.png', alt: 'Rodolfo Bulacio de niño' },
      { src: '/img/rodo/rodo-inicios.png', alt: 'Primeros murales y formación' },
      { src: '/img/rodo/gallery/rodo-bulacio.jpg', alt: 'Obra de la etapa de formación' },
    ],
  },
  {
    id: 'rosa-metamorfosis',
    name: 'Rosa Metamorfosis',
    period: '1991 — 1995',
    color: '#E8A4B8',
    textColor: '#1a1a1a',
    plaqueStyle: 'light',
    description:
      'Rodolfo, al regresar a la Argentina en 1991, vuelve a su ciudad natal Monteros para retomar sus estudios en la FAUNT en 1992, instalando su residencia definitiva en San Miguel de Tucumán. En paralelo cursó talleres particulares con Alejandro Gómez Tolosa, entre otros. En el Taller IIº de la Licenciatura de Artes Visuales se formó en una orientación multidisciplinar junto a las profesoras Niní Radusky y Amalia Duberti, realizando pinturas, grabados, esculturas y murales. En este taller se forja la amistad con el artista Rolo Juárez, con quien formará el primer grupo de performance de la FAUNT «Flora y Fauna», realizando obras individuales y grupales. En los años 1993, 94 y 95 cursa los talleres de grabado y pintura «Taller C». Durante 1993 se aboca a una iconografía gestual, a la cual gradualmente irá integrando la figuración para comenzar a incorporar definitivamente el POP a sus obras.',
    images: [
      { src: '/img/rodo/perfomance-vestido.png', alt: 'Performance con vestido de novia' },
      { src: '/img/rodo/gallery/4.webp', alt: 'Obra de Rosa Metamorfosis' },
      { src: '/img/rodo/gallery/16.webp', alt: 'Pintura gestual y figuración' },
    ],
  },
  {
    id: 'periodo-azul',
    name: 'Período Azul',
    period: '1996',
    color: '#A8D4E8',
    textColor: '#1a1a1a',
    plaqueStyle: 'light',
    description:
      'Durante el año 1996 adhiere abiertamente al POP, cuya principal influencia encuentra en Andy Warhol. El concepto de consumo de masas, los rituales sociales, la política y las luchas LGTBIQ+ se incorporan plenamente en su discurso y su estética. Se disuelve Flora y Fauna para dar lugar a la creación del colectivo de performance «Tenor Grasso», junto a Claudia Martínez, Marcos Figueroa, Jorge Lobato Coronel, entre otros: un grupo que desafía los preconceptos del arte de acción e integra diseño, actuación y performance bajo el concepto de pasarela, con gran repercusión local y nacional. Durante este período prepara su entrega final del Taller C, «Mucha Karakatanga en la Cocktelera»: muestra multimedia que incluye la performance «El casamiento con el arte» y la instalación de objetos, grabados y pinturas pop en alusión al ritual del casamiento, donde incluye retazos de sus padres. A continuación, con Tenor Grasso realiza la performance «Si las vieran sus madres», incorporando lo que posteriormente sería arte drag queen.',
    images: [
      { src: '/img/rodo/karakatanga-en-el-parque.png', alt: 'Mucha Karakatanga en la Cocktelera' },
      { src: '/img/rodo/gallery/pintura-morada.webp', alt: 'Pintura pop del Período Azul' },
      { src: '/img/rodo/gallery/22.webp', alt: 'Obra del Período Azul' },
    ],
  },
  {
    id: 'la-despedida',
    name: 'La despedida',
    period: '1997',
    color: '#0a0a0a',
    textColor: '#f5f5f5',
    plaqueStyle: 'dark',
    description:
      'A comienzos del año 1997 Rodolfo vivía un momento de intensa producción; mientras reciclaba marcos de fotografías antiguas, armaba bastidores y preparaba la entrega final del taller V de grabado a cargo de la profesora Lia Rojas Paz. Había futuro. Había obras en proceso. La noche del 10 de marzo la muerte lo sorprende cuando un grupo de cuatro delincuentes perpetra un crimen de odio en contra de su orientación sexual, poniendo fin a su vida; en un intento de ocultar el crimen, los agresores incendian el departamento en el que habitó los últimos años de su corta y prolífica carrera artística. Su obra permanece. Persiste en las imágenes, las líneas, los gestos, el color, lo kitsch y los iconos de la cultura pop; así su legado se expande en quienes lo recuerdan y en quienes hoy lo descubren, en este espacio destinado al arte para resguardar y celebrar su memoria creativa. Su vida fue arte.',
    images: [
      { src: '/img/rodo/rodo-taller.png', alt: 'Taller y producción final' },
      { src: '/img/rodo/gallery/15munt_bulaciomarzo.webp', alt: 'Obra expuesta en el museo' },
      { src: '/img/rodo/gallery/19.webp', alt: 'Legado artístico de Rodolfo Bulacio' },
      { src: '/img/rodo/gallery/19munt_bulaciomarzo.webp', alt: 'Muestra en honor a Rodo Bulacio' },
    ],
  },
];
