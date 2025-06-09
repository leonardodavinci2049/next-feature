import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Dashboard - Next Feature",
  description: "Dashboard administrativo",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children; // O DashboardLayout component já cuida do layout
}
