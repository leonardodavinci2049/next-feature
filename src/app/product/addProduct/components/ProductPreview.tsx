import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Package,
  DollarSign,
  FileText,
  Hash,
  Globe,
  ArrowLeft,
  Check,
} from "lucide-react";

interface ProductData {
  nome: string;
  preco: string;
  descricao: string;
  estoque: string;
  importado: boolean;
}

interface ProductPreviewProps {
  data: ProductData;
  onEdit: () => void;
  onConfirm: () => void;
  isLoading?: boolean;
}

const ProductPreview: React.FC<ProductPreviewProps> = ({
  data,
  onEdit,
  onConfirm,
  isLoading = false,
}) => {
  const formatPrice = (price: string) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(price));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Check className="h-5 w-5 text-green-600" />
          Confirmar Produto
        </CardTitle>
        <CardDescription>
          Revise as informações antes de adicionar o produto ao sistema
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4">
          <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
            <Package className="h-5 w-5 text-blue-600" />
            <div>
              <p className="font-medium text-sm text-gray-600">
                Nome do Produto
              </p>
              <p className="font-semibold">{data.nome}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
            <DollarSign className="h-5 w-5 text-green-600" />
            <div>
              <p className="font-medium text-sm text-gray-600">Preço</p>
              <p className="font-semibold text-green-700">
                {formatPrice(data.preco)}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
            <FileText className="h-5 w-5 text-purple-600 mt-1" />
            <div className="flex-1">
              <p className="font-medium text-sm text-gray-600">Descrição</p>
              <p className="text-gray-800 leading-relaxed">{data.descricao}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
            <Hash className="h-5 w-5 text-orange-600" />
            <div>
              <p className="font-medium text-sm text-gray-600">
                Estoque Inicial
              </p>
              <p className="font-semibold">{data.estoque} unidades</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
            <Globe className="h-5 w-5 text-indigo-600" />
            <div className="flex items-center gap-2">
              <p className="font-medium text-sm text-gray-600">Origem:</p>
              <Badge variant={data.importado ? "secondary" : "outline"}>
                {data.importado ? "Produto Importado" : "Produto Nacional"}
              </Badge>
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onEdit}
            className="flex-1"
            disabled={isLoading}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Editar
          </Button>
          <Button
            onClick={onConfirm}
            className="flex-1 bg-green-600 hover:bg-green-700"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Confirmando...
              </>
            ) : (
              <>
                <Check className="mr-2 h-4 w-4" />
                Confirmar e Adicionar
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductPreview;
