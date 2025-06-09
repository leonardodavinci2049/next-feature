"use client";

import SetCookie1 from "@/actions/SetCookie";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

const SetCookiePage = () => {
  const [valor, setValor] = useState("0");

  // Função para ler o cookie quando o componente carrega
  useEffect(() => {
    const getCookieValue = () => {
      const cookies = document.cookie.split(";");
      const cookie = cookies.find((c) => c.trim().startsWith("segredo="));
      if (cookie) {
        const value = cookie.split("=")[1];
        setValor(value);
      }
    };

    getCookieValue();
  }, []);

  async function handleSetCookie() {
    console.log("Cookie set");

    const valueDate = Math.floor(Date.now() / 1000);
    await SetCookie1("segredo", valueDate.toString());

    setValor(valueDate.toString());
  }
  return (
    <>
      <div> Valor Cookie</div>
      <h1>{valor}</h1>
      <Button variant="destructive" onClick={handleSetCookie}>
        Set Cookie
      </Button>
    </>
  );
};

export default SetCookiePage;
