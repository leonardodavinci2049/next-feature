"use client";

import React from "react";
import { TrendingUp, BarChart3, PieChart } from "lucide-react";

// Dados simulados para os gráficos
const monthlyData = [
  { month: "Jan", sales: 12000, users: 400 },
  { month: "Fev", sales: 19000, users: 300 },
  { month: "Mar", sales: 15000, users: 500 },
  { month: "Abr", sales: 25000, users: 200 },
  { month: "Mai", sales: 22000, users: 278 },
  { month: "Jun", sales: 30000, users: 189 },
];

const categoryData = [
  { name: "Eletrônicos", value: 35, color: "bg-blue-500" },
  { name: "Roupas", value: 25, color: "bg-green-500" },
  { name: "Casa", value: 20, color: "bg-yellow-500" },
  { name: "Livros", value: 15, color: "bg-red-500" },
  { name: "Outros", value: 5, color: "bg-purple-500" },
];

export function DashboardCharts() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Gráfico de Vendas */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold">Vendas Mensais</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Evolução das vendas nos últimos 6 meses
          </p>
          <div className="space-y-3">
            {monthlyData.map((item) => (
              <div
                key={item.month}
                className="flex items-center justify-between"
              >
                <span className="text-sm font-medium">{item.month}</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-secondary rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${(item.sales / 30000) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-16 text-right">
                    R$ {(item.sales / 1000).toFixed(0)}k
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gráfico de Pizza - Categorias */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <PieChart className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold">Vendas por Categoria</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Distribuição das vendas por categoria
          </p>
          <div className="space-y-3">
            {categoryData.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded-full ${item.color}`} />
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-24 bg-secondary rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${item.color}`}
                      style={{ width: `${item.value * 2}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-12 text-right">
                    {item.value}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gráfico de Usuários */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 md:col-span-2">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold">Crescimento de Usuários</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Novos usuários cadastrados por mês
          </p>

          <div className="grid grid-cols-6 gap-4 h-32 items-end">
            {monthlyData.map((item) => (
              <div
                key={item.month}
                className="flex flex-col items-center gap-2"
              >
                <div
                  className="w-8 bg-primary rounded-t"
                  style={{ height: `${(item.users / 500) * 100}%` }}
                />
                <span className="text-xs text-muted-foreground">
                  {item.month}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center pt-4 border-t">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span className="text-sm text-green-600">
                +15.3% crescimento este mês
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
