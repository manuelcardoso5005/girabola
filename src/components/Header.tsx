"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Vista geral" },
    { href: "/jogos", label: "Jogos" },
    { href: "/classificacao", label: "Classificação" },
  ];

  return (
    <header className="bg-zinc-900 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-start gap-12">
        
        {/* Logo */}
        <span className="text-white font-semibold text-lg">
          Girabola
        </span>

        {/* Navegação */}
        <nav className="flex items-center gap-8 h-full">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative h-full flex items-center
                  text-sm font-medium transition-colors
                  ${isActive ? "text-white" : "text-zinc-400 hover:text-white"}
                `}
              >
                {link.label}

                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
