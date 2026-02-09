"use client";
import { motion } from "framer-motion";

export default function MatchDateTime({ match, index, live }: { match: any; index: number; live: boolean }) {
  return (
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: index * 0.1 + 0.4, type: "spring" }}
      className="px-8 text-center"
    >
      {live ? (
        <div className="bg-linear-to-br from-red-50 to-red-100 px-8 py-4 rounded-2xl border-2 border-red-300">
          <div className="flex items-center justify-center gap-2 mb-2">
            <motion.span animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-3 h-3 bg-red-600 rounded-full" />
            <p className="text-lg font-bold text-red-900">JOGO AO VIVO</p>
          </div>
          <p className="text-sm text-red-700 font-medium">{match.data} • {match.hora}</p>
        </div>
      ) : (
        <div className="bg-linear-to-br from-emerald-50 to-emerald-100 px-8 py-4 rounded-2xl border-2 border-emerald-200">
          <p className="text-sm font-semibold text-emerald-800">{match.data || "Data a definir"}</p>
          {match.hora && <p className="text-2xl font-bold text-emerald-900">{match.hora}</p>}
        </div>
      )}
    </motion.div>
  );
}
