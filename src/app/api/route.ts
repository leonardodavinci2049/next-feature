export async function GET() {
  try {
    const apiKey = process.env.ORIGAMID_KEY;
    
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "ORIGAMID_KEY não configurada" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  
    const vendas = await fetch('https://api.origamid.online/vendas', {
      headers: {
        "apikey": apiKey,
      },
    });

    if (!vendas.ok) {
      throw new Error(`Erro na API: ${vendas.status}`);
    }

    const data = await vendas.json();
    
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

 
  } catch (error) {
    console.error("Erro ao buscar cursos:", error);
    return new Response(JSON.stringify({ error: "Erro ao buscar as vendas" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}