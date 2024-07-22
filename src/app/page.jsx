
import Footer from "@/Components/Footer";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";
import { PiTreeFill } from "react-icons/pi";
import { LiaChurchSolid } from "react-icons/lia";

export default function Home() {
  const actividades = [
    { titulo: 'Trepada al indio', categoria: 'Deporte', imagen: '/img/El indio.jpg' },
    { titulo: 'Cine Marconi', categoria: 'Entretenimiento', imagen: '/img/cine marconi.jpg' },
    { titulo: 'Festival de folclore', categoria: 'Cultura', imagen: '/img/festival del folclore.jpg' },
  ]

  return (
    <main className="w-full h-full relative overflow-hidden">
      <header className="w-full h-[35rem] bg-[url('/img/Monteros3.jpg')] bg-cover bg-center z-0">
        <div className="w-full h-full bg-stone-950 opacity-50 z-0 relative">
        </div>
        <nav></nav>

        <div className="flex flex-col items-center absolute top-40 right-40 text-right max-sm:top-30 max-sm:right-0 max-sm:left-0 max-sm:w-full max-sm:text-center">
          <div>
            <h1 className="text-white text-8xl max-sm:text-4xl font-bold">Monteros!</h1>
            <p className="text-white text-4xl mt-2 max-sm:text-2xl">Fortaleza del folclore</p>
          </div>

          <div className="flex gap-4 w-full mt-8 text-lg max-sm:flex-col max-sm:items-center">
            <Link href='#conoce-mas' className="w-6/12">
              <button className="bg-green-400 p-2 text-white w-full max-sm:p-1 hover:bg-green-700 duration-500" >
                Conoce más
              </button>
            </Link>

            <div className="text-white underline w-6/12 flex justify-center max-sm:w-full">
              <a href="/entidades">
                Turistea
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="flex items-center justify-center flex-col w-full md:flex-wrap md:justify-around md:flex-row md:gap-4 md:my-8" id="conoce-mas">
        {
          actividades.map((actividad, i) => (
            <Card className="py-4 mx-auto" key={i}>
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

      <section className="w-full my-2 gap-8 grid grid-cols-1 md:grid-cols-3">
        <article className="bg-green-500 min-h-72 text-white p-4 gap-8 flex flex-col items-center rounded-r-md md:col-span-2">
          <div className="">
            <Image
              alt="Card background"
              className="object-cover rounded-xl opacity-1 h-48"
              src={"/img/festival del folclore 2.jpg"}
            />
          </div>
          <div className="w-full text-center md:flex md:flex-col md:justify-center md:text-left">
            <h5>Cultura</h5>
            <p className="text-2xl">
              El Festival de Folclore es el evento principal de Monteros, celebrado la segunda semana de octubre. Invitados destacados incluyen a El Chaqueño Palavecino, Sergio Galleguillo, Los Manseros Santiagueños, Los Tekis, entre otros.
            </p>
          </div>
        </article>

        <article className="bg-green-500 min-h-72 text-white p-4 gap-8 flex flex-col items-center w-full md:rounded-l-md md:col-start-2 md:col-end-4">
          <div className="">
            <Image
              alt="Card background"
              className="object-cover rounded-xl opacity-1 h-48"
              src={"/img/festival del folclore 2.jpg"}
            />
          </div>
          <div className="w-full text-center md:flex md:flex-col md:justify-center md:text-left">
            <h5>Cultura</h5>
            <p className="text-2xl">
              El Festival de Folclore es el evento principal de Monteros, celebrado la segunda semana de octubre. Invitados destacados incluyen a El Chaqueño Palavecino, Sergio Galleguillo, Los Manseros Santiagueños, Los Tekis, entre otros.
            </p>
          </div>
        </article>

        <article className="bg-green-500 min-h-72 text-white p-4 gap-8 flex flex-col items-center md:rounded-r-md md:col-span-2">
          <div className="">
            <Image
              alt="Card background"
              className="object-cover rounded-xl opacity-1 h-48"
              src={"/img/festival del folclore 2.jpg"}
            />
          </div>
          <div className="w-full text-center md:flex md:flex-col md:justify-center md:text-left">
            <h5>Cultura</h5>
            <p className="text-2xl">
              El Festival de Folclore es el evento principal de Monteros, celebrado la segunda semana de octubre. Invitados destacados incluyen a El Chaqueño Palavecino, Sergio Galleguillo, Los Manseros Santiagueños, Los Tekis, entre otros.
            </p>
          </div>
        </article>
      </section>



      <section className="w-full bg-green-400 py-8 relative hidden">
        <div className="flex justify-center items-center w-full mb-20">
          <h2 className="text-6xl text-center font-bold">Razones para venir a Monteros</h2>
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
              El Festival de Folclore es el evento principal de Monteros, celebrado la segunda semana de octubre. Invitados destacados incluyen a El Chaqueño Palavecino, Sergio Galleguillo, Los Manseros Santiagueños, Los Tekis, entre otros.
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
              La Feria de Artesanías, uno de los eventos más populares, se celebra cada año durante las vacaciones de invierno.
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
              Los bares, restaurantes y cervecerías locales ofrecen una selección de alimentos y bebidas de alta calidad y sabor.
            </p>
          </div>
        </div>

      </section>

      <section className="w-full  bg-black flex flex-col justify-evenly items-center gap-28 py-8 md:min-h-96 relative">
        <div className="absolute top-50 -left-20 rotate-45">
          <PiTreeFill className="text-green-300 text-xl md:text-[15rem] opacity-30" />
        </div>

        <div className="absolute top-50 -right-20 -rotate-45">
          <LiaChurchSolid className="text-green-300 text-xl md:text-[15rem] opacity-30" />
        </div>

        <h1 className="text-white text-3xl text-center font-bold md:text-6xl">
          Monteros de la patria fortaleza del folclore
        </h1>

        <iframe src="https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2Ffranciscopanchoserra%2Fvideos%2F1077361865938226%2F&show_text=false&width=560&t=0" className="sm:w-[500px]" height="317" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
      </section>

      <Footer></Footer>
    </main>
  );
}
