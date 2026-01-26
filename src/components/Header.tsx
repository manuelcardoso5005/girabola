"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { objecto } from "@/src/data/data";

export default function Header() {
  const pathname = usePathname();

  const { competicao, epoca } = objecto;
  const liga = competicao[0];

  const links = [
    { href: "/", label: "Vista geral" },
    { href: "/jogos", label: "Jogos" },
    { href: "/classificacao", label: "Classificação" },
    { href: "/sobre", label: "Sobre" },
  ];

  return (
    <header className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 border-b border-slate-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo + Nome */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg overflow-hidden shadow-md">
              <img
                src={liga.logotipo}
                alt={liga.nome}
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <h1 className="text-white font-bold text-xl tracking-tight">
                {liga.nome}
              </h1>
              <p className="text-slate-400 text-xs">{epoca}</p>
            </div>
          </Link>

          {/* Navegação */}
          <nav className="flex items-center gap-2 h-full">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative h-full flex items-center px-6
                    text-sm font-medium transition-all
                    ${
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                    }
                  `}
                >
                  {link.label}

                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-t-full" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
