"use client";

import React from "react";
import { Sidebar, MobileSidebar } from "@/components/sidebar";
import { DashboardHeader } from "@/app/dashboard/components/dashboard-header";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";

interface DashboardLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function DashboardLayout({ children, className }: DashboardLayoutProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex h-screen bg-background">
        {/* Sidebar Desktop */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* Sidebar Mobile */}
        <MobileSidebar />

        {/* Conteúdo Principal */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <DashboardHeader />

          {/* Área de conteúdo */}
          <main
            className={cn(
              "flex-1 overflow-x-hidden overflow-y-auto bg-background p-6",
              "md:p-8 lg:p-10",
              className
            )}
          >
            {children}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
