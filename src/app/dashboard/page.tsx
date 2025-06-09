import React from "react";
import { DashboardLayout } from "@/components/dashboard-layout";
import {
  DashboardSection,
  DashboardGrid,
  DashboardCard,
} from "@/components/dashboard-components";
import { DashboardCharts } from "./components/dashboard-charts";
import { RecentActivities } from "./components/recent-activities";
import { QuickStats } from "./components/quick-stats";
import { WeatherWidget } from "./components/weather-widget";
import {
  Users,
  ShoppingCart,
  DollarSign,
  Activity,
  TrendingUp,
  Eye,
  Target,
} from "lucide-react";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Bem-vindo ao seu painel de controle
          </p>
        </div>

        {/* Estatísticas Rápidas */}
        <QuickStats />

        {/* Métricas Principais */}
        <DashboardSection
          title="Métricas Principais"
          description="Visão geral dos indicadores chave"
        >
          <DashboardGrid>
            <DashboardCard
              title="Total de Usuários"
              value="2,834"
              description="Usuários ativos na plataforma"
              icon={<Users className="h-4 w-4" />}
              trend={{
                value: 12.5,
                label: "desde o mês passado",
                positive: true,
              }}
            />
            <DashboardCard
              title="Vendas Totais"
              value="R$ 45,231"
              description="Receita do mês atual"
              icon={<DollarSign className="h-4 w-4" />}
              trend={{
                value: 8.2,
                label: "desde o mês passado",
                positive: true,
              }}
            />
            <DashboardCard
              title="Produtos Vendidos"
              value="1,234"
              description="Itens vendidos este mês"
              icon={<ShoppingCart className="h-4 w-4" />}
              trend={{
                value: -2.1,
                label: "desde o mês passado",
                positive: false,
              }}
            />
            <DashboardCard
              title="Taxa de Conversão"
              value="3.2%"
              description="Visitantes que compraram"
              icon={<Target className="h-4 w-4" />}
              trend={{
                value: 5.7,
                label: "desde o mês passado",
                positive: true,
              }}
            />
          </DashboardGrid>
        </DashboardSection>

        {/* Atividade Recente */}
        <DashboardSection
          title="Atividade Recente"
          description="Últimas interações e eventos"
        >
          <div className="grid gap-6 lg:grid-cols-4">
            <div className="lg:col-span-1 space-y-4">
              <DashboardCard
                title="Visualizações Hoje"
                value="12,543"
                description="Páginas visualizadas nas últimas 24h"
                icon={<Eye className="h-4 w-4" />}
              />
              <DashboardCard
                title="Performance do Site"
                value="98.2%"
                description="Uptime nas últimas 24h"
                icon={<Activity className="h-4 w-4" />}
              />
              <WeatherWidget />
            </div>
            <div className="lg:col-span-3">
              <RecentActivities />
            </div>
          </div>
        </DashboardSection>

        {/* Resumo de Vendas */}
        <DashboardSection
          title="Resumo de Vendas"
          description="Análise detalhada das vendas recentes"
        >
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Vendas por Categoria</h3>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-600">
                    +15.3% este mês
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Eletrônicos</span>
                  <span className="text-sm font-medium">R$ 18,450</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-[65%]"></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Roupas</span>
                  <span className="text-sm font-medium">R$ 12,230</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-[45%]"></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Casa & Jardim</span>
                  <span className="text-sm font-medium">R$ 8,750</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-[30%]"></div>
                </div>
              </div>
            </div>
          </div>
        </DashboardSection>

        {/* Gráficos e Análises */}
        <DashboardSection
          title="Análises e Relatórios"
          description="Visualizações detalhadas dos dados"
        >
          <DashboardCharts />
        </DashboardSection>

        {/* Estatísticas Rápidas */}
        <DashboardSection
          title="Estatísticas Rápidas"
          description="Visão geral das métricas importantes"
        >
          <QuickStats />
        </DashboardSection>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
