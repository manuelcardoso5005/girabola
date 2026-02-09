"use client";

import { motion } from "framer-motion";

export default function MatchFooter({
  game,
  finished,
}: {
  game: any;
  finished: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-slate-50 px-3 sm:px-4 md:px-6 py-2 sm:py-3 border-t border-slate-200"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 text-xs sm:text-sm">
        {/* Público */}
        <div className="text-slate-600 flex items-center gap-1 w-full sm:w-auto">
          <span className="hidden sm:inline">Público:</span>
          <span className="sm:hidden flex items-center gap-1">
            <svg className="w-4 h-4 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
          </span>
          <span className="font-semibold text-slate-800">
            {finished ? game.publico || "Não informado" : "A confirmar"}
          </span>
        </div>

        {/* Transmissão */}
        <div className="text-slate-600 flex items-center gap-1 w-full sm:w-auto">
          <span className="hidden sm:inline">Transmissão:</span>
          <span className="sm:hidden flex items-center gap-1">
            <svg className="w-4 h-4 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </span>
          <span className="font-semibold text-slate-800">
            {game.transmissao || "TPA 1"}
          </span>
        </div>

        {/* Clima (apenas jogos futuros) */}
        {!finished && (
          <div className="text-slate-600 flex items-center gap-1 w-full sm:w-auto">
            <span className="hidden sm:inline">Clima:</span>
            <span className="sm:hidden flex items-center gap-1">
              <svg className="w-4 h-4 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="font-semibold text-slate-800">
              {game.clima || "Ensolarado"}
            </span>
          </div>
        )}

        {/* Temperatura (apenas jogos finalizados) */}
        {finished && (
          <div className="text-slate-600 flex items-center gap-1 w-full sm:w-auto">
            <span className="hidden sm:inline">Temperatura:</span>
            <span className="sm:hidden flex items-center gap-1">
              <svg className="w-4 h-4 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a3 3 0 00-3 3v6a4 4 0 108 0V5a3 3 0 00-3-3zm0 16a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="font-semibold text-slate-800">
              {game.temperatura || "28°C"}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}