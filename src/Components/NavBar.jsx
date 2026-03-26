'use client'
import { Button } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const ctaClass =
    'inline-flex items-center justify-center rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-[var(--primary-foreground)] shadow-md shadow-emerald-900/10 transition hover:bg-emerald-800 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]';

const SCROLL_THRESHOLD = 32;

const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';

    const showSolidBar = !isHome || scrolled;

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > SCROLL_THRESHOLD);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [pathname]);

    const toggleMenu = () => setOpenMenu(!openMenu);

    const linkClass = showSolidBar
        ? 'relative font-sans text-sm font-medium text-stone-800 transition-colors hover:text-[var(--primary)] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--primary)] after:transition-[width] hover:after:w-full'
        : 'relative font-sans text-sm font-medium text-white/95 transition-colors hover:text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-[width] hover:after:w-full';

    const logoTitleClass = showSolidBar
        ? 'font-display text-xl font-semibold tracking-tight text-stone-900 transition-colors group-hover:text-[var(--primary)] md:text-2xl'
        : 'font-display text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-white/90 md:text-2xl';

    const badgeClass = showSolidBar
        ? 'hidden rounded-full border border-stone-200 bg-stone-50 px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wider text-stone-500 sm:inline'
        : 'hidden rounded-full border border-white/25 bg-white/10 px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wider text-white/85 sm:inline';

    const barClass = showSolidBar
        ? 'border-b border-stone-200/60 bg-white/85 backdrop-blur-md supports-[backdrop-filter]:bg-white/75 shadow-sm shadow-stone-900/5'
        : 'border-b border-transparent bg-transparent';

    const menuIconClass = showSolidBar ? 'text-stone-700' : 'text-white';

    return (
        <nav className={`fixed left-0 top-0 z-50 w-full transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${barClass}`}>
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 lg:px-6">
                <Link href="/" className="group flex items-center gap-2">
                    <span className={logoTitleClass}>
                        Monteros
                    </span>
                    <span className={badgeClass}>
                        Tucumán
                    </span>
                </Link>

                <div className="flex items-center lg:hidden">
                    <Button
                        type="button"
                        className={`min-h-10 min-w-10 ${menuIconClass}`}
                        aria-label={openMenu ? 'Cerrar menú' : 'Abrir menú'}
                        aria-controls="navbar-mobile"
                        aria-expanded={openMenu ? 'true' : 'false'}
                        onClick={toggleMenu}
                        variant="ghost"
                        isIconOnly
                    >
                        <span className="sr-only">Abrir menú</span>
                        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </Button>
                </div>

                <div
                    className={`${openMenu ? 'fixed inset-x-0 top-[57px] z-50 border-b border-stone-200 bg-white/95 px-4 py-4 shadow-lg backdrop-blur-md lg:hidden' : 'hidden'}`}
                    id="navbar-mobile"
                >
                    <ul className="flex flex-col gap-1">
                        <li>
                            <a href="/#razones" className="block rounded-lg px-3 py-2.5 font-sans text-stone-800 hover:bg-stone-100" onClick={() => setOpenMenu(false)}>
                                ¿Qué hacer?
                            </a>
                        </li>
                        <li>
                            <a href="/#footer" className="block rounded-lg px-3 py-2.5 font-sans text-stone-800 hover:bg-stone-100" onClick={() => setOpenMenu(false)}>
                                Contacto
                            </a>
                        </li>
                        <li>
                            <Link href="/entidades" className={`${ctaClass} w-full justify-center`} onClick={() => setOpenMenu(false)}>
                                Turistear
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="hidden items-center gap-8 lg:flex">
                    <ul className="flex items-center gap-8">
                        <li>
                            <a href="/#razones" className={linkClass}>
                                ¿Qué hacer?
                            </a>
                        </li>
                        <li>
                            <a href="/#footer" className={linkClass}>
                                Contacto
                            </a>
                        </li>
                    </ul>
                    <Link href="/entidades" className={ctaClass}>
                        Turistear
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar
