import React from "react";
import {
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Users,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";

interface QuickStat {
  title: string;
  value: string;
  change: number;
  changeLabel: string;
  icon: React.ReactNode;
  color: string;
}

const quickStats: QuickStat[] = [
  {
    title: "Receita Diária",
    value: "R$ 2.847",
    change: 8.2,
    changeLabel: "vs ontem",
    icon: <DollarSign className="h-5 w-5" />,
    color: "text-green-600",
  },
  {
    title: "Novos Usuários",
    value: "124",
    change: -2.1,
    changeLabel: "vs ontem",
    icon: <Users className="h-5 w-5" />,
    color: "text-blue-600",
  },
  {
    title: "Pedidos Hoje",
    value: "67",
    change: 15.3,
    changeLabel: "vs ontem",
    icon: <ShoppingCart className="h-5 w-5" />,
    color: "text-purple-600",
  },
  {
    title: "Taxa de Crescimento",
    value: "12.5%",
    change: 4.7,
    changeLabel: "este mês",
    icon: <TrendingUp className="h-5 w-5" />,
    color: "text-orange-600",
  },
];

export function QuickStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {quickStats.map((stat, index) => (
        <div
          key={index}
          className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div className={`p-2 rounded-full bg-background ${stat.color}`}>
              {stat.icon}
            </div>
            <div className="flex items-center text-sm">
              {stat.change >= 0 ? (
                <ArrowUpRight className="h-4 w-4 text-green-600" />
              ) : (
                <ArrowDownRight className="h-4 w-4 text-red-600" />
              )}
              <span
                className={`ml-1 font-medium ${
                  stat.change >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {stat.change >= 0 ? "+" : ""}
                {stat.change}%
              </span>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-sm text-muted-foreground mt-1">{stat.title}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {stat.changeLabel}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
