## Monteros Web — Contexto del proyecto

## Stack
Next.js 15+, TypeScript, NextAuth v5, Tailwind CSS, Hero UI.

## Codigo
- Código legible, bien estructurado y modular.
- Fácil de entender y mantener por cualquier equipo de desarrollo.
- Uso de best practices, patrones de diseño y componentes reutilizables de Hero UI.

## Convenciones
- Server Actions: Ubicados en archivos dentro de actions/*.ts.
- Componentes UI: Componentes base y de Hero UI en components/ui/.
- Tipos: Definiciones globales de TypeScript en types/index.ts.
- Variables de entorno: Configuraciones sensibles en .env.local.
- Rutas Especiales: La sección /rodo-bulacio mantiene una lógica de diseño independiente (Dark Mode/Naranja).

## Base de datos
- Motor: PostgreSQL.
- ORM: Prisma, con el cliente configurado en lib/prisma.ts.
- Entidades: Gestión de monumentos, escuelas, iglesias y archivos del museo digital.

## Idioma
- Comentarios del código y mensajes de la interfaz de usuario en español (Argentina).

## Contexto de Negocio
- Propósito: Plataforma cultural de la ciudad de Monteros para la gestión de entidades históricas y homenaje al artista Rodo Bulacio.
- Roles: Usuarios públicos (lectura) y administradores (creación de contenido y carga de imágenes).
- Identidad Visual: Uso estricto de fuentes Fraunces y DM Sans con paleta de colores corporativa (#8906e6, #000, #FFF, #FFA500).