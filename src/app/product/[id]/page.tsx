import React from "react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const page = async ({ params }: PageProps) => {
  const resolvedParams = await params;

  // Verificar se está no servidor
  if (typeof window === "undefined") {
    console.log("SERVIDOR - params", resolvedParams);
    console.log("SERVIDOR - id do produto", resolvedParams.id);
  }

  return (
    <div>
      <h1>Page Product</h1>
      <p>ID do Produto: {resolvedParams.id}</p>
    </div>
  );
};

export default page;
