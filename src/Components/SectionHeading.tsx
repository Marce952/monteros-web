import React from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  children,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`text-center mb-14 md:mb-16 max-w-3xl mx-auto px-2 ${className}`}>
      <p className="font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-warm)] mb-3">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-stone-900 leading-tight mb-4">
        {title}
      </h2>
      {children && (
        <p className="font-sans text-base md:text-lg text-stone-600 leading-relaxed">
          {children}
        </p>
      )}
    </div>
  );
}
