import conn from "@/lib/db";

export async function GET() {
    const { rows: entidades } = await conn.query('SELECT * FROM entidades');
    return Response.json({ entidades })
}

export async function POST(request) {
    try {
        const { nombre, descripcion, texto_complementario, imagen_principal, imagenes, ubicacion, tipo, etiquetas } = await request.json()

        await conn.query(`INSERT INTO entidades (nombre, descripcion, texto_complementario, imagen_principal, imagenes, ubicacion, tipo, etiquetas)
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`, [nombre, descripcion, texto_complementario, imagen_principal, imagenes, ubicacion, tipo, etiquetas])

        return Response.json({})
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

}