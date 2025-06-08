"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const IMCCalculator = () => {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setImc] = useState<number | null>(null);
  const [classificacao, setClassificacao] = useState("");

  const calcularIMC = () => {
    const alturaNum = parseFloat(altura);
    const pesoNum = parseFloat(peso);

    if (alturaNum > 0 && pesoNum > 0) {
      const imcCalculado = pesoNum / (alturaNum * alturaNum);
      setImc(imcCalculado);

      // Classificação do IMC
      if (imcCalculado < 18.5) {
        setClassificacao("Abaixo do peso");
      } else if (imcCalculado < 25) {
        setClassificacao("Peso normal");
      } else if (imcCalculado < 30) {
        setClassificacao("Sobrepeso");
      } else if (imcCalculado < 35) {
        setClassificacao("Obesidade grau I");
      } else if (imcCalculado < 40) {
        setClassificacao("Obesidade grau II");
      } else {
        setClassificacao("Obesidade grau III");
      }
    }
  };

  const limparCampos = () => {
    setAltura("");
    setPeso("");
    setImc(null);
    setClassificacao("");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">
        Calculadora de IMC
      </h2>

      <div className="space-y-4">
        <div>
          <Label htmlFor="altura">Altura (metros)</Label>
          <Input
            id="altura"
            type="number"
            placeholder="Ex: 1.75"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            step="0.01"
            min="0"
          />
        </div>

        <div>
          <Label htmlFor="peso">Peso (kg)</Label>
          <Input
            id="peso"
            type="number"
            placeholder="Ex: 70"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            step="0.1"
            min="0"
          />
        </div>

        <div className="flex gap-2">
          <Button
            onClick={calcularIMC}
            className="flex-1"
            disabled={!altura || !peso}
          >
            CALCULAR
          </Button>
          <Button
            variant="outline"
            onClick={limparCampos}
            disabled={!altura && !peso && !imc}
          >
            Limpar
          </Button>
        </div>

        {imc && (
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold text-center mb-2">
              Resultado
            </h3>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                IMC: {imc.toFixed(2)}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {classificacao}
              </p>
            </div>
          </div>
        )}

        <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          <p className="font-semibold mb-1">Classificação IMC:</p>
          <ul className="space-y-1">
            <li>• Abaixo de 18,5: Abaixo do peso</li>
            <li>• 18,5 - 24,9: Peso normal</li>
            <li>• 25,0 - 29,9: Sobrepeso</li>
            <li>• 30,0 - 34,9: Obesidade grau I</li>
            <li>• 35,0 - 39,9: Obesidade grau II</li>
            <li>• Acima de 40,0: Obesidade grau III</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IMCCalculator;
