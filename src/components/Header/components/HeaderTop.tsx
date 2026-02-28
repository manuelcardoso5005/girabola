"use client";

import { objecto } from "@/src/data/data";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeaderTop() {
  return (
    <div className="bg-slate-900 border-b border-slate-700/40 w-full hidden md:block">
      <div className="container max-w-full mx-auto px-32 py-1.5 flex items-center gap-5">

        {/* Link esquerda */}
        <Link
          href="/clubes"
          className="shrink-0 text-xs font-semibold text-slate-400 hover:text-white tracking-widest uppercase transition-colors duration-200 whitespace-nowrap flex items-center gap-1.5"
        >
          Ver Clubes
          <span className="text-slate-600">↗</span>
        </Link>

        {/* Divider */}
        <div className="h-4 w-px bg-slate-700 shrink-0" />

        {/* Wrapper com fade nas bordas */}
        <div className="relative flex-1 overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex items-center w-full px-4 py-1 justify-between">
              {objecto.clubs.map((clube, i) => (
                <motion.div
                  key={clube.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  whileHover={{ scale: 1.3, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-200"
                  title={clube.nome}
                >
                <Link href={`/clubes/${clube.id}`} className="w-7 h-7">
                  <img
                    src={clube.logo}
                    alt={clube.nome}
                    className="w-7 h-7 object-contain drop-shadow-md"
                  />
                </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}