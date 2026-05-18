import type { Metadata } from 'next';
import ArtisticStagesGallery from '@/Components/Rodo/ArtisticStagesGallery';

export const metadata: Metadata = {
  title: 'Guía de visita | Museo Rodo Bulacio',
  description:
    'Recorrido por las salas del museo: cada color representa una etapa de la vida y la obra de Rodolfo Bulacio, con su significado y galería de obras.',
};

export default function MuseoRodoPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#FFA500] selection:text-black">
      <ArtisticStagesGallery />
    </main>
  );
}
