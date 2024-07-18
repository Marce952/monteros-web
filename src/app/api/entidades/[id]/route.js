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

