import UpdateUrlButton from "@/components/update";
import React from "react";

const API_URL = process.env.API_URL;

type ApiLuaResponse = {
  nome: string;
  preco: number;
  atualizada: string;
};

const ActionPage = async () => {
  const response = await fetch(`${API_URL}/acoes/lua`, {
    cache: "no-store", // Ensures the data is always fresh
    //cache: "force-cache", // Use cache for performance, but can be changed based on requirements
    //  next: { revalidate: 60 }, // Revalidate every 60 seconds
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const data = (await response.json()) as ApiLuaResponse;
  const DateNow = new Date().toLocaleString("pt-BR");

  return (
    <div>
      <h1>Action Lua</h1>
      <ul>
        <li>
          <strong>Nome:</strong> {data.nome} <br />{" "}
        </li>
        <li>
          <strong>Preço:</strong> {data.preco} <br />
        </li>
        <li>
          <strong>Atualizado:</strong> {data.atualizada} <br />
        </li>
        <li>
          <strong>Data:</strong> {DateNow} <br />
        </li>
      </ul>
      <div className="flex justify-center items-center mt-4">
        <UpdateUrlButton />
      </div>
    </div>
  );
};

export default ActionPage;
