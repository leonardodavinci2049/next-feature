import React from "react";
import IMCCalculator from "./components/IMCCalculator";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          Calculadora de Índice de Massa Corporal
        </h1>
        <IMCCalculator />
      </div>
    </div>
  );
};

export default page;
