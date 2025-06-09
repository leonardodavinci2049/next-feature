import React from "react";
import AddProduct from "./components/AddProduct";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const AddProductPage = () => {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
   

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Breadcrumbs
            items={[
              { label: "Produtos", href: "/product" },
              { label: "Adicionar Produto" },
            ]}
          />
          <Link href="/product">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
        </div>

        <AddProduct />
      </div>
    </div>
  );
};

export default AddProductPage;
