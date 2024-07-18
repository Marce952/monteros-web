import React from 'react'
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
            const items = [
                {
                    title: 'Entidades',
                    item1: 'Estatuas',
                    item2: 'Plazas',
                    item3: 'Escuelas',
                    item4: 'Iglesias'
                },
                {
                    title: 'Contactos DevSoul',
                    item1: '@dev.soul.it',
                    item2: 'devsoul256@gmail.com',
                },
                
            ]
        
            return (
                <footer className="bg-black text-white w-full min-h-96" id="footer">
                    <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-green-500 py-7">
                        <h1 className="text-2xl md:mb-0 mb-6 lg-leading-normal font-semibold md:w-2/5 text-black">
                            <span className="underline">DevSoul</span>
                        </h1>
                        <h2 className="text-black">
                            Monteros desde otra perspectiva
                        </h2>
                    </div>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-3 sm:place-content-center lg:grid-cols-2 gap-6 sm:px-8 px-auto py-16">
                        {
                            items.map((item, i) => {
                                return <ul key={i} className="gap-2">
                                    <h1 className="mb-4">{item.title}</h1>
                                    <li className="pl-2">{item.item1}</li>
                                    <li className="pl-2">{item.item2}</li>
                                    <li className="pl-2">{item?.item3}</li>
                                </ul>
                            })
                        }
                    </div>
        
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
                        <span>2024. Todos los derechos reservados</span>
                        <a href="#footer" className="hover:underline hover:cursor-pointer hover:text-red-500">Desarrollado por DevSoul</a>
                        <div className="text-black">
                            <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-red-500 duration-300"><FaLinkedinIn /></span>
                            <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-red-500 duration-300"><FaInstagram /></span>
                        </div>
                    </div>
                </footer>
            )
        }
export default Footer