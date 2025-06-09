import React from "react";
import IMCCalculator from "./components/IMCCalculator";
import { DashboardHeader } from "@/app/dashboard/components/dashboard-header";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Calculator } from "lucide-react";

const page = () => {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <DashboardHeader />

      <div className="space-y-4">
        <Breadcrumbs items={[{ label: "IMC Calculator" }]} />

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Calculator className="h-6 w-6 text-primary" />
                <h1 className="text-3xl font-bold tracking-tight">
                  Calculadora de IMC
                </h1>
              </div>
              <p className="text-muted-foreground">
                Calcule seu Índice de Massa Corporal e obtenha informações sobre
                sua saúde
              </p>
            </div>
          </div>

          <IMCCalculator />
        </div>
      </div>
    </div>
  );
};

export default page;
