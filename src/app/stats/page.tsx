import { DashboardHeader } from "@/app/dashboard/components/dashboard-header";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BarChart3, TrendingUp, Users, DollarSign } from "lucide-react";

export default function StatsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <DashboardHeader />

      <div className="space-y-4">
        <Breadcrumbs items={[{ label: "Estatísticas" }]} />

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="h-6 w-6 text-primary" />
                <h1 className="text-3xl font-bold tracking-tight">
                  Estatísticas
                </h1>
              </div>
              <p className="text-muted-foreground">
                Análise detalhada do desempenho e métricas importantes
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border p-6">
              <div className="flex items-center justify-between">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="text-sm text-green-600">+12%</span>
              </div>
              <div className="mt-2">
                <h3 className="text-2xl font-bold">1,234</h3>
                <p className="text-sm text-muted-foreground">Usuários Totais</p>
              </div>
            </div>

            <div className="rounded-lg border p-6">
              <div className="flex items-center justify-between">
                <DollarSign className="h-5 w-5 text-green-600" />
                <span className="text-sm text-green-600">+8%</span>
              </div>
              <div className="mt-2">
                <h3 className="text-2xl font-bold">R$ 45,231</h3>
                <p className="text-sm text-muted-foreground">Receita Total</p>
              </div>
            </div>

            <div className="rounded-lg border p-6">
              <div className="flex items-center justify-between">
                <TrendingUp className="h-5 w-5 text-orange-600" />
                <span className="text-sm text-green-600">+23%</span>
              </div>
              <div className="mt-2">
                <h3 className="text-2xl font-bold">892</h3>
                <p className="text-sm text-muted-foreground">Conversões</p>
              </div>
            </div>

            <div className="rounded-lg border p-6">
              <div className="flex items-center justify-between">
                <BarChart3 className="h-5 w-5 text-purple-600" />
                <span className="text-sm text-red-600">-3%</span>
              </div>
              <div className="mt-2">
                <h3 className="text-2xl font-bold">67%</h3>
                <p className="text-sm text-muted-foreground">Taxa de Sucesso</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">
              Relatórios Detalhados
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <span className="font-medium">Relatório Mensal de Vendas</span>
                <span className="text-sm text-muted-foreground">
                  Junho 2025
                </span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <span className="font-medium">
                  Análise de Comportamento do Usuário
                </span>
                <span className="text-sm text-muted-foreground">
                  Última semana
                </span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <span className="font-medium">Performance de Produtos</span>
                <span className="text-sm text-muted-foreground">
                  Trimestre Q2
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
