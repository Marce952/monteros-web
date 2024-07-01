"use client"
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

const Informacion = () => {
    return (
        <div className="bg-white flex flex-col items-center w-full max-md:max-w-full">
            <div className="min-w-full px-32">
                <div className='flex justify-center items-center w-full my-10'>
                    <h1>Estatus de las madres</h1>
                </div>
                <Card className="mt-0">
                    <CardBody className="grid gap-4">
                        <div>
                            <img
                                className="h-auto w-full max-w-full rounded-lg md:h-[480px] object-contain cursor-pointer"
                                alt=""
                            />
                        </div>
                        {/* <div className="flex flex-row gap-5">
                            {data.imagenes && [data.imagen_principal, ...data.imagenes].map((imgelink, index) => (
                                <div key={index}>
                                    <img
                                        onClick={() => setActive(imgelink)}
                                        src={imgelink}
                                        className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                                        alt="gallery-image"
                                    />
                                </div>
                            ))}
                        </div> */}
                    </CardBody>


                </Card>

                <Card className="mt-5 gap-8">
                    <CardBody className="grid gap-4">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatem tempora doloribus? Velit deserunt ducimus pariatur vel temporibus nihil, voluptatum amet qui nostrum veritatis repellat ad cum non suscipit dolores.

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni non maxime deleniti ipsam, magnam nemo quis molestiae, totam delectus voluptatem, at expedita sapiente ab alias nulla eos. Fugit, minima itaque.
                            Minima ad aspernatur fuga nam maxime suscipit! Commodi recusandae modi consequuntur ducimus a quas dolorum est aut consectetur, quaerat, nam consequatur dolore. Harum corporis numquam sint, vitae vero rem dignissimos.
                            Id rerum quis accusamus, earum fuga illum sed fugiat vitae blanditiis! At, quasi magnam quod doloribus harum atque ratione incidunt quia nihil inventore. Quasi optio hic cupiditate, voluptatum molestiae aliquid.
                            Molestiae fuga error libero neque autem praesentium, exercitationem perferendis iure, suscipit distinctio ducimus odit mollitia tempora amet, alias nesciunt sequi quibusdam dolore dignissimos asperiores! Quaerat recusandae nam maiores aspernatur dicta.
                            Eos quaerat quasi aliquid vero corporis consequatur. Porro, eius provident. Eveniet laborum enim sunt molestias vitae delectus libero quaerat omnis odit quibusdam doloribus incidunt a nemo impedit, sequi consectetur nulla.
                        </p>
                    </CardBody>

                    <CardBody className="grid gap-4 mt-5">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d443.71489016576317!2d-65.49706181865893!3d-27.165126288979327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1719847342709!5m2!1ses-419!2sar" className='w-full h-9/12' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </CardBody>

                    <CardBody className="grid gap-4">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatem tempora doloribus? Velit deserunt ducimus pariatur vel temporibus nihil, voluptatum amet qui nostrum veritatis repellat ad cum non suscipit dolores.

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni non maxime deleniti ipsam, magnam nemo quis molestiae, totam delectus voluptatem, at expedita sapiente ab alias nulla eos. Fugit, minima itaque.
                            Minima ad aspernatur fuga nam maxime suscipit! Commodi recusandae modi consequuntur ducimus a quas dolorum est aut consectetur, quaerat, nam consequatur dolore. Harum corporis numquam sint, vitae vero rem dignissimos.
                            Id rerum quis accusamus, earum fuga illum sed fugiat vitae blanditiis! At, quasi magnam quod doloribus harum atque ratione incidunt quia nihil inventore. Quasi optio hic cupiditate, voluptatum molestiae aliquid.
                            Molestiae fuga error libero neque autem praesentium, exercitationem perferendis iure, suscipit distinctio ducimus odit mollitia tempora amet, alias nesciunt sequi quibusdam dolore dignissimos asperiores! Quaerat recusandae nam maiores aspernatur dicta.
                            Eos quaerat quasi aliquid vero corporis consequatur. Porro, eius provident. Eveniet laborum enim sunt molestias vitae delectus libero quaerat omnis odit quibusdam doloribus incidunt a nemo impedit, sequi consectetur nulla.
                        </p>
                    </CardBody>
                </Card>

            </div>
            {/* {(
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-75">
                    <img
                        className="h-auto max-w-full max-h-full object-contain"
                        alt=""
                    />
                </div>
            )} */}
        </div>
    )
}

export default Informacion