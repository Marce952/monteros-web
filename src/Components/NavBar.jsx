'use client'
import { Button } from '@nextui-org/react';
import React, { useState } from 'react'

const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => setOpenMenu(!openMenu);

    return (
        <nav className="border-gray-200 z-50 w-full bg-white bg-opacity-40 fixed left-0 top-0 max-h-20 min-h-24 max-lg:flex-wrap max-lg:max-w-full">
            <div className="max-w-screen-xl w-full mx-auto flex items-center justify-between p-2 lg:px-0 backdrop-blur-sm">
                <a href="/" className="flex items-center">
                    <span className="ml-3 self-center text-xl max-lg:text-xl max-md:hidden font-semibold whitespace-nowrap text-black">
                        Monteros Web
                    </span>
                </a>

                <div className="flex items-center lg:hidden">
                    <Button
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm"
                        aria-controls="navbar-solid-bg"
                        aria-expanded={openMenu ? 'true' : 'false'}
                        onClick={toggleMenu}
                        variant="ghost"
                        color="yellow"
                    >
                        <span className="sr-only">Menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
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

                <div className={`lg:items-center  left-0 top-20 z-50 w-full ${openMenu ? 'fixed' : 'hidden'} lg:hidden`} id="navbar-solid-bg">
                    <ul className="flex flex-col font-medium rounded-lg bg-gray-50  lg:flex-row lg:gap-8 lg:mt-0 lg:border-0 lg:bg-transparent">
                        <li>
                            <a href="#razones" className="block py-2 px-3 lg:p-0 text-black" aria-current="page">
                                ¿Que hacer?
                            </a>
                        </li>
                        <li>
                            <a href="#footer" className="block py-2 px-3 lg:p-0 text-black">
                                Contáctanos
                            </a>
                        </li>
                        <li>
                            <a href="/entidades" className="block py-2 px-3 lg:p-0 text-black">
                                Turistea
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={`hidden lg:items-center w-full justify-end pe-2 lg:flex`} id="navbar-solid-bg">
                    <ul className="flex flex-col font-medium rounded-lg bg-gray-50  lg:flex-row lg:gap-8 lg:mt-0 lg:border-0 lg:bg-transparent">
                        <li>
                            <a href="#razones" className="block py-2 px-3 lg:p-0 text-black" aria-current="page">
                                ¿Que hacer?
                            </a>
                        </li>
                        <li>
                            <a href="#footer" className="block py-2 px-3 lg:p-0 text-black">
                                Contáctanos
                            </a>
                        </li>
                        <li>
                            <a href="/entidades" className="block py-2 px-3 lg:p-0 text-black">
                                Turistea
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar