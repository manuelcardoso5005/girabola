"use client";
import { motion } from "framer-motion";

export default function MatchHeader({ match, index, live }: { match: any; index: number; live: boolean }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.1 + 0.2 }}
      className={`px-6 py-3 ${
        live 
          ? "bg-linear-to-r from-red-600 to-red-700" 
          : "bg-linear-to-r from-slate-700 to-slate-600"
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-white gap-3 sm:gap-0">
        
        {/* Esquerda: Estádio e cidade */}
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div className="flex flex-col text-sm">
            <p className="font-semibold">{match.estadio || "Estádio a definir"}</p>
            <p className="text-xs text-slate-300">{match.cidade || "Cidade"}</p>
          </div>
        </div>

        {/* Direita: Jornada, Árbitro, Badge */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm mt-2 sm:mt-0">
          
          <div className="flex items-center gap-1 sm:gap-2">
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span>
              Jornada: <span className="font-bold">{match.jornada}</span>
            </span>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>
              Árbitro: <span className="font-medium">{match.arbitro || "A definir"}</span>
            </span>
          </div>

          {live ? (
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="px-3 py-1 bg-white text-red-600 text-xs font-bold rounded-full flex items-center gap-1.5"
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="w-2 h-2 bg-red-600 rounded-full"
              />
              AO VIVO
            </motion.span>
          ) : (
            <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
              AGENDADO
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
