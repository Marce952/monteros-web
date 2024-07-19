import conn from "@/lib/db";

export async function GET(request, { params }) {
    try {
        const { id } = params
        const { rows: entidades } = await conn.query('SELECT * FROM entidades where id = $1', [id]);
        return Response.json(entidades[0]);
    } catch (error) {
        console.error('Error fetching entidad:', error);
        return new res(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

export async function PUT(request, { params }) {
    try {
        const { id } = params
        const { nombre, descripcion, texto_complementario, imagen_principal, imagenes, ubicacion, tipo, etiquetas } = await request.json()

        await conn.query(
            `UPDATE entidades 
            SET nombre = $1, descripcion = $2, texto_complementario = $3, imagen_principal = $4, imagenes = $5, ubicacion = $6,
            tipo = $7, etiquetas = $8 WHERE id = $9`, [
            nombre, descripcion, texto_complementario, imagen_principal, imagenes, ubicacion, tipo, etiquetas, id]
        );

        return Response.json({})

    } catch (error) {
        console.error('Error al actualizar la Entidad:', error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}
