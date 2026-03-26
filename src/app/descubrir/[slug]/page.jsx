import Link from 'next/link';
import { notFound } from 'next/navigation';
import { visitReasons, getReasonBySlug } from '@/data/visitReasons';

export function generateStaticParams() {
  return visitReasons.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }) {
  const reason = getReasonBySlug(params.slug);
  if (!reason) return { title: 'No encontrado | Monteros' };
  return {
    title: `${reason.title} | Monteros`,
    description: reason.shortDescription,
  };
}

export default function DescubrirDetallePage({ params }) {
  const reason = getReasonBySlug(params.slug);
  if (!reason) notFound();

  return (
    <article className="pb-16 pt-24 md:pt-28">
      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        <Link
          href="/#razones"
          className="font-sans inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] transition hover:text-emerald-900"
        >
          <span aria-hidden>←</span> Volver a inicio
        </Link>

        <header className="mt-8">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-warm)]">
            Descubrí Monteros
          </p>
          <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
            {reason.title}
          </h1>
          <p className="font-sans mt-4 text-lg leading-relaxed text-stone-600">
            {reason.shortDescription}
          </p>
        </header>

        <div className="relative mt-10 overflow-hidden rounded-2xl border border-stone-200 shadow-lg">
          <img
            src={reason.image}
            alt={reason.title}
            className="aspect-[21/9] w-full object-cover md:aspect-[2/1]"
          />
        </div>

        <div className="font-sans mt-10 space-y-6 text-base leading-relaxed text-stone-700">
          <p className="text-lg text-stone-800">{reason.intro}</p>
          {reason.sections.map((block) => (
            <section key={block.heading}>
              <h2 className="font-display text-xl font-semibold text-stone-900">{block.heading}</h2>
              <p className="mt-3">{block.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-stone-200 bg-stone-50 p-6 md:p-8">
          <p className="font-sans text-stone-700">
            ¿Querés seguir explorando? Visitá la sección de{' '}
            <Link href="/entidades" className="font-semibold text-[var(--primary)] underline-offset-2 hover:underline">
              puntos turísticos
            </Link>{' '}
            o volvé al{' '}
            <Link href="/" className="font-semibold text-[var(--primary)] underline-offset-2 hover:underline">
              inicio
            </Link>
            .
          </p>
        </div>
      </div>
    </article>
  );
}
