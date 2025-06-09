'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { Bell, Search, User, Settings, Sun, Moon, Monitor } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Breadcrumbs } from '@/components/breadcrumbs'

export function DashboardHeader() {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  // Gerar breadcrumbs baseado na rota atual
  const getBreadcrumbs = () => {
    const segments = pathname.split('/').filter(Boolean)
    if (segments[0] === 'dashbord') {
      return [{ label: 'Dashboard' }]
    }
    return [{ label: 'Dashboard', href: '/dashbord' }]
  }

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4" />
      case 'dark':
        return <Moon className="h-4 w-4" />
      default:
        return <Monitor className="h-4 w-4" />
    }
  }

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    } else {
      setTheme('light')
    }
  }

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
      {/* Breadcrumbs */}
      <div className="px-6 py-2 border-b border-border/50">
        <Breadcrumbs items={getBreadcrumbs()} />
      </div>
      
      <div className="flex h-16 items-center gap-4 px-6">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Pesquisar..."
              className="pl-10 bg-background"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <Button 
            variant="ghost" 
            size="sm"
            onClick={cycleTheme}
            title={`Tema atual: ${theme === 'system' ? 'Sistema' : theme === 'light' ? 'Claro' : 'Escuro'}`}
          >
            {getThemeIcon()}
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">
              3
            </span>
          </Button>

          {/* Settings */}
          <Button variant="ghost" size="sm">
            <Settings className="h-5 w-5" />
          </Button>

          {/* Profile */}
          <Button variant="ghost" size="sm" className="gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <User className="h-4 w-4 text-primary-foreground" />
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-medium">Leo Silva</p>
              <p className="text-xs text-muted-foreground">Administrador</p>
            </div>
          </Button>
        </div>
      </div>
    </header>
  )
}
