
import Footer from "@/Components/Footer";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function Home() {
  const actividades = [
    { titulo: 'Trepada al indio', categoria: 'Deporte', imagen: '/img/El indio.jpg' },
    { titulo: 'Cine Marconi', categoria: 'Entretenimiento', imagen: '/img/cine marconi.jpg' },
    { titulo: 'Festival de folclore', categoria: 'Musica', imagen: '/img/festival del folclore.jpg' },
  ]

  return (
    <main className="w-full h-full relative overflow-hidden">
      <header className="w-full h-[35rem] bg-[url('/img/Monteros2.jpg')] bg-cover bg-center z-0">
        <div className="w-full h-full bg-stone-950 opacity-50 z-0 relative">
        </div>
        <nav></nav>

        <div className="flex flex-col items-center absolute top-40 right-40 text-right max-sm:top-30 max-sm:right-0 max-sm:left-0 max-sm:w-full max-sm:text-center">
          <div>
            <h1 className="text-white text-8xl max-sm:text-4xl">Monteros!</h1>
            <p className="text-white text-4xl mt-2 max-sm:text-2xl">Fortaleza del folclore</p>
          </div>

          <div className="flex gap-4 w-full mt-8 text-lg max-sm:flex-col max-sm:items-center">
            <button className="bg-green-400 p-2 text-white w-6/12 max-sm:p-1">
              Conoce más
            </button>

            <div className="text-white underline w-6/12 flex justify-center max-sm:w-full">
              <a href="/entidades">
                Turistea
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="flex items-center justify-center flex-col w-full md:justify-around md:flex-row md:gap-4">
        {
          actividades.map((actividad, i) => (
            <Card className="py-4" key={i}>
              <CardHeader className="pb-0 pt-2 flex-col items-start">
                <p className="text-tiny uppercase font-bold"></p>
                <small className="text-default-500">{actividad.categoria}</small>
                <h4 className="font-bold text-large">{actividad.titulo}</h4>
              </CardHeader>

              <CardBody className="py-2">
                <Image
                  isZoomed
                  alt="Card background"
                  className="object-cover rounded-xl opacity-1 h-48"
                  src={actividad.imagen || "https://nextui.org/images/hero-card-complete.jpeg"}
                  width={280}
                />
              </CardBody>
            </Card>
          ))
        }
      </section>

        <div class="absolute z-20 border-[16px] border-green-600 h-48 w-48 rounded-full top-[47rem] -left-24 flex justify-center items-center">
        </div>
      
      <section className="w-full bg-green-400 py-8 relative">
        <div className="flex justify-center items-center w-full mb-20">
          <h2 className="text-6xl text-center">Razones para venir a Monteros</h2>
        </div>

        <div className="w-full px-8 my-8 flex flex-col justify-center items-center gap-8 text-center md:flex-row md:gap-4 md:text-left">
          <div className="w-3/4 md:flex md:justify-center relative">
            <Image
              alt="Card background"
              className="object-cover rounded-xl opacity-1 h-60"
              src={"/img/festival del folclore 2.jpg"}
              width={360}
            />
          </div>

          <div className="w-full md:flex md:flex-col md:justify-center">
            <h5>Cultura</h5>
            <p className="text-2xl">
              El festival de folclore es el evento principal de la ciudad de monteros. El mismo se celebra los dias la segunda semana del mes de octubre.
              Parte de nuestros invitados son: El chaqueño palavecino, Sergio Gallegillo, Los manseros santiagueños, Los tekis y muchas más
            </p>
          </div>
        </div>

        <div className="w-full px-8 my-8 flex flex-col justify-center items-center gap-8 text-center md:flex-row-reverse md:gap-4 md:text-right">
          <div className="w-3/4 md:flex md:justify-center relative">
            <Image
              alt="Card background"
              className="object-cover rounded-xl opacity-1 h-60"
              src={"/img/feria de artesanias.jpg"}
              width={360}
            />
          </div>

          <div className="w-full md:flex md:flex-col md:justify-center">
            <h5>Entretenimiento</h5>
            <p className="text-2xl">
              La feria de artesanias es sin duda de los eventos más elegidos por los ciudadanos, el evento es celebrado todos los años en las vacaciones de invierno
            </p>
          </div>
        </div>

        <div className="w-full px-8 my-8 flex flex-col justify-center items-center gap-8 text-center md:flex-row md:gap-4 md:text-left">
          <div className="w-3/4 md:flex md:justify-center relative">
            <Image
              alt="gastronomia"
              className="object-cover rounded-xl opacity-1 h-60 sm:w-full"
              src={"/img/gastronomia.jpg"}
              width={360}
            />
          </div>

          <div className="w-full md:flex md:flex-col md:justify-center">
            <h5>Gastronomía</h5>
            <p className="text-2xl">
              Los bares, restaurantes y cervecerias locales tienen una seleccion de alimentos y bebidas de altisima caldiad y sabor.
            </p>
          </div>
        </div>

      </section>

      <div class="z-20 absolute border-[16px] border-green-600 -right-20 bottom-[54rem] h-48 w-48 rounded-full flex justify-center items-center">
      </div>

      <section className="w-full  bg-black flex flex-col justify-evenly items-center gap-28 py-8 md:min-h-96">
        <h1 className="text-white text-3xl text-center md:text-6xl">
          Monteros de la patria fortaleza del folclore
        </h1>

        <iframe src="https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2Ffranciscopanchoserra%2Fvideos%2F1077361865938226%2F&show_text=false&width=560&t=0" className="sm:w-[500px]" height="317" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
      </section>

      <Footer></Footer>
    </main>
  );
}
