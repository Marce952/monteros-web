
'use client'
import Footer from "@/Components/Footer";
import HomeSeccion from "@/Components/HomeSeccion";
import ActivitiesSeccion from "@/Components/ActivitiesSeccion";
import ReasonsSeccion from "@/Components/ReasonsSeccion";
import GallerySeccion from "@/Components/GallerySeccion";
import IngenioSeccion from "@/Components/IngenioSeccion";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">

      <HomeSeccion />

      <ActivitiesSeccion />

      <ReasonsSeccion />

      <GallerySeccion />

      <IngenioSeccion />

      <Footer></Footer>
    </main>
  );
}
