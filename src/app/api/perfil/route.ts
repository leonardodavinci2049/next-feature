import { cookies } from "next/headers";

const API_URL = process.env.API_URL;

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token");

    console.log("Token:", token);

    const response = await fetch(`${API_URL}/conta/perfil`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token?.value}`,
      },
    });
    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Erro na API lOGIN" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const data = await response.json();

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
