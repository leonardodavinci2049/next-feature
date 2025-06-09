import LoadingProdutos from "@/app/product/components/LoadingProdutos";
import ProdutosList from "@/app/product/components/ProdutosList";
import { DashboardHeader } from "@/app/dashboard/components/dashboard-header";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { fetchProdutos } from "@/services/api/server-fetch";
import { Suspense } from "react";

const page = async () => {
  try {
    const produtos = await fetchProdutos();

    return (
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <DashboardHeader />

        <div className="space-y-4">
          <Breadcrumbs items={[{ label: "Produtos" }]} />

          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Produtos</h1>
                <p className="text-muted-foreground">
                  Gerencie todos os seus produtos aqui
                </p>
              </div>
            </div>

            <Suspense fallback={<LoadingProdutos />}>
              <ProdutosList produtos={produtos} />
            </Suspense>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Erro ao carregar produtos:", error);
    return (
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <DashboardHeader />

        <div className="space-y-4">
          <Breadcrumbs items={[{ label: "Produtos" }]} />

          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-red-600 mb-4">
                Erro ao carregar produtos
              </h1>
              <p className="text-muted-foreground mb-6">
                Não foi possível carregar os produtos. Tente novamente mais
                tarde.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-md transition-colors"
              >
                Tentar Novamente
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default page;
