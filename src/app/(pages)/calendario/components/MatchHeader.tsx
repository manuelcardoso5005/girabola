"use client";

import { motion } from "framer-motion";

export default function MatchHeader({
  game,
  index,
  finished,
}: {
  game: any;
  index: number;
  finished: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.08 + 0.2 }}
      className="bg-linear-to-r from-slate-700 to-slate-600 px-6 py-3"
    >
      <div className="flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div>
            <p className="font-semibold text-sm">{game.estadio || "Estádio a definir"}</p>
            <p className="text-xs text-slate-300">{game.cidade || "Cidade"}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-slate-200">
              Árbitro:{" "}
              <span className="font-medium text-white">
                {game.arbitro || "A definir"}
              </span>
            </span>
          </div>

          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: index * 0.08 + 0.3,
              type: "spring",
              stiffness: 200,
            }}
            className={`px-3 py-1 text-white text-xs font-bold rounded-full ${
              finished ? "bg-blue-500" : "bg-emerald-500"
            }`}
          >
            {finished ? "REALIZADO" : "AGENDADO"}
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}
