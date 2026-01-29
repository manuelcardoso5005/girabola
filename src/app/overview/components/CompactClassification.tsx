"use client";

import Link from "next/link";
import { objecto } from "@/src/data/data";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  top5: typeof objecto.standings;
  getClub: (id: number) => typeof objecto.clubs[0] | undefined;
  getClubStats: (id: number) => typeof objecto.clubStats[0] | undefined;
}

export default function CompactClassification({ top5, getClub, getClubStats }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl p-5 shadow-md border border-slate-200"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="flex items-center justify-between mb-4"
      >
        <div className="mb-4 pb-3 border-b border-slate-100">
          <p className="text-slate-500 text-xs font-medium">
            {objecto.competicao[0].nome} {objecto.epoca}
          </p>
        </div>
        <Link href="/classificacao" className="group">
          <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-800 transition group-hover:translate-x-1" />
        </Link>
      </motion.div>

      {/* Tabela */}
      <div className="space-y-1">
        {/* Header da Tabela */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="grid grid-cols-12 gap-2 text-slate-500 text-xs font-semibold pb-2 border-b border-slate-200"
        >
          <div className="col-span-1 text-center">#</div>
          <div className="col-span-5">Clube</div>
          <div className="col-span-1 text-center">PD</div>
          <div className="col-span-1 text-center">V</div>
          <div className="col-span-1 text-center">E</div>
          <div className="col-span-1 text-center">D</div>
          <div className="col-span-1 text-center">DG</div>
          <div className="col-span-1 text-center">Pts</div>
        </motion.div>

        {/* Linhas da Tabela */}
        {top5.map((time, index) => {
          const club = getClub(time.club);
          const stats = getClubStats(time.club);
          const championsPositions = objecto.internationalCompetitions.find(c => c.name === "Liga dos Campeões")?.qualificationPositions ?? [];
          const cafPositions = objecto.internationalCompetitions.find(c => c.name === "Taça CAF")?.qualificationPositions ?? [];

          const isChampions = championsPositions.includes(time.position);
          const isCAF = cafPositions.includes(time.position);

          return (
            <motion.div
              key={time.club}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgb(248 250 252)" }}
              className="grid grid-cols-12 gap-2 text-slate-800 text-sm py-2.5 rounded-lg transition-colors cursor-pointer"
            >
              {/* Posição */}
              <div className="col-span-1 flex items-center justify-center">
                <motion.span
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className={`w-6 h-6 flex items-center justify-center rounded text-xs font-bold shadow-sm ${
                    isChampions ? "bg-blue-500 text-white" :
                    isCAF ? "bg-emerald-500 text-white" : "bg-slate-200 text-slate-700"
                  }`}
                >
                  {time.position}
                </motion.span>
              </div>

              {/* Logo + Nome */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                className="col-span-5 flex items-center gap-2"
              >
                <motion.img
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  src={club?.logo}
                  alt={club?.nome}
                  className="w-6 h-6 object-contain"
                />
                <span className="font-semibold text-xs truncate text-slate-800">{club?.nome}</span>
              </motion.div>

              {/* Estatísticas com animação de contagem */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                className="col-span-1 text-center text-xs text-slate-600 font-medium"
              >
                {time.wins + time.draws + time.losses}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.75 + index * 0.1 }}
                whileHover={{ scale: 1.3 }}
                className="col-span-1 text-center text-xs font-bold text-emerald-600"
              >
                {time.wins}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.3 }}
                className="col-span-1 text-center text-xs text-slate-600 font-medium"
              >
                {time.draws}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.85 + index * 0.1 }}
                whileHover={{ scale: 1.3 }}
                className="col-span-1 text-center text-xs font-bold text-red-600"
              >
                {time.losses}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.3 }}
                className={`col-span-1 text-center text-xs font-bold ${
                  (stats?.goalDifference ?? 0) > 0 ? "text-emerald-600" :
                  (stats?.goalDifference ?? 0) < 0 ? "text-red-600" : "text-slate-600"
                }`}
              >
                {(stats?.goalDifference ?? 0) > 0 ? "+" : ""}{stats?.goalDifference ?? 0}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.95 + index * 0.1, type: "spring", stiffness: 300 }}
                whileHover={{ scale: 1.4 }}
                className="col-span-1 text-center text-xs font-bold text-slate-800"
              >
                {time.points}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}