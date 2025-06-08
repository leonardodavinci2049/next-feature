import LoadingProdutos from "@/app/product/components/LoadingProdutos";
import ProdutosList from "@/app/product/components/ProdutosList";
import { fetchProdutos } from "@/services/api/server-fetch";
import { Suspense } from "react";

const page = async () => {
  try {
    const produtos = await fetchProdutos();

    return (
      <main className="min-h-screen bg-gray-50 py-8">
        <Suspense fallback={<LoadingProdutos />}>
          <ProdutosList produtos={produtos} />
        </Suspense>
      </main>
    );
  } catch (error) {
    console.error("Erro ao carregar produtos:", error);
    return (
      <main className="min-h-screen bg-gray-50 py-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Erro ao carregar produtos
          </h1>
          <p className="text-gray-600 mb-6">
            Não foi possível carregar os produtos. Tente novamente mais tarde.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
          >
            Tentar Novamente
          </button>
        </div>
      </main>
    );
  }
};

export default page;
