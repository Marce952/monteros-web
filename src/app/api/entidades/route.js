import conn from "@/lib/db";

export async function GET(req, res) {
    const { rows: entidades } = await conn.query('SELECT * FROM entidades');
    return res.json({ entidades })
}

export async function POST() {
    const { nombre, descripcion, texto_complementario, imagen_principal, imagenes, ubicacion, tipo } = await req.json()

    await conn.query(`INSERT INTO entidades (nombre, descripcion, texto_complementario, imagen_principal, imagenes, ubicacion, tipo)
        VALUES ($1,$2,$3,$4,$5,$6,$7)`, [nombre, descripcion, texto_complementario, imagen_principal, imagenes, ubicacion, tipo])

    return res.json()
}