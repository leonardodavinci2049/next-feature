import { cookies } from "next/headers";

const API_URL = process.env.API_URL;
const API_USER = process.env.API_USER;
const API_SENHA = process.env.API_SENHA;

export async function GET() {
  try {
    const response = await fetch(`${API_URL}/conta/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: API_USER,
        password: API_SENHA,
      }),
    });
    if (!response.ok) {
     return new Response(JSON.stringify({ error: "Erro na API lOGIN" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
    }

    const data = await response.json();

    (await cookies()).set('token', data.token, { httpOnly: true });

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=3600", // Cache por 1 hora
      },
    });
  } catch (error) {
    console.error("Erro ao buscar cursos:", error);
    return new Response(JSON.stringify({ error: "Erro ao buscar cursos" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}