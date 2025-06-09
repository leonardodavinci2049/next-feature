"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const API_URL = process.env.API_URL;

export async function ActionAddProduct(formData: FormData) {
  try {

     const product = {
      nome: formData.get('nome'),
      descricao: formData.get('descricao'),
      preco: parseFloat(formData.get('preco') as string),
      estoque: parseInt(formData.get('estoque') as string) || 0,
      importado: formData.get('importado') ? 1 : 0,
    };    


 const response = await fetch(`${API_URL}/produtos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error('Failed to add product');
    }

  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }

  revalidatePath('/product'); // Revalida a rota de produtos para atualizar a lista
  redirect('/product'); // Redireciona para a página de produtos após adicionar
}
