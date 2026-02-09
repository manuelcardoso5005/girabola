"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { objecto } from "@/src/data/data";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const { competicao, epoca } = objecto;
  const liga = competicao[0];

  const links = [
    { href: "/", label: "Vista geral" },
    { href: "/jogos", label: "Jogos" },
    { href: "/calendario", label: "Calendário" },
    { href: "/classificacao", label: "Classificação" },
    { href: "/clubes", label: "Clubes" },
    { href: "/sobre", label: "Sobre" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-linear-to-r from-slate-800 via-slate-900 to-slate-800 border-b border-slate-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo + Nome com animação */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
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
          </motion.div>

          {/* Navegação */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          <nav className="hidden md:flex items-center gap-2 h-full relative">
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

                  {/* Linha ativa animada */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        layoutId="underline"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-emerald-500 to-blue-600 rounded-t-full"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        exit={{ width: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-900 border-t border-slate-700"
          >
            <div className="flex flex-col">
              {links.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`px-6 py-4 text-sm font-medium ${
                      isActive
                        ? "text-white bg-slate-800"
                        : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
</AnimatePresence>

    </header>
  );
}
