import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Button, buttonVariants } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, SmilePlus } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";

const TopMenu = [
  { name: "Sobre", href: "/about" },
  { name: "AppendFile", href: "/file" },
  { name: "Calc. IMC", href: "/imc" },
  { name: "Produtos", href: "/product" },
  { name: "Dashboard", href: "/dashboard" },
   { name: "Cursos", href: "/cursos" },
];

export default function Header01() {
  return (
    <header className="sticky top-5 z-50">
      <div className="container mx-auto px-4">
        <div className="border rounded-md bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2.5 px-4">
          <nav className="hidden justify-between lg:flex">
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center gap-1">
                <SmilePlus size={32} strokeWidth={2.7} />
                <span className="text-xl font-bold">Next Feature</span>
              </Link>
            </div>
            <div className="items-center flex gap-6">
              <div className="flex items-center">
                {TopMenu.map((menu, idx) => (
                  <a
                    key={idx}
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      navigationMenuTriggerStyle
                    )}
                    href={menu.href}
                  >
                    {menu.name}
                  </a>
                ))}
              </div>
              <Suspense>
                <ModeToggle />
              </Suspense>
              <div className="flex gap-2">
                <Link
                  href="/login"
                  className={buttonVariants({ variant: "default" })}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className="block lg:hidden">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-1">
                <SmilePlus size={32} strokeWidth={2.7} />
                <span className="text-xl font-bold">StarterBlocks</span>
              </Link>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant={"outline"} size={"icon"}>
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>
                      <Link href="/" className="flex items-center gap-1">
                        <SmilePlus size={32} strokeWidth={2.7} />
                        <span className="text-xl font-bold">StarterBlocks</span>
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="my-4 flex flex-col gap-0">
                    {TopMenu.map((menu, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="font-semibold text-lg py-2"
                      >
                        {menu.name}
                      </a>
                    ))}
                  </div>
                  <div className="border-t pt-4">
                    <div className="mt-2 flex flex-col gap-2">
                      <Link
                        href="/login"
                        className={buttonVariants({ variant: "default" })}
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
