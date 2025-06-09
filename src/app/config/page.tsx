"use client";

import { DashboardHeader } from "@/app/dashboard/components/dashboard-header";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Settings, User, Bell, Shield, Palette, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ConfigPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <DashboardHeader />

      <div className="space-y-4">
        <Breadcrumbs items={[{ label: "Configurações" }]} />

        <div className="grid gap-6">
          {/* Header */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <div className="flex items-center gap-2 mb-2">
              <Settings className="h-6 w-6 text-primary" />
              <h1 className="text-3xl font-bold tracking-tight">
                Configurações
              </h1>
            </div>
            <p className="text-muted-foreground">
              Gerencie suas preferências e configurações da conta
            </p>
          </div>

          {/* Configurações do Perfil */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
              <User className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Perfil</h2>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" placeholder="Seu nome completo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Biografia</Label>
                <Input id="bio" placeholder="Uma breve descrição sobre você" />
              </div>
              <Button>Salvar Alterações</Button>
            </div>
          </div>

          {/* Notificações */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
              <Bell className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Notificações</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">E-mail de novidades</p>
                  <p className="text-sm text-muted-foreground">
                    Receba atualizações sobre novos recursos
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Ativado
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Notificações push</p>
                  <p className="text-sm text-muted-foreground">
                    Receba notificações no navegador
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Desativado
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Relatórios semanais</p>
                  <p className="text-sm text-muted-foreground">
                    Resumo semanal das suas atividades
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Ativado
                </Button>
              </div>
            </div>
          </div>

          {/* Aparência */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
              <Palette className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Aparência</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Tema</p>
                  <p className="text-sm text-muted-foreground">
                    Escolha entre claro, escuro ou automático
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Claro
                  </Button>
                  <Button variant="outline" size="sm">
                    Escuro
                  </Button>
                  <Button size="sm">Auto</Button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Compactar sidebar</p>
                  <p className="text-sm text-muted-foreground">
                    Reduzir o tamanho da barra lateral
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Desativado
                </Button>
              </div>
            </div>
          </div>

          {/* Segurança */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Segurança</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Autenticação de dois fatores</p>
                  <p className="text-sm text-muted-foreground">
                    Adicione uma camada extra de segurança
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Configurar
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Alterar senha</p>
                  <p className="text-sm text-muted-foreground">
                    Atualize sua senha regularmente
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Alterar
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Sessões ativas</p>
                  <p className="text-sm text-muted-foreground">
                    Veja e gerencie suas sessões ativas
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Ver Sessões
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
