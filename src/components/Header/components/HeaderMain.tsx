"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface LinkItem {
  href: string;
  label: string;
}

interface HeaderMainProps {
  liga: {
    nome: string;
    logotipo: string;
  };
  epoca: string;
  links: LinkItem[];
}

export default function HeaderMain({ liga, epoca, links }: HeaderMainProps) {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="max-w-full mx-auto px-6 lg:px-32">
        <div className="flex items-center justify-between h-16">

          {/* Logo + Nome */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pr-10 shrink-0"
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
                <h1 className="text-white font-bold text-xl tracking-tight">{liga.nome}</h1>
                <p className="text-slate-400 text-xs">{epoca}</p>
              </div>
            </Link>
          </motion.div>

          {/* Navegação desktop */}
          <nav className="hidden md:flex items-center gap-2 h-full relative flex-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative h-full flex items-center px-5 text-sm font-medium transition-all ${
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {link.label}
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        layoutId="underline"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-t-full"
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

          {/* Pesquisa */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <AnimatePresence>
              {searchOpen && (
                <motion.input
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  type="text"
                  placeholder="Pesquisar clube, jogo..."
                  className="bg-slate-800 text-white text-sm placeholder-slate-500 border border-slate-700 rounded-lg px-3 py-1.5 outline-none focus:border-slate-500"
                  autoFocus
                />
              )}
            </AnimatePresence>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-800"
            >
              {searchOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
              )}
            </button>
          </div>

          {/* Botão menu mobile */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Navegação mobile */}
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
                      isActive ? "text-white bg-slate-800" : "text-slate-400 hover:text-white hover:bg-slate-800/50"
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
    </>
  );
}