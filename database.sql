create table entidades(
id serial primary key,
nombre varchar(50) not null,
descripcion text not null,
texto_complementario text,
imagen_principal text,
imagenes TEXT[],
ubicacion text,
tipo varchar(30) not null,
etiquetas TEXT[]
);
