"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { label: "Bio", href: "/" },
    { label: "CV", href: "/cv" },
    { label: "Research", href: "/research" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent">
      <div className="px-[10%] h-16">
        <div className="flex items-center justify-between h-full">
          <div className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Dahye
          </div>

          <div className="flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href ? "text-primary" : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
