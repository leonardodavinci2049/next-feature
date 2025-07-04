"use client";

import { DashboardLayout } from "@/components/dashboard-layout";

export default function CursosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
