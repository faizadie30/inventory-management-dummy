'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Package2, LayoutGrid, Tags, Settings } from "lucide-react";

const navItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutGrid
  },
  {
    title: "Products",
    href: "/products",
    icon: Package2
  },
  {
    title: "Categories",
    href: "/categories",
    icon: Tags
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings
  }
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center space-x-4 sm:space-x-8">
          <Link href="/" className="text-xl font-bold">
            IMS
          </Link>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline-block">{item.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}