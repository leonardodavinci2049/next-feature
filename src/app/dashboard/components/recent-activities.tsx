import React from 'react'
import { 
  User, 
  ShoppingBag, 
  TrendingUp, 
  FileText, 
  Settings,
  Clock
} from 'lucide-react'

interface Activity {
  id: string
  type: 'user' | 'sale' | 'report' | 'system'
  title: string
  description: string
  time: string
  user?: string
}

const activities: Activity[] = [
  {
    id: '1',
    type: 'user',
    title: 'Novo usuário cadastrado',
    description: 'Maria Silva se cadastrou na plataforma',
    time: '2 min atrás',
    user: 'Maria Silva'
  },
  {
    id: '2',
    type: 'sale',
    title: 'Nova venda realizada',
    description: 'Produto "Smartphone XYZ" vendido por R$ 1.299,00',
    time: '5 min atrás',
    user: 'João Santos'
  },
  {
    id: '3',
    type: 'report',
    title: 'Relatório gerado',
    description: 'Relatório mensal de vendas foi gerado automaticamente',
    time: '1 hora atrás'
  },
  {
    id: '4',
    type: 'system',
    title: 'Atualização do sistema',
    description: 'Sistema atualizado para versão 2.1.0',
    time: '2 horas atrás'
  },
  {
    id: '5',
    type: 'user',
    title: 'Perfil atualizado',
    description: 'Carlos Lima atualizou suas informações',
    time: '3 horas atrás',
    user: 'Carlos Lima'
  }
]

const getActivityIcon = (type: Activity['type']) => {
  switch (type) {
    case 'user':
      return <User className="h-4 w-4" />
    case 'sale':
      return <ShoppingBag className="h-4 w-4" />
    case 'report':
      return <FileText className="h-4 w-4" />
    case 'system':
      return <Settings className="h-4 w-4" />
    default:
      return <Clock className="h-4 w-4" />
  }
}

const getActivityColor = (type: Activity['type']) => {
  switch (type) {
    case 'user':
      return 'bg-blue-500'
    case 'sale':
      return 'bg-green-500'
    case 'report':
      return 'bg-yellow-500'
    case 'system':
      return 'bg-purple-500'
    default:
      return 'bg-gray-500'
  }
}

export function RecentActivities() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Atividades Recentes</h3>
          <button className="text-sm text-primary hover:underline">
            Ver todas
          </button>
        </div>
        
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3">
              <div className={`
                flex items-center justify-center w-8 h-8 rounded-full text-white
                ${getActivityColor(activity.type)}
              `}>
                {getActivityIcon(activity.type)}
              </div>
              
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">
                    {activity.title}
                  </p>
                  <span className="text-xs text-muted-foreground">
                    {activity.time}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {activity.description}
                </p>
                {activity.user && (
                  <p className="text-xs text-muted-foreground">
                    Por: {activity.user}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t">
          <div className="flex items-center justify-center">
            <button className="text-sm text-primary hover:underline flex items-center gap-1">
              <TrendingUp className="h-4 w-4" />
              Ver relatório completo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
