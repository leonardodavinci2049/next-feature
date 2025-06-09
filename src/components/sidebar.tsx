"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import {
  Home,
  Users,
  ShoppingCart,
  BarChart3,
  Settings,
  FileText,
  BookOpen,
  Calculator,
  Menu,
  X,
  Sun,
  Moon,
  Monitor,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const sidebarItems: SidebarItem[] = [
  {
    title: "Dashboard",
    href: "/dashbord",
    icon: Home,
  },
  {
    title: "Produtos",
    href: "/product",
    icon: ShoppingCart,
  },
  {
    title: "Cursos",
    href: "/cursos",
    icon: BookOpen,
  },
  {
    title: "IMC Calculator",
    href: "/imc",
    icon: Calculator,
  },
  {
    title: "Relatórios",
    href: "/stats",
    icon: BarChart3,
  },
  {
    title: "Usuários",
    href: "/profile",
    icon: Users,
  },
  {
    title: "Arquivos",
    href: "/file",
    icon: FileText,
  },
  {
    title: "Configurações",
    href: "/config",
    icon: Settings,
  },
  {
    title: "Configurações",
    href: "/settings",
    icon: Settings,
  },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { theme, setTheme } = useTheme();

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4" />;
      case "dark":
        return <Moon className="h-4 w-4" />;
      default:
        return <Monitor className="h-4 w-4" />;
    }
  };

  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  return (
    <div
      className={cn(
        "relative flex flex-col bg-sidebar border-r border-sidebar-border h-screen transition-all duration-300",
        isCollapsed ? "w-16" : "w-64",
        className
      )}
    >
      {/* Header do Sidebar */}
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!isCollapsed && (
          <h2 className="text-lg font-semibold text-sidebar-foreground">
            Menu
          </h2>
        )}
        <div className="flex items-center gap-2">
          {/* Toggle de Tema */}
          <Button
            variant="ghost"
            size="sm"
            onClick={cycleTheme}
            className="h-8 w-8 p-0 text-sidebar-foreground hover:bg-sidebar-accent"
            title={`Tema atual: ${
              theme === "system"
                ? "Sistema"
                : theme === "light"
                ? "Claro"
                : "Escuro"
            }`}
          >
            {getThemeIcon()}
          </Button>

          {/* Toggle de Colapso */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="h-8 w-8 p-0 text-sidebar-foreground hover:bg-sidebar-accent"
          >
            {isCollapsed ? (
              <Menu className="h-4 w-4" />
            ) : (
              <X className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Navegação */}
      <nav className="flex-1 p-4 space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group",
                "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground",
                isCollapsed && "justify-center px-2"
              )}
            >
              <Icon
                className={cn(
                  "h-5 w-5 transition-colors",
                  isActive
                    ? "text-sidebar-primary-foreground"
                    : "text-sidebar-foreground"
                )}
              />
              {!isCollapsed && (
                <span className="font-medium text-sm">{item.title}</span>
              )}
              {isCollapsed && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                  {item.title}
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer do Sidebar */}
      <div className="p-4 border-t border-sidebar-border">
        <div
          className={cn(
            "flex items-center gap-3 text-sm text-sidebar-foreground",
            isCollapsed && "justify-center"
          )}
        >
          {!isCollapsed && (
            <div>
              <p className="font-medium">Dashboard v1.0</p>
              <p className="text-xs text-sidebar-foreground/60">
                Next.js + Tailwind
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Sidebar para mobile com overlay
export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão para abrir sidebar mobile */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-40 h-10 w-10 p-0 bg-background border border-border shadow-sm"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Mobile */}
      <div
        className={cn(
          "fixed left-0 top-0 z-50 h-full w-64 transform transition-transform duration-300 md:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <Sidebar />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 h-8 w-8 p-0 text-sidebar-foreground"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
}
