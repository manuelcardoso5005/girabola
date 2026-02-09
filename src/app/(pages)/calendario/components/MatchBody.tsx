"use client";

import { motion } from "framer-motion";

export default function MatchBody({
  game,
  index,
  finished,
}: {
  game: any;
  index: number;
  finished: boolean;
}) {
  return (
    <div className="p-3 sm:p-4 md:p-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-2">
        {/* Home Team */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.08 + 0.3 }}
          className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 w-full sm:w-auto"
        >
          {game.casaLogo && (
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-linear-to-br from-slate-50 to-slate-100 p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl shadow-md border border-slate-200 shrink-0"
            >
              <img 
                src={game.casaLogo} 
                alt={game.casaNome} 
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain" 
              />
            </motion.div>
          )}
          <div className="flex-1 min-w-0">
            <span className="font-bold text-slate-800 text-sm sm:text-base md:text-lg lg:text-xl block truncate">
              {game.casaNome}
            </span>
            <span className="text-xs sm:text-sm text-slate-500 flex items-center gap-1 mt-0.5 sm:mt-1">
              Casa
            </span>
          </div>
        </motion.div>

        {/* Result / Date */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: index * 0.08 + 0.4,
            type: "spring",
            stiffness: 150,
          }}
          className="px-4 sm:px-6 md:px-8 text-center shrink-0 w-full sm:w-auto"
        >
          {finished ? (
            <div>
              <div className="bg-linear-to-br from-blue-600 to-blue-700 text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-xl sm:rounded-2xl shadow-lg mb-2 sm:mb-3">
                <p className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wider">
                  {game.resultado}
                </p>
              </div>
              <div className="text-xs sm:text-sm text-slate-600">
                {game.data} {game.hora && `• ${game.hora}`}
              </div>
            </div>
          ) : (
            <div className="bg-linear-to-br from-emerald-50 to-emerald-100 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-xl sm:rounded-2xl border-2 border-emerald-200">
              <p className="text-xs sm:text-sm font-semibold text-emerald-800">
                {game.data || "Data a definir"}
              </p>
              {game.hora && (
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-900 mt-1">
                  {game.hora}
                </p>
              )}
            </div>
          )}
        </motion.div>

        {/* Away Team */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.08 + 0.5 }}
          className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 justify-end w-full sm:w-auto sm:flex-row-reverse"
        >
          {game.foraLogo && (
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="bg-linear-to-br from-slate-50 to-slate-100 p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl shadow-md border border-slate-200 shrink-0"
            >
              <img 
                src={game.foraLogo} 
                alt={game.foraNome} 
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain" 
              />
            </motion.div>
          )}
          <div className="text-left sm:text-right flex-1 min-w-0">
            <span className="font-bold text-slate-800 text-sm sm:text-base md:text-lg lg:text-xl block truncate">
              {game.foraNome}
            </span>
            <span className="text-xs sm:text-sm text-slate-500 mt-0.5 sm:mt-1 block">
              Visitante
            </span>
          </div>
          
        </motion.div>
      </div>
    </div>
  );
}