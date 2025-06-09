"use client";

import { DashboardHeader } from "@/app/dashboard/components/dashboard-header";
import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <DashboardHeader />

      <div className="space-y-4">
        <Breadcrumbs items={[{ label: "Perfil" }]} />

        <div className="grid gap-6 md:grid-cols-3">
          {/* Informações do Perfil */}
          <div className="md:col-span-1">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <User className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-2">João Silva</h2>
                <p className="text-muted-foreground mb-4">
                  Desenvolvedor Full Stack
                </p>
                <Button className="w-full">Editar Perfil</Button>
              </div>

              <div className="mt-6 pt-6 border-t space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">joao@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">+55 11 99999-9999</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">São Paulo, SP</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Membro desde Jan 2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo Principal */}
          <div className="md:col-span-2 space-y-6">
            {/* Estatísticas */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">
                Estatísticas do Perfil
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-blue-600">23</div>
                  <div className="text-sm text-muted-foreground">Projetos</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-green-600">156</div>
                  <div className="text-sm text-muted-foreground">Tarefas</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-orange-600">8.5</div>
                  <div className="text-sm text-muted-foreground">Avaliação</div>
                </div>
              </div>
            </div>

            {/* Atividade Recente */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Atividade Recente</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Projeto Next.js atualizado</p>
                    <p className="text-sm text-muted-foreground">Há 2 horas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Tarefa completada</p>
                    <p className="text-sm text-muted-foreground">Há 4 horas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Novo comentário recebido</p>
                    <p className="text-sm text-muted-foreground">Há 1 dia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Conquistas */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Conquistas</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                    <Award className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-medium">Primeiro Projeto</p>
                    <p className="text-xs text-muted-foreground">
                      Completou seu primeiro projeto
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Award className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Colaborador</p>
                    <p className="text-xs text-muted-foreground">
                      Participou de 10 projetos
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Award className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Meta Mensal</p>
                    <p className="text-xs text-muted-foreground">
                      Atingiu a meta deste mês
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Award className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">Especialista</p>
                    <p className="text-xs text-muted-foreground">
                      Avaliação 5 estrelas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
