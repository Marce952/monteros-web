export type Lugar = {
  slug: string;
  nombre: string;
  categoria: 'histórico' | 'cultural' | 'natural' | 'religioso' | 'evento';
  descripcionCorta: string;
  imagen: string;
  imagenes?: string[];
  historia: string;
  secciones: { titulo: string; contenido: string }[];
  datos?: { label: string; valor: string }[];
  ubicacion?: string;
  horarios?: string;
};

export const lugares: Lugar[] = [
  {
    slug: 'iglesia-nuestra-senora-del-rosario',
    nombre: 'Iglesia Nuestra Señora del Rosario',
    categoria: 'religioso',
    descripcionCorta:
      'El templo más importante de Monteros, sede de la patrona de la ciudad y escenario del Milagro del Sudor de 1719.',
    imagen: '/img/Iglesias/Nta Señora del rosario.jpg',
    imagenes: ['/img/Iglesias/Nta Señora del rosario.jpg', '/img/iglesia.jpg'],
    ubicacion: 'Rivadavia 325, frente a la Plaza Bernabé Aráoz, Monteros',
    historia:
      'La historia de la Iglesia Nuestra Señora del Rosario está íntimamente ligada al origen y la identidad de Monteros. En 1543, el capitán Juan de Espinosa llegó a la región portando una imagen de la Virgen del Rosario traída del Alto Perú. Hacia 1573 se construyó en su estancia la primera capilla, primera morada de la venerada imagen. El hito más significativo ocurrió en mayo de 1719, cuando la imagen comenzó a "sudar" en presencia de un grupo de mujeres devotas, fenómeno conocido como el "Milagro del Sudor". Este prodigio convirtió a Monteros en lugar de peregrinación y fue determinante para el crecimiento de la ciudad, que se transformó en la segunda más poblada de la provincia durante varias décadas. El 15 de agosto de 1780, la parroquia fue erigida canónicamente por el Obispo del Tucumán fray José Antonio de San Alberto; su primer párroco fue el Dr. Diego Miguel Aráoz. Es una de las seis parroquias coloniales que existen actualmente en Argentina. En 1838 se construyó un segundo templo colonial en su emplazamiento actual. Terremotos (1826, 1844, 1861) y lluvias deterioraron gravemente la edificación, que fue demolida en 1940. El templo actual, diseñado por el arquitecto Rafael Orlandi y construido por José Di Bacco, fue inaugurado el 17 de noviembre de 1962. Fue declarada "Bien de Interés Religioso y Cultural-Municipal".',
    secciones: [
      {
        titulo: 'El Milagro del Sudor (1719)',
        contenido:
          'En mayo de 1719, ante la presencia de un grupo de mujeres que realizaban sus devociones, la imagen de la Virgen del Rosario comenzó a sudar de manera inexplicable. La noticia se propagó por toda la región y miles de fieles comenzaron a peregrinar hacia Monteros. Este acontecimiento fue tan significativo que transformó radicalmente el perfil demográfico de la ciudad, volviéndola un centro de devoción mariana de primer orden en el noroeste argentino.',
      },
      {
        titulo: 'La Parroquia Colonial (1780)',
        contenido:
          'El 15 de agosto de 1780, el Obispo del Tucumán fray José Antonio de San Alberto erigió canónicamente la parroquia, nombrando como primer párroco al Dr. Diego Miguel Aráoz. Este hecho convirtió a Monteros en una de las seis parroquias coloniales que aún subsisten en Argentina, un privilegio histórico de enorme valor patrimonial.',
      },
      {
        titulo: 'El Templo Actual (1962)',
        contenido:
          'Luego de que el templo colonial fuera afectado por sucesivos terremotos y demolido en 1940, la comunidad emprendió la construcción de un nuevo templo. El proyecto del arquitecto Rafael Orlandi fue materializado por José Di Bacco, y el resultado fue inaugurado el 17 de noviembre de 1962. Es considerado uno de los templos más amplios del interior de Tucumán, con capacidad para albergar a miles de fieles.',
      },
      {
        titulo: 'La Fiesta de la Virgen del Rosario',
        contenido:
          'Cada primer domingo de octubre, Monteros recibe a alrededor de 40.000 peregrinos que llegan de toda la provincia y regiones vecinas para celebrar la Fiesta de la Virgen del Rosario. Es una de las celebraciones religiosas más importantes del sur tucumano, que combina actos litúrgicos solemnes, procesiones y manifestaciones de fe popular.',
      },
    ],
    datos: [
      { label: 'Año de erección canónica', valor: '1780' },
      { label: 'Templo actual inaugurado', valor: '17 de noviembre de 1962' },
      { label: 'Arquitecto', valor: 'Rafael Orlandi' },
      { label: 'Convocatoria anual', valor: '~40.000 fieles' },
    ],
    horarios: 'Consultar en la parroquia. Fiesta patronal: primer domingo de octubre.',
  },
  {
    slug: 'plaza-bernabe-araoz',
    nombre: 'Plaza Bernabé Aráoz',
    categoria: 'histórico',
    descripcionCorta:
      'El corazón de Monteros, una plaza declarada Bien de Interés Cultural que alberga el único reloj de sol tallado en piedra del país.',
    imagen: '/img/plaza.jpg',
    imagenes: ['/img/plaza.jpg', '/img/Monteros.jpg'],
    ubicacion: 'Centro de Monteros, frente a la Iglesia del Rosario',
    historia:
      'Desde la fundación de Monteros en 1754, el espacio ubicado entre la parroquia y el Cabildo fue utilizado como lugar de descanso de las carretas que transitaban la región. A partir de 1810, el pueblo comenzó a llamarlo "Plaza Central". En 1878, el municipio formalizó el espacio público bautizándolo Plaza Bernabé Aráoz en honor al caudillo tucumano nacido en la ciudad. Ese mismo año se colocó una pirámide de piedra en honor al prócer, y se instalaron bancos de madera, pozos de agua, iluminación y árboles. En 1916, para el centenario de la independencia, la pirámide fue reemplazada por una fuente y se incorporó un busto del general Manuel Belgrano. A lo largo de las décadas se agregaron bustos de José de San Martín, Domingo Faustino Sarmiento y el propio Bernabé Aráoz. Su elemento más singular es un reloj de sol tallado en piedra, considerado único en el país. En 2005 fue declarada "Bien de Interés Cultural" por la Ley Provincial 7.500.',
    secciones: [
      {
        titulo: 'Bernabé Aráoz: el prócer homenajeado',
        contenido:
          'Bernabé Aráoz fue un caudillo tucumano que jugó un papel fundamental en los primeros años de la independencia argentina. Nacido en Monteros, fue gobernador de Tucumán y uno de los impulsores de la autonomía provincial frente al poder central. La plaza lleva su nombre como reconocimiento eterno de la ciudad a este hijo ilustre.',
      },
      {
        titulo: 'El reloj de sol: una joya única',
        contenido:
          'Entre los elementos que hacen singular a la Plaza Bernabé Aráoz se destaca un reloj de sol tallado en piedra que, según investigadores y especialistas, es el único en su tipo en todo el país. Esta pieza patrimonial única combina arte, historia y ciencia, y constituye por sí sola un motivo de visita.',
      },
      {
        titulo: 'Patrimonio Cultural Provincial',
        contenido:
          'En 2005, a través de la Ley Provincial 7.500, la plaza fue declarada "Bien de Interés Cultural". Este reconocimiento legal protege el espacio, sus monumentos y sus características históricas, garantizando su preservación para las generaciones futuras.',
      },
    ],
    datos: [
      { label: 'Declarada Bien de Interés Cultural', valor: '2005 (Ley 7.500)' },
      { label: 'Nombre oficial desde', valor: '1878' },
      { label: 'Elemento único en el país', valor: 'Reloj de sol tallado en piedra' },
    ],
    horarios: 'Acceso libre las 24 horas.',
  },
  {
    slug: 'ibatin-macai',
    nombre: 'Sitio Arqueológico Ibatín – MACAI',
    categoria: 'histórico',
    descripcionCorta:
      'El lugar donde nació Tucumán en 1565. Restos de la primera ciudad fundada por los españoles, hoy convertidos en museo a cielo abierto.',
    imagen: '/img/Monteros2.jpg',
    imagenes: ['/img/Monteros2.jpg', '/img/Monteros3.jpg'],
    ubicacion: 'Ruta Nacional 38, km al oeste de León Rougès, departamento Monteros',
    historia:
      'Ibatín (cuyo nombre en lengua Tonocote significa "chacra o sementera de maíz") fue el sitio donde el 31 de mayo de 1565, Diego de Villarroel fundó San Miguel de Tucumán y Nueva Tierra de Promisión, la primera ciudad que daría origen a la actual capital provincial. Allí se construyeron el Cabildo, la Iglesia Matriz y el colegio de los jesuitas en torno a la Plaza Mayor. La ciudad floreció durante más de un siglo hasta que, hacia 1630, comenzó su declinación por el cambio de rutas comerciales con el Alto Perú, levantamientos indígenas, el desvío del curso del Río Tejar y enfermedades como el bocio y el paludismo. El 27 de septiembre de 1685, el Cabildo aprobó el traslado definitivo al sitio actual de San Miguel de Tucumán. Los que se resistieron al traslado permanecieron entre los montes, siendo llamados "monteros", origen del nombre de la ciudad. Las primeras excavaciones arqueológicas se realizaron en 1965, sacando a la luz los cimientos de piedra del Cabildo, la Iglesia y el colegio jesuítico. El 1 de junio de 2021, en el marco del 456° aniversario de la fundación, se inauguró el Museo Arqueológico a Cielo Abierto Ibatín (MACAI), dotado de sala de video, folletería y visitas guiadas.',
    secciones: [
      {
        titulo: 'La fundación de 1565',
        contenido:
          'El 31 de mayo de 1565, Diego de Villarroel (sobrino del gobernador Francisco de Aguirre) fundó formalmente San Miguel de Tucumán en el paraje de Ibatín. Con él llegaron colonizadores españoles e indígenas que construyeron las primeras edificaciones: el Cabildo colonial, la Iglesia Matriz y un colegio de la Compañía de Jesús. Durante más de un siglo, Ibatín fue el principal núcleo urbano del actual territorio tucumano.',
      },
      {
        titulo: 'El abandono y el origen del nombre "Monteros"',
        contenido:
          'A partir de 1630, la combinación de factores adversos —cambio de rutas comerciales, epidemias, sequías y levantamientos indígenas— llevó al progresivo abandono de la ciudad. En 1685 el Cabildo decidió el traslado definitivo. Quienes se negaron a partir se quedaron entre los montes de la región y comenzaron a ser llamados "monteros", término que finalmente dio nombre a la ciudad que habitan sus descendientes.',
      },
      {
        titulo: 'Las excavaciones arqueológicas',
        contenido:
          'En 1965, con motivo del cuarto centenario de la fundación, se realizaron las primeras excavaciones sistemáticas del sitio. Los arqueólogos descubrieron los cimientos de piedra del Cabildo colonial, la Iglesia Matriz y el colegio jesuítico, todos dispuestos alrededor de la Plaza Mayor original. Los hallazgos confirmaron la ubicación exacta de Ibatín y aportaron objetos de cerámica, metales y utensilios de la época colonial.',
      },
      {
        titulo: 'El MACAI (2021)',
        contenido:
          'El 1 de junio de 2021, en el marco del 456° aniversario, se inauguró el Museo Arqueológico a Cielo Abierto Ibatín (MACAI). El espacio integra los restos arqueológicos in situ con señalética interpretativa, una sala de video, folletería educativa y visitas guiadas. Es considerada una de las reservas arqueológicas del período colonial más importantes de Sudamérica.',
      },
    ],
    datos: [
      { label: 'Fundación de Ibatín', valor: '31 de mayo de 1565' },
      { label: 'Traslado a Tucumán capital', valor: '27 de septiembre de 1685' },
      { label: 'Inauguración del MACAI', valor: '1 de junio de 2021' },
    ],
    horarios: 'Martes a sábado de 8:00 a 13:00 hs.',
  },
  {
    slug: 'museo-manuel-belgrano',
    nombre: 'Museo Histórico Municipal Manuel Belgrano',
    categoria: 'histórico',
    descripcionCorta:
      'El museo que conserva la memoria de Manuel Belgrano en Monteros, donde el prócer vivió entre 1812 y 1814 durante la campaña del norte.',
    imagen: '/img/Monteros.jpg',
    imagenes: ['/img/Monteros.jpg'],
    ubicacion: 'Centro de Monteros',
    historia:
      'Durante la Guerra de Independencia Argentina, el general Manuel Belgrano lideró la Campaña del Norte para detener el avance realista desde el Alto Perú. Entre 1812 y 1814, Belgrano estableció su cuartel general en Monteros en varias oportunidades, utilizando la ciudad como base de operaciones estratégica. En las cercanías de Monteros se encuentra el Campo de Batalla del Rincón de Marlopa (1812), escenario de un enfrentamiento previo a la histórica Batalla de Tucumán. Para preservar esta memoria histórica, la Municipalidad de Monteros creó el Museo Histórico Municipal Manuel Belgrano, que alberga una colección de piezas y documentos relacionados con la presencia del prócer en la región.',
    secciones: [
      {
        titulo: 'Belgrano en Monteros (1812–1814)',
        contenido:
          'El general Manuel Belgrano utilizó Monteros como base de operaciones durante sus campañas militares en el norte argentino. La ciudad estratégicamente ubicada en el camino entre Tucumán y el Alto Perú le permitía maniobrar con sus tropas y establecer comunicaciones con Buenos Aires. Durante su estadía, Belgrano interactuó con la población local y con los caudillos regionales, dejando una huella imborrable en la memoria colectiva de los montereños.',
      },
      {
        titulo: 'La Batalla del Rincón de Marlopa (1812)',
        contenido:
          'En las cercanías de Monteros tuvo lugar el combate del Rincón de Marlopa, un enfrentamiento entre fuerzas patriotas y realistas en 1812 que precedió a la decisiva Batalla de Tucumán. Este hecho de armas forma parte del conjunto de acciones militares que consolidaron la resistencia independentista en el noroeste argentino.',
      },
      {
        titulo: 'La colección del museo',
        contenido:
          'El museo resguarda piezas de notable valor histórico: una réplica de las lanzas utilizadas por los gauchos en la Batalla de Tucumán, una prensa imprenta móvil usada para el primer diario de Tucumán, y un catre de campaña atribuido al propio general Belgrano. Estos objetos permiten al visitante conectarse de manera tangible con los hechos que forjaron la independencia argentina.',
      },
    ],
    datos: [
      { label: 'Período de Belgrano en Monteros', valor: '1812–1814' },
      { label: 'Pieza destacada', valor: 'Catre de campaña del General Belgrano' },
    ],
    horarios: 'Consultar en la Municipalidad de Monteros.',
  },
  {
    slug: 'festival-monteros-de-la-patria',
    nombre: 'Festival "Monteros de la Patria, Fortaleza del Folklore"',
    categoria: 'evento',
    descripcionCorta:
      'El segundo festival folklórico más antiguo del país, celebrado cada octubre desde hace más de 59 años con los mejores artistas nacionales.',
    imagen: '/img/festival del folclore.jpg',
    imagenes: ['/img/festival del folclore.jpg', '/img/festival del folclore 2.jpg'],
    ubicacion: 'Gimnasio Municipal "Prof. José Nicolás Russo", Monteros',
    historia:
      'El Festival "Monteros de la Patria, Fortaleza del Folklore" es el segundo festival folklórico más antiguo de la Argentina, superado únicamente por el Festival de Cosquín en Córdoba. Con más de 59 ediciones consecutivas, el evento se ha consolidado como un referente ineludible de la cultura popular del noroeste argentino. Se realiza cada año durante el mes de octubre en el Escenario Antonio Acosta del Gimnasio Municipal "Prof. José Nicolás Russo". A lo largo de su historia han desfilado por sus escenarios las figuras más destacadas del cancionero nacional: el Chaqueño Palavecino, Los Tekis, Sergio Galleguillo, Raly Barrionuevo, Pedro Aznar, Abel Pintos, Luciano Pereyra, Jorge Rojas y La Bersuit Vergarabat, entre muchos otros. El festival no es solo un evento musical: es la expresión más concentrada de la identidad cultural de Monteros, donde conviven la música, la danza, la gastronomía regional y el encuentro entre visitantes de toda la provincia y el país.',
    secciones: [
      {
        titulo: 'Historia y trayectoria',
        contenido:
          'Fundado hace más de medio siglo, el festival nació como una iniciativa para preservar y difundir las tradiciones folklóricas tucumanas. Con los años creció en convocatoria y calidad artística hasta convertirse en el segundo festival de folklore más antiguo del país. Cada edición es un orgullo para los montereños, quienes participan activamente tanto como organizadores, artistas y público.',
      },
      {
        titulo: 'Artistas que pasaron por su escenario',
        contenido:
          'El festival ha reunido a lo largo de los años a prácticamente toda la élite del folklore argentino. El Chaqueño Palavecino, Los Tekis, Sergio Galleguillo, Raly Barrionuevo, Pedro Aznar, Abel Pintos, Luciano Pereyra, Jorge Rojas y La Bersuit Vergarabat son solo algunos de los nombres que engalanaron el escenario Antonio Acosta. La variedad de propuestas garantiza que cada edición sea un acontecimiento único e irrepetible.',
      },
      {
        titulo: 'Más que música: una fiesta popular',
        contenido:
          'El festival es mucho más que un recital. Durante los días que dura el evento, la ciudad entera se transforma: se instalan ferias de artesanías, se multiplican los puestos de gastronomía regional, se organizan peñas en distintos puntos y toda la comunidad participa de la celebración. Es la oportunidad perfecta para conocer la Monteros más auténtica y vibrante.',
      },
    ],
    datos: [
      { label: 'Antigüedad', valor: 'Más de 59 ediciones' },
      { label: 'Época del año', valor: 'Octubre' },
      { label: 'Posición nacional', valor: '2° festival folklórico más antiguo del país' },
      { label: 'Sede', valor: 'Gimnasio Municipal "Prof. José Nicolás Russo"' },
    ],
    horarios: 'Durante el mes de octubre. Consultar programa oficial cada año.',
  },
  {
    slug: 'trepada-al-indio',
    nombre: 'Trepada al Indio',
    categoria: 'evento',
    descripcionCorta:
      'Carrera de montaña de 21 km hasta el Mirador Monumento al Indio a 1.100 metros de altura. Un desafío que congrega aventureros de toda la región.',
    imagen: '/img/El indio.jpg',
    imagenes: ['/img/El indio.jpg'],
    ubicacion: 'Reserva Provincial Los Sosa, Monteros',
    historia:
      'La Trepada al Indio es una carrera de montaña que se realiza cada año en febrero en las estribaciones de la Reserva Provincial Los Sosa. El recorrido de 21 kilómetros tiene como meta el Mirador Monumento al Indio (El Chasqui), una escultura de 7 metros emplazada a 1.100 metros sobre el nivel del mar. El evento existe desde 2002 y con los años se consolidó como una de las pruebas de trail running más populares de Tucumán, convocando a atletas de toda la provincia, el país y países limítrofes. El ascenso exige atravesar el espectacular paisaje del Bosque Tucumano-Boliviano, con su fauna y flora únicas. Más allá de la competencia deportiva, la Trepada al Indio es una celebración de la naturaleza que rodea a Monteros y una invitación a descubrir sus recursos naturales más imponentes.',
    secciones: [
      {
        titulo: 'El recorrido',
        contenido:
          'Los participantes parten desde el ingreso a la Reserva Provincial Los Sosa y ascienden durante 21 kilómetros por senderos de montaña que atraviesan el Bosque Tucumano-Boliviano. El desnivel acumulado es considerable, con una meta ubicada a 1.100 metros sobre el nivel del mar. Durante el trayecto, los corredores son rodeados por la biodiversidad única de la región: laureles tucumanos, horco cebiles, nogales criollos y una fauna que incluye más de 100 especies de aves.',
      },
      {
        titulo: 'El Monumento al Indio (El Chasqui)',
        contenido:
          'En la cima se erige el Monumento al Indio, conocido popularmente como "El Chasqui", una escultura de 7 metros de altura que lleva más de 80 años en el lugar. Desde el mirador que lo rodea se puede apreciar una panorámica impresionante de toda la llanura tucumana y de las sierras del Aconquija. Es uno de los puntos más fotografiados de la región y un símbolo de la identidad montereña.',
      },
      {
        titulo: 'Más que una carrera',
        contenido:
          'La Trepada al Indio trasciende lo deportivo para convertirse en un evento de encuentro comunitario. Participan atletas profesionales y amateurs, niños con sus familias en versiones más cortas del recorrido, y turistas que aprovechan el evento para conocer la reserva. El día de la carrera, la zona se llena de música, gastronomía y una atmósfera festiva que complementa el esfuerzo deportivo.',
      },
    ],
    datos: [
      { label: 'Distancia', valor: '21 km' },
      { label: 'Altura de la meta', valor: '1.100 m.s.n.m.' },
      { label: 'Época', valor: 'Febrero' },
      { label: 'Desde el año', valor: '2002' },
    ],
    horarios: 'Durante el mes de febrero. Consultar inscripción y fecha exacta cada año.',
  },
  {
    slug: 'reserva-los-sosa',
    nombre: 'Reserva Provincial Los Sosa',
    categoria: 'natural',
    descripcionCorta:
      'Un paraíso natural de 890 hectáreas con la Quebrada de Los Sosa y sus 1.294 curvas en 29 km de bosque tucumano-boliviano virgen.',
    imagen: '/img/Monteros3.jpg',
    imagenes: ['/img/Monteros3.jpg', '/img/Monteros2.jpg'],
    ubicacion: 'Km 20 al 38 de la Ruta Provincial 307, al oeste de Monteros',
    historia:
      'La Reserva Provincial Los Sosa es uno de los espacios naturales más espectaculares de Tucumán, ubicada al oeste de Monteros entre los kilómetros 20 y 38 de la Ruta Provincial 307. Abarca 890 hectáreas distribuidas entre los 400 y los 3.000 metros sobre el nivel del mar. El elemento central de la reserva es la Quebrada de Los Sosa, un cañón natural que recorre 30 kilómetros en medio del Bosque Tucumano-Boliviano, presentando la asombrosa cifra de 1.294 curvas en solo 29 kilómetros de camino. Esta reserva alberga una biodiversidad excepcional: más de 100 especies de aves, 62 de mamíferos y 15 de anfibios. La vegetación incluye laureles tucumanos, horco cebiles, nogales criollos y camaleones. En el sotobosque crecen begonias, orquídeas y helechos gigantes. El punto cumbre de la reserva es el Mirador del Monumento al Indio (El Chasqui), una escultura de 7 metros a 1.100 m de altitud desde donde se contempla la totalidad del paisaje regional.',
    secciones: [
      {
        titulo: 'La Quebrada de Los Sosa: 1.294 curvas',
        contenido:
          'El camino que atraviesa la Quebrada de Los Sosa es uno de los más sinuosos de Argentina: 1.294 curvas en apenas 29 kilómetros. Este dato no es solo una curiosidad: es el resultado de la geología imponente del lugar, donde el río Los Sosa labró a lo largo de millones de años un cañón de paredes verticales cubierto por bosque nativo intacto. Recorrerlo es una experiencia sensorial única que combina la exigencia del conductor con la contemplación permanente.',
      },
      {
        titulo: 'Biodiversidad excepcional',
        contenido:
          'La reserva es un refugio de biodiversidad de primera magnitud. Entre las aves pueden observarse loros, tucanes, perdices y decenas de especies endémicas. Entre los mamíferos hay pumas, zorros, corzuelas y monos. La flora incluye árboles centenarios como el nogal criollo y el laurel tucumano, y en el sotobosque florecen orquídeas silvestres y begonias de gran porte.',
      },
      {
        titulo: 'Actividades disponibles',
        contenido:
          'La reserva es escenario de múltiples actividades ecoturísticas y deportivas: senderismo, mountain bike, kayak en el río Los Sosa (con el Los Sosa Kayak Fest anual), enduro, rally, pesca deportiva, avistaje de aves, safari fotográfico, parapente y camping. La combinación de naturaleza prístina y accesibilidad desde Monteros la convierte en un destino imprescindible.',
      },
      {
        titulo: 'El Monumento al Indio',
        contenido:
          'Coronando la reserva a 1.100 metros de altitud se encuentra el Monumento al Indio, también conocido como "El Chasqui": una escultura de 7 metros que lleva más de 80 años en el lugar. Desde el mirador que lo rodea se puede apreciar un panorama de 360 grados que incluye la llanura tucumana, las sierras del Aconquija y los valles del oeste. Es el punto final de la Trepada al Indio y uno de los miradores naturales más impresionantes de la provincia.',
      },
    ],
    datos: [
      { label: 'Superficie', valor: '890 hectáreas' },
      { label: 'Altitud', valor: '400 a 3.000 m.s.n.m.' },
      { label: 'Curvas en la quebrada', valor: '1.294 curvas en 29 km' },
      { label: 'Especies de aves', valor: 'Más de 100' },
      { label: 'Especies de mamíferos', valor: '62' },
    ],
    horarios: 'Acceso libre. Se recomienda visitar de día. Llevar agua y calzado adecuado.',
  },
  {
    slug: 'quebrada-del-portugues',
    nombre: 'Reserva Natural Quebrada del Portugués',
    categoria: 'natural',
    descripcionCorta:
      'Una reserva de 12.000 hectáreas entre las Sierras del Aconquija con ruinas indígenas, menhires y el antiguo Camino Real del Inca.',
    imagen: '/img/Monteros2.jpg',
    imagenes: ['/img/Monteros2.jpg', '/img/Monteros3.jpg'],
    ubicacion: 'Sierras del Aconquija, al oeste del departamento Monteros',
    historia:
      'La Reserva Natural Quebrada del Portugués fue creada en 1996 y abarca unas 12.000 hectáreas de superficie, colindando con el Parque Provincial Los Nuñorcos. Se ubica en las Sierras del Aconquija y el Nuñorco Chico. El territorio que hoy ocupa la reserva fue, desde tiempos precolombinos, un corredor de tránsito fundamental: el Camino Inca atravesó esta región, y sobre ese mismo trazado los conquistadores españoles establecieron el Camino Real que conectaba el noroeste con el Alto Perú. Como testimonio de la ocupación humana precolombina, el área conserva ruinas indígenas y menhires distribuidos a lo largo de los senderos. La proyección futura contempla la habilitación de un eco-sendero de 25 kilómetros desde El Rincón (El Mollar) hasta Pueblo Viejo (Monteros) siguiendo la traza histórica del Camino Real, lo que convertirá a la reserva en un destino de primer orden para el ecoturismo y el turismo cultural.',
    secciones: [
      {
        titulo: 'El Camino del Inca',
        contenido:
          'Mucho antes de la llegada de los españoles, los incas construyeron un sistema de caminos que recorría miles de kilómetros a lo largo de los Andes. El ramal que atravesaba la actual Quebrada del Portugués fue un eje estratégico para la comunicación y el comercio del Tawantinsuyu. Sobre ese mismo trazado los conquistadores establecieron el Camino Real colonial. Hoy es posible recorrer tramos de estos caminos históricos y descubrir los menhires y vestigios arqueológicos que jalonan la ruta.',
      },
      {
        titulo: 'Ruinas indígenas y menhires',
        contenido:
          'A lo largo de los senderos de la reserva se encuentran ruinas de estructuras indígenas precolombinas y menhires (piedras verticales de significado ritual o demarcatorio). Estos testimonios de piedra son evidencia del importante poblamiento humano que existió en la región antes de la conquista española y constituyen un patrimonio arqueológico de primer orden que complementa la experiencia natural.',
      },
      {
        titulo: 'El futuro eco-sendero',
        contenido:
          'Está proyectada la habilitación de un eco-sendero de 25 kilómetros que conectará El Rincón (en el área de El Mollar) con Pueblo Viejo (en el entorno de Monteros), siguiendo el trazado histórico del antiguo Camino Real. Este sendero incorporará interpretación arqueológica, señalética ambiental y miradores estratégicos, convirtiéndose en una propuesta ecoturística de alto valor.',
      },
    ],
    datos: [
      { label: 'Superficie', valor: '12.000 hectáreas' },
      { label: 'Creación de la reserva', valor: '1996' },
      { label: 'Colindante con', valor: 'Parque Provincial Los Nuñorcos' },
    ],
    horarios: 'Reserva de libre acceso. Se recomienda ir con guía para los senderos arqueológicos.',
  },
  {
    slug: 'la-randa',
    nombre: 'La Randa – Artesanía Única en el Mundo',
    categoria: 'cultural',
    descripcionCorta:
      'Monteros es la Capital Nacional de la Randa, una artesanía textil única en el mundo producida en El Cercado, de origen colonial y postulada ante la UNESCO.',
    imagen: '/img/feria de artesanias.jpg',
    imagenes: ['/img/feria de artesanias.jpg'],
    ubicacion: 'El Cercado, entre Ibatín y Monteros, departamento Monteros',
    historia:
      'La randa es una artesanía textil que no tiene par en el mundo: una malla tejida y bordada con agujas, palitos, hilos finos de algodón y bastidor, producida exclusivamente en la pequeña localidad rural de El Cercado, entre Ibatín y Monteros. Su origen se remonta a la época de Ibatín (1565), cuando las "Damas Castellanas" que acompañaron a los conquistadores trajeron consigo la técnica. El nombre "randa" proviene del alemán "rand", y su origen concreto se rastrea a los Países Bajos y Alemania, no a España. Cuando la ciudad de Ibatín fue trasladada al actual San Miguel de Tucumán en 1685, la tradición de la randa permaneció en El Cercado, donde las mujeres la transmitieron de generación en generación a lo largo de más de 350 años. La confección se divide en dos momentos: la elaboración de la malla y el bordado. Hoy unas 50 randeras sostienen esta tradición viva. En 2015, doña Margarita Ariza fue reconocida con el Premio del Fondo Nacional de las Artes. La randa es Patrimonio Cultural Inmaterial de Tucumán y fue presentada para el Reconocimiento de Excelencia de la UNESCO. Monteros ostenta oficialmente el título de Capital Nacional de la Randa.',
    secciones: [
      {
        titulo: '350 años de tradición viva',
        contenido:
          'Desde que las Damas Castellanas introdujeron la técnica en los albores de Ibatín (1565) hasta hoy, la randa se transmitió de madres a hijas en El Cercado sin interrupción durante más de 350 años. Este hilo ininterrumpido de transmisión oral y manual es lo que la convierte en un tesoro vivo de la humanidad, no solo de Monteros. Cada pieza elaborada es el resultado de horas de trabajo minucioso y de un conocimiento que no existe en ningún otro lugar del mundo.',
      },
      {
        titulo: 'El proceso de elaboración',
        contenido:
          'La fabricación de la randa se divide en dos etapas. En la primera, la randera construye la malla base utilizando agujas, palitos y un bastidor, trabajando con hilos finos de algodón. En la segunda etapa, el bordado sobre la malla completa el diseño con motivos florales, geométricos o figurativos que varían según la maestra artesana. El resultado es una tela de extraordinaria delicadeza que puede convertirse en manteles, servilletas, prendas de vestir o piezas decorativas.',
      },
      {
        titulo: 'Reconocimientos nacionales e internacionales',
        contenido:
          'En 2015, doña Margarita Ariza, una de las randeras más reconocidas de El Cercado, recibió el Premio del Fondo Nacional de las Artes, el máximo reconocimiento estatal para artesanos en Argentina. La randa fue declarada Patrimonio Cultural Inmaterial de la Provincia de Tucumán y fue postulada por Argentina para el Reconocimiento de Excelencia de la UNESCO, lo que la pondría en el mismo nivel que las artesanías más valiosas del mundo.',
      },
      {
        titulo: 'Dónde ver y comprar randa',
        contenido:
          'El Taller de Randas Municipal, creado en 2009, ofrece clases y exhibiciones abiertas al público. En El Cercado es posible visitar a las randeras en sus propias casas y adquirir piezas directamente de sus creadoras. Durante la Feria de Artesanías (julio) y el Festival de Folklore (octubre), hay puestos especiales donde se exhibe y vende randa en el centro de Monteros.',
      },
    ],
    datos: [
      { label: 'Origen', valor: 'Ibatín, 1565 (técnica de los Países Bajos/Alemania)' },
      { label: 'Randeras activas', valor: '~50' },
      { label: 'Título oficial', valor: 'Capital Nacional de la Randa' },
      { label: 'Premio FNA', valor: 'Doña Margarita Ariza, 2015' },
      { label: 'Postulación UNESCO', valor: 'Reconocimiento de Excelencia (en proceso)' },
    ],
    horarios: 'Taller Municipal: consultar horarios en la Municipalidad. Visitas a artesanas en El Cercado: coordinadas previo aviso.',
  },
  {
    slug: 'cine-marconi',
    nombre: 'Cine Marconi',
    categoria: 'cultural',
    descripcionCorta:
      'El histórico cine que fue durante décadas el principal centro de entretenimiento y cultura de Monteros, testigo de la vida social del siglo XX.',
    imagen: '/img/cine marconi.jpg',
    imagenes: ['/img/cine marconi.jpg', '/img/cine marconi2.jpg'],
    ubicacion: 'Centro de Monteros',
    historia:
      'El Cine Marconi es uno de los edificios más emblemáticos del patrimonio cultural y arquitectónico de Monteros. Lleva el nombre de Guglielmo Marconi, inventor del telégrafo sin hilos, en un guiño a la modernidad tecnológica que representaban el cine y las comunicaciones en las primeras décadas del siglo XX. Durante su época de esplendor, el Cine Marconi fue el principal punto de reunión cultural y social de la comunidad montereña, donde generaciones de familias disfrutaron de películas, espectáculos y eventos comunitarios. Su arquitectura es representativa del estilo de los grandes cines de sala única del interior argentino, con una fachada que aún conserva el espíritu de aquella época dorada del séptimo arte. Hoy el edificio forma parte del imaginario histórico de la ciudad y es considerado un bien de valor patrimonial por la comunidad local.',
    secciones: [
      {
        titulo: 'El cine como centro social',
        contenido:
          'En las décadas del 40, 50 y 60 del siglo pasado, ir al cine era el pasatiempo central de la vida social en las ciudades del interior argentino. El Cine Marconi fue el escenario de esos encuentros para los montereños: era el lugar donde se veían las grandes producciones de Hollywood y del cine nacional, donde los jóvenes tenían sus primeras citas y donde la comunidad se reunía en torno a un espectáculo compartido.',
      },
      {
        titulo: 'Patrimonio arquitectónico',
        contenido:
          'El edificio del Cine Marconi es una muestra del estilo arquitectónico de los cines de sala única que proliferaron en el interior argentino durante la primera mitad del siglo XX. Sus fachadas, su marquesina y su distribución interior son testimonio de una época en que la arquitectura del entretenimiento buscaba transmitir glamour y modernidad a las ciudades del interior.',
      },
    ],
    datos: [
      { label: 'Nombre en homenaje a', valor: 'Guglielmo Marconi (inventor del telégrafo sin hilos)' },
    ],
    horarios: 'Consultar estado actual del edificio en la Municipalidad.',
  },
  {
    slug: 'paseo-del-milagro',
    nombre: 'Paseo del Milagro',
    categoria: 'cultural',
    descripcionCorta:
      'El espacio cultural que rememora el Milagro del Sudor de 1719 a través de un gran mural colaborativo y se convierte en escenario de vida urbana y memoria.',
    imagen: '/img/Monteros.jpg',
    imagenes: ['/img/Monteros.jpg'],
    ubicacion: 'Centro de Monteros',
    historia:
      'El Paseo del Milagro es un espacio público y cultural de Monteros que tiene como hilo conductor la conmemoración del Milagro del Sudor de la Virgen del Rosario, ocurrido en mayo de 1719. El paseo fue concebido como un lugar de encuentro donde la identidad religiosa y cultural de la ciudad se materializa en el espacio urbano. Su elemento más destacado es un gran mural creado por la Dra. Cecilia Calamandrei en colaboración con artistas locales de distintas generaciones. El mural narra visualmente los momentos más significativos de la historia de Monteros, con el milagro de 1719 como núcleo central. El paseo funciona también como espacio de circulación cotidiana, exposiciones al aire libre, y pequeñas intervenciones artísticas que renuevan permanentemente su propuesta cultural.',
    secciones: [
      {
        titulo: 'El mural de la memoria',
        contenido:
          'El gran mural del Paseo del Milagro es una obra colectiva que involucró a la Dra. Cecilia Calamandrei y a numerosos artistas locales. La obra representa visualmente los momentos fundacionales de la historia de Monteros: la fundación de Ibatín, la llegada de la imagen de la Virgen, el Milagro del Sudor de 1719 y escenas de la vida cotidiana colonial. Es una de las expresiones de arte público más significativas de la ciudad.',
      },
      {
        titulo: 'Espacio de encuentro y cultura',
        contenido:
          'Más allá del mural, el Paseo del Milagro funciona como un corredor cultural activo donde se realizan exposiciones temporales, presentaciones artísticas y actividades comunitarias. Su diseño invita al recorrido pausado y a la contemplación, combinando el patrimonio histórico con la vida cultural contemporánea de Monteros.',
      },
    ],
    datos: [
      { label: 'Conmemora', valor: 'Milagro del Sudor de la Virgen del Rosario (1719)' },
      { label: 'Mural por', valor: 'Dra. Cecilia Calamandrei y artistas locales' },
    ],
    horarios: 'Acceso libre.',
  },
  {
    slug: 'ingenio-azucarero',
    nombre: 'Ingenios Azucareros de Monteros',
    categoria: 'histórico',
    descripcionCorta:
      'El motor económico de Monteros y Tucumán. Los ingenios La Providencia y Nuñorco son parte del patrimonio industrial de una región que produce el 65% del azúcar de Argentina.',
    imagen: '/img/Monteros.jpg',
    imagenes: ['/img/Monteros.jpg', '/img/Monteros2.jpg'],
    ubicacion: 'Departamento Monteros (Ingenio La Providencia en Río Seco; Ingenio Nuñorco cerca del centro)',
    historia:
      'La industria azucarera es el pilar histórico y económico de Monteros y de toda la provincia de Tucumán. La provincia produce más del 65% del azúcar de la Argentina, y el departamento Monteros es parte de la zona productora central. Los cañaverales dominan el paisaje agrario de la región, marcando el ritmo de las estaciones con la zafra (cosecha de la caña) que concentra la actividad social y económica entre los meses de mayo y octubre. El Ingenio La Providencia, ubicado en Río Seco dentro del departamento Monteros, fue fundado entre 1882 y 1884 por la firma Córdoba del Tucumán S.A. En 1994 fue adquirido por el Grupo ARCOR, uno de los mayores conglomerados alimentarios de América Latina. El Ingenio Nuñorco, localizado en las cercanías de la plaza principal de Monteros, también forma parte del patrimonio industrial de la ciudad. Los subproductos de la caña incluyen bagazo (para fabricar papel y aglomerados), melaza, alcohol y bioetanol. A partir de la Ley N° 26.093/2006, Tucumán produce bioetanol a partir de caña de azúcar, incorporando a sus ingenios en la cadena de energías renovables.',
    secciones: [
      {
        titulo: 'La zafra: el pulso de Monteros',
        contenido:
          'La zafra es el período de cosecha y procesamiento de la caña de azúcar, que en Tucumán se extiende entre mayo y octubre. Durante la zafra, los ingenios trabajan las 24 horas del día, el campo se llena de cortadores y maquinaria pesada, y la economía de toda la región se acelera. Para los montereños, la zafra no es solo un proceso productivo: es una parte fundamental de su identidad cultural y social, con rituales, vocabulario propio y una historia de lucha obrera que marcó el siglo XX.',
      },
      {
        titulo: 'Ingenio La Providencia: más de 140 años',
        contenido:
          'Fundado entre 1882 y 1884, el Ingenio La Providencia es uno de los establecimientos azucareros históricos de la región. A lo largo de su historia fue testigo de los grandes cambios en la industria azucarera tucumana: las crisis de superproducción de los años 60, las intervenciones estatales, las privatizaciones de los 90 y la modernización tecnológica. En 1994 pasó a manos del Grupo ARCOR, que lo integró a su cadena de producción de golosinas y alimentos.',
      },
      {
        titulo: 'Bioetanol y energías renovables',
        contenido:
          'Desde la sanción de la Ley de Biocombustibles (N° 26.093/2006), los ingenios tucumanos incorporaron la producción de bioetanol a partir del jugo y la melaza de caña de azúcar. Este combustible renovable se mezcla con la nafta para reducir las emisiones de carbono. Tucumán se convirtió así en uno de los principales productores de bioetanol del país, dando una nueva dimensión económica y ambiental a la industria que durante siglos fue solo sinónimo de azúcar.',
      },
    ],
    datos: [
      { label: 'Fundación Ingenio La Providencia', valor: '1882–1884' },
      { label: 'Propietario actual', valor: 'Grupo ARCOR (desde 1994)' },
      { label: 'Producción provincial', valor: '+65% del azúcar de Argentina' },
      { label: 'Período de zafra', valor: 'Mayo a octubre' },
    ],
    horarios: 'No hay visitas públicas abiertas. Consultar actividades especiales en temporada de zafra.',
  },
];

export function getLugarBySlug(slug: string): Lugar | undefined {
  return lugares.find((l) => l.slug === slug);
}

export const categorias = {
  histórico: { label: 'Histórico', color: 'bg-amber-100 text-amber-800' },
  cultural: { label: 'Cultural', color: 'bg-purple-100 text-purple-800' },
  natural: { label: 'Natural', color: 'bg-emerald-100 text-emerald-800' },
  religioso: { label: 'Religioso', color: 'bg-blue-100 text-blue-800' },
  evento: { label: 'Evento', color: 'bg-rose-100 text-rose-800' },
};
