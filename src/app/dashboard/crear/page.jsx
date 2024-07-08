'use client'
import { Button, Image, Input, Select, SelectItem } from '@nextui-org/react'
import axios from 'axios'
import React, { useState } from 'react'

const page = () => {

  const [entidades, setEntidades] = useState({
    nombre: '',
    descripcion: '',
    texto_complementario: '',
    imagen_principal: '',
    imagenes: [],
    ubicacion: '',
    tipo: '',
    etiquetas: []
  })

  const tipos = [
    { key: 'estatua', label: 'Estatua' },
    { key: 'iglesia', label: 'Iglesia' },
    { key: 'plaza', label: 'Plaza' },
    { key: 'escuela', label: 'Escuela' }
  ]


  const handleChange = ({ target }) => {  
    const { name, value } = target;

    setEntidades(prev => ({
      ...prev,
      [name]: name === 'etiquetas' ? value.split(';') : value
    }));
  };

  const post = async () => {
    try {
      await axios.post('/api/entidades', entidades)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full h-screen">
      {/* <ModalComponent
                isOpen={isOpen}
                onClose={onClose}
                modalChange={modalChange}W
            /> */}
      <div className="w-full h-full bg-white flex flex-col p-5 gap-5">
        <div className="w-full">
          <div className="flex flex-row flex-wrap gap-5 w-screen">

            <div className="flex flex-row gap-5 flex-wrap">
              <div className="flex flex-col">
                <h1>Imagen principal</h1>
                {
                  entidades?.imagen_principal ?
                    <div className="m-3 h-auto w-auto bg-gray-50 flex justify-evenly gap-5 flex-col items-center ">
                      <div className="flex relative">
                        {
                          entidades?.imagen_principal &&
                          <div className="flex absolute top-0 left-0 h-full w-full  z-50 items-center justify-center hover:bg-red-500 hover:bg-opacity-75 transition-all cursor-pointer">
                            <div className="flex text-4xl "><FaRegTrashAlt /></div>
                          </div>
                        }
                        <Image
                          className="object-contain max-h-64 max-w-64"
                          isZoomed
                          alt="NextUI Fruit Image with Zoom"
                          src={entidades?.imagen_principal || 'https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Begrippenlijst-800x450.webp'}
                        />
                      </div>
                    </div>
                    :
                    <div className="relative flex items-center justify-center m-3">

                      <div className="flex items-center justify-center w-full">
                        <label for="dropzone-file" className="flex flex-col items-center justify-center px-5 w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click para cargar una imagen</span></p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
                          </div>
                          <input id="dropzone-file" type="file" className="hidden" name="imagen_principal" onChange={''} />
                        </label>
                      </div>

                    </div>
                }
              </div>

              <div className="flex flex-col">
                <h1>Mas imagenes</h1>

                <div className="flex flex-row">
                  {/* {
                                        entidades?.imagenes.map((img, i) => (
                                            <div className="m-3 w-auto bg-gray-50 flex justify-evenly gap-5 flex-col items-center ">
                                                <div className="flex relative">
                                                    <div className="flex absolute top-0 left-0 h-full w-full  z-50 items-center justify-center hover:bg-red-500 hover:bg-opacity-75 transition-all cursor-pointer" onClick={() => handleDeleteImage('imagenes', i)}>
                                                        {/* <div className="flex text-4xl "><FaRegTrashAlt /></div>
                                                    </div>
                                                    <Image
                                                        className="object-contain max-h-64 max-w-64"
                                                        isZoomed
                                                        alt="NextUI Fruit Image with Zoom"
                                                        src={img || 'https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Begrippenlijst-800x450.webp'}
                                                    />
                                                </div>
                                            </div>
                                        ))
                                    } */}
                </div>
              </div>

              <div className="relative flex items-center justify-center  m-3">

                <div className="flex items-center justify-center w-full">
                  <label for="dropzone-file" className="flex flex-col items-center justify-center px-5 w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click para cargar una imagen</span></p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" name="imagenes" onChange={''} />
                  </label>
                </div>
              </div>
              <div className="m-auto">
                {
                  entidades?.estado === 'Disponible' ?
                    (
                      <Button
                        color="danger"
                        variant="bordered"
                        isDisabled={!entidades?.id}
                        startContent={<CiBadgeDollar />}
                        onPress={''}
                      >
                        ¿Vendido?
                      </Button>
                    )
                    :
                    (
                      <Button
                        color="danger"
                        variant="bordered"
                        isDisabled={!entidades?.id}
                        // startContent={<CiBadgeDollar />}
                        onPress={''}
                      >
                        Volver a activar
                      </Button>
                    )
                }
              </div>
            </div>

          </div>
        </div>

        {/* Entidades */}

        <div className="w-full">
          <div className="flex flex-row flex-wrap gap-5 w-full pb-10">

            {
              entidades?.estado === 'No disponible' && (
                <div>
                  <p className="text-4xl font-bold text-pink-600">ESTA PROPIEDAD ESTÁ VENDIDA</p>
                </div>
              )
            }

            <div className="flex flex-col gap-5 flex-wrap w-full">
              <div className="flex flex-row gap-5">
                <Input
                  type="text"
                  label="Nombre"
                  variant="underline"
                  isInvalid={false}
                  name="nombre"
                  value={entidades.nombre}
                  onChange={handleChange}
                />

                <Input
                  type="text"
                  label="Descripcion"
                  variant="bordered"
                  defaultValue=""
                  isInvalid={false}
                  name="descripcion"
                  onChange={handleChange}
                  value={entidades?.descripcion}
                />
              </div>

              <div className="flex flex-row gap-5">
                <Input
                  type="text"
                  label="Texto Complementario"
                  variant="bordered"
                  isInvalid={false}
                  name="texto_complementario"
                  onChange={handleChange}
                  value={entidades?.texto_complementario}
                />

                <Input
                  type="text"
                  label="Ubicacion"
                  variant="bordered"
                  defaultValue=""
                  isInvalid={false}
                  errorMessage=""
                  name="ubicacion"
                  onChange={handleChange}
                  value={entidades?.ubicacion}
                />
              </div>

              <div className="flex flex-row gap-5">
                <Select
                  variant='bordered'
                  label="Selecciona el tipo"
                  name='tipo'
                  value={entidades?.tipo}
                  onChange={handleChange}
                >
                  {tipos.map((tipo, i) => (
                    <SelectItem key={tipo.key}>
                      {tipo.label}
                    </SelectItem>
                  ))}
                </Select>

                <Input
                  type="text"
                  label="Etiquetas"
                  placeholder='Separar con ;'
                  variant="bordered"
                  isInvalid={false}
                  name="etiquetas"
                  onChange={handleChange}
                  value={entidades.etiquetas.join(';')}
                />
              </div>
            </div>


            <div className="flex items-end w-full justify-end">
              <Button onClick={post}>Guardar cambios</Button>
            </div>
          </div>
        </div>

      </div>
    </div >
  )
}

export default page