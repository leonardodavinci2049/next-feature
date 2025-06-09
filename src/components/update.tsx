"use client";

import { Button } from "./ui/button";
import { revalidatePathAction } from "@/actions/revalidate-path";

const UpdateUrlButton = () => {
  async function handleUpdate() {
    console.log("Update URL API");
    // Aqui você pode adicionar a lógica para atualizar a URL da API
    // Por exemplo, fazer uma chamada para um endpoint que atualiza a URL
    revalidatePathAction("/acoes"); // Revalida o caminho para garantir que a página seja atualizada
  }

  return (
    <Button
      variant={"destructive"}
      onClick={handleUpdate}
      className="cursor-pointer"
    >
      Update URL API
    </Button>
  );
};

export default UpdateUrlButton;
