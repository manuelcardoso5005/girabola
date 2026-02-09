"use client";
import { motion } from "framer-motion";

export default function MatchTeam({ team, match, index }: { team: "home" | "away"; match: any; index: number }) {
  const isHome = team === "home";
  const name = isHome ? match.casaNome : match.foraNome;
  const logo = isHome ? match.casaLogo : match.foraLogo;
  const alignClass = isHome ? "flex-1" : "flex-1 justify-end text-right";

  return (
    <motion.div 
      initial={{ x: isHome ? -50 : 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 + (isHome ? 0.3 : 0.5) }}
      className={`flex items-center gap-4 ${alignClass}`}
    >
      {isHome && logo && (
        <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="bg-linear-to-br from-slate-50 to-slate-100 p-3 rounded-xl shadow-md border border-slate-200">
          <img src={logo} alt={name} className="w-14 h-14 object-contain" />
        </motion.div>
      )}

      <div>
        <span className="font-bold text-slate-800 text-xl block">{name}</span>
        <span className={`text-sm text-slate-500 flex items-center gap-1 mt-1 ${isHome ? "" : "justify-end"}`}>
          {isHome ? "Casa" : "Visitante"}
        </span>
      </div>

      {!isHome && logo && (
        <motion.div whileHover={{ scale: 1.1, rotate: -5 }} className="bg-linear-to-br from-slate-50 to-slate-100 p-3 rounded-xl shadow-md border border-slate-200">
          <img src={logo} alt={name} className="w-14 h-14 object-contain" />
        </motion.div>
      )}
    </motion.div>
  );
}
