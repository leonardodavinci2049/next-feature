import { cookies } from "next/headers";
import { NextRequest } from "next/server";

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


export async function POST(request: NextRequest) {
  try {
    
  const param = await request.nextUrl.searchParams;
  const vlParamBusca = param.get("busca");


  return new Response(JSON.stringify({"busca": vlParamBusca }), {
    headers: { "Content-Type": "application/json" },
  });



  } catch (error) {
    console.error("Erro ao atualizar perfil:", error);
    return new Response(JSON.stringify({ error: "Erro ao atualizar perfil" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}