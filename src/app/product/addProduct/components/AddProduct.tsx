"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ActionAddProduct } from "../action/ActionAddProduct";
// import LoadingForm from "./LoadingForm";
import ProductPreview from "./ProductPreview";
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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { DollarSign, Package, FileText, Hash } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  nome: z
    .string()
    .min(1, "Nome é obrigatório")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  preco: z
    .string()
    .min(1, "Preço é obrigatório")
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) > 0,
      "Preço deve ser um número positivo"
    ),
  descricao: z
    .string()
    .min(1, "Descrição é obrigatória")
    .max(500, "Descrição deve ter no máximo 500 caracteres"),
  estoque: z
    .string()
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) >= 0,
      "Estoque deve ser um número positivo ou zero"
    ),
  importado: z.boolean(),
});

type FormData = z.infer<typeof formSchema>;

const AddProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [previewData, setPreviewData] = useState<FormData | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      preco: "",
      descricao: "",
      estoque: "0",
      importado: false,
    },
  });

  // Calcular progresso do formulário
  const watchedValues = form.watch();
  const calculateProgress = () => {
    let filled = 0;
    if (watchedValues.nome?.length > 0) filled++;
    if (watchedValues.preco?.length > 0) filled++;
    if (watchedValues.descricao?.length > 0) filled++;
    if (watchedValues.estoque?.length > 0) filled++;
    return (filled / 4) * 100;
  };

  const progress = calculateProgress();

  async function onSubmit(values: FormData) {
    // Mostrar preview primeiro
    setPreviewData(values);
    setShowPreview(true);
    setError(null);
  }

  async function handleConfirmSubmit() {
    if (!previewData) return;

    try {
      setIsLoading(true);
      setError(null);

      const formData = new FormData();
      formData.append("nome", previewData.nome);
      formData.append("preco", previewData.preco);
      formData.append("descricao", previewData.descricao);
      formData.append("estoque", previewData.estoque);
      if (previewData.importado) {
        formData.append("importado", "true");
      }

      await ActionAddProduct(formData);

      toast.success("Produto adicionado com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
      setError("Erro ao adicionar produto. Tente novamente.");
      toast.error("Erro ao adicionar produto. Tente novamente.");
      setShowPreview(false); // Voltar para o formulário em caso de erro
    } finally {
      setIsLoading(false);
    }
  }

  function handleEditProduct() {
    setShowPreview(false);
    setError(null);
  }

  // Mostrar loading form durante o envio
  if (isLoading) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
            Adicionando Produto...
          </CardTitle>
          <CardDescription>
            Processando suas informações e salvando no sistema...
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full animate-pulse"
                style={{ width: "75%" }}
              ></div>
            </div>
            <div className="flex items-center justify-center text-sm text-gray-600">
              <Package className="h-4 w-4 mr-2" />
              Validando dados do produto...
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Mostrar preview se solicitado
  if (showPreview && previewData) {
    return (
      <ProductPreview
        data={previewData}
        onEdit={handleEditProduct}
        onConfirm={handleConfirmSubmit}
        isLoading={isLoading}
      />
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <div>
            <CardTitle>Adicionar Novo Produto</CardTitle>
            <CardDescription>
              Preencha as informações do produto para adicioná-lo ao sistema
            </CardDescription>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 mb-1">
              Progresso: {Math.round(progress)}%
            </div>
            <div className="w-20 bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        {progress > 0 && progress < 100 && (
          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-blue-700 text-sm">
              💡 <strong>Dica:</strong> Preencha todos os campos obrigatórios
              para habilitar a revisão do produto.
            </p>
          </div>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    Nome do Produto
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o nome do produto" {...field} />
                  </FormControl>
                  <FormDescription>
                    Nome que identificará o produto no sistema
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="preco"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    Preço
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        className="pl-8"
                        {...field}
                      />
                      <DollarSign className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                  </FormControl>
                  <FormDescription>
                    Preço de venda do produto em R$
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="descricao"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Descrição
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Digite a descrição detalhada do produto"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Descrição completa das características do produto
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="estoque"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Hash className="h-4 w-4" />
                    Estoque
                  </FormLabel>
                  <FormControl>
                    <Input type="number" min="0" placeholder="0" {...field} />
                  </FormControl>
                  <FormDescription>
                    Quantidade inicial em estoque
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="importado"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Produto Importado</FormLabel>
                    <FormDescription>
                      Marque se este produto é importado do exterior
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

            <div className="flex gap-4">
              <Button
                type="submit"
                className="flex-1"
                disabled={progress < 100}
              >
                {progress < 100
                  ? `Complete o formulário (${Math.round(progress)}%)`
                  : "Revisar Produto"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  form.reset();
                  setError(null);
                  setShowPreview(false);
                }}
                className="flex-1"
              >
                Limpar
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AddProduct;
