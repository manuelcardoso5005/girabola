"use client";
import { motion } from "framer-motion";

export default function MatchFooter({ match, live, index }: { match: any; live: boolean; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.1 + 0.6 }}
      className="bg-slate-50 px-6 py-3 border-t border-slate-200"
    >
      <div className="flex items-center justify-between text-sm flex-wrap gap-3">
        <div className="flex items-center gap-2 text-slate-600">
          Transmissão: <span className="font-semibold text-slate-800">{match.transmissao || "TPA 1"}</span>
        </div>
        <div className="flex items-center gap-2 text-slate-600">
          Previsão: <span className="font-semibold text-slate-800">{match.clima || "Ensolarado"}</span>
        </div>
        <div className="flex items-center gap-2 text-slate-600">
          Ingressos: <span className={`font-semibold ${live ? "text-red-700" : "text-emerald-700"}`}>{live ? "Esgotados" : "Disponíveis"}</span>
        </div>
      </div>
    </motion.div>
  );
}
