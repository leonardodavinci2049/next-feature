import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, Package, DollarSign, FileText, Hash } from "lucide-react";

const LoadingForm: React.FC = () => {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Adicionar Novo Produto</CardTitle>
        <CardDescription>
          Preencha as informações do produto para adicioná-lo ao sistema
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6 opacity-50">
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Nome do Produto
            </Label>
            <Input placeholder="Carregando..." disabled />
            <p className="text-xs text-muted-foreground">
              Nome que identificará o produto no sistema
            </p>
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Preço
            </Label>
            <div className="relative">
              <Input
                type="number"
                step="0.01"
                placeholder="Carregando..."
                disabled
                className="pl-8"
              />
              <DollarSign className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <p className="text-xs text-muted-foreground">
              Preço de venda do produto em R$
            </p>
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Descrição
            </Label>
            <Textarea placeholder="Carregando..." rows={4} disabled />
            <p className="text-xs text-muted-foreground">
              Descrição completa das características do produto
            </p>
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Hash className="h-4 w-4" />
              Estoque
            </Label>
            <Input type="number" min="0" placeholder="Carregando..." disabled />
            <p className="text-xs text-muted-foreground">
              Quantidade inicial em estoque
            </p>
          </div>

          <div className="flex items-center space-x-2 rounded-md border p-4 opacity-50">
            <input type="checkbox" disabled />
            <div>
              <Label>Produto Importado</Label>
              <p className="text-xs text-muted-foreground">
                Marque se este produto é importado do exterior
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Button disabled className="flex-1">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Adicionando...
            </Button>
            <Button variant="outline" disabled className="flex-1">
              Limpar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoadingForm;
