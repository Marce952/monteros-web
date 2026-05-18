'use client'
import Footer from "@/Components/Footer";
import HomeSeccion from "@/Components/HomeSeccion";
import ActivitiesSeccion from "@/Components/ActivitiesSeccion";
import ReasonsSeccion from "@/Components/ReasonsSeccion";
import GallerySeccion from "@/Components/GallerySeccion";
import IngenioSeccion from "@/Components/IngenioSeccion";
import LugaresDestacados from "@/Components/LugaresDestacados";
import RodoBulacioSeccion from "@/Components/RodoBulacioSeccion";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">

      <HomeSeccion />

      <ActivitiesSeccion />

      <LugaresDestacados />

      <ReasonsSeccion />

      <GallerySeccion />

      <RodoBulacioSeccion />

      <IngenioSeccion />

      <Footer />
    </main>
  );
}
