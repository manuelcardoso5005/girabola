"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface Jogo {
  id: number;
  casaNome: string;
  foraNome: string;
  casaLogo?: string;
  foraLogo?: string;
  data?: string;
  hora?: string;
}

interface Props {
  proximosJogos: Jogo[];
  formatarDataCompacta: (data: string) => string;
}

export default function NextGames({ proximosJogos, formatarDataCompacta }: Props) {
  return (
    <>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-between mb-2"
      >
        <h3 className="text-xl font-bold text-slate-800">Jogos</h3>
        <Link
          href="/jogos"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors group"
        >
          <span>Ver todos os jogos</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>

      {/* Grid de Jogos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {proximosJogos.map((jogo, index) => (
          <motion.div
            key={jogo.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white rounded-xl p-4 hover:shadow-xl transition-shadow shadow-md border border-slate-200"
          >
            {/* Jogo Casa */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              className="flex items-center gap-3 mb-3"
            >
              {jogo.casaLogo && (
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-slate-100 p-1.5 rounded-lg border border-slate-200 shadow-sm"
                >
                  <img
                    src={jogo.casaLogo}
                    alt={jogo.casaNome}
                    className="w-7 h-7 object-contain"
                  />
                </motion.div>
              )}
              <span className="text-slate-800 font-bold text-sm flex-1 truncate">
                {jogo.casaNome}
              </span>
            </motion.div>

            {/* VS Separator */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
              className="flex justify-center my-2"
            >
              <span className="text-slate-400 text-xs font-bold bg-slate-100 px-3 py-0.5 rounded-full">
                VS
              </span>
            </motion.div>

            {/* Jogo Fora */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
              className="flex items-center gap-3 mb-4"
            >
              {jogo.foraLogo && (
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="bg-slate-100 p-1.5 rounded-lg border border-slate-200 shadow-sm"
                >
                  <img
                    src={jogo.foraLogo}
                    alt={jogo.foraNome}
                    className="w-7 h-7 object-contain"
                  />
                </motion.div>
              )}
              <span className="text-slate-800 font-bold text-sm flex-1 truncate">
                {jogo.foraNome}
              </span>
            </motion.div>

            {/* Data e Hora */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
              className="flex items-center justify-between"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-slate-600 text-xs font-semibold bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200"
              >
                {formatarDataCompacta(jogo.data || "")}
              </motion.div>
              {jogo.hora && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-slate-800 text-sm font-bold bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200"
                >
                  {jogo.hora}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="flex items-center justify-between bg-white rounded-xl px-5 py-4 border border-slate-200 shadow-sm"
      >
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="flex items-center gap-2 text-slate-600"
        >
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-5 h-5 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </motion.svg>
          <span className="text-sm font-medium">
            Todas as horas em <span className="font-bold text-slate-800">WAT</span>
          </span>
        </motion.div>

        <div className="h-8 w-px bg-slate-200"></div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
        >
          <Link
            href="/calendario"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors group"
          >
            <span>Calendário completo</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
}