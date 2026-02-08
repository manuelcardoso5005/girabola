"use client";

import Link from "next/link";
import { Calendar, Trophy, TrendingUp } from "lucide-react";
import { objecto } from "@/src/data/data";
import { motion } from "framer-motion";

interface Props {
  totalJogosRealizados: number;
  totalGolos: number;
}

export default function StatsCard({ totalJogosRealizados, totalGolos }: Props) {
  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        {/* Jornada Atual */}
        <Link href="/calendario" className="block group">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="bg-linear-to-br from-blue-500 to-blue-600 rounded-xl p-4 shadow-lg hover:shadow-2xl transition-shadow"
          >
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="flex items-center gap-2 mb-2"
            >
              <Calendar className="w-4 h-4 text-blue-50" />
              <span className="text-blue-50 text-xs font-semibold uppercase tracking-wide">
                Jornada
              </span>
            </motion.div>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200 }}
              className="text-white text-3xl font-black"
            >
              {objecto.jornadaAtual}
            </motion.div>
            <div className="text-blue-100 text-xs mt-1 font-medium">
              de {objecto.totalJornadas}
            </div>
          </motion.div>
        </Link>

        {/* Jogos Realizados */}
        <Link href="/jogos" className="block group">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-linear-to-br from-emerald-500 to-emerald-600 rounded-xl p-4 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
          >
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="flex items-center gap-2 mb-2"
            >
              <Trophy className="w-4 h-4 text-emerald-50" />
              <span className="text-emerald-50 text-xs font-semibold uppercase tracking-wide">
                Jogos
              </span>
            </motion.div>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200 }}
              className="text-white text-3xl font-black"
            >
              {totalJogosRealizados}
            </motion.div>
            <div className="text-emerald-100 text-xs mt-1 font-medium">realizados</div>
          </motion.div>
        </Link>
      </div>

      {/* Golos Totais */}
      <Link href="/artilheiros" className="block group">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        whileHover={{ scale: 1.03, y: -3 }}
        className="bg-linear-to-br from-orange-500 to-orange-600 rounded-xl p-4 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
      >
        <div className="flex items-center justify-between">
          <div>
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="flex items-center gap-2 mb-2"
            >
              <TrendingUp className="w-4 h-4 text-orange-50" />
              <span className="text-orange-50 text-xs font-semibold uppercase tracking-wide">
                Golos
              </span>
            </motion.div>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 200 }}
              className="text-white text-4xl font-black"
            >
              {totalGolos}
            </motion.div>
            <div className="text-orange-100 text-xs mt-1 font-medium">
              Média: {(totalGolos / Math.max(totalJogosRealizados, 1)).toFixed(1)} por jogo
            </div>
          </div>
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
            whileHover={{ rotate: 360 }}
            className="text-white/20 text-6xl font-black"
          >
            ⚽
          </motion.div>
        </div>
      </motion.div>
      </Link>
    </>
  );
}